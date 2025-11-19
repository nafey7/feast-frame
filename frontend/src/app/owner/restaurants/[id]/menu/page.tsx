'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Plus } from 'lucide-react';
import MenuItemCard from '@/components/restaurant/MenuItemCard';
import MenuItemForm from '@/components/restaurant/MenuItemForm';
import { getRestaurant, addMenuItem, updateMenuItem, deleteMenuItem } from '@/lib/api-client';

interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    ingredients: string[];
}

interface Restaurant {
    id: string;
    name: string;
    menu: MenuItem[];
}

export default function OwnerMenuManagementPage() {
    const router = useRouter();
    const params = useParams();
    const restaurantId = params.id as string;

    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
    const [formLoading, setFormLoading] = useState(false);

    useEffect(() => {
        fetchRestaurant();
    }, [restaurantId]);

    const fetchRestaurant = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getRestaurant(restaurantId);
            setRestaurant(data);
        } catch (err: any) {
            console.error('Failed to fetch restaurant:', err);
            setError(err.response?.data?.detail || 'Failed to load restaurant');
        } finally {
            setLoading(false);
        }
    };

    const handleAddItem = async (data: any) => {
        try {
            setFormLoading(true);
            await addMenuItem(restaurantId, data);
            setShowForm(false);
            fetchRestaurant();
        } catch (err: any) {
            console.error('Failed to add menu item:', err);
            alert(err.response?.data?.detail || 'Failed to add menu item');
        } finally {
            setFormLoading(false);
        }
    };

    const handleUpdateItem = async (data: any) => {
        if (!editingItem) return;

        try {
            setFormLoading(true);
            await updateMenuItem(restaurantId, editingItem.id, data);
            setEditingItem(null);
            fetchRestaurant();
        } catch (err: any) {
            console.error('Failed to update menu item:', err);
            alert(err.response?.data?.detail || 'Failed to update menu item');
        } finally {
            setFormLoading(false);
        }
    };

    const handleDeleteItem = async (itemId: string) => {
        if (!confirm('Are you sure you want to delete this menu item?')) return;

        try {
            await deleteMenuItem(restaurantId, itemId);
            fetchRestaurant();
        } catch (err: any) {
            console.error('Failed to delete menu item:', err);
            alert(err.response?.data?.detail || 'Failed to delete menu item');
        }
    };

    const handleEdit = (item: MenuItem) => {
        setEditingItem(item);
        setShowForm(false);
    };

    const handleCancelForm = () => {
        setShowForm(false);
        setEditingItem(null);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600">Loading menu...</p>
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => router.push(`/owner/restaurants/${restaurantId}`)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-6 h-6 text-gray-600" />
                            </button>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Menu Management</h1>
                                <p className="mt-1 text-gray-600">{restaurant.name}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                setEditingItem(null);
                                setShowForm(true);
                            }}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
                        >
                            <Plus className="w-5 h-5" />
                            Add Menu Item
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Add/Edit Form */}
                {(showForm || editingItem) && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
                        </h2>
                        <MenuItemForm
                            initialData={editingItem || undefined}
                            onSubmit={editingItem ? handleUpdateItem : handleAddItem}
                            onCancel={handleCancelForm}
                            isLoading={formLoading}
                        />
                    </div>
                )}

                {/* Menu Items List */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Menu Items ({restaurant.menu.length})
                        </h2>
                    </div>

                    {restaurant.menu.length > 0 ? (
                        <div className="space-y-4">
                            {restaurant.menu.map((item) => (
                                <MenuItemCard
                                    key={item.id}
                                    {...item}
                                    onEdit={() => handleEdit(item)}
                                    onDelete={() => handleDeleteItem(item.id)}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
                            <div className="text-6xl mb-4">🍽️</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No menu items yet</h3>
                            <p className="text-gray-600 mb-6">
                                Start by adding your first menu item
                            </p>
                            <button
                                onClick={() => setShowForm(true)}
                                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
                            >
                                Add Your First Menu Item
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
