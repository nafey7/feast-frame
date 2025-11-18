"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DishImageGalleryProps {
  images: string[];
}

export function DishImageGallery({ images }: DishImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-5">
        <button onClick={goToPrevious} className="text-white bg-black bg-opacity-50 rounded-full p-2">
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-5">
        <button onClick={goToNext} className="text-white bg-black bg-opacity-50 rounded-full p-2">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
