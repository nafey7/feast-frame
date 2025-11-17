"use client";

import React from "react";
import { ArrowRight, Smartphone } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-5" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-1 shadow-2xl animate-slide-up">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                  Stop Guessing,
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    {" "}Start Seeing
                  </span>
                </h2>
                <p className="text-xl text-foreground/70">
                  Join thousands of food lovers who browse dishes visually before dining out.
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground/80">100% free to browse and use</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground/80">Updated daily with new dishes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground/80">Save your favorite dishes</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105">
                    Start Browsing
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Content - App Preview */}
              <div className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Phone Frame */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl p-1 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                    <div className="bg-white dark:bg-gray-900 rounded-3xl h-full flex items-center justify-center">
                      <Smartphone className="w-32 h-32 text-orange-500" />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 animate-slide-down">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-foreground">Live</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 animate-slide-up delay-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                      5000+
                    </div>
                    <div className="text-xs text-foreground/60">Dish Photos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
