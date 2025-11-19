from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorClient

from app.api import deps
from app.models.restaurant import Restaurant, MenuItem
from app.models.common import PyObjectId
from app.schemas.restaurant import RestaurantResponse, MenuItemResponse

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
