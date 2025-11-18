"use client";

import React from "react";
import { Star, MapPin, Clock, ChefHat, Heart, TrendingUp } from "lucide-react";
import { Restaurant } from "@/types/restaurant";

interface RestaurantCardProps {
  restaurant: Restaurant;
  viewMode?: "grid" | "list";
}

export function RestaurantCard({
  restaurant,
  viewMode = "grid",
}: RestaurantCardProps) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  if (viewMode === "list") {
    return (
      <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 animate-fade-in h-60">
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Section */}
          <div className="relative md:w-1/3 h-60 md:h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 z-10" />
            <img
              src={restaurant.imageUrl}
              alt={restaurant.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
              {restaurant.isNew && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  New
                </span>
              )}
              {restaurant.isFeatured && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-600 text-white shadow-lg">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </span>
              )}
            </div>

            {/* Favorite Button */}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite
                    ? "fill-red-500 text-red-500"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              />
            </button>

            {/* Photo Count */}
            <div className="absolute bottom-4 right-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              📸 {restaurant.photoCount} photos
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all">
                  {restaurant.name}
                </h3>
              </div>

              <p className="text-foreground/70 mb-2 line-clamp-1 text-sm">
                {restaurant.description}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-2 mb-2 text-xs">
                <div className="flex items-center text-sm text-foreground/60">
                  <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                  <span className="truncate">{restaurant.location}</span>
                </div>
                <div className="flex items-center text-sm text-foreground/60">
                  <ChefHat className="w-4 h-4 mr-2 text-pink-500" />
                  <span className="truncate">{restaurant.cuisine}</span>
                </div>
                <div className="flex items-center text-sm text-foreground/60">
                  <Clock className="w-4 h-4 mr-2 text-orange-500" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-foreground">
                    {restaurant.rating}
                  </span>
                  <span className="text-foreground/60 ml-1">
                    ({restaurant.reviews})
                  </span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex items-center justify-end mt-2 pt-2 border-t border-gray-200 dark:border-gray-800 gap-2">
              <button className="px-3 py-1 text-xs bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800 animate-fade-in">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 z-10" />
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {restaurant.isNew && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg">
              <TrendingUp className="w-3 h-3 mr-1" />
              New
            </span>
          )}
          {restaurant.isFeatured && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-600 text-white shadow-lg">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full hover:scale-110 transition-transform shadow-lg"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-gray-600 dark:text-gray-400"
            }`}
          />
        </button>

        {/* Photo Count */}
        <div className="absolute bottom-4 right-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium">
          📸 {restaurant.photoCount} photos
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all">
            {restaurant.name}
          </h3>
        </div>

        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
          {restaurant.description}
        </p>

        {/* Info Grid */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-foreground/60">
            <MapPin className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" />
            <span className="truncate">{restaurant.location}</span>
          </div>
          <div className="flex items-center text-sm text-foreground/60">
            <ChefHat className="w-4 h-4 mr-2 text-pink-500 flex-shrink-0" />
            <span>{restaurant.cuisine}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-foreground/60">
              <Clock className="w-4 h-4 mr-2 text-orange-500" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-foreground">
                {restaurant.rating}
              </span>
              <span className="text-foreground/60 ml-1">
                ({restaurant.reviews})
              </span>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex items-center justify-end pt-4 border-t border-gray-200 dark:border-gray-800">
          <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl text-sm font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
}
