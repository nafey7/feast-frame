import { Link } from 'react-router'
import { Restaurant } from '../types'
import Rating from './Rating'
import Badge from './Badge'
import Card from './Card'

interface RestaurantCardProps {
  restaurant: Restaurant
  className?: string
}

export default function RestaurantCard({ restaurant, className = '' }: RestaurantCardProps) {
  return (
    <Link to={`/restaurants/${restaurant.slug}`}>
      <Card padding="none" hover className={className}>
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={restaurant.thumbnail}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {restaurant.featured && (
            <Badge
              variant="warning"
              size="sm"
              className="absolute top-3 right-3"
            >
              Featured
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
            {restaurant.name}
          </h3>

          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {restaurant.description}
          </p>

          <div className="flex items-center justify-between mb-3">
            <Rating value={restaurant.rating} size="sm" />
            <span className="text-sm text-gray-500">
              {restaurant.reviewCount} reviews
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {restaurant.cuisine.slice(0, 2).map((c) => (
              <Badge key={c} variant="outline" size="sm">
                {c}
              </Badge>
            ))}
            <Badge variant="info" size="sm">
              {restaurant.priceRange}
            </Badge>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {restaurant.location.city}, {restaurant.location.state}
          </div>
        </div>
      </Card>
    </Link>
  )
}
