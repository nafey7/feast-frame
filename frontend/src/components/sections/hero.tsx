"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                Now Available
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                See Before
              </span>
              <br />
              <span className="text-foreground">You Order</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-foreground/70 max-w-xl">
              Browse beautiful images of dishes from restaurants near you. No more guessing what a dish looks like - see multiple photos before you visit.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/restaurants" className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105">
                Explore Dishes
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div>
                <div className="text-3xl font-bold text-foreground">200+</div>
                <div className="text-sm text-foreground/60">Restaurants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">5000+</div>
                <div className="text-sm text-foreground/60">Dish Images</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-foreground/60">Cuisines</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration Placeholder */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 p-8">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500 to-pink-500 opacity-10" />

              {/* Floating Cards */}
              <div className="absolute top-10 right-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 animate-slide-down">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full" />
                  <div>
                    <div className="font-semibold text-foreground">Pizza Margherita</div>
                    <div className="text-sm text-foreground/60">8 Photos</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 animate-slide-up delay-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full" />
                  <div>
                    <div className="font-semibold text-foreground">Sushi Platter</div>
                    <div className="text-sm text-foreground/60">12 Photos</div>
                  </div>
                </div>
              </div>

              {/* Center Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-6xl">📸</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
