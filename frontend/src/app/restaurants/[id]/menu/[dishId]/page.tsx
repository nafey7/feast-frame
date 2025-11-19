"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/layout/header";
import { DishImageGallery } from "@/components/dish/dish-image-gallery";
import { DishInfo } from "@/components/dish/dish-info";
import { getMenuItem } from "@/lib/api/restaurants";
import { MenuItem } from "@/types/restaurant";

export default function DishPage() {
  const params = useParams();
  const { id: restaurantId, dishId } = params;
  const [dish, setDish] = useState<MenuItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch menu item on mount
  useEffect(() => {
    async function fetchMenuItem() {
      try {
        setLoading(true);
        setError(null);
        const data = await getMenuItem(restaurantId as string, dishId as string);
        setDish(data);
      } catch (err: any) {
        console.error("Failed to fetch menu item:", err);
        if (err.response?.status === 404) {
          setError("Dish not found");
        } else {
          setError("Failed to load dish. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchMenuItem();
  }, [restaurantId, dishId]);

  // Loading state
  if (loading) {
    return (
      <main className="h-screen flex flex-col bg-white dark:bg-black">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl text-foreground/70">Loading dish...</p>
          </div>
        </div>
      </main>
    );
  }

  // Error state
  if (error || !dish) {
    return (
      <main className="h-screen flex flex-col bg-white dark:bg-black">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-4xl font-bold mb-4">{error || "Dish not found"}</h1>
            <p className="text-foreground/70 mb-6">
              {error === "Dish not found"
                ? "The dish you're looking for doesn't exist."
                : "Please try again later."}
            </p>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Go Back
            </button>
          </div>
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
