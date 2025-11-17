# FeastFrame - Frontend

A modern, responsive web application for browsing restaurant dishes with images, built with Next.js 16, React 19, TypeScript, and TailwindCSS.

## Business Context

**Problem Statement:**
When people visit restaurants, they often want to see what a dish looks like before ordering. Currently, they have to search for the dish name on Google Images or Instagram, which is inconvenient and time-consuming.

**Solution:**
FeastFrame solves this problem by providing a centralized platform where users can:
- Browse restaurants and their complete dish menus
- View multiple high-quality images for each dish from different angles
- Make informed dining decisions before visiting a restaurant

**Note:** This is NOT a food delivery or restaurant reservation app. It's a visual discovery platform for restaurant dishes.

## Features

- 📸 Browse dishes with multiple high-quality images
- 🔍 Search and filter by restaurant, cuisine, or dish name
- 👁️ Visual discovery of food before dining
- 🔖 Save favorite dishes for future reference
- 🌓 Dark mode support with next-themes
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Built with Next.js 16 (App Router)
- 🎯 TypeScript for type safety
- 🎨 TailwindCSS for styling
- 🔥 Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Run the development server:
```bash
npm run dev:next
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Scripts

- `npm run dev` - Run both Next.js and Socket.io server
- `npm run dev:next` - Run only Next.js development server
- `npm run dev:socket` - Run only Socket.io server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with theme provider
│   │   ├── page.tsx        # Landing page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── layout/
│       │   ├── header.tsx  # Navigation header
│       │   └── footer.tsx  # Site footer
│       ├── sections/
│       │   ├── hero.tsx    # Hero section
│       │   ├── features.tsx    # Features section
│       │   ├── how-it-works.tsx    # How it works section
│       │   ├── testimonials.tsx    # Testimonials section
│       │   └── cta.tsx     # Call to action section
│       ├── providers/
│       │   └── theme-provider.tsx  # Theme provider
│       └── ui/
│           └── theme-toggle.tsx    # Theme toggle button
├── public/             # Static assets
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── next.config.ts      # Next.js configuration
```

## Landing Page Sections

1. **Hero Section** - Introduction highlighting visual dish discovery with stats (200+ restaurants, 5000+ dish images, 50+ cuisines)
2. **Features Section** - Key features including multiple photos per dish, easy search, visual discovery, mobile optimization, bookmarking, and location-based browsing
3. **How It Works** - 4-step process: Find Restaurants → Browse Dishes → View Multiple Photos → Visit & Order
4. **Testimonials** - User testimonials about the dish browsing experience
5. **CTA Section** - Final call-to-action encouraging users to start browsing dishes

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **next-themes** - Dark mode support
- **lucide-react** - Modern icon library
- **Socket.io** - Real-time communication (ready for integration)
- **MongoDB & Mongoose** - Database (ready for integration)
- **JWT & bcryptjs** - Authentication (ready for integration)

## Design Approach

The application follows a modular component architecture inspired by best practices from companies like Amazon and Stripe:

- **Reusable Components** - Each section is self-contained and reusable
- **Consistent Styling** - Unified design system with gradients and animations
- **Responsive Design** - Mobile-first approach
- **Accessibility** - ARIA labels and semantic HTML
- **Performance** - Optimized animations and lazy loading

## Future Development

This boilerplate is ready for:
- API integration for restaurants and dishes
- User authentication and profiles
- Dish image upload and management
- Restaurant management dashboard
- User favorites and collections
- Advanced search and filtering
- Location-based restaurant discovery
- Social features (reviews, ratings, comments)
- Real-time updates with Socket.io
- Database models with MongoDB

## License

Private
