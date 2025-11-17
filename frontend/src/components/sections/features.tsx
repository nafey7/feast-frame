"use client";

import React from "react";
import { Clock, Shield, Star, Smartphone, CreditCard, MapPin } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Get your food delivered hot and fresh within 30 minutes or it's free.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your data is encrypted and protected with industry-leading security.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Star,
    title: "Top Rated",
    description: "Only partner with restaurants that maintain a 4+ star rating.",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Smartphone,
    title: "Easy Ordering",
    description: "Order with just a few taps through our intuitive mobile-first interface.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: CreditCard,
    title: "Multiple Payments",
    description: "Support for all major payment methods including digital wallets.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Track your order in real-time from restaurant to your doorstep.",
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
            We combine cutting-edge technology with exceptional service to deliver the best food ordering experience.
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
