"use client";

import React from "react";
import { X, Star, DollarSign, Award, Sparkles } from "lucide-react";
import { FilterOptions } from "@/types/restaurant";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    cuisines: string[];
    priceRanges: string[];
    minRating: number | null;
    features: string[];
  };
  onFilterChange: (filters: any) => void;
  filterOptions: FilterOptions;
}

export function FilterSidebar({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  filterOptions,
}: FilterSidebarProps) {
  const toggleCuisine = (cuisine: string) => {
    const newCuisines = filters.cuisines.includes(cuisine)
      ? filters.cuisines.filter((c) => c !== cuisine)
      : [...filters.cuisines, cuisine];
    onFilterChange({ ...filters, cuisines: newCuisines });
  };

  const togglePriceRange = (price: string) => {
    const newPriceRanges = filters.priceRanges.includes(price)
      ? filters.priceRanges.filter((p) => p !== price)
      : [...filters.priceRanges, price];
    onFilterChange({ ...filters, priceRanges: newPriceRanges });
  };

  const toggleFeature = (feature: string) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter((f) => f !== feature)
      : [...filters.features, feature];
    onFilterChange({ ...filters, features: newFeatures });
  };

  const setMinRating = (rating: number | null) => {
    onFilterChange({ ...filters, minRating: rating });
  };

  const clearAllFilters = () => {
    onFilterChange({
      cuisines: [],
      priceRanges: [],
      minRating: null,
      features: [],
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed lg:sticky top-0 left-0 h-screen lg:h-auto w-80 lg:w-full bg-white dark:bg-gray-900 z-50 overflow-y-auto border-r lg:border-r-0 lg:border border-gray-200 dark:border-gray-800 rounded-none lg:rounded-2xl shadow-2xl lg:shadow-lg animate-slide-up`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <SlidersHorizontal className="w-6 h-6 text-orange-500" />
              Filters
            </h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Clear All */}
          <button
            onClick={clearAllFilters}
            className="w-full mb-6 px-4 py-2 text-sm font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 bg-orange-50 dark:bg-orange-900/20 rounded-lg transition-colors"
          >
            Clear All Filters
          </button>

          {/* Rating Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Minimum Rating
            </h3>
            <div className="space-y-2">
              {filterOptions.ratings.map((rating) => (
                <button
                  key={rating}
                  onClick={() => setMinRating(filters.minRating === rating ? null : rating)}
                  className={`w-full px-4 py-2 rounded-lg text-left transition-all ${
                    filters.minRating === rating
                      ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg"
                      : "bg-gray-50 dark:bg-gray-800 text-foreground hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Star className={`w-4 h-4 ${filters.minRating === rating ? "fill-white" : "fill-yellow-400 text-yellow-400"}`} />
                    <span className="font-medium">{rating}+</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              Price Range
            </h3>
            <div className="space-y-2">
              {filterOptions.priceRanges.map((price) => (
                <label
                  key={price}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.priceRanges.includes(price)}
                    onChange={() => togglePriceRange(price)}
                    className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                  />
                  <span className="text-foreground group-hover:text-orange-500 transition-colors font-medium">
                    {price}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Cuisine Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-500" />
              Cuisine Type
            </h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {filterOptions.cuisines.map((cuisine) => (
                <label
                  key={cuisine}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.cuisines.includes(cuisine)}
                    onChange={() => toggleCuisine(cuisine)}
                    className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                  />
                  <span className="text-foreground group-hover:text-orange-500 transition-colors">
                    {cuisine}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Features Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-500" />
              Features
            </h3>
            <div className="space-y-2">
              {filterOptions.features.map((feature) => (
                <label
                  key={feature}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.features.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                    className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                  />
                  <span className="text-foreground group-hover:text-orange-500 transition-colors">
                    {feature}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SlidersHorizontal({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="2" y1="14" x2="6" y2="14" />
      <line x1="10" y1="8" x2="14" y2="8" />
      <line x1="18" y1="16" x2="22" y2="16" />
    </svg>
  );
}
