import { Restaurant, MenuItem, MenuCategory } from '../types'

// Mock Restaurants
export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'La Bella Italia',
    slug: 'la-bella-italia',
    description: 'Authentic Italian cuisine with a modern twist. Fresh pasta made daily and wood-fired pizzas.',
    coverImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop',
    cuisine: ['Italian', 'Mediterranean'],
    rating: 4.6,
    reviewCount: 324,
    priceRange: '$$$',
    location: {
      address: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      coordinates: { lat: 37.7749, lng: -122.4194 }
    },
    phone: '(415) 555-0123',
    hours: [
      { day: 'Monday', open: '11:00 AM', close: '10:00 PM' },
      { day: 'Tuesday', open: '11:00 AM', close: '10:00 PM' },
      { day: 'Wednesday', open: '11:00 AM', close: '10:00 PM' },
      { day: 'Thursday', open: '11:00 AM', close: '10:00 PM' },
      { day: 'Friday', open: '11:00 AM', close: '11:00 PM' },
      { day: 'Saturday', open: '10:00 AM', close: '11:00 PM' },
      { day: 'Sunday', open: '10:00 AM', close: '9:00 PM' }
    ],
    featured: true,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    name: 'Dragon Palace',
    slug: 'dragon-palace',
    description: 'Traditional Chinese dining experience with dim sum specialties and Szechuan favorites.',
    coverImage: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=1200&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&h=400&fit=crop',
    cuisine: ['Chinese', 'Asian'],
    rating: 4.4,
    reviewCount: 289,
    priceRange: '$$',
    location: {
      address: '456 Market Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94103',
      coordinates: { lat: 37.7849, lng: -122.4094 }
    },
    phone: '(415) 555-0124',
    hours: [
      { day: 'Monday', open: '11:30 AM', close: '9:30 PM' },
      { day: 'Tuesday', open: '11:30 AM', close: '9:30 PM' },
      { day: 'Wednesday', open: '11:30 AM', close: '9:30 PM' },
      { day: 'Thursday', open: '11:30 AM', close: '9:30 PM' },
      { day: 'Friday', open: '11:30 AM', close: '10:00 PM' },
      { day: 'Saturday', open: '11:00 AM', close: '10:00 PM' },
      { day: 'Sunday', open: '11:00 AM', close: '9:00 PM' }
    ],
    featured: true,
    createdAt: '2024-01-16T00:00:00Z',
    updatedAt: '2024-01-16T00:00:00Z'
  },
  {
    id: '3',
    name: 'Sakura Sushi Bar',
    slug: 'sakura-sushi-bar',
    description: 'Premium sushi and Japanese cuisine. Fresh fish delivered daily from Tokyo fish market.',
    coverImage: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop',
    cuisine: ['Japanese', 'Sushi'],
    rating: 4.8,
    reviewCount: 412,
    priceRange: '$$$$',
    location: {
      address: '789 Ocean Avenue',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94112',
      coordinates: { lat: 37.7249, lng: -122.4594 }
    },
    phone: '(415) 555-0125',
    hours: [
      { day: 'Monday', closed: true, open: '', close: '' },
      { day: 'Tuesday', open: '5:00 PM', close: '10:00 PM' },
      { day: 'Wednesday', open: '5:00 PM', close: '10:00 PM' },
      { day: 'Thursday', open: '5:00 PM', close: '10:00 PM' },
      { day: 'Friday', open: '5:00 PM', close: '11:00 PM' },
      { day: 'Saturday', open: '5:00 PM', close: '11:00 PM' },
      { day: 'Sunday', open: '5:00 PM', close: '9:00 PM' }
    ],
    featured: true,
    createdAt: '2024-01-17T00:00:00Z',
    updatedAt: '2024-01-17T00:00:00Z'
  },
  {
    id: '4',
    name: 'Taco Fiesta',
    slug: 'taco-fiesta',
    description: 'Vibrant Mexican street food with house-made tortillas and fresh ingredients.',
    coverImage: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop',
    cuisine: ['Mexican', 'Latin American'],
    rating: 4.5,
    reviewCount: 256,
    priceRange: '$',
    location: {
      address: '321 Mission Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94110',
      coordinates: { lat: 37.7649, lng: -122.4194 }
    },
    phone: '(415) 555-0126',
    hours: [
      { day: 'Monday', open: '11:00 AM', close: '9:00 PM' },
      { day: 'Tuesday', open: '11:00 AM', close: '9:00 PM' },
      { day: 'Wednesday', open: '11:00 AM', close: '9:00 PM' },
      { day: 'Thursday', open: '11:00 AM', close: '9:00 PM' },
      { day: 'Friday', open: '11:00 AM', close: '10:00 PM' },
      { day: 'Saturday', open: '10:00 AM', close: '10:00 PM' },
      { day: 'Sunday', open: '10:00 AM', close: '9:00 PM' }
    ],
    featured: false,
    createdAt: '2024-01-18T00:00:00Z',
    updatedAt: '2024-01-18T00:00:00Z'
  },
  {
    id: '5',
    name: 'Spice Route',
    slug: 'spice-route',
    description: 'Authentic Indian cuisine with aromatic curries and tandoori specialties.',
    coverImage: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop',
    cuisine: ['Indian', 'Asian'],
    rating: 4.7,
    reviewCount: 378,
    priceRange: '$$',
    location: {
      address: '654 Valencia Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94110',
      coordinates: { lat: 37.7599, lng: -122.4214 }
    },
    phone: '(415) 555-0127',
    hours: [
      { day: 'Monday', open: '11:30 AM', close: '10:00 PM' },
      { day: 'Tuesday', open: '11:30 AM', close: '10:00 PM' },
      { day: 'Wednesday', open: '11:30 AM', close: '10:00 PM' },
      { day: 'Thursday', open: '11:30 AM', close: '10:00 PM' },
      { day: 'Friday', open: '11:30 AM', close: '10:30 PM' },
      { day: 'Saturday', open: '11:00 AM', close: '10:30 PM' },
      { day: 'Sunday', open: '11:00 AM', close: '10:00 PM' }
    ],
    featured: false,
    createdAt: '2024-01-19T00:00:00Z',
    updatedAt: '2024-01-19T00:00:00Z'
  },
  {
    id: '6',
    name: 'Thai Orchid',
    slug: 'thai-orchid',
    description: 'Traditional Thai flavors with pad thai, curries, and signature noodle dishes.',
    coverImage: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=1200&h=600&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&h=400&fit=crop',
    cuisine: ['Thai', 'Asian'],
    rating: 4.3,
    reviewCount: 198,
    priceRange: '$$',
    location: {
      address: '987 Polk Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94109',
      coordinates: { lat: 37.7849, lng: -122.4194 }
    },
    phone: '(415) 555-0128',
    hours: [
      { day: 'Monday', open: '11:00 AM', close: '9:30 PM' },
      { day: 'Tuesday', open: '11:00 AM', close: '9:30 PM' },
      { day: 'Wednesday', open: '11:00 AM', close: '9:30 PM' },
      { day: 'Thursday', open: '11:00 AM', close: '9:30 PM' },
      { day: 'Friday', open: '11:00 AM', close: '10:00 PM' },
      { day: 'Saturday', open: '11:00 AM', close: '10:00 PM' },
      { day: 'Sunday', open: '12:00 PM', close: '9:00 PM' }
    ],
    featured: false,
    createdAt: '2024-01-20T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z'
  }
]

// Mock Menu Items for La Bella Italia
export const mockMenuItems: MenuItem[] = [
  {
    id: 'm1',
    restaurantId: '1',
    name: 'Margherita Pizza',
    description: 'Classic Neapolitan pizza with fresh mozzarella, basil, and San Marzano tomatoes',
    price: 16.99,
    category: 'Pizza',
    images: [
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop'
    ],
    popular: true,
    vegetarian: true,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: 'm2',
    restaurantId: '1',
    name: 'Fettuccine Alfredo',
    description: 'Creamy parmesan sauce with fresh fettuccine pasta',
    price: 18.99,
    category: 'Pasta',
    images: [
      'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800&h=600&fit=crop'
    ],
    vegetarian: true,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: 'm3',
    restaurantId: '1',
    name: 'Osso Buco',
    description: 'Braised veal shanks with saffron risotto and gremolata',
    price: 32.99,
    category: 'Mains',
    images: [
      'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&h=600&fit=crop'
    ],
    popular: true,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: 'm4',
    restaurantId: '1',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone',
    price: 9.99,
    category: 'Desserts',
    images: [
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop'
    ],
    vegetarian: true,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: 'm5',
    restaurantId: '1',
    name: 'Caprese Salad',
    description: 'Fresh tomatoes, mozzarella, basil, and balsamic reduction',
    price: 12.99,
    category: 'Appetizers',
    images: [
      'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&h=600&fit=crop'
    ],
    vegetarian: true,
    glutenFree: true,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: 'm6',
    restaurantId: '1',
    name: 'Diavola Pizza',
    description: 'Spicy salami, mozzarella, chili flakes, and fresh basil',
    price: 19.99,
    category: 'Pizza',
    images: [
      'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop'
    ],
    spicy: true,
    popular: true,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  }
]

// Organize menu items by category
export const mockMenuCategories: MenuCategory[] = [
  {
    id: 'cat1',
    name: 'Appetizers',
    slug: 'appetizers',
    description: 'Start your meal with our delicious starters',
    items: mockMenuItems.filter(item => item.category === 'Appetizers')
  },
  {
    id: 'cat2',
    name: 'Pizza',
    slug: 'pizza',
    description: 'Wood-fired pizzas with authentic Italian ingredients',
    items: mockMenuItems.filter(item => item.category === 'Pizza')
  },
  {
    id: 'cat3',
    name: 'Pasta',
    slug: 'pasta',
    description: 'Fresh homemade pasta with traditional sauces',
    items: mockMenuItems.filter(item => item.category === 'Pasta')
  },
  {
    id: 'cat4',
    name: 'Mains',
    slug: 'mains',
    description: 'Hearty main courses from the Italian countryside',
    items: mockMenuItems.filter(item => item.category === 'Mains')
  },
  {
    id: 'cat5',
    name: 'Desserts',
    slug: 'desserts',
    description: 'Sweet endings to your perfect meal',
    items: mockMenuItems.filter(item => item.category === 'Desserts')
  }
]
