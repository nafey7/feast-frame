import { useState } from 'react'
import { useParams } from 'react-router'
import Layout from '../components/layout/Layout'
import Breadcrumb from '../components/Breadcrumb'
import Rating from '../components/Rating'
import Badge from '../components/Badge'
import Button from '../components/Button'
import MenuItemCard from '../components/MenuItemCard'
import ImageGallery from '../components/ImageGallery'
import { mockRestaurants, mockMenuCategories } from '../data/mockData'

export default function RestaurantDetailPage() {
  const { slug } = useParams()
  const [activeCategory, setActiveCategory] = useState('pizza')
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [galleryStartIndex, setGalleryStartIndex] = useState(0)

  // Find restaurant (in real app, this would be an API call)
  const restaurant = mockRestaurants.find((r) => r.slug === slug)

  if (!restaurant) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Restaurant not found</h1>
          <p className="text-gray-600">The restaurant you're looking for doesn't exist.</p>
        </div>
      </Layout>
    )
  }

  const openGallery = (images: string[], startIndex: number = 0) => {
    setGalleryImages(images)
    setGalleryStartIndex(startIndex)
    setGalleryOpen(true)
  }

  const getTodayHours = () => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
    const todayHours = restaurant.hours.find((h) => h.day === today)
    if (!todayHours) return 'Closed'
    if (todayHours.closed) return 'Closed'
    return `${todayHours.open} - ${todayHours.close}`
  }

  return (
    <Layout>
      {/* Cover Image */}
      <div className="relative h-64 md:h-96 bg-gray-900">
        <img
          src={restaurant.coverImage}
          alt={restaurant.name}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="py-4">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Restaurants', href: '/restaurants' },
              { label: restaurant.name }
            ]}
          />
        </div>

        {/* Restaurant Header */}
        <div className="bg-white rounded-lg shadow-md -mt-16 relative z-10 p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {restaurant.name}
                  </h1>
                  <div className="flex items-center gap-3 flex-wrap mb-3">
                    {restaurant.cuisine.map((c) => (
                      <Badge key={c} variant="outline">
                        {c}
                      </Badge>
                    ))}
                    <Badge variant="info">{restaurant.priceRange}</Badge>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </Button>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {restaurant.description}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <Rating value={restaurant.rating} size="lg" />
                <span className="text-gray-600">
                  ({restaurant.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Right Column - Contact & Hours */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Hours
                  </h3>
                  <p className="text-gray-600">{getTodayHours()}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Phone
                  </h3>
                  <p className="text-gray-600">{restaurant.phone}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Address
                  </h3>
                  <p className="text-gray-600">
                    {restaurant.location.address}
                    <br />
                    {restaurant.location.city}, {restaurant.location.state}{' '}
                    {restaurant.location.zipCode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Menu</h2>

          {/* Category Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {mockMenuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.slug)}
                className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.slug
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          {mockMenuCategories.map((category) => (
            <div
              key={category.id}
              className={activeCategory === category.slug ? 'block' : 'hidden'}
            >
              {category.description && (
                <p className="text-gray-600 mb-6">{category.description}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onImageClick={openGallery}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <ImageGallery
        images={galleryImages}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        startIndex={galleryStartIndex}
        restaurantName={restaurant.name}
      />
    </Layout>
  )
}
