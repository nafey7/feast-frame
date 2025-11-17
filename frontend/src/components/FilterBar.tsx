import { SearchFilters } from '../types'

interface FilterBarProps {
  filters: SearchFilters
  onFilterChange: (filters: SearchFilters) => void
  className?: string
}

const cuisineOptions = [
  'Italian', 'Chinese', 'Japanese', 'Mexican', 'Indian',
  'Thai', 'French', 'Mediterranean', 'American', 'Korean'
]

const priceOptions = ['$', '$$', '$$$', '$$$$']

const sortOptions = [
  { value: 'rating', label: 'Rating' },
  { value: 'distance', label: 'Distance' },
  { value: 'popularity', label: 'Popularity' },
  { value: 'name', label: 'Name' }
]

export default function FilterBar({ filters, onFilterChange, className = '' }: FilterBarProps) {
  const handleCuisineToggle = (cuisine: string) => {
    const current = filters.cuisine || []
    const updated = current.includes(cuisine)
      ? current.filter((c) => c !== cuisine)
      : [...current, cuisine]
    onFilterChange({ ...filters, cuisine: updated })
  }

  const handlePriceToggle = (price: string) => {
    const current = filters.priceRange || []
    const updated = current.includes(price)
      ? current.filter((p) => p !== price)
      : [...current, price]
    onFilterChange({ ...filters, priceRange: updated })
  }

  const handleSortChange = (sortBy: 'rating' | 'distance' | 'popularity' | 'name') => {
    onFilterChange({ ...filters, sortBy })
  }

  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 ${className}`}>
      {/* Cuisine Filter */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Cuisine Type
        </label>
        <div className="flex flex-wrap gap-2">
          {cuisineOptions.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => handleCuisineToggle(cuisine)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filters.cuisine?.includes(cuisine)
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Price Range
        </label>
        <div className="flex gap-2">
          {priceOptions.map((price) => (
            <button
              key={price}
              onClick={() => handlePriceToggle(price)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filters.priceRange?.includes(price)
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {price}
            </button>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Sort By
        </label>
        <select
          value={filters.sortBy || 'rating'}
          onChange={(e) => handleSortChange(e.target.value as any)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
