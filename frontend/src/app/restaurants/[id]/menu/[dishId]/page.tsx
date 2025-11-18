"use client";

import React from "react";
import { useParams } from "next/navigation";
import { mockRestaurants } from "@/data/mock-restaurants";
import { Header } from "@/components/layout/header";
import { DishImageGallery } from "@/components/dish/dish-image-gallery";
import { DishInfo } from "@/components/dish/dish-info";

export default function DishPage() {
  const params = useParams();
  const { id: restaurantId, dishId } = params;

  const restaurant = mockRestaurants.find((r) => r.id === restaurantId);
  const dish = restaurant?.menu.find((d) => d.id === dishId);

  if (!dish) {
    return (
      <main className="h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Dish not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen flex flex-col bg-white dark:bg-black">
      <Header />
      <div className="flex-1 flex">
        <div className="w-1/2 h-full">
          <DishImageGallery images={dish.images} />
        </div>
        <div className="w-1/2 h-full">
          <DishInfo dish={dish} />
        </div>
      </div>
    </main>
  );
}
