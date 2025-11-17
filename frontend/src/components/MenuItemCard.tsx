import { MenuItem } from '../types'
import Badge from './Badge'

interface MenuItemCardProps {
  item: MenuItem
  onImageClick: (images: string[], startIndex: number) => void
  className?: string
}

export default function MenuItemCard({ item, onImageClick, className = '' }: MenuItemCardProps) {
  const hasDietaryInfo = item.vegetarian || item.vegan || item.glutenFree || item.spicy

  return (
    <div
      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer ${className}`}
      onClick={() => onImageClick(item.images, 0)}
    >
      <div className="flex gap-4">
        {/* Image */}
        {item.images[0] && (
          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {item.images.length > 1 && (
              <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full">
                +{item.images.length - 1}
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-semibold text-gray-900 line-clamp-1">
              {item.name}
              {item.popular && (
                <Badge variant="warning" size="sm" className="ml-2">
                  Popular
                </Badge>
              )}
            </h4>
            <span className="font-bold text-primary flex-shrink-0">
              ${item.price.toFixed(2)}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {item.description}
          </p>

          {hasDietaryInfo && (
            <div className="flex flex-wrap gap-1 text-xs">
              {item.vegetarian && (
                <span className="text-green-600" title="Vegetarian">🥬</span>
              )}
              {item.vegan && (
                <span className="text-green-700" title="Vegan">🌱</span>
              )}
              {item.glutenFree && (
                <span className="text-blue-600" title="Gluten Free">GF</span>
              )}
              {item.spicy && (
                <span className="text-red-600" title="Spicy">🌶️</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
