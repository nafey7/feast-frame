"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OwnerCTA() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/20 mb-4">
                        <ChefHat className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Do you own a restaurant?
                    </h2>

                    <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                        Join FeastFrame to showcase your dishes visually. Attract more customers by letting them see exactly what they're ordering.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/signup">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                                List Your Restaurant
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-xl">
                                Owner Login
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
