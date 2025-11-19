from typing import Generator, Optional
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from pydantic import ValidationError
from motor.motor_asyncio import AsyncIOMotorClient

from app.core.config import settings

from app.models.user import User
from app.models.common import PyObjectId

oauth2_scheme = OAuth2PasswordBearer(tokenUrl=f"/api/v1/auth/login")

async def get_db() -> AsyncIOMotorClient:
    client = AsyncIOMotorClient(settings.DB_URL)
    try:
        yield client[settings.DB_NAME]
    finally:
        pass # Motor client is thread-safe and can stay open

async def get_current_user(
    db = Depends(get_db),
    token: str = Depends(oauth2_scheme)
) -> User:
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        token_data = payload.get("sub")
        if token_data is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Could not validate credentials",
                headers={"WWW-Authenticate": "Bearer"},
            )
    except (JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    user = await db.users.find_one({"_id": PyObjectId(token_data)})
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    return User(**user)
