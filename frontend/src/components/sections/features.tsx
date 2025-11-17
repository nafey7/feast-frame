"use client";

import React from "react";
import { Image, Search, Eye, Smartphone, Bookmark, MapPin } from "lucide-react";

const features = [
  {
    icon: Image,
    title: "Multiple Photos Per Dish",
    description: "View multiple angles and presentations of each dish to make the perfect choice.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Search,
    title: "Easy Search & Filter",
    description: "Find dishes by name, cuisine type, or restaurant with our powerful search.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Eye,
    title: "Visual Discovery",
    description: "Browse through stunning food photography before deciding what to eat.",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Browse dishes seamlessly on any device with our responsive design.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Bookmark,
    title: "Save Favorites",
    description: "Bookmark your favorite dishes and create collections for future visits.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    title: "Location Based",
    description: "Discover dishes from restaurants near you or explore different areas.",
    color: "from-pink-500 to-pink-600",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Why Choose <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">FeastFrame?</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Never wonder what a dish looks like again. Browse, explore, and discover with confidence before you dine.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
