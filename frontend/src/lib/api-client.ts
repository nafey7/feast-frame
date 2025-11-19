import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Important for cookies
});

// Request interceptor to add access token
api.interceptors.request.use(
  (config) => {
    // We don't store access token in localStorage to avoid XSS
    // Instead, we keep it in memory (AuthContext) and attach it here if available.
    // However, since axios instance is singleton, we can't easily access React Context here.
    // A common pattern is to let the Context set a default header on login.
    // Or we can store it in a variable in this module.

    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for refreshing token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't tried to refresh yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Call refresh endpoint
        // We use a separate instance to avoid infinite loops if refresh fails
        const refreshResponse = await axios.post(
          `${baseURL}/auth/refresh`,
          {},
          { withCredentials: true }
        );

        const { access_token } = refreshResponse.data;

        // Update the token in memory
        setAccessToken(access_token);

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh failed (token expired or invalid)
        // Clear token and redirect to login (handled by AuthContext usually)
        setAccessToken(null);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Simple in-memory token management
let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export const getAccessToken = () => accessToken;

// API Helper Functions

// Restaurant Management
export const getMyRestaurants = async () => {
  try {
    const response = await api.get("/restaurants/my-restaurants");
    return response.data;
  } catch (error: any) {
    // Log detailed error information
    if (error.response) {
      // Server responded with error status
      console.error("API Error Response:", {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
        headers: error.response.headers,
      });
    } else if (error.request) {
      // Request was made but no response received
      console.error("API Error - No Response:", {
        message: error.message,
        code: error.code,
        request: error.request,
      });
    } else {
      // Error setting up the request
      console.error("API Error - Request Setup:", error.message);
    }
    throw error;
  }
};

export const getRestaurant = async (id: string) => {
  const response = await api.get(`/restaurants/${id}`);
  return response.data;
};

export const updateRestaurant = async (id: string, data: any) => {
  const response = await api.put(`/restaurants/${id}`, data);
  return response.data;
};

// Menu Management
export const addMenuItem = async (restaurantId: string, data: any) => {
  const response = await api.post(`/restaurants/${restaurantId}/menu`, data);
  return response.data;
};

export const updateMenuItem = async (
  restaurantId: string,
  itemId: string,
  data: any
) => {
  const response = await api.put(
    `/restaurants/${restaurantId}/menu/${itemId}`,
    data
  );
  return response.data;
};

export const deleteMenuItem = async (restaurantId: string, itemId: string) => {
  const response = await api.delete(
    `/restaurants/${restaurantId}/menu/${itemId}`
  );
  return response.data;
};
