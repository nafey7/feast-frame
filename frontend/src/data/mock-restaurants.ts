import { Restaurant } from "@/types/restaurant";

/**
 * @deprecated This mock data is no longer used for restaurant pages.
 * The application now fetches real data from the API.
 * This file is kept only for the filterOptions export used by the SearchBar component.
 */
export const mockRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Bella Italia",
    description:
      "Authentic Italian cuisine with a modern twist. Family recipes passed down through generations.",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    cuisine: "Italian",
    town: "Gulberg",
    city: "Lahore",
    country: "Pakistan",
    rating: 4.8,
    reviews: 324,
    priceRange: "$$",
    orderTime: "25-35 min",
    photoCount: 127,
    isNew: false,
    isFeatured: true,
    menu: [
      {
        id: "1-1",
        name: "Margherita Pizza",
        description:
          "Classic pizza with fresh mozzarella, tomatoes, and basil.",
        price: 12.99,
        images: [
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
          "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80",
        ],
        ingredients: ["Pizza Dough", "Tomatoes", "Fresh Mozzarella", "Basil"],
      },
      {
        id: "1-2",
        name: "Carbonara",
        description: "Spaghetti with pancetta, egg, and parmesan cheese.",
        price: 15.99,
        images: [
          "https://images.unsplash.com/photo-1621996346565-e326e22e3824?w=800&q=80",
          "https://images.unsplash.com/photo-1588013273468-411962b4873b?w=800&q=80",
          "https://images.unsplash.com/photo-1621996346565-e326e22e3824?w=800&q=80",
        ],
        ingredients: ["Spaghetti", "Pancetta", "Egg", "Parmesan Cheese"],
      },
      {
        id: "1-3",
        name: "Tiramisu",
        description: "Coffee-flavored Italian dessert.",
        price: 8.99,
        images: [
          "https://images.unsplash.com/photo-1571877275926-5071d683a238?w=800&q=80",
          "https://images.unsplash.com/photo-1626675799123-d1833a49854d?w=800&q=80",
          "https://images.unsplash.com/photo-1571877275926-5071d683a238?w=800&q=80",
        ],
        ingredients: ["Ladyfingers", "Mascarpone", "Coffee", "Cocoa Powder"],
      },
    ],
  },
  {
    id: "2",
    name: "Sushi Paradise",
    description:
      "Premium sushi and Japanese delicacies crafted by master chefs with 20 years of experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
    cuisine: "Japanese",
    town: "DHA Phase 5",
    city: "Karachi",
    country: "Pakistan",
    rating: 4.9,
    reviews: 512,
    priceRange: "$$$",
    orderTime: "30-40 min",
    photoCount: 203,
    isNew: false,
    isFeatured: true,
    menu: [
      {
        id: "2-1",
        name: "Dragon Roll",
        description: "Eel, crab, and cucumber, topped with avocado.",
        price: 18.99,
        images: [
          "https://images.unsplash.com/photo-1617196034183-424999872e6a?w=800&q=80",
          "https://images.unsplash.com/photo-1583610249428-23d5b18c133a?w=800&q=80",
          "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=80",
        ],
        ingredients: ["Eel", "Crab", "Cucumber", "Avocado", "Sushi Rice"],
      },
      {
        id: "2-2",
        name: "Tuna Sashimi",
        description: "Thick slices of fresh, raw tuna.",
        price: 22.99,
        images: [
          "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
          "https://images.unsplash.com/photo-1562893928-c63353454802?w=800&q=80",
          "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
        ],
        ingredients: ["Fresh Tuna"],
      },
      {
        id: "2-3",
        name: "Miso Soup",
        description:
          "Traditional Japanese soup with tofu, seaweed, and scallions.",
        price: 5.99,
        images: [
          "https://images.unsplash.com/photo-1569562211093-42b1f1a8a44a?w=800&q=80",
          "https://images.unsplash.com/photo-1586810784241-b25b543242a6?w=800&q=80",
          "https://images.unsplash.com/photo-1569562211093-42b1f1a8a44a?w=800&q=80",
        ],
        ingredients: ["Miso Paste", "Tofu", "Seaweed", "Scallions"],
      },
    ],
  },
  {
    id: "3",
    name: "Taco Fiesta",
    description:
      "Vibrant Mexican street food with bold flavors and fresh ingredients sourced daily.",
    imageUrl:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    cuisine: "Mexican",
    town: "F-7 Markaz",
    city: "Islamabad",
    country: "Pakistan",
    rating: 4.6,
    reviews: 289,
    priceRange: "$",
    orderTime: "20-30 min",
    photoCount: 95,
    isNew: true,
    isFeatured: false,
    menu: [
      {
        id: "3-1",
        name: "Al Pastor Tacos",
        description: "Marinated pork tacos with pineapple and onions.",
        price: 3.99,
        images: [
          "https://images.unsplash.com/photo-1567337710282-00832b415949?w=800&q=80",
          "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=800&q=80",
          "https://images.unsplash.com/photo-1613514792347-85d62c52c555?w=800&q=80",
        ],
        ingredients: ["Pork", "Pineapple", "Onions", "Corn Tortillas"],
      },
      {
        id: "3-2",
        name: "Guacamole & Chips",
        description: "Freshly made guacamole with crispy tortilla chips.",
        price: 7.99,
        images: [
          "https://images.unsplash.com/photo-1570197571499-70332c5196e0?w=800&q=80",
          "https://images.unsplash.com/photo-1578933925492-aab5d5a8a97a?w=800&q=80",
          "https://images.unsplash.com/photo-1599974511525-1a65a8b52b20?w=800&q=80",
        ],
        ingredients: ["Avocado", "Onion", "Tomato", "Cilantro", "Lime"],
      },
      {
        id: "3-3",
        name: "Horchata",
        description: "Sweet rice milk drink with cinnamon.",
        price: 4.99,
        images: [
          "https://images.unsplash.com/photo-1612198033431-339f797304f3?w=800&q=80",
          "https://images.unsplash.com/photo-1622377426373-3947a552d782?w=800&q=80",
          "https://images.unsplash.com/photo-1558828108-5d766b9943a3?w=800&q=80",
        ],
        ingredients: ["Rice", "Milk", "Cinnamon", "Sugar"],
      },
    ],
  },
  {
    id: "4",
    name: "Le Petit Bistro",
    description:
      "Elegant French dining experience with seasonal menus and exquisite wine pairings.",
    imageUrl:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    cuisine: "French",
    town: "Model Town",
    city: "Lahore",
    country: "Pakistan",
    rating: 4.7,
    reviews: 198,
    priceRange: "$$$$",
    orderTime: "40-50 min",
    photoCount: 156,
    isNew: false,
    isFeatured: false,
    menu: [
      {
        id: "4-1",
        name: "French Onion Soup",
        description:
          "Rich beef broth, caramelized onions, and a cheesy crouton.",
        price: 14.99,
        images: [
          "https://images.unsplash.com/photo-1504703395950-b89145a5425e?w=800&q=80",
          "https://images.unsplash.com/photo-1588166524941-dcf5c4773b39?w=800&q=80",
          "https://images.unsplash.com/photo-1591121588235-27f53c647b4a?w=800&q=80",
        ],
        ingredients: ["Beef Broth", "Onions", "Baguette", "Gruyère Cheese"],
      },
      {
        id: "4-2",
        name: "Duck Confit",
        description:
          "Slow-cooked duck leg with a crispy skin, served with potatoes.",
        price: 32.99,
        images: [
          "https://images.unsplash.com/photo-1599923568233-3c08c3e2f93e?w=800&q=80",
          "https://images.unsplash.com/photo-1625938144952-cb2646f58ab5?w=800&q=80",
          "https://images.unsplash.com/photo-1593936646138-42a84ace7556?w=800&q=80",
        ],
        ingredients: ["Duck Leg", "Potatoes", "Garlic", "Herbs"],
      },
      {
        id: "4-3",
        name: "Creme Brulee",
        description: "Rich custard base with a caramelized sugar topping.",
        price: 11.99,
        images: [
          "https://images.unsplash.com/photo-1543563994-75354c57a473?w=800&q=80",
          "https://images.unsplash.com/photo-1618043243171-1b45c013b645?w=800&q=80",
          "https://images.unsplash.com/photo-1568813569142-a419a55e4d86?w=800&q=80",
        ],
        ingredients: ["Cream", "Sugar", "Egg Yolks", "Vanilla"],
      },
    ],
  },
  {
    id: "5",
    name: "Dragon Wok",
    description:
      "Spicy Szechuan and Cantonese classics that bring the flavors of China to your table.",
    imageUrl:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=80",
    cuisine: "Chinese",
    town: "Clifton",
    city: "Karachi",
    country: "Pakistan",
    rating: 4.5,
    reviews: 421,
    priceRange: "$$",
    orderTime: "25-35 min",
    photoCount: 178,
    isNew: false,
    isFeatured: true,
    menu: [
      {
        id: "5-1",
        name: "Kung Pao Chicken",
        description:
          "Spicy, stir-fried chicken with peanuts, vegetables, and chili peppers.",
        price: 16.99,
        images: [
          "https://images.unsplash.com/photo-1569058242252-623df4609e39?w=800&q=80",
          "https://images.unsplash.com/photo-1594179047519-f64de39f3362?w=800&q=80",
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
        ],
        ingredients: ["Chicken", "Peanuts", "Bell Peppers", "Chili Peppers"],
      },
      {
        id: "5-2",
        name: "Dim Sum Platter",
        description: "A selection of steamed and fried dumplings.",
        price: 19.99,
        images: [
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80",
          "https://images.unsplash.com/photo-1523294587484-bae6cc870010?w=800&q=80",
          "https://images.unsplash.com/photo-1563245365-656d26a3a37c?w=800&q=80",
        ],
        ingredients: ["Shrimp", "Pork", "Wonton Wrappers", "Cabbage"],
      },
      {
        id: "5-3",
        name: "Hot and Sour Soup",
        description: "A classic Chinese soup with a spicy and sour broth.",
        price: 7.99,
        images: [
          "https://images.unsplash.com/photo-1544510806-a3a7624a4c09?w=800&q=80",
          "https://images.unsplash.com/photo-1598103442245-088958163b75?w=800&q=80",
          "https://images.unsplash.com/photo-1544510806-a3a7624a4c09?w=800&q=80",
        ],
        ingredients: ["Tofu", "Mushrooms", "Bamboo Shoots", "Vinegar", "Chili"],
      },
    ],
  },
  {
    id: "6",
    name: "The Burger Joint",
    description:
      "Gourmet burgers made with locally sourced beef and creative toppings that redefine comfort food.",
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    cuisine: "American",
    town: "F-11 Markaz",
    city: "Islamabad",
    country: "Pakistan",
    rating: 4.7,
    reviews: 634,
    priceRange: "$$",
    orderTime: "15-25 min",
    photoCount: 89,
    isNew: true,
    isFeatured: false,
    menu: [
      {
        id: "6-1",
        name: "The Classic Burger",
        description:
          "A juicy beef patty with lettuce, tomato, onion, and our special sauce.",
        price: 13.99,
        images: [
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
          "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
          "https://images.unsplash.com/photo-1594212699903-ec8a64e1f972?w=800&q=80",
        ],
        ingredients: [
          "Beef Patty",
          "Lettuce",
          "Tomato",
          "Onion",
          "Special Sauce",
        ],
      },
      {
        id: "6-2",
        name: "Loaded Fries",
        description: "Crispy fries topped with cheese, bacon, and jalapeños.",
        price: 9.99,
        images: [
          "https://images.unsplash.com/photo-1598679253331-3269a4976815?w=800&q=80",
          "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&q=80",
          "https://images.unsplash.com/photo-1592415486689-8306d23e4a6b?w=800&q=80",
        ],
        ingredients: ["Fries", "Cheese", "Bacon", "Jalapeños"],
      },
      {
        id: "6-3",
        name: "Chocolate Milkshake",
        description: "A thick and creamy milkshake made with real ice cream.",
        price: 6.99,
        images: [
          "https://images.unsplash.com/photo-1572490122747-91e13e5b4a43?w=800&q=80",
          "https://images.unsplash.com/photo-1619158401928-b4f989d629d7?w=800&q=80",
          "https://images.unsplash.com/photo-1586985289933-606b35639337?w=800&q=80",
        ],
        ingredients: ["Ice Cream", "Milk", "Chocolate Syrup"],
      },
    ],
  },
  {
    id: "7",
    name: "Spice Route",
    description:
      "Aromatic Indian curries and tandoori specialties that take you on a journey through India.",
    imageUrl:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    cuisine: "Indian",
    town: "Wapda Town",
    city: "Lahore",
    country: "Pakistan",
    rating: 4.8,
    reviews: 367,
    priceRange: "$$",
    orderTime: "30-40 min",
    photoCount: 142,
    isNew: false,
    isFeatured: false,
    menu: [
      {
        id: "7-1",
        name: "Chicken Tikka Masala",
        description: "Grilled chicken in a creamy tomato sauce.",
        price: 17.99,
        images: [
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
          "https://images.unsplash.com/photo-1588166524941-dcf5c4773b39?w=800&q=80",
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
        ],
        ingredients: ["Chicken", "Tomato Sauce", "Cream", "Spices"],
      },
      {
        id: "7-2",
        name: "Garlic Naan",
        description: "Soft, fluffy bread with garlic and butter.",
        price: 4.99,
        images: [
          "https://images.unsplash.com/photo-1620374643420-f24a2f73c5c3?w=800&q=80",
          "https://images.unsplash.com/photo-1620374643420-f24a2f73c5c3?w=800&q=80",
          "https://images.unsplash.com/photo-1620374643420-f24a2f73c5c3?w=800&q=80",
        ],
        ingredients: ["Flour", "Yogurt", "Garlic", "Butter"],
      },
      {
        id: "7-3",
        name: "Mango Lassi",
        description: "A refreshing yogurt drink with mango.",
        price: 5.99,
        images: [
          "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=800&q=80",
          "https://images.unsplash.com/photo-1610970878459-a6a4d6456a6b?w=800&q=80",
          "https://images.unsplash.com/photo-1572490122747-91e13e5b4a43?w=800&q=80",
        ],
        ingredients: ["Yogurt", "Mango", "Milk", "Sugar"],
      },
    ],
  },
  {
    id: "8",
    name: "Mediterranean Breeze",
    description:
      "Fresh and healthy Mediterranean cuisine featuring Greek, Turkish, and Lebanese influences.",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    cuisine: "Mediterranean",
    town: "Sea View",
    city: "Karachi",
    country: "Pakistan",
    rating: 4.6,
    reviews: 245,
    priceRange: "$$$",
    orderTime: "35-45 min",
    photoCount: 118,
    isNew: true,
    isFeatured: true,
    menu: [
      {
        id: "8-1",
        name: "Gyro Platter",
        description:
          "Sliced lamb and beef with pita bread, tzatziki sauce, and a side salad.",
        price: 19.99,
        images: [
          "https://images.unsplash.com/photo-1567247693333-3474b9d3434d?w=800&q=80",
          "https://images.unsplash.com/photo-1567247693333-3474b9d3434d?w=800&q=80",
          "https://images.unsplash.com/photo-1567247693333-3474b9d3434d?w=800&q=80",
        ],
        ingredients: ["Lamb", "Beef", "Pita Bread", "Tzatziki Sauce", "Salad"],
      },
      {
        id: "8-2",
        name: "Hummus with Pita",
        description: "Creamy chickpea dip with warm pita bread.",
        price: 8.99,
        images: [
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
        ],
        ingredients: [
          "Chickpeas",
          "Tahini",
          "Lemon Juice",
          "Garlic",
          "Pita Bread",
        ],
      },
      {
        id: "8-3",
        name: "Baklava",
        description:
          "A sweet pastry made of layers of filo filled with chopped nuts and sweetened with syrup.",
        price: 7.99,
        images: [
          "https://images.unsplash.com/photo-1589301760014-d929f397918e?w=800&q=80",
          "https://images.unsplash.com/photo-1589301760014-d929f397918e?w=800&q=80",
          "https://images.unsplash.com/photo-1589301760014-d929f397918e?w=800&q=80",
        ],
        ingredients: ["Filo Dough", "Nuts", "Honey", "Butter"],
      },
    ],
  },
  {
    id: "9",
    name: "Seoul Kitchen",
    description:
      "Authentic Korean BBQ and traditional dishes in a modern, vibrant setting.",
    imageUrl:
      "https://images.unsplash.com/photo-1580554530778-ca36943938b2?w=800&q=80",
    cuisine: "Korean",
    town: "DHA Phase 6",
    city: "Karachi",
    country: "Pakistan",
    rating: 4.9,
    reviews: 489,
    priceRange: "$$",
    orderTime: "25-35 min",
    photoCount: 201,
    isNew: false,
    isFeatured: true,
    menu: [
      {
        id: "9-1",
        name: "Korean BBQ Short Ribs (Galbi)",
        description: "Marinated and grilled beef short ribs.",
        price: 28.99,
        images: [
          "https://images.unsplash.com/photo-1598468479882-44f99e3433a1?w=800&q=80",
          "https://images.unsplash.com/photo-1598468479882-44f99e3433a1?w=800&q=80",
          "https://images.unsplash.com/photo-1598468479882-44f99e3433a1?w=800&q=80",
        ],
        ingredients: ["Beef Short Ribs", "Soy Sauce", "Garlic", "Ginger"],
      },
      {
        id: "9-2",
        name: "Bibimbap",
        description:
          "A bowl of warm white rice topped with namul and gochujang, soy sauce, or doenjang.",
        price: 16.99,
        images: [
          "https://images.unsplash.com/photo-1598147159992-eb96d9575d24?w=800&q=80",
          "https://images.unsplash.com/photo-1603246652191-8a6dc2013f40?w=800&q=80",
          "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
        ],
        ingredients: ["Rice", "Spinach", "Carrots", "Beef", "Egg", "Gochujang"],
      },
      {
        id: "9-3",
        name: "Kimchi Jjigae",
        description:
          "A spicy stew made with kimchi and other ingredients like scallions, onions, and diced tofu.",
        price: 14.99,
        images: [
          "https://images.unsplash.com/photo-1574894709920-3a2b3fb37823?w=800&q=80",
          "https://images.unsplash.com/photo-1574894709920-3a2b3fb37823?w=800&q=80",
          "https://images.unsplash.com/photo-1574894709920-3a2b3fb37823?w=800&q=80",
        ],
        ingredients: ["Kimchi", "Tofu", "Pork", "Scallions", "Onions"],
      },
    ],
  },
  {
    id: "10",
    name: "Green Garden",
    description:
      "Plant-based paradise offering creative vegan and vegetarian dishes that even meat-lovers enjoy.",
    imageUrl:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
    cuisine: "Vegan",
    town: "Bahria Town",
    city: "Islamabad",
    country: "Pakistan",
    rating: 4.7,
    reviews: 312,
    priceRange: "$$",
    orderTime: "20-30 min",
    photoCount: 164,
    isNew: true,
    isFeatured: false,
    menu: [
      {
        id: "10-1",
        name: "Buddha Bowl",
        description:
          "A hearty bowl of quinoa, roasted vegetables, and a tahini dressing.",
        price: 15.99,
        images: [
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        ],
        ingredients: [
          "Quinoa",
          "Roasted Vegetables",
          "Tahini Dressing",
          "Chickpeas",
        ],
      },
      {
        id: "10-2",
        name: "Avocado Toast",
        description:
          "Sourdough toast with mashed avocado, chili flakes, and a sprinkle of salt.",
        price: 11.99,
        images: [
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
        ],
        ingredients: ["Sourdough Bread", "Avocado", "Chili Flakes", "Salt"],
      },
      {
        id: "10-3",
        name: "Green Smoothie",
        description: "A blend of spinach, banana, pineapple, and almond milk.",
        price: 8.99,
        images: [
          "https://images.unsplash.com/photo-1506458961255-571f40df5aad?w=800&q=80",
          "https://images.unsplash.com/photo-1506458961255-571f40df5aad?w=800&q=80",
          "https://images.unsplash.com/photo-1506458961255-571f40df5aad?w=800&q=80",
        ],
        ingredients: ["Spinach", "Banana", "Pineapple", "Almond Milk"],
      },
    ],
  },
  {
    id: "11",
    name: "The Steakhouse",
    description:
      "Premium cuts of beef aged to perfection and grilled over open flames for maximum flavor.",
    imageUrl:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
    cuisine: "Steakhouse",
    town: "Saddar",
    city: "Karachi",
    country: "Pakistan",
    rating: 4.8,
    reviews: 456,
    priceRange: "$$$$",
    orderTime: "35-45 min",
    photoCount: 134,
    isNew: false,
    isFeatured: false,
    menu: [
      {
        id: "11-1",
        name: "Filet Mignon",
        description: "A tender 8oz filet, cooked to your liking.",
        price: 45.99,
        images: [
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
        ],
        ingredients: ["Filet Mignon", "Salt", "Pepper", "Butter"],
      },
      {
        id: "11-2",
        name: "Creamed Spinach",
        description: "A classic steakhouse side dish.",
        price: 12.99,
        images: [
          "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80",
          "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80",
          "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80",
        ],
        ingredients: ["Spinach", "Cream Cheese", "Garlic", "Parmesan Cheese"],
      },
      {
        id: "11-3",
        name: "Red Wine",
        description: "A glass of our house Cabernet Sauvignon.",
        price: 14.99,
        images: [
          "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
          "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
          "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
        ],
        ingredients: ["Cabernet Sauvignon Grapes"],
      },
    ],
  },
  {
    id: "12",
    name: "Pho & Co",
    description:
      "Authentic Vietnamese pho and street food with recipes from Hanoi and Saigon.",
    imageUrl:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80",
    cuisine: "Vietnamese",
    town: "Johar Town",
    city: "Lahore",
    country: "Pakistan",
    rating: 4.6,
    reviews: 278,
    priceRange: "$",
    orderTime: "20-30 min",
    photoCount: 87,
    isNew: false,
    isFeatured: false,
    menu: [
      {
        id: "12-1",
        name: "Pho Bo",
        description: "Beef noodle soup with a rich, aromatic broth.",
        price: 13.99,
        images: [
          "https://images.unsplash.com/photo-1585102990937-7085a79f3a39?w=800&q=80",
          "https://images.unsplash.com/photo-1585102990937-7085a79f3a39?w=800&q=80",
          "https://images.unsplash.com/photo-1585102990937-7085a79f3a39?w=800&q=80",
        ],
        ingredients: [
          "Beef Broth",
          "Rice Noodles",
          "Beef",
          "Bean Sprouts",
          "Basil",
        ],
      },
      {
        id: "12-2",
        name: "Banh Mi",
        description:
          "A Vietnamese sandwich with grilled pork, pickled vegetables, and cilantro.",
        price: 9.99,
        images: [
          "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80",
          "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80",
          "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80",
        ],
        ingredients: [
          "Baguette",
          "Grilled Pork",
          "Pickled Carrots",
          "Daikon",
          "Cilantro",
        ],
      },
      {
        id: "12-3",
        name: "Vietnamese Iced Coffee",
        description: "Strong coffee with sweetened condensed milk.",
        price: 5.99,
        images: [
          "https://images.unsplash.com/photo-1517701559435-505b048420c2?w=800&q=80",
          "https://images.unsplash.com/photo-1517701559435-505b048420c2?w=800&q=80",
          "https://images.unsplash.com/photo-1517701559435-505b048420c2?w=800&q=80",
        ],
        ingredients: ["Coffee", "Sweetened Condensed Milk", "Ice"],
      },
    ],
  },
];

export const filterOptions = {
  cuisines: [
    "Italian",
    "Japanese",
    "Mexican",
    "French",
    "Chinese",
    "American",
    "Korean",
    "Vegan",
    "Thai",
    "Spanish",
  ],
  priceRanges: ["$", "$$", "$$$", "$$$$"],
  ratings: [4.5, 4.0, 3.5, 3.0],
  features: ["Takeout Available"],
};
