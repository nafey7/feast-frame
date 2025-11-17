# Frontend Setup Guide

This guide documents the initial setup of the Feast Frame frontend with React, Vite, and modern tooling.

## Project Structure

```
frontend/
├── src/
│   ├── components/        # Reusable React components
│   │   └── Button.tsx     # Base button component
│   ├── pages/             # Page components
│   │   └── Home.tsx       # Home page
│   ├── services/          # API and external services
│   │   └── api.ts         # Axios API client with interceptors
│   ├── hooks/             # Custom React hooks
│   │   └── useFetch.ts    # React Query hooks for data fetching
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts       # Shared types and interfaces
│   ├── constants/         # Application constants
│   │   └── index.ts       # API endpoints and config constants
│   ├── utils/             # Utility functions
│   │   └── helpers.ts     # Helper functions
│   ├── App.tsx            # Root component with routing
│   ├── App.css            # App-level styles
│   ├── index.css          # Global styles with Tailwind
│   └── main.tsx           # Entry point
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration for Tailwind
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
└── package.json           # Project dependencies and scripts
```

## Technologies & Versions

### Core Framework
- **React**: ^19.2.0
- **React DOM**: ^19.2.0
- **React Router**: ^7.9.5 (no react-router-dom needed)
- **TypeScript**: ^5.7.3

### State Management & Data Fetching
- **@tanstack/react-query**: ^5.62.3
- **@tanstack/react-query-devtools**: ^5.62.3

### Styling
- **Tailwind CSS**: ^4.0.12
- **@tailwindcss/postcss**: ^4.1.17 (for Tailwind v4 support)
- **PostCSS**: ^8.4.49
- **Autoprefixer**: ^10.4.20

### Build Tools
- **Vite**: ^6.0.7
- **@vitejs/plugin-react**: ^4.3.4
- **Terser**: ^5.44.1 (for minification)

### API & Utilities
- **Axios**: ^1.7.9 (HTTP client)
- **react-lazy-load-image-component**: ^1.6.2 (image optimization)

## Environment Setup

### Prerequisites
- Node.js 18+ and npm

### Installation Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Application will open at `http://localhost:5173`

## Available Scripts

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code (ESLint configured)
npm run lint
```

## Key Features Implemented

### 1. Routing
- **react-router v7** configured in `App.tsx`
- Currently has `/` (Home) route
- Ready for additional routes

### 2. API Integration
- **Axios client** with interceptors
  - Automatic JWT token injection
  - 401 unauthorized handling
  - Base URL from environment variable

- **React Query hooks** in `useFetch.ts`
  - `useFetch()` - GET requests
  - `usePost()` - POST requests
  - `usePut()` - PUT requests
  - `useDelete()` - DELETE requests

### 3. TypeScript Support
- Strict mode enabled
- Path aliases configured (@components, @services, @utils, etc.)
- Type definitions for:
  - API responses
  - Domain models (User, Recipe)
  - Paginated responses

### 4. Styling
- **Tailwind CSS v4** with new PostCSS plugin
- Global styles in `src/index.css`
- Primary color: `#EF4444` (red)
- Secondary color: `#F97316` (orange)
- Accent color: `#8B5CF6` (purple)

### 5. Development Tools
- **React Query DevTools** included (disabled by default)
- **TypeScript** for type safety
- **Vite** for fast development and optimized builds

## Common Tasks

### Adding a New Page
1. Create file in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/your-page" element={<YourPage />} />
   ```

### Adding a New Component
1. Create file in `src/components/YourComponent.tsx`
2. Export as default or named export
3. Import and use in pages

### Using API Calls
```tsx
import { useFetch, usePost } from '@hooks/useFetch'

// GET request
const { data, isLoading, error } = useFetch('/recipes')

// POST request
const { mutate, isPending } = usePost('/recipes')
mutate({ title: 'My Recipe' })
```

### Adding Environment Variables
1. Add to `.env.local`:
   ```
   VITE_API_URL=http://localhost:3000/api
   ```
2. Access in code:
   ```tsx
   const apiUrl = import.meta.env.VITE_API_URL
   ```

## Build Output

The production build is optimized and outputs to `dist/` folder:
- `dist/index.html` - HTML template
- `dist/assets/` - JavaScript and CSS bundles
- All assets are minified and optimized for production

## Next Steps

1. **Set up backend** - Create corresponding API routes
2. **Add authentication** - Implement login/signup pages
3. **Create recipe pages** - Add recipe list and detail pages
4. **Add image handling** - Integrate image uploads
5. **Setup testing** - Add Jest and React Testing Library
6. **Configure CI/CD** - Setup GitHub Actions or similar

## Troubleshooting

### Build fails with Tailwind error
Ensure `@tailwindcss/postcss` is installed:
```bash
npm install --save-dev @tailwindcss/postcss
```

### Port 5173 already in use
```bash
npm run dev -- --port 5174
```

### TypeScript errors
Check `tsconfig.json` - ensure `noImplicitAny` and `strict` are properly configured.

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router v7](https://react-router.com)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
