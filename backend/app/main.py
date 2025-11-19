from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.core.database import db
from app.core.config import settings
from app.api.v1.api import api_router

from app.seeder import seed_db

@asynccontextmanager
async def lifespan(app: FastAPI):
    db.connect()
    # Run seeder
    await seed_db(db.client[settings.DB_NAME])
    yield
    db.close()

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Feast Frame API", lifespan=lifespan)

# Set all CORS enabled origins
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(api_router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Welcome to Feast Frame API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host=settings.HOST, port=settings.PORT, reload=True)
