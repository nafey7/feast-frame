# FeastFrame - Frontend

A modern, responsive food delivery web application built with Next.js 16, React 19, TypeScript, and TailwindCSS.

## Features

- 🎨 Modern UI/UX design with smooth animations
- 🌓 Dark mode support with next-themes
- 📱 Fully responsive design
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

1. **Hero Section** - Eye-catching introduction with CTAs and stats
2. **Features Section** - Key features and benefits
3. **How It Works** - Step-by-step guide
4. **Testimonials** - Customer reviews and feedback
5. **CTA Section** - Final call-to-action with app preview

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
- API integration
- User authentication
- Real-time features with Socket.io
- Database models with MongoDB
- Order management system
- Restaurant management

## License

Private
