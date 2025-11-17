# Feast Frame Frontend

A modern, responsive web application frontend for the Feast Frame platform - your ultimate food discovery and sharing community.

## Overview

Feast Frame is a web-based platform where users can discover recipes, share culinary experiences, and connect with food enthusiasts. This frontend application provides an intuitive interface for browsing restaurants, viewing menus, and sharing reviews.

## Features

- **Recipe Discovery**: Browse thousands of recipes filtered by cuisine, dietary preferences, and difficulty level
- **Restaurant Directory**: Explore local restaurants with ratings, menus, and user reviews
- **User Profiles**: Create personalized profiles to track favorite recipes and restaurants
- **Social Sharing**: Share your culinary adventures with the community
- **Real-time Notifications**: Stay updated on comments and likes from other users
- **Advanced Search**: Find exactly what you're looking for with powerful filtering options

## Demo Data

### Sample User Profiles
```
Username: @foodlover_chef
Name: Sarah Johnson
Location: San Francisco, CA
Followers: 2,847
Bio: Food blogger and home chef | Always exploring new flavors
Recipes Shared: 156
```

```
Username: @sushimaster
Name: Marcus Chen
Location: Tokyo, Japan
Followers: 5,234
Bio: Japanese cuisine expert | Sushi perfectionist
Recipes Shared: 342
```

### Sample Recipe Data
```
Recipe: Spicy Thai Green Curry
Chef: @foodlover_chef
Prep Time: 15 minutes
Cook Time: 25 minutes
Servings: 4
Difficulty: Medium
Rating: 4.8/5 (342 reviews)
Ingredients: 12
```

```
Recipe: Classic Italian Carbonara
Chef: @sushimaster
Prep Time: 10 minutes
Cook Time: 20 minutes
Servings: 2
Difficulty: Easy
Rating: 4.9/5 (856 reviews)
Ingredients: 5
```

### Sample Restaurant Data
```
Restaurant: "The Golden Spoon"
Cuisine: Italian
Rating: 4.7/5 (1,203 reviews)
Price Range: $$$
Hours: Mon-Sun 11:00 AM - 10:00 PM
Location: Downtown Seattle
Average Meal Cost: $28-45
```

```
Restaurant: "Sakura House"
Cuisine: Japanese
Rating: 4.9/5 (2,156 reviews)
Price Range: $$
Hours: Tue-Sun 5:00 PM - 11:00 PM
Location: Pike Place Market, Seattle
Average Meal Cost: $15-35
```

## Tech Stack

- **Framework**: React 18+
- **Styling**: Tailwind CSS / CSS Modules
- **State Management**: Redux Toolkit / Context API
- **HTTP Client**: Axios
- **Build Tool**: Webpack / Vite
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/feast-frame.git
cd feast-frame/frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment configuration:
```bash
cp .env.example .env.local
```

4. Start development server:
```bash
npm run dev
# or
yarn dev
```

The application will open at `http://localhost:3000`

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Navigation/
│   │   ├── RecipeCard/
│   │   ├── RestaurantListing/
│   │   └── UserProfile/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Recipes/
│   │   ├── Restaurants/
│   │   ├── UserProfile/
│   │   └── Search/
│   ├── store/
│   │   ├── actions/
│   │   ├── reducers/
│   │   └── slices/
│   ├── services/
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── recipes.js
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   ├── App.jsx
│   └── index.jsx
├── public/
├── tests/
├── .env.example
├── package.json
├── vite.config.js
└── README.md
```

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Format code
npm run format
```

## API Integration

The frontend communicates with the Feast Frame backend API:

```
Base URL: https://api.feastframe.com/v1
```

### Key Endpoints:

- `GET /recipes` - Fetch all recipes
- `GET /recipes/:id` - Get recipe details
- `POST /recipes` - Create new recipe (authenticated)
- `GET /restaurants` - Fetch all restaurants
- `GET /restaurants/:id` - Get restaurant details
- `GET /users/:username` - Get user profile
- `POST /reviews` - Submit review (authenticated)

## Authentication

The application uses JWT-based authentication:

- Login credentials are stored securely in localStorage
- Auth tokens are automatically included in API requests
- Session expires after 24 hours of inactivity

## Performance Optimizations

- Lazy loading of route components
- Image optimization and caching
- Code splitting by route
- Memoization of expensive computations
- Virtual scrolling for large lists

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm run test -- RecipeCard.test.jsx
```

## Deployment

The application is automatically deployed to production when merged to main branch.

Deployment platforms: Vercel / Netlify / AWS S3 + CloudFront

## Troubleshooting

### Port 3000 is already in use
```bash
npm run dev -- --port 3001
```

### Clear node_modules cache
```bash
rm -rf node_modules package-lock.json
npm install
```

## License

MIT License - see LICENSE file for details

## Support

For support, email support@feastframe.com or open an issue on GitHub.

## Changelog

### v1.0.0 (2024-11-17)
- Initial release
- Recipe browsing and filtering
- Restaurant directory
- User profiles
- Review system
- Social sharing features

---

**Last Updated**: November 17, 2024
**Maintained By**: Feast Frame Development Team
