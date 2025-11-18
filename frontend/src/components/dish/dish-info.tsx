"use client";

import React from "react";
import { MenuItem } from "@/types/restaurant";

interface DishInfoProps {
  dish: MenuItem;
}

// Modular component: Dish Header
function DishHeader({ name }: { name: string }) {
  return (
    <div className="mb-6">
      <h1 className="text-5xl font-bold tracking-tight mb-2 leading-normal bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent pb-1">
        {name}
      </h1>
      <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" />
    </div>
  );
}

// Modular component: Dish Description
function DishDescription({ description }: { description: string }) {
  return (
    <div className="mb-8">
      <p className="text-lg leading-relaxed text-foreground/75 font-light">
        {description}
      </p>
    </div>
  );
}

// Modular component: Ingredients Section
function IngredientsSection({ ingredients }: { ingredients: string[] }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-xl font-semibold tracking-wide text-foreground">
          Ingredients
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        <span className="text-sm text-foreground/50 font-medium">
          {ingredients.length} items
        </span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {ingredients.map((ingredient, index) => (
          <span
            key={index}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20 text-orange-700 dark:text-orange-300 border border-orange-200/50 dark:border-orange-800/50 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
          >
            {ingredient}
          </span>
        ))}
      </div>
    </div>
  );
}

// Modular component: Price Display
function PriceDisplay({ price }: { price: number }) {
  return (
    <div className="pt-8 border-t border-border/50">
      <div className="flex items-baseline gap-3">
        <span className="text-sm font-medium text-foreground/50 uppercase tracking-wider">
          Price
        </span>
        <div className="flex-1" />
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-light text-foreground/60">$</span>
          <span className="text-5xl font-bold bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent">
            {price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-foreground/40">
        <span>•</span>
        <span>All prices include applicable taxes</span>
      </div>
    </div>
  );
}

// Main component with modular structure
export function DishInfo({ dish }: DishInfoProps) {
  return (
    <div className="h-full flex flex-col justify-center p-12 lg:p-16 xl:p-20 overflow-y-auto">
      <div className="max-w-2xl mx-auto w-full">
        <DishHeader name={dish.name} />
        <DishDescription description={dish.description} />
        <IngredientsSection ingredients={dish.ingredients} />
        <PriceDisplay price={dish.price} />
      </div>
    </div>
  );
}
