'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { DishImageGallery } from '@/components/dish/dish-image-gallery';
import { DishInfo } from '@/components/dish/dish-info';
import { getMenuItem } from '@/lib/api/restaurants';
import { MenuItem } from '@/types/restaurant';

export default function MenuItemPage() {
    const params = useParams();
    const router = useRouter();
    const restaurantId = params.id as string;
    const menuItemId = params.menuItemId as string;

    const [menuItem, setMenuItem] = useState<MenuItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchMenuItem() {
            try {
                setLoading(true);
                setError(null);
                const data = await getMenuItem(restaurantId, menuItemId);
                setMenuItem(data);
            } catch (err: any) {
                console.error('Failed to fetch menu item:', err);
                if (err.response?.status === 404) {
                    setError('Menu item not found');
                } else {
                    setError('Failed to load menu item. Please try again later.');
                }
            } finally {
                setLoading(false);
            }
        }

        fetchMenuItem();
    }, [restaurantId, menuItemId]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-xl text-foreground/70">Loading dish...</p>
                </div>
            </div>
        );
    }

    if (error || !menuItem) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">😕</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                        {error || 'Menu item not found'}
                    </h3>
                    <button
                        onClick={() => router.push(`/restaurants/${restaurantId}`)}
                        className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all"
                    >
                        Back to Restaurant
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background">
            {/* Back Button */}
            <div className="absolute top-6 left-6 z-10">
                <button
                    onClick={() => router.push(`/restaurants/${restaurantId}`)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-foreground hover:scale-105"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-medium">Back</span>
                </button>
            </div>

            {/* Split Screen Layout */}
            <div className="grid lg:grid-cols-2 min-h-screen">
                {/* Left: Image Gallery */}
                <div className="relative h-96 lg:h-screen bg-gray-100 dark:bg-gray-900">
                    {menuItem.images && menuItem.images.length > 0 ? (
                        <DishImageGallery images={menuItem.images} />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-950 dark:to-pink-950">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🍽️</div>
                                <p className="text-foreground/60">No image available</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right: Dish Info */}
                <div className="bg-background">
                    <DishInfo dish={menuItem} />
                </div>
            </div>
        </main>
    );
}
