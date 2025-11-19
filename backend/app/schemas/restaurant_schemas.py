from typing import List, Optional
from pydantic import BaseModel, Field

class MenuItemCreate(BaseModel):
    """Schema for creating a new menu item"""
    name: str = Field(..., min_length=1, max_length=200)
    description: str = Field(..., min_length=1)
    price: float = Field(..., gt=0)
    images: List[str] = Field(default_factory=list)
    ingredients: List[str] = Field(default_factory=list)

class MenuItemUpdate(BaseModel):
    """Schema for updating a menu item"""
    name: Optional[str] = Field(None, min_length=1, max_length=200)
    description: Optional[str] = Field(None, min_length=1)
    price: Optional[float] = Field(None, gt=0)
    images: Optional[List[str]] = None
    ingredients: Optional[List[str]] = None

class RestaurantCreate(BaseModel):
    """Schema for creating a new restaurant"""
    name: str = Field(..., min_length=1, max_length=200)
    description: str = Field(..., min_length=1)
    imageUrl: str
    cuisine: str
    town: str
    city: str
    country: str
    priceRange: str
    orderTime: str
    
class RestaurantUpdate(BaseModel):
    """Schema for updating restaurant details"""
    name: Optional[str] = Field(None, min_length=1, max_length=200)
    description: Optional[str] = None
    imageUrl: Optional[str] = None
    cuisine: Optional[str] = None
    town: Optional[str] = None
    city: Optional[str] = None
    country: Optional[str] = None
    priceRange: Optional[str] = None
    orderTime: Optional[str] = None
