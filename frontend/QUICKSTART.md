# Quick Start Guide

Get the Feast Frame frontend running in 5 minutes!

## Prerequisites
- Node.js 18+ installed
- npm or yarn

## Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env.local
```

Edit `.env.local` if needed (default values should work for local development).

### 3. Start Development Server
```bash
npm run dev
```

The app will open automatically at `http://localhost:5173`

## What's Included

✅ **React 19** - Latest React with all new features
✅ **TypeScript** - Full type safety
✅ **Vite** - Lightning-fast dev server and builds
✅ **React Router v7** - Modern client-side routing
✅ **TanStack Query** - Powerful data fetching and caching
✅ **Tailwind CSS v4** - Utility-first styling
✅ **Axios** - HTTP client with interceptors
✅ **Path aliases** - Clean imports like `@components/Button`

## Project Structure

```
src/
├── components/   - Reusable UI components
├── pages/        - Page-level components
├── services/     - API calls and external services
├── hooks/        - Custom React hooks
├── types/        - TypeScript type definitions
├── constants/    - Application constants
└── utils/        - Helper functions
```

## Example: Fetching Data

```tsx
import { useFetch } from '@hooks/useFetch'

export function RecipeList() {
  const { data: recipes, isLoading } = useFetch('/recipes')

  if (isLoading) return <div>Loading...</div>

  return (
    <ul>
      {recipes?.map(recipe => (
        <li key={recipe.id}>{recipe.title}</li>
      ))}
    </ul>
  )
}
```

## Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality |

## Next Steps

1. **Explore the codebase** - Look at `src/pages/Home.tsx` for an example
2. **Create your first page** - Add a new route in `src/App.tsx`
3. **Add API endpoints** - Update `src/constants/index.ts` with your API routes
4. **Style your components** - Use Tailwind classes or create custom CSS
5. **Setup your backend** - Connect to your API

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 5174
```

**Need to clear cache?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors?**
Press Ctrl+Shift+P in VS Code and select "TypeScript: Restart TS Server"

## Resources

- 📚 [Full Setup Guide](./SETUP.md)
- 🚀 [Vite Docs](https://vitejs.dev)
- ⚛️ [React Docs](https://react.dev)
- 🧵 [React Router Docs](https://react-router.com)
- 📊 [TanStack Query Docs](https://tanstack.com/query/latest)
- 🎨 [Tailwind Docs](https://tailwindcss.com)

## Support

For issues or questions, check the troubleshooting section or create an issue in the repository.
