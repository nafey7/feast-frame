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
        # Create a copy to avoid modifying the original
        doc = restaurant_doc.copy()
        
        # Convert _id to id as string
        if "_id" in doc:
            doc["id"] = str(doc.pop("_id"))
        elif "id" not in doc:
            raise ValueError("Restaurant document must have either '_id' or 'id' field")
        
        # Convert field names from database format to API response format
        # Handle image_url -> imageUrl
        if "image_url" in doc and "imageUrl" not in doc:
            doc["imageUrl"] = doc.pop("image_url")
        
        # Handle reviews_count -> reviews
        if "reviews_count" in doc and "reviews" not in doc:
            doc["reviews"] = doc.pop("reviews_count", 0)
        
        # Handle price_range -> priceRange
        if "price_range" in doc and "priceRange" not in doc:
            doc["priceRange"] = doc.pop("price_range")
        
        # Handle order_time -> orderTime
        if "order_time" in doc and "orderTime" not in doc:
            doc["orderTime"] = doc.pop("order_time")
        
        # Handle photo_count -> photoCount
        if "photo_count" in doc and "photoCount" not in doc:
            doc["photoCount"] = doc.pop("photo_count", 0)
        
        # Handle is_new -> isNew
        if "is_new" in doc and "isNew" not in doc:
            doc["isNew"] = doc.pop("is_new", False)
        
        # Handle is_featured -> isFeatured
        if "is_featured" in doc and "isFeatured" not in doc:
            doc["isFeatured"] = doc.pop("is_featured", False)
        
        # Convert menu items
        menu_items = []
        for item in doc.get("menu", []):
            menu_items.append(MenuItemResponse(**item))
        doc["menu"] = menu_items
        
        return cls(**doc)
