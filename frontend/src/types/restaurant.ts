export interface Restaurant {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  cuisine: string;
  location: string;
  rating: number;
  reviews: number;
  priceRange: string;
  deliveryTime: string;
  photoCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface FilterOptions {
  cuisines: string[];
  priceRanges: string[];
  ratings: number[];
  features: string[];
}
