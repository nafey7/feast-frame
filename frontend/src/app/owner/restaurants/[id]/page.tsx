'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Save, Menu } from 'lucide-react';
import { getRestaurant, updateRestaurant } from '@/lib/api-client';

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
    orderTime: string;
}

export default function OwnerRestaurantManagePage() {
    const router = useRouter();
    const params = useParams();
    const restaurantId = params.id as string;

    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
    const [formData, setFormData] = useState<Partial<Restaurant>>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchRestaurant();
    }, [restaurantId]);

    const fetchRestaurant = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getRestaurant(restaurantId);
            setRestaurant(data);
            setFormData(data);
        } catch (err: any) {
            console.error('Failed to fetch restaurant:', err);
            setError(err.response?.data?.detail || 'Failed to load restaurant');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        try {
            setSaving(true);
            await updateRestaurant(restaurantId, formData);
            alert('Restaurant updated successfully!');
            fetchRestaurant();
        } catch (err: any) {
            console.error('Failed to update restaurant:', err);
            alert(err.response?.data?.detail || 'Failed to update restaurant');
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (field: keyof Restaurant, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600">Loading restaurant...</p>
                </div>
            </div>
        );
    }

    if (error || !restaurant) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">⚠️</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Error</h3>
                    <p className="text-gray-600 mb-6">{error || 'Restaurant not found'}</p>
                    <button
                        onClick={() => router.push('/owner/restaurants')}
                        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all"
                    >
                        Back to Restaurants
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => router.push('/owner/restaurants')}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-6 h-6 text-gray-600" />
                            </button>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Manage Restaurant</h1>
                                <p className="mt-1 text-gray-600">{restaurant.name}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => router.push(`/owner/restaurants/${restaurantId}/menu`)}
                                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
                            >
                                <Menu className="w-5 h-5" />
                                View Menu
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={saving}
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <Save className="w-5 h-5" />
                                {saving ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Restaurant Name
                            </label>
                            <input
                                type="text"
                                value={formData.name || ''}
                                onChange={(e) => handleChange('name', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                value={formData.description || ''}
                                onChange={(e) => handleChange('description', e.target.value)}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Image URL
                            </label>
                            <input
                                type="url"
                                value={formData.imageUrl || ''}
                                onChange={(e) => handleChange('imageUrl', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>

                        {/* Cuisine */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Cuisine Type
                            </label>
                            <input
                                type="text"
                                value={formData.cuisine || ''}
                                onChange={(e) => handleChange('cuisine', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>

                        {/* Location */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Town
                                </label>
                                <input
                                    type="text"
                                    value={formData.town || ''}
                                    onChange={(e) => handleChange('town', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    value={formData.city || ''}
                                    onChange={(e) => handleChange('city', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    value={formData.country || ''}
                                    onChange={(e) => handleChange('country', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Price Range & Order Time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Price Range
                                </label>
                                <input
                                    type="text"
                                    value={formData.priceRange || ''}
                                    onChange={(e) => handleChange('priceRange', e.target.value)}
                                    placeholder="e.g., $$"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Order Time
                                </label>
                                <input
                                    type="text"
                                    value={formData.orderTime || ''}
                                    onChange={(e) => handleChange('orderTime', e.target.value)}
                                    placeholder="e.g., 30-45 min"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
