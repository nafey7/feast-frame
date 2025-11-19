import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings
from app.core.security import get_password_hash
from app.models.user import User
from app.models.restaurant import Restaurant, MenuItem

async def seed_db(db):
    print("🌱 Checking if seeding is required...")
    
    # Check if any test user exists
    existing_user = await db.users.find_one({"email": {"$regex": "^test-user"}})
    if existing_user:
        print("⚠️ Test users already exist. Skipping seeding.")
        return

    print("🌱 Seeding database...")
    
    # Clear existing data (Optional: User might want to keep other data, but for seeding test data usually we clear or append. 
    # Given the instruction "skip seeding completely" if user exists, we assume if we proceed, we are in a clean or seedable state.
    # However, to be safe and follow previous logic, we will clear only if we are seeding.)
    # But wait, if we are skipping if user exists, we shouldn't clear if we are seeding? 
    # The previous script cleared everything. 
    # Let's assume if we are seeding, we want to ensure fresh state or just add.
    # The prompt says: "If an email starting with test-user exists already, then skip the seeding completely. if no such user exists... then proceed"
    # I will proceed with the original logic of clearing and creating.
    
    await db.users.delete_many({})
    await db.restaurants.delete_many({})
    print("Cleared existing users and restaurants.")

    # Create Users
    users = []
    for i in range(1, 4):
        user = User(
            email=f"test-user-{i}@gmail.com",
            password_hash=get_password_hash("abcd1234")
        )
        result = await db.users.insert_one(user.model_dump(by_alias=True, exclude={"id"}))
        user.id = result.inserted_id
        users.append(user)
        print(f"Created user: {user.email}")

    # Mock Data for Restaurants
    mock_restaurants_data = [
        {
            "name": "Bella Italia",
            "description": "Authentic Italian cuisine with a modern twist.",
            "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
            "cuisine": "Italian",
            "town": "Gulberg",
            "city": "Lahore",
            "country": "Pakistan",
            "rating": 4.8,
            "reviews": 324,
            "priceRange": "$$",
            "orderTime": "25-35 min",
            "photoCount": 127,
            "isNew": False,
            "isFeatured": True,
            "menu": [
                {
                    "name": "Margherita Pizza",
                    "description": "Classic pizza with fresh mozzarella, tomatoes, and basil.",
                    "price": 12.99,
                    "images": ["https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80"],
                    "ingredients": ["Pizza Dough", "Tomatoes", "Fresh Mozzarella", "Basil"]
                }
            ]
        },
        {
            "name": "Sushi Paradise",
            "description": "Premium sushi and Japanese delicacies.",
            "imageUrl": "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
            "cuisine": "Japanese",
            "town": "DHA Phase 5",
            "city": "Karachi",
            "country": "Pakistan",
            "rating": 4.9,
            "reviews": 512,
            "priceRange": "$$$",
            "orderTime": "30-40 min",
            "photoCount": 203,
            "isNew": False,
            "isFeatured": True,
            "menu": [
                {
                    "name": "Dragon Roll",
                    "description": "Eel, crab, and cucumber, topped with avocado.",
                    "price": 18.99,
                    "images": ["https://images.unsplash.com/photo-1617196034183-424999872e6a?w=800&q=80"],
                    "ingredients": ["Eel", "Crab", "Cucumber", "Avocado"]
                }
            ]
        },
        {
            "name": "Taco Fiesta",
            "description": "Vibrant Mexican street food with bold flavors.",
            "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
            "cuisine": "Mexican",
            "town": "F-7 Markaz",
            "city": "Islamabad",
            "country": "Pakistan",
            "rating": 4.6,
            "reviews": 289,
            "priceRange": "$",
            "orderTime": "20-30 min",
            "photoCount": 95,
            "isNew": True,
            "isFeatured": False,
            "menu": [
                {
                    "name": "Al Pastor Tacos",
                    "description": "Marinated pork tacos with pineapple and onions.",
                    "price": 3.99,
                    "images": ["https://images.unsplash.com/photo-1567337710282-00832b415949?w=800&q=80"],
                    "ingredients": ["Pork", "Pineapple", "Onions", "Corn Tortillas"]
                }
            ]
        }
    ]

    # Create Restaurants linked to Users
    for i, data in enumerate(mock_restaurants_data):
        owner = users[i % len(users)]
        menu_items = [MenuItem(**item) for item in data["menu"]]
        data["menu"] = menu_items
        
        restaurant = Restaurant(
            **data,
            owner_id=owner.id
        )
        
        await db.restaurants.insert_one(restaurant.model_dump(by_alias=True, exclude={"id"}))
        print(f"Created restaurant: {restaurant.name} (Owner: {owner.email})")

    print("✅ Database seeded successfully!")
