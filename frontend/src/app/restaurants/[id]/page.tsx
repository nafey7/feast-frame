"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RestaurantHeader } from "@/components/restaurant/restaurant-header";
import { DishCard } from "@/components/restaurant/dish-card";
import { Search } from "lucide-react";
import { getRestaurantById } from "@/lib/api/restaurants";
import { Restaurant } from "@/types/restaurant";

export default function RestaurantPage() {
  const params = useParams();
  const id = params.id as string;
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch restaurant on mount
  useEffect(() => {
    async function fetchRestaurant() {
      try {
        setLoading(true);
        setError(null);
        const data = await getRestaurantById(id);
        setRestaurant(data);
      } catch (err: any) {
        console.error("Failed to fetch restaurant:", err);
        if (err.response?.status === 404) {
          setError("Restaurant not found");
        } else {
          setError("Failed to load restaurant. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchRestaurant();
  }, [id]);

  const filteredMenu = useMemo(() => {
    if (!restaurant) return [];
    return restaurant.menu.filter((dish) =>
      dish.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [restaurant, searchQuery]);

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-black">
        <Header />
        <div className="container mx-auto max-w-7xl py-12 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl text-foreground/70">Loading restaurant...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Error state
  if (error || !restaurant) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-black">
        <Header />
        <div className="container mx-auto max-w-7xl py-12 text-center min-h-[60vh] flex items-center justify-center">
          <div>
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-4xl font-bold mb-4">{error || "Restaurant not found"}</h1>
            <p className="text-foreground/70 mb-6">
              {error === "Restaurant not found"
                ? "The restaurant you're looking for doesn't exist."
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
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">
      <Header />
      <RestaurantHeader restaurant={restaurant} />
      <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Menu</h2>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search dishes..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-foreground placeholder-gray-400 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((dish) => (
              <DishCard key={dish.id} dish={dish} restaurantId={id} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-xl text-foreground/70">
                No dishes found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
