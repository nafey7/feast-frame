"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Utensils } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Utensils className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              FeastFrame
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Testimonials
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {isLandingPage && (
              <Link href="/restaurants" className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
