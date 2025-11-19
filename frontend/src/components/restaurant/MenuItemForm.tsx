'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface MenuItemFormProps {
    initialData?: {
        id?: string;
        name: string;
        description: string;
        price: number;
        images: string[];
        ingredients: string[];
    };
    onSubmit: (data: any) => void;
    onCancel: () => void;
    isLoading?: boolean;
}

export default function MenuItemForm({
    initialData,
    onSubmit,
    onCancel,
    isLoading = false,
}: MenuItemFormProps) {
    const [formData, setFormData] = useState({
        name: initialData?.name || '',
        description: initialData?.description || '',
        price: initialData?.price || 0,
        images: initialData?.images || [],
        ingredients: initialData?.ingredients || [],
    });

    const [imageInput, setImageInput] = useState('');
    const [ingredientInput, setIngredientInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const addImage = () => {
        if (imageInput.trim()) {
            setFormData({
                ...formData,
                images: [...formData.images, imageInput.trim()],
            });
            setImageInput('');
        }
    };

    const removeImage = (index: number) => {
        setFormData({
            ...formData,
            images: formData.images.filter((_, i) => i !== index),
        });
    };

    const addIngredient = () => {
        if (ingredientInput.trim()) {
            setFormData({
                ...formData,
                ingredients: [...formData.ingredients, ingredientInput.trim()],
            });
            setIngredientInput('');
        }
    };

    const removeIngredient = (index: number) => {
        setFormData({
            ...formData,
            ingredients: formData.ingredients.filter((_, i) => i !== index),
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Item Name *
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., Margherita Pizza"
                />
            </div>

            {/* Description */}
            <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                    Description *
                </label>
                <textarea
                    id="description"
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Describe your menu item..."
                />
            </div>

            {/* Price */}
            <div>
                <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">
                    Price ($) *
                </label>
                <input
                    type="number"
                    id="price"
                    required
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="0.00"
                />
            </div>

            {/* Images */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Images (URLs)
                </label>
                <div className="flex gap-2 mb-2">
                    <input
                        type="url"
                        value={imageInput}
                        onChange={(e) => setImageInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addImage())}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="https://example.com/image.jpg"
                    />
                    <button
                        type="button"
                        onClick={addImage}
                        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Add
                    </button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {formData.images.map((image, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg"
                        >
                            <span className="text-sm text-gray-700 truncate max-w-xs">{image}</span>
                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="text-red-500 hover:text-red-700"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ingredients */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ingredients
                </label>
                <div className="flex gap-2 mb-2">
                    <input
                        type="text"
                        value={ingredientInput}
                        onChange={(e) => setIngredientInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addIngredient())}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="e.g., Tomatoes"
                    />
                    <button
                        type="button"
                        onClick={addIngredient}
                        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Add
                    </button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {formData.ingredients.map((ingredient, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-3 py-2 bg-orange-50 text-orange-700 rounded-full"
                        >
                            <span className="text-sm font-medium">{ingredient}</span>
                            <button
                                type="button"
                                onClick={() => removeIngredient(index)}
                                className="text-orange-600 hover:text-orange-800"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                    {isLoading ? 'Saving...' : initialData?.id ? 'Update Item' : 'Add Item'}
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    disabled={isLoading}
                    className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}
