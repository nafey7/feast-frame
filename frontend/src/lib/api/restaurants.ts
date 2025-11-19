import { api } from '../api-client';
import { Restaurant, MenuItem } from '@/types/restaurant';

/**
 * Fetch all restaurants from the API
 */
export async function getRestaurants(): Promise<Restaurant[]> {
    const response = await api.get<Restaurant[]>('/restaurants');
    return response.data;
}

/**
 * Fetch a specific restaurant by ID including its menu
 */
export async function getRestaurantById(id: string): Promise<Restaurant> {
    const response = await api.get<Restaurant>(`/restaurants/${id}`);
    return response.data;
}

/**
 * Fetch a specific menu item from a restaurant
 */
export async function getMenuItem(
    restaurantId: string,
    menuItemId: string
): Promise<MenuItem> {
    const response = await api.get<MenuItem>(
        `/restaurants/${restaurantId}/menu/${menuItemId}`
    );
    return response.data;
}
