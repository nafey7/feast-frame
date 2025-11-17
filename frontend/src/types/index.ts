export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

export interface ApiError {
  message: string
  code: string
  details?: Record<string, unknown>
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

// Restaurant & Menu Types
export interface Location {
  address: string
  city: string
  state: string
  zipCode: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface RestaurantHours {
  day: string
  open: string
  close: string
  closed?: boolean
}

export interface Restaurant {
  id: string
  name: string
  slug: string
  description: string
  coverImage: string
  thumbnail: string
  cuisine: string[]
  rating: number
  reviewCount: number
  priceRange: '$' | '$$' | '$$$' | '$$$$'
  location: Location
  phone: string
  hours: RestaurantHours[]
  featured: boolean
  createdAt: string
  updatedAt: string
}

export interface MenuItem {
  id: string
  restaurantId: string
  name: string
  description: string
  price: number
  category: string
  images: string[]
  popular?: boolean
  spicy?: boolean
  vegetarian?: boolean
  vegan?: boolean
  glutenFree?: boolean
  createdAt: string
  updatedAt: string
}

export interface MenuCategory {
  id: string
  name: string
  slug: string
  description?: string
  items: MenuItem[]
}

// Search Types
export interface SearchFilters {
  cuisine?: string[]
  priceRange?: string[]
  rating?: number
  location?: string
  sortBy?: 'rating' | 'distance' | 'popularity' | 'name'
}

export interface SearchResult {
  restaurants: Restaurant[]
  dishes: MenuItem[]
  total: number
}

// Gallery Types
export interface GalleryImage {
  id: string
  url: string
  alt: string
  dishName?: string
  restaurantName?: string
}
