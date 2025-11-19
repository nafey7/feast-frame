'use client';

import Image from 'next/image';
import { MapPin, Star } from 'lucide-react';

interface RestaurantCardProps {
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
    onClick?: () => void;
}

export default function RestaurantCard({
    id,
    name,
    description,
    imageUrl,
    cuisine,
    town,
    city,
    country,
    rating,
    reviews,
    priceRange,
    onClick,
}: RestaurantCardProps) {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    {priceRange}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {name}
                    </h3>
                    <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                        <span className="text-sm font-semibold text-orange-700">{rating.toFixed(1)}</span>
                    </div>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full font-medium">
                        {cuisine}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>{reviews} reviews</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>
                        {town}, {city}, {country}
                    </span>
                </div>
            </div>
        </div>
    );
}
