"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { mockRestaurants } from "@/data/mock-restaurants";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RestaurantHeader } from "@/components/restaurant/restaurant-header";
import { DishCard } from "@/components/restaurant/dish-card";
import { Search } from "lucide-react";

export default function RestaurantPage() {
  const params = useParams();
  const id = params.id as string;
  const restaurant = mockRestaurants.find((r) => r.id === id);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenu = useMemo(() => {
    if (!restaurant) return [];
    return restaurant.menu.filter((dish) =>
      dish.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [restaurant, searchQuery]);

  if (!restaurant) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-black">
        <Header />
        <div className="container mx-auto max-w-7xl py-12 text-center">
          <h1 className="text-4xl font-bold">Restaurant not found</h1>
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
