import { useState, useMemo } from 'react'
import Layout from '../components/layout/Layout'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import RestaurantCard from '../components/RestaurantCard'
import LoadingSkeleton from '../components/LoadingSkeleton'
import EmptyState from '../components/EmptyState'
import { SearchFilters } from '../types'
import { mockRestaurants } from '../data/mockData'

export default function RestaurantListPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<SearchFilters>({
    sortBy: 'rating'
  })
  const [isLoading] = useState(false)

  // Filter and sort restaurants
  const filteredRestaurants = useMemo(() => {
    let results = [...mockRestaurants]

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (r) =>
          r.name.toLowerCase().includes(query) ||
          r.description.toLowerCase().includes(query) ||
          r.cuisine.some((c) => c.toLowerCase().includes(query)) ||
          r.location.city.toLowerCase().includes(query)
      )
    }

    // Apply cuisine filter
    if (filters.cuisine && filters.cuisine.length > 0) {
      results = results.filter((r) =>
        r.cuisine.some((c) => filters.cuisine?.includes(c))
      )
    }

    // Apply price range filter
    if (filters.priceRange && filters.priceRange.length > 0) {
      results = results.filter((r) => filters.priceRange?.includes(r.priceRange))
    }

    // Apply rating filter
    if (filters.rating) {
      results = results.filter((r) => r.rating >= filters.rating!)
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'rating':
        results.sort((a, b) => b.rating - a.rating)
        break
      case 'popularity':
        results.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      case 'name':
        results.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return results
  }, [searchQuery, filters])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters)
  }

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <div className="bg-white border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Restaurants
            </h1>
            <SearchBar
              placeholder="Search restaurants, cuisines, or locations..."
              onSearch={handleSearch}
              initialValue={searchQuery}
              size="lg"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20">
                <FilterBar filters={filters} onFilterChange={handleFilterChange} />
              </div>
            </aside>

            {/* Results */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="mb-6">
                <p className="text-gray-600">
                  {isLoading ? (
                    'Loading...'
                  ) : (
                    <>
                      Showing {filteredRestaurants.length}{' '}
                      {filteredRestaurants.length === 1 ? 'restaurant' : 'restaurants'}
                      {searchQuery && ` for "${searchQuery}"`}
                    </>
                  )}
                </p>
              </div>

              {/* Loading State */}
              {isLoading && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <LoadingSkeleton variant="restaurant-card" count={6} />
                </div>
              )}

              {/* Empty State */}
              {!isLoading && filteredRestaurants.length === 0 && (
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
                  title="No restaurants found"
                  description="Try adjusting your search or filters to find what you're looking for."
                />
              )}

              {/* Results Grid */}
              {!isLoading && filteredRestaurants.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
