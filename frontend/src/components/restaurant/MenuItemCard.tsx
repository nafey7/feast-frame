'use client';

import Image from 'next/image';
import { Trash2, Edit } from 'lucide-react';

interface MenuItemCardProps {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    ingredients: string[];
    onEdit?: () => void;
    onDelete?: () => void;
}

export default function MenuItemCard({
    id,
    name,
    description,
    price,
    images,
    ingredients,
    onEdit,
    onDelete,
}: MenuItemCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                {/* Image */}
                {images.length > 0 && (
                    <div className="relative h-48 md:h-auto md:w-48 flex-shrink-0">
                        <Image
                            src={images[0]}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
                            <p className="text-2xl font-bold text-orange-600">${price.toFixed(2)}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 ml-4">
                            {onEdit && (
                                <button
                                    onClick={onEdit}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                    aria-label="Edit menu item"
                                >
                                    <Edit className="w-5 h-5" />
                                </button>
                            )}
                            {onDelete && (
                                <button
                                    onClick={onDelete}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    aria-label="Delete menu item"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </div>

                    <p className="text-gray-600 mb-4">{description}</p>

                    {/* Ingredients */}
                    {ingredients.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Ingredients:</h4>
                            <div className="flex flex-wrap gap-2">
                                {ingredients.map((ingredient, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                    >
                                        {ingredient}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
