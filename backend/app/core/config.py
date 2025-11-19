from pydantic_settings import BaseSettings
from pydantic import ValidationError
import sys

class Settings(BaseSettings):
    DB_URL: str
    DB_NAME: str = "feast_frame"
    PORT: int = 8000
    HOST: str = "0.0.0.0"
    
    # CORS
    BACKEND_CORS_ORIGINS: list[str] = []
    
    # JWT Settings
    SECRET_KEY: str = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    class Config:
        env_file = ".env"

try:
    settings = Settings()
except ValidationError as e:
    print("Error: Missing critical environment variables.")
    print(e)
    sys.exit(1)
