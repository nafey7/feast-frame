from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId

from app.api import deps
from app.models.restaurant import Restaurant, MenuItem
from app.models.user import User
from app.models.common import PyObjectId
from app.schemas.restaurant import RestaurantResponse, MenuItemResponse
from app.schemas.restaurant_schemas import (
    RestaurantUpdate,
    MenuItemCreate,
    MenuItemUpdate
)

router = APIRouter()

@router.get("", response_model=List[RestaurantResponse])
async def read_restaurants(
    db: AsyncIOMotorClient = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100
) -> Any:
    """
    Retrieve restaurants.
    """
    restaurants = await db.restaurants.find().skip(skip).limit(limit).to_list(limit)
    return [RestaurantResponse.from_db(r) for r in restaurants]

@router.get("/{restaurant_id}", response_model=RestaurantResponse)
async def read_restaurant(
    restaurant_id: str,
    db: AsyncIOMotorClient = Depends(deps.get_db)
) -> Any:
    """
    Get a specific restaurant by ID.
    """
    restaurant = await db.restaurants.find_one({"_id": PyObjectId(restaurant_id)})
    if not restaurant:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Restaurant not found"
        )
    return RestaurantResponse.from_db(restaurant)

@router.get("/{restaurant_id}/menu/{menu_item_id}", response_model=MenuItemResponse)
async def read_menu_item(
    restaurant_id: str,
    menu_item_id: str,
    db: AsyncIOMotorClient = Depends(deps.get_db)
) -> Any:
    """
    Get a specific menu item from a restaurant.
    """
    restaurant = await db.restaurants.find_one({"_id": PyObjectId(restaurant_id)})
    if not restaurant:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Restaurant not found"
        )
    
    # Find the menu item in the restaurant's menu list
    menu_items = restaurant.get("menu", [])
    target_item = None
    
    for item in menu_items:
        # Compare as strings
        if str(item.get("id")) == menu_item_id:
            target_item = item
            break
            
    if not target_item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Menu item not found"
        )
        
    return MenuItemResponse(**target_item)

# Owner-specific endpoints

@router.get("/my-restaurants", response_model=List[RestaurantResponse])
async def get_my_restaurants(
    db: AsyncIOMotorClient = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
) -> Any:
    """
    Get all restaurants owned by the current user.
    """
    restaurants = await db.restaurants.find(
        {"owner_id": current_user.id}
    ).to_list(100)
    return [RestaurantResponse.from_db(r) for r in restaurants]

@router.put("/{restaurant_id}", response_model=RestaurantResponse)
async def update_restaurant(
    restaurant_id: str,
    restaurant_update: RestaurantUpdate,
    db: AsyncIOMotorClient = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
) -> Any:
    """
    Update restaurant details. Only the owner can update.
    """
    # Check if restaurant exists and user is owner
    restaurant = await db.restaurants.find_one({"_id": PyObjectId(restaurant_id)})
    if not restaurant:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Restaurant not found"
        )
    
    if str(restaurant.get("owner_id")) != str(current_user.id):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to update this restaurant"
        )
    
    # Update only provided fields
    update_data = restaurant_update.model_dump(exclude_unset=True)
    if update_data:
        await db.restaurants.update_one(
            {"_id": PyObjectId(restaurant_id)},
            {"$set": update_data}
        )
    
    # Fetch and return updated restaurant
    updated_restaurant = await db.restaurants.find_one({"_id": PyObjectId(restaurant_id)})
    return RestaurantResponse.from_db(updated_restaurant)

@router.post("/{restaurant_id}/menu", response_model=MenuItemResponse)
async def add_menu_item(
    restaurant_id: str,
    menu_item: MenuItemCreate,
    db: AsyncIOMotorClient = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
) -> Any:
    """
    Add a new menu item to a restaurant. Only the owner can add items.
    """
    # Check if restaurant exists and user is owner
    restaurant = await db.restaurants.find_one({"_id": PyObjectId(restaurant_id)})
    if not restaurant:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Restaurant not found"
        )
    
    if str(restaurant.get("owner_id")) != str(current_user.id):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to modify this restaurant"
        )
    
    # Create new menu item with unique ID
    new_item = MenuItem(
        id=str(PyObjectId()),
        **menu_item.model_dump()
    )
    
    # Add to restaurant's menu
    await db.restaurants.update_one(
        {"_id": PyObjectId(restaurant_id)},
        {"$push": {"menu": new_item.model_dump()}}
    )
    
    return MenuItemResponse(**new_item.model_dump())

@router.put("/{restaurant_id}/menu/{menu_item_id}", response_model=MenuItemResponse)
async def update_menu_item(
    restaurant_id: str,
    menu_item_id: str,
    menu_item_update: MenuItemUpdate,
    db: AsyncIOMotorClient = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
) -> Any:
    """
    Update a menu item. Only the owner can update.
    """
    # Check if restaurant exists and user is owner
    restaurant = await db.restaurants.find_one({"_id": PyObjectId(restaurant_id)})
    if not restaurant:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Restaurant not found"
        )
    
    if str(restaurant.get("owner_id")) != str(current_user.id):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to modify this restaurant"
        )
    
    # Find the menu item
    menu_items = restaurant.get("menu", [])
    item_index = None
    for idx, item in enumerate(menu_items):
        if str(item.get("id")) == menu_item_id:
            item_index = idx
            break
    
    if item_index is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Menu item not found"
        )
    
    # Update only provided fields
    update_data = menu_item_update.model_dump(exclude_unset=True)
    if update_data:
        # Build update query for nested array element
        set_fields = {
            f"menu.{item_index}.{key}": value
            for key, value in update_data.items()
        }
        
        await db.restaurants.update_one(
            {"_id": PyObjectId(restaurant_id)},
            {"$set": set_fields}
        )
    
    # Fetch updated restaurant and return the menu item
    updated_restaurant = await db.restaurants.find_one({"_id": PyObjectId(restaurant_id)})
    updated_item = updated_restaurant["menu"][item_index]
    
    return MenuItemResponse(**updated_item)

@router.delete("/{restaurant_id}/menu/{menu_item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_menu_item(
    restaurant_id: str,
    menu_item_id: str,
    db: AsyncIOMotorClient = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
) -> None:
    """
    Delete a menu item. Only the owner can delete.
    """
    # Check if restaurant exists and user is owner
    restaurant = await db.restaurants.find_one({"_id": PyObjectId(restaurant_id)})
    if not restaurant:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Restaurant not found"
        )
    
    if str(restaurant.get("owner_id")) != str(current_user.id):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to modify this restaurant"
        )
    
    # Remove the menu item
    result = await db.restaurants.update_one(
        {"_id": PyObjectId(restaurant_id)},
        {"$pull": {"menu": {"id": menu_item_id}}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Menu item not found"
        )

