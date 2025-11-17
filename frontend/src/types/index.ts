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

export interface Recipe {
  id: string
  title: string
  description: string
  image?: string
  ingredients: string[]
  instructions: string[]
  cookTime: number
  prepTime: number
  servings: number
  author: User
  rating: number
  reviews: number
  createdAt: string
  updatedAt: string
}
