"use client";

import React from "react";
import { Search, MapPin, SlidersHorizontal, ChevronDown } from "lucide-react";
import countries from "world-countries";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFilterToggle: () => void;
  location: string;
  onLocationChange: (location: string) => void;
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  onFilterToggle,
  location,
  onLocationChange,
}: SearchBarProps) {
  // Sort countries alphabetically by common name
  const sortedCountries = React.useMemo(() => {
    return [...countries].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 border border-gray-100 dark:border-gray-800 animate-slide-down">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search restaurants, cuisines, or dishes..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-foreground placeholder-gray-400 transition-all"
          />
        </div>

        {/* Country Select */}
        <div className="lg:w-64 relative">
          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500 pointer-events-none z-10" />
          <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
          <select
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full pl-12 pr-10 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-foreground appearance-none cursor-pointer transition-all"
          >
            {sortedCountries.map((country) => (
              <option key={country.cca3} value={country.name.common}>
                {country.flag} {country.name.common}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Button */}
        <button
          onClick={onFilterToggle}
          className="lg:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>
    </div>
  );
}
