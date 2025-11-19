from fastapi import APIRouter
from app.api.v1.endpoints import health

from app.api.v1.endpoints import auth, restaurants

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(restaurants.router, prefix="/restaurants", tags=["restaurants"])
api_router.include_router(health.router, tags=["health"])
