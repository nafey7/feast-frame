"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    image: "👩",
    rating: 5,
    text: "FeastFrame has completely changed how I order food. The delivery is always on time, and the food quality is exceptional!",
  },
  {
    name: "Michael Chen",
    role: "Tech Professional",
    image: "👨",
    rating: 5,
    text: "The app is incredibly intuitive and the real-time tracking feature is a game-changer. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    role: "Student",
    image: "👩",
    rating: 5,
    text: "As a busy student, FeastFrame is a lifesaver. Great selection of restaurants and amazing customer service.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            What Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust FeastFrame for their daily food needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
