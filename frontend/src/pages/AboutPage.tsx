import Layout from '../components/layout/Layout'
import { Link } from 'react-router'
import Button from '../components/Button'

export default function AboutPage() {
  const howItWorksSteps = [
    {
      number: 1,
      title: 'Discover Restaurants',
      description: 'Browse our curated collection of restaurants in your area. Use filters to find exactly what you\'re craving.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: 2,
      title: 'Preview Menus',
      description: 'Explore complete menus with high-quality photos of every dish. See exactly what you\'re ordering before you commit.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: 3,
      title: 'Make Your Choice',
      description: 'Click on any dish to view it in our full-screen gallery. Zoom in, compare options, and make confident decisions.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const features = [
    {
      title: 'Visual First',
      description: 'We believe a picture is worth a thousand words. Every dish has multiple high-quality photos.',
      emoji: '📸'
    },
    {
      title: 'Complete Information',
      description: 'Detailed descriptions, prices, dietary information, and customer ratings all in one place.',
      emoji: '📋'
    },
    {
      title: 'User Friendly',
      description: 'Intuitive interface designed for food lovers. Find what you want in seconds.',
      emoji: '⚡'
    },
    {
      title: 'Always Updated',
      description: 'Restaurant partners keep their menus current so you always see the latest offerings.',
      emoji: '🔄'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About FeastFrame
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            We're reimagining how people discover and explore food
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              FeastFrame was born from a simple frustration: ordering food shouldn't be a guessing game.
              How many times have you ordered a dish based on a description, only to be disappointed when it arrives?
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We believe that seeing your food before you order it should be standard, not a luxury.
              That's why we've partnered with restaurants to create comprehensive visual menus that give
              you complete transparency about what you're ordering.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to make food discovery visual, intuitive, and delightful. We're building
              a platform where every restaurant's culinary artistry is showcased in beautiful detail,
              helping you find your next favorite meal with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with FeastFrame is easy. Here's how to find your next great meal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {step.number < 3 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary z-0" />
                )}

                {/* Step Card */}
                <div className="relative bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                  {/* Number Badge */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 relative z-10">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-primary mb-4 flex justify-center">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600">
              We're not just another restaurant directory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors"
              >
                <div className="text-5xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions or feedback? We'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-primary mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a href="mailto:hello@feastframe.com" className="text-primary hover:underline">
                hello@feastframe.com
              </a>
            </div>

            <div>
              <div className="text-primary mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
              <p className="text-gray-600">San Francisco, CA</p>
            </div>

            <div>
              <div className="text-primary mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Social</h3>
              <p className="text-gray-600">@feastframe</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start exploring restaurants and discover your next favorite meal
          </p>
          <Link to="/restaurants">
            <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-gray-100">
              Browse Restaurants
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
