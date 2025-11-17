export const APP_NAME = 'Feast Frame'
export const APP_VERSION = '1.0.0'

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',

  // Recipes
  RECIPES: '/recipes',
  RECIPE_DETAIL: (id: string) => `/recipes/${id}`,
  RECIPE_CREATE: '/recipes',
  RECIPE_UPDATE: (id: string) => `/recipes/${id}`,
  RECIPE_DELETE: (id: string) => `/recipes/${id}`,

  // Users
  USERS: '/users',
  USER_PROFILE: (id: string) => `/users/${id}`,
  USER_UPDATE: (id: string) => `/users/${id}`,

  // Reviews
  REVIEWS: '/reviews',
  RECIPE_REVIEWS: (recipeId: string) => `/recipes/${recipeId}/reviews`,
}

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
}

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  REFRESH_TOKEN: 'refreshToken',
  USER_DATA: 'userData',
  THEME: 'theme',
}
