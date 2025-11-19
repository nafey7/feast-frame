from typing import List, Optional
from pydantic import BaseModel, Field, ConfigDict, field_serializer
from bson import ObjectId

class MenuItemResponse(BaseModel):
    """Response schema for menu items"""
    id: str
    name: str
    description: str
    price: float
    images: List[str] = []
    ingredients: List[str] = []

    model_config = ConfigDict(populate_by_name=True)

class RestaurantResponse(BaseModel):
    """Response schema for restaurants"""
    id: str
    name: str
    description: str
    imageUrl: str
    cuisine: str
    town: str
    city: str
    country: str
    rating: float = 0.0
    reviews: int = 0
    priceRange: str
    orderTime: str
    photoCount: int = 0
    isNew: bool = False
    isFeatured: bool = False
    menu: List[MenuItemResponse] = []

    model_config = ConfigDict(populate_by_name=True)

    @classmethod
    def from_db(cls, restaurant_doc: dict) -> "RestaurantResponse":
        """Convert MongoDB document to response schema"""
        # Convert _id to id as string
        restaurant_doc["id"] = str(restaurant_doc.pop("_id"))
        
        # Convert menu items
        menu_items = []
        for item in restaurant_doc.get("menu", []):
            menu_items.append(MenuItemResponse(**item))
        restaurant_doc["menu"] = menu_items
        
        return cls(**restaurant_doc)
