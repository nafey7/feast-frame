"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import {
  Search,
  MapPin,
  SlidersHorizontal,
  Star,
  Award,
  X,
} from "lucide-react";
import countries from "world-countries";

interface FilterOptions {
  cuisines: string[];
  ratings?: number[];
}

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  location: string;
  onLocationChange: (location: string) => void;
  filters: {
    cuisines: string[];
    minRating: number | null;
  };
  onFilterChange: (filters: any) => void;
  filterOptions: FilterOptions;
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  location,
  onLocationChange,
  filters,
  onFilterChange,
  filterOptions,
}: SearchBarProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    right: 0,
  });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const updateDropdownPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8, // 8px below button
        right: window.innerWidth - rect.right,
      });
    }
  };

  useEffect(() => {
    if (isFiltersOpen) {
      updateDropdownPosition();

      // Update position on scroll
      window.addEventListener("scroll", updateDropdownPosition, true);
      // Update position on resize
      window.addEventListener("resize", updateDropdownPosition);

      return () => {
        window.removeEventListener("scroll", updateDropdownPosition, true);
        window.removeEventListener("resize", updateDropdownPosition);
      };
    }
  }, [isFiltersOpen]);
  // Get sorted countries list
  const countryList = useMemo(() => {
    return countries
      .map((country) => ({
        name: country.name.common,
        cca2: country.cca2,
        flag: country.flag,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
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

        {/* Location Select */}
        <div className="lg:w-64 relative">
          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500 z-10 pointer-events-none" />
          <select
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-foreground transition-all appearance-none cursor-pointer"
          >
            {countryList.map((country) => (
              <option key={country.cca2} value={country.name}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Filters Button */}
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span className="hidden sm:inline">Filters</span>
          </button>

          {/* Filters Dropdown Menu */}
          {isFiltersOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsFiltersOpen(false)}
              />
              {/* Dropdown Content */}
              <div
                style={{
                  position: "fixed",
                  top: `${dropdownPosition.top}px`,
                  right: `${dropdownPosition.right}px`,
                }}
                className="w-96 max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 z-50 p-6 animate-slide-down"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Filters</h3>
                  <button
                    onClick={() => setIsFiltersOpen(false)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-yellow-500" />
                    Minimum Rating
                  </h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.5"
                      value={filters.minRating ?? 0}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        onFilterChange({
                          ...filters,
                          minRating: value === 0 ? null : value,
                        });
                      }}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                    <div className="flex items-center justify-between text-xs text-foreground/70">
                      <span>
                        {filters.minRating
                          ? `${filters.minRating}+`
                          : "All ratings"}
                      </span>
                      {filters.minRating && (
                        <button
                          onClick={() =>
                            onFilterChange({ ...filters, minRating: null })
                          }
                          className="text-orange-500 hover:text-orange-600 font-medium"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Cuisine Filter */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-purple-500" />
                    Cuisine Type
                  </h4>
                  <div className="grid grid-cols-4 gap-x-4 gap-y-3">
                    {filterOptions.cuisines.map((cuisine) => (
                      <label
                        key={cuisine}
                        className="flex items-center space-x-2 cursor-pointer group text-sm"
                      >
                        <input
                          type="checkbox"
                          checked={filters.cuisines.includes(cuisine)}
                          onChange={() => {
                            const newCuisines = filters.cuisines.includes(
                              cuisine
                            )
                              ? filters.cuisines.filter((c) => c !== cuisine)
                              : [...filters.cuisines, cuisine];
                            onFilterChange({
                              ...filters,
                              cuisines: newCuisines,
                            });
                          }}
                          className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                        />
                        <span className="text-foreground group-hover:text-orange-500 transition-colors text-xs">
                          {cuisine}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
