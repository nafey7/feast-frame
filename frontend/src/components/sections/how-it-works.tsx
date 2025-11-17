"use client";

import React from "react";
import { Search, ShoppingCart, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Restaurants",
    description: "Explore hundreds of restaurants and cuisines in your area.",
    step: "01",
  },
  {
    icon: ShoppingCart,
    title: "Place Your Order",
    description: "Select your favorite dishes and customize as you like.",
    step: "02",
  },
  {
    icon: Truck,
    title: "Track Delivery",
    description: "Follow your order in real-time as it makes its way to you.",
    step: "03",
  },
  {
    icon: CheckCircle,
    title: "Enjoy Your Meal",
    description: "Receive your hot, fresh food and enjoy your dining experience.",
    step: "04",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            How It <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Getting your favorite food delivered is easier than ever. Just follow these simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 -translate-y-1/2 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-orange-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
