'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import RestaurantCard from '@/components/restaurant/RestaurantCard';
import { getMyRestaurants } from '@/lib/api-client';

interface Restaurant {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    cuisine: string;
    town: string;
    city: string;
    country: string;
    rating: number;
    reviews: number;
    priceRange: string;
}

export default function OwnerRestaurantsPage() {
    const router = useRouter();
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getMyRestaurants();
            setRestaurants(data);
        } catch (err: any) {
            console.error('Failed to fetch restaurants:', err);
            setError(err.response?.data?.detail || 'Failed to load restaurants');
        } finally {
            setLoading(false);
        }
    };

    const handleRestaurantClick = (id: string) => {
        router.push(`/owner/restaurants/${id}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">My Restaurants</h1>
                            <p className="mt-1 text-gray-600">Manage your restaurant portfolio</p>
                        </div>
                        <button
                            onClick={() => router.push('/owner/restaurants/new')}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            <Plus className="w-5 h-5" />
                            Add Restaurant
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Loading State */}
                {loading && (
                    <div className="flex items-center justify-center py-20">
                        <div className="text-center">
                            <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-xl text-gray-600">Loading your restaurants...</p>
                        </div>
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">⚠️</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
                        <p className="text-gray-600 mb-6">{error}</p>
                        <button
                            onClick={fetchRestaurants}
                            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Restaurants Grid */}
                {!loading && !error && (
                    <>
                        {restaurants.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {restaurants.map((restaurant) => (
                                    <RestaurantCard
                                        key={restaurant.id}
                                        {...restaurant}
                                        onClick={() => handleRestaurantClick(restaurant.id)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <div className="text-6xl mb-4">🍽️</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">No restaurants yet</h3>
                                <p className="text-gray-600 mb-6">
                                    Start by adding your first restaurant to the platform
                                </p>
                                <button
                                    onClick={() => router.push('/owner/restaurants/new')}
                                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Add Your First Restaurant
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
