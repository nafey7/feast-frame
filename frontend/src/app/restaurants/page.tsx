"use client";

import React, { useState, useMemo } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RestaurantCard } from "@/components/restaurant/restaurant-card";
import { SearchBar } from "@/components/restaurant/search-bar";
import { FilterSidebar } from "@/components/restaurant/filter-sidebar";
import { mockRestaurants, filterOptions } from "@/data/mock-restaurants";
import { Grid3x3, List, ArrowUpDown } from "lucide-react";

type ViewMode = "grid" | "list";
type SortOption = "rating" | "reviews" | "name" | "newest";

export default function RestaurantsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Your Location");
  const [sortBy, setSortBy] = useState<SortOption>("rating");
  const [filters, setFilters] = useState({
    cuisines: [] as string[],
    priceRanges: [] as string[],
    minRating: null as number | null,
    features: [] as string[],
  });

  // Filter and sort restaurants
  const filteredRestaurants = useMemo(() => {
    let results = mockRestaurants;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(query) ||
          restaurant.cuisine.toLowerCase().includes(query) ||
          restaurant.description.toLowerCase().includes(query) ||
          restaurant.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Cuisine filter
    if (filters.cuisines.length > 0) {
      results = results.filter((restaurant) =>
        filters.cuisines.includes(restaurant.cuisine)
      );
    }

    // Price range filter
    if (filters.priceRanges.length > 0) {
      results = results.filter((restaurant) =>
        filters.priceRanges.includes(restaurant.priceRange)
      );
    }

    // Rating filter
    if (filters.minRating !== null) {
      results = results.filter(
        (restaurant) => restaurant.rating >= filters.minRating!
      );
    }

    // Features filter
    if (filters.features.length > 0) {
      results = results.filter((restaurant) => {
        return filters.features.every((feature) => {
          if (feature === "Featured") return restaurant.isFeatured;
          if (feature === "New") return restaurant.isNew;
          // Add more feature checks as needed
          return true;
        });
      });
    }

    // Sort results
    switch (sortBy) {
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        results.sort((a, b) => b.reviews - a.reviews);
        break;
      case "name":
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        results.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return results;
  }, [searchQuery, filters, sortBy]);

  const activeFilterCount =
    filters.cuisines.length +
    filters.priceRanges.length +
    (filters.minRating !== null ? 1 : 0) +
    filters.features.length;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Discover
              </span>
              <span className="text-foreground"> Amazing Restaurants</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Browse through {mockRestaurants.length} restaurants and thousands of dish photos
            </p>
          </div>

          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onFilterToggle={() => setIsFilterOpen(!isFilterOpen)}
            location={location}
            onLocationChange={setLocation}
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <FilterSidebar
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                filters={filters}
                onFilterChange={setFilters}
                filterOptions={filterOptions}
              />
            </aside>

            {/* Restaurant Grid/List */}
            <div className="flex-1">
              {/* Controls Bar */}
              <div className="flex items-center justify-between mb-6 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-800 animate-fade-in">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-foreground/70">
                    <span className="font-semibold text-foreground">
                      {filteredRestaurants.length}
                    </span>{" "}
                    restaurants found
                  </span>
                  {activeFilterCount > 0 && (
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-xs font-semibold">
                      {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""} active
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortOption)}
                      className="appearance-none pl-3 pr-10 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
                    >
                      <option value="rating">Highest Rated</option>
                      <option value="reviews">Most Reviewed</option>
                      <option value="name">Name (A-Z)</option>
                      <option value="newest">Newest First</option>
                    </select>
                    <ArrowUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/60 pointer-events-none" />
                  </div>

                  {/* View Mode Toggle */}
                  <div className="hidden sm:flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded transition-all ${
                        viewMode === "grid"
                          ? "bg-white dark:bg-gray-700 shadow-md"
                          : "hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                      title="Grid View"
                    >
                      <Grid3x3 className="w-5 h-5 text-foreground" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded transition-all ${
                        viewMode === "list"
                          ? "bg-white dark:bg-gray-700 shadow-md"
                          : "hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                      title="List View"
                    >
                      <List className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Restaurant Cards */}
              {filteredRestaurants.length > 0 ? (
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                      : "flex flex-col gap-6"
                  }
                >
                  {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                      key={restaurant.id}
                      restaurant={restaurant}
                      viewMode={viewMode}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 animate-fade-in">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    No restaurants found
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setFilters({
                        cuisines: [],
                        priceRanges: [],
                        minRating: null,
                        features: [],
                      });
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
