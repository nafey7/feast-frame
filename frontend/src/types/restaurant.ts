export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  ingredients: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  cuisine: string;
  town: string;
  city: string;
  country: string;
  rating: number;
  reviews: number;
  priceRange: string;
  orderTime: string;
  photoCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  menu: MenuItem[];
}

export interface FilterOptions {
  cuisines: string[];
  priceRanges: string[];
  ratings: number[];
  features: string[];
}
