"use client";

import React from "react";
import Link from "next/link";
import { MenuItem } from "@/types/restaurant";
import { PlusCircle } from "lucide-react";

interface DishCardProps {
  dish: MenuItem;
  restaurantId: string;
}

export function DishCard({ dish, restaurantId }: DishCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800 animate-fade-in">
      <Link href={`/restaurants/${restaurantId}/menu/${dish.id}`}>
        <div className="relative h-48 overflow-hidden cursor-pointer">
          <img
            src={dish.images[0]}
            alt={dish.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/restaurants/${restaurantId}/menu/${dish.id}`}>
          <h3 className="text-lg font-bold text-foreground mb-1 cursor-pointer">{dish.name}</h3>
        </Link>
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
          {dish.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-orange-500">
            ${dish.price.toFixed(2)}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("Add to cart");
            }}
            className="p-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full hover:scale-110 transition-transform"
          >
            <PlusCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
