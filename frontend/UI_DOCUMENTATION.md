# FeastFrame UI Documentation

## Overview

FeastFrame is a modern, responsive web application designed for food discovery and restaurant menu browsing. The UI is built with React, TypeScript, and Tailwind CSS, following professional design principles used by companies like Amazon and Stripe.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **React Router 7** - Navigation
- **React Query** - Data fetching

## Design System

### Color Palette

- **Primary**: `#EF4444` (Red) - CTAs and important elements
- **Secondary**: `#F97316` (Orange) - Accent elements
- **Accent**: `#8B5CF6` (Purple) - Special highlights
- **Neutrals**: Gray scale for text and backgrounds

### Typography

- **Font Family**: Inter, system-ui, sans-serif
- **Headings**: Bold, ranging from text-2xl to text-6xl
- **Body**: Regular, text-base to text-lg
- **Captions**: text-sm to text-xs

### Spacing

Following Tailwind's spacing scale (4px base unit)

## Component Architecture

### Shared Components

#### 1. **Button** (`/components/Button.tsx`)
- Variants: primary, secondary, outline, ghost
- Sizes: sm, md, lg
- Features: loading state, full width, disabled state
- Accessibility: ARIA labels, keyboard navigation

#### 2. **Card** (`/components/Card.tsx`)
- Configurable padding
- Hover effects
- Click handlers
- Shadow variations

#### 3. **Rating** (`/components/Rating.tsx`)
- Star-based rating display
- Partial stars support
- Optional value display
- Size variants

#### 4. **Badge** (`/components/Badge.tsx`)
- Multiple variants: primary, secondary, success, warning, info, outline
- Size options
- Pill-shaped design

#### 5. **SearchBar** (`/components/SearchBar.tsx`)
- Icon support
- Auto-focus capability
- Size variants
- Form submission handling

#### 6. **Modal** (`/components/Modal.tsx`)
- ESC key support
- Click outside to close
- Scroll locking
- Size variations
- Animated entrance

#### 7. **ImageGallery** (`/components/ImageGallery.tsx`)
- Full-screen image viewer
- Arrow key navigation
- Pinch-to-zoom support
- Thumbnail strip
- Share functionality
- Image counter

#### 8. **LoadingSkeleton** (`/components/LoadingSkeleton.tsx`)
- Multiple variants
- Configurable count
- Pulse animation

#### 9. **EmptyState** (`/components/EmptyState.tsx`)
- Custom icon support
- Title and description
- Call-to-action support

#### 10. **Breadcrumb** (`/components/Breadcrumb.tsx`)
- Navigation path display
- Active state styling

### Restaurant Components

#### 1. **RestaurantCard** (`/components/RestaurantCard.tsx`)
- Thumbnail image
- Rating display
- Cuisine badges
- Location information
- Featured badge
- Hover effects

#### 2. **MenuItemCard** (`/components/MenuItemCard.tsx`)
- Dish image
- Price display
- Dietary information icons
- Click to view gallery
- Multiple image indicator

#### 3. **FilterBar** (`/components/FilterBar.tsx`)
- Cuisine filter (multi-select)
- Price range filter
- Sort options
- Real-time filtering

### Layout Components

#### 1. **Header** (`/components/layout/Header.tsx`)
- Logo and branding
- Navigation menu
- Mobile responsive menu
- Search button
- Sticky positioning

#### 2. **Footer** (`/components/layout/Footer.tsx`)
- Company links
- Discover links
- Social media links
- Copyright information
- Newsletter signup

#### 3. **Layout** (`/components/layout/Layout.tsx`)
- Consistent page structure
- Header + Content + Footer
- Optional footer display

## Page Implementation

### 1. Landing/Home Page (`/pages/HomePage.tsx`)

**Sections:**
- **Hero Section**: Full-width gradient background with search bar and CTAs
- **Features**: 4-column grid showcasing app benefits
- **Featured Restaurants**: Carousel of top-rated restaurants
- **CTA Section**: Final call-to-action

**Key Features:**
- Responsive grid layouts
- Search integration
- Feature highlights with icons
- Dynamic content from mock data

### 2. Restaurant List Page (`/pages/RestaurantListPage.tsx`)

**Features:**
- Advanced filtering (cuisine, price, rating)
- Real-time search
- Sort options (rating, distance, popularity, name)
- Responsive grid layout
- Loading skeletons
- Empty state handling
- Sticky filter sidebar

**UX Considerations:**
- Clear result counts
- Filter persistence
- Mobile-optimized filters

### 3. Restaurant Detail Page (`/pages/RestaurantDetailPage.tsx`)

**Sections:**
- **Cover Image**: Full-width hero image
- **Breadcrumb Navigation**: For easy back-navigation
- **Restaurant Info**: Name, rating, description, badges
- **Contact & Hours**: Phone, address, today's hours
- **Menu Categories**: Tabbed interface for different menu sections
- **Menu Items Grid**: Organized by category

**Key Features:**
- Category tabs with active state
- Click any dish to open gallery
- Share button
- Responsive layout
- Contact information sidebar

### 4. Dish Image Gallery (`/components/ImageGallery.tsx`)

**Features:**
- Full-screen overlay
- Image navigation (arrows, keyboard)
- Thumbnail strip at bottom
- Image counter
- Pinch-to-zoom
- Share functionality
- ESC to close
- Dish name overlay

**Interactions:**
- Click image to zoom
- Arrow keys for navigation
- ESC key to close
- Click outside to close

### 5. Search Results Page (`/pages/SearchPage.tsx`)

**Features:**
- Grouped results (Restaurants & Dishes)
- Filter tabs (All, Restaurants, Dishes)
- Recent searches
- Click dish to view restaurant
- Result counts
- Empty state handling

**UX:**
- Clear result grouping
- Quick filters
- Search suggestions
- Link preservation

### 6. About Page (`/pages/AboutPage.tsx`)

**Sections:**
- **Hero**: Brand message
- **Mission Statement**: Company vision and goals
- **How It Works**: 3-step process visualization
- **Features Grid**: 4 key differentiators
- **Contact Section**: Email, location, social
- **CTA**: Final call-to-action

**Design Elements:**
- Gradient backgrounds
- Icon-based steps
- Emoji accents
- Engaging copy

## Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Hamburger menu
- Stacked layouts
- Touch-friendly buttons (min 44px)
- Swipe gestures in gallery
- Simplified filters
- Reduced padding/margins

### Tablet Optimizations
- 2-column grids
- Expanded navigation
- Sidebar filters

### Desktop Optimizations
- 3-4 column grids
- Sticky sidebars
- Hover effects
- Keyboard shortcuts

## Accessibility

### ARIA Labels
- All interactive elements have proper labels
- Form inputs have associated labels
- Buttons describe their action

### Keyboard Navigation
- Tab order follows logical flow
- ESC key closes modals/galleries
- Arrow keys navigate images
- Enter key activates buttons

### Focus Management
- Visible focus indicators
- Focus trapping in modals
- Focus restoration after modal close

### Screen Reader Support
- Semantic HTML
- Alt text for images
- ARIA attributes where needed

## Performance Optimizations

### Image Loading
- Lazy loading with `loading="lazy"`
- Optimized image sizes via Unsplash
- Responsive image srcsets

### Code Splitting
- Route-based code splitting via React Router
- Dynamic imports for heavy components

### Animations
- CSS transitions over JavaScript
- Hardware-accelerated transforms
- Reduced motion support

### Bundle Size
- Tree-shaking enabled
- Minification in production
- Terser for compression

## Mock Data

Located in `/data/mockData.ts`:
- 6 restaurants with complete details
- 6 menu items for La Bella Italia
- Organized by menu categories
- Realistic pricing and descriptions

## Future Enhancements

### Features
- User authentication
- Favorite restaurants
- Order integration
- Reviews and ratings
- Map integration
- Advanced search filters
- Restaurant recommendations

### Technical
- Progressive Web App (PWA)
- Offline support
- Push notifications
- Image optimization service
- Real-time updates
- Analytics integration

## Development Guidelines

### Component Creation
1. Create TypeScript interfaces for props
2. Use functional components with hooks
3. Add prop validation
4. Include accessibility attributes
5. Write responsive styles
6. Add loading/error states

### Styling Conventions
- Use Tailwind utility classes
- Extract repeated patterns to components
- Mobile-first approach
- Use consistent spacing scale
- Follow color palette

### File Organization
```
src/
├── components/          # Shared components
│   ├── layout/         # Layout components
│   └── [Component].tsx
├── pages/              # Page components
├── types/              # TypeScript types
├── data/               # Mock data
├── hooks/              # Custom hooks
├── services/           # API services
└── utils/              # Utility functions
```

## Testing Checklist

- [ ] All routes render correctly
- [ ] Mobile menu works
- [ ] Search functionality
- [ ] Filter functionality
- [ ] Image gallery navigation
- [ ] Responsive layouts (mobile, tablet, desktop)
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Loading states
- [ ] Error states
- [ ] Empty states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Version**: 1.0
**Last Updated**: 2025-11-17
**Author**: FeastFrame Team
