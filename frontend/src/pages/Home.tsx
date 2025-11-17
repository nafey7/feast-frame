export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-primary">Feast Frame</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your ultimate food discovery and sharing community. Discover recipes,
            share your culinary creations, and connect with food enthusiasts.
          </p>
          <button className="bg-primary hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
            Get Started
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold mb-2">Discover Recipes</h3>
            <p className="text-gray-600">
              Explore thousands of recipes from chefs and food lovers around the world.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2">Share & Connect</h3>
            <p className="text-gray-600">
              Share your culinary creations and connect with like-minded food enthusiasts.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">Rate & Review</h3>
            <p className="text-gray-600">
              Rate recipes and share your feedback to help others discover great food.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
