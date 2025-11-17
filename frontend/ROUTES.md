# FeastFrame Routes Reference

## All Implemented URLs

### Public Pages

#### 1. Home/Landing Page
```
/
```
**Description:** Landing page with hero section, features, and featured restaurants

---

#### 2. Restaurant List/Browse Page
```
/restaurants
```
**Description:** Browse all restaurants with filters and search functionality

**Query Parameters (Optional):**
- `?featured=true` - Show only featured restaurants

---

#### 3. Restaurant Detail Pages
```
/restaurants/la-bella-italia
/restaurants/dragon-palace
/restaurants/sakura-sushi-bar
/restaurants/taco-fiesta
/restaurants/spice-route
/restaurants/thai-orchid
```
**Description:** Individual restaurant pages with menu, gallery, and contact info

**Dynamic Route Pattern:** `/restaurants/:slug`

---

#### 4. Search Page
```
/search
/search?q=pizza
/search?q=sushi
/search?q=Italian
/search?q=San Francisco
```
**Description:** Search for restaurants and dishes

**Query Parameters:**
- `q` - Search query (e.g., `?q=pizza`)

---

#### 5. About Page
```
/about
/about#how-it-works
```
**Description:** About FeastFrame, mission, and how it works

**Hash Links:**
- `#how-it-works` - Jump to "How It Works" section

---

## Quick Test URLs

Copy and paste these URLs to test (assuming localhost:5173):

```
http://localhost:5173/
http://localhost:5173/restaurants
http://localhost:5173/restaurants/la-bella-italia
http://localhost:5173/restaurants/dragon-palace
http://localhost:5173/restaurants/sakura-sushi-bar
http://localhost:5173/search
http://localhost:5173/search?q=pizza
http://localhost:5173/about
```

---

## Available Restaurant Slugs

Use these slugs to test restaurant detail pages:

1. `la-bella-italia` - Italian restaurant (has menu items)
2. `dragon-palace` - Chinese restaurant
3. `sakura-sushi-bar` - Japanese/Sushi restaurant
4. `taco-fiesta` - Mexican restaurant
5. `spice-route` - Indian restaurant
6. `thai-orchid` - Thai restaurant

---

## Sample Search Queries

Test the search functionality with these queries:

- `pizza` - Find pizza-related items
- `Italian` - Find Italian restaurants
- `sushi` - Find sushi restaurants and items
- `San Francisco` - Find restaurants by location
- `Margherita` - Find specific dish
- `Thai` - Find Thai cuisine

---

## Features to Test

### On Homepage (`/`)
- [ ] Hero section with search bar
- [ ] Search functionality
- [ ] Featured restaurants display
- [ ] "Browse Restaurants" CTA
- [ ] "Learn More" link to About page
- [ ] Footer links work

### On Restaurant List (`/restaurants`)
- [ ] All restaurants display
- [ ] Search bar filters results
- [ ] Cuisine filter (click Italian, Chinese, etc.)
- [ ] Price range filter ($, $$, $$$, $$$$)
- [ ] Sort by dropdown (rating, distance, popularity, name)
- [ ] Click restaurant card navigates to detail page

### On Restaurant Detail (`/restaurants/la-bella-italia`)
- [ ] Cover image displays
- [ ] Breadcrumb navigation works
- [ ] Restaurant info (rating, cuisine, price)
- [ ] Contact & hours sidebar
- [ ] Menu category tabs (Appetizers, Pizza, Pasta, Mains, Desserts)
- [ ] Click menu item opens image gallery
- [ ] Share button works

### Image Gallery (click any dish on restaurant detail)
- [ ] Gallery opens in full-screen
- [ ] Arrow keys navigate (← →)
- [ ] ESC key closes gallery
- [ ] Click image to zoom
- [ ] Thumbnail strip at bottom
- [ ] Image counter shows (e.g., "2 / 3")
- [ ] Share button works
- [ ] Click outside closes gallery

### On Search Page (`/search?q=pizza`)
- [ ] Search results display
- [ ] Filter tabs work (All, Restaurants, Dishes)
- [ ] Recent searches display when no query
- [ ] Click recent search performs search
- [ ] Click dish navigates to restaurant page
- [ ] Click restaurant card navigates to detail page

### On About Page (`/about`)
- [ ] Hero section displays
- [ ] Mission statement readable
- [ ] "How It Works" 3-step process
- [ ] Features grid displays
- [ ] Contact information visible
- [ ] CTA "Browse Restaurants" works

### Header (on all pages)
- [ ] Logo clicks to homepage
- [ ] Navigation links work (Home, Browse Restaurants, About)
- [ ] Search button navigates to search page
- [ ] Mobile menu works (on small screens)

### Footer (on all pages)
- [ ] Company links work
- [ ] Discover links work
- [ ] Social media links present

---

## Mobile Testing

Test these URLs on mobile viewport (< 640px):

All the same URLs above, but verify:
- [ ] Hamburger menu appears
- [ ] Mobile menu toggles correctly
- [ ] Filters collapse/expand properly
- [ ] Gallery swipe gestures work
- [ ] Touch targets are adequate (min 44px)

---

## Responsive Breakpoints

Test at these viewport widths:

- **Mobile:** 375px (iPhone), 360px (Android)
- **Tablet:** 768px (iPad), 1024px (iPad Pro)
- **Desktop:** 1280px, 1440px, 1920px

---

## Error Cases to Test

### 404 / Not Found
```
/restaurants/non-existent-restaurant
```
Should show "Restaurant not found" message

### Empty Search
```
/search?q=xyzabc123
```
Should show "No results found" empty state

---

## Performance Testing

Visit these pages and check:
- [ ] Images lazy load
- [ ] Smooth scrolling
- [ ] Fast navigation between pages
- [ ] No layout shifts
- [ ] Animations are smooth (60fps)
