import { useState, useEffect, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router'
import Layout from '../components/layout/Layout'
import SearchBar from '../components/SearchBar'
import RestaurantCard from '../components/RestaurantCard'
import EmptyState from '../components/EmptyState'
import Badge from '../components/Badge'
import { mockRestaurants, mockMenuItems } from '../data/mockData'

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [filter, setFilter] = useState<'all' | 'restaurants' | 'dishes'>('all')

  useEffect(() => {
    const q = searchParams.get('q')
    if (q) {
      setQuery(q)
    }
  }, [searchParams])

  const searchResults = useMemo(() => {
    if (!query.trim()) {
      return { restaurants: [], dishes: [] }
    }

    const lowerQuery = query.toLowerCase()

    // Search restaurants
    const restaurants = mockRestaurants.filter(
      (r) =>
        r.name.toLowerCase().includes(lowerQuery) ||
        r.description.toLowerCase().includes(lowerQuery) ||
        r.cuisine.some((c) => c.toLowerCase().includes(lowerQuery)) ||
        r.location.city.toLowerCase().includes(lowerQuery) ||
        r.location.address.toLowerCase().includes(lowerQuery)
    )

    // Search dishes
    const dishes = mockMenuItems.filter(
      (d) =>
        d.name.toLowerCase().includes(lowerQuery) ||
        d.description.toLowerCase().includes(lowerQuery) ||
        d.category.toLowerCase().includes(lowerQuery)
    )

    return { restaurants, dishes }
  }, [query])

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery)
    if (newQuery.trim()) {
      setSearchParams({ q: newQuery })
    } else {
      setSearchParams({})
    }
  }

  const filteredResults = useMemo(() => {
    switch (filter) {
      case 'restaurants':
        return { restaurants: searchResults.restaurants, dishes: [] }
      case 'dishes':
        return { restaurants: [], dishes: searchResults.dishes }
      default:
        return searchResults
    }
  }, [searchResults, filter])

  const totalResults = filteredResults.restaurants.length + filteredResults.dishes.length

  // Mock recent searches (would be stored in localStorage in real app)
  const recentSearches = ['Italian Pizza', 'Sushi', 'Mexican Food', 'Thai Curry']

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <div className="bg-white border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Search
            </h1>
            <SearchBar
              placeholder="Search restaurants, dishes, or cuisines..."
              onSearch={handleSearch}
              initialValue={query}
              size="lg"
            />

            {/* Recent Searches */}
            {!query && recentSearches.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Recent Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        {query && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Filter Tabs */}
            <div className="flex items-center gap-4 mb-6">
              <p className="text-gray-600">
                {totalResults} {totalResults === 1 ? 'result' : 'results'} for "{query}"
              </p>

              <div className="flex gap-2 ml-auto">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All ({totalResults})
                </button>
                <button
                  onClick={() => setFilter('restaurants')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === 'restaurants'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Restaurants ({searchResults.restaurants.length})
                </button>
                <button
                  onClick={() => setFilter('dishes')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === 'dishes'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Dishes ({searchResults.dishes.length})
                </button>
              </div>
            </div>

            {/* Empty State */}
            {totalResults === 0 && (
              <EmptyState
                icon={
                  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                }
                title="No results found"
                description={`We couldn't find any results for "${query}". Try a different search term.`}
              />
            )}

            {/* Restaurants Results */}
            {filteredResults.restaurants.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Restaurants ({filteredResults.restaurants.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResults.restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                  ))}
                </div>
              </div>
            )}

            {/* Dishes Results */}
            {filteredResults.dishes.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Dishes ({filteredResults.dishes.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredResults.dishes.map((dish) => {
                    const restaurant = mockRestaurants.find(
                      (r) => r.id === dish.restaurantId
                    )
                    return (
                      <Link
                        key={dish.id}
                        to={`/restaurants/${restaurant?.slug || 'unknown'}`}
                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex gap-4"
                      >
                        {dish.images[0] && (
                          <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                            <img
                              src={dish.images[0]}
                              alt={dish.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                            {dish.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                            {dish.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" size="sm">
                              {restaurant?.name || 'Unknown Restaurant'}
                            </Badge>
                            <span className="font-bold text-primary">
                              ${dish.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  )
}
