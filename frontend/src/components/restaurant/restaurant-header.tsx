"use client";

import React from "react";
import { Restaurant } from "@/types/restaurant";
import { Star, MapPin, ChefHat, Clock } from "lucide-react";

interface RestaurantHeaderProps {
  restaurant: Restaurant;
}

export function RestaurantHeader({ restaurant }: RestaurantHeaderProps) {
  return (
    <section className="relative h-80">
      <div className="absolute inset-0 bg-black">
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white bg-gradient-to-t from-black/80 to-transparent">
        <h1 className="text-5xl font-bold mb-2">{restaurant.name}</h1>
        <p className="text-lg text-white/80 mb-4">{restaurant.description}</p>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center">
            <ChefHat className="w-4 h-4 mr-2 text-orange-400" />
            <span>{restaurant.cuisine}</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{restaurant.rating}</span>
            <span className="text-white/70 ml-1">({restaurant.reviews})</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-orange-400" />
            <span>
              {restaurant.town}, {restaurant.city}
            </span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-orange-400" />
            <span>{restaurant.orderTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
