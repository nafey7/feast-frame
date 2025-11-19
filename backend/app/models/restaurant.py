from typing import List, Optional
from pydantic import BaseModel, Field
from .common import PyObjectId

class MenuItem(BaseModel):
    id: str = Field(default_factory=lambda: str(PyObjectId()))
    name: str
    description: str
    price: float
    images: List[str] = []
    ingredients: List[str] = []

class Restaurant(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    name: str
    description: str
    image_url: str = Field(alias="imageUrl")
    cuisine: str
    town: str
    city: str
    country: str
    rating: float = 0.0
    reviews_count: int = Field(default=0, alias="reviews")
    price_range: str = Field(alias="priceRange")
    order_time: str = Field(alias="orderTime")
    photo_count: int = Field(default=0, alias="photoCount")
    is_new: bool = Field(default=False, alias="isNew")
    is_featured: bool = Field(default=False, alias="isFeatured")
    menu: List[MenuItem] = []
    owner_id: Optional[PyObjectId] = Field(default=None)

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
