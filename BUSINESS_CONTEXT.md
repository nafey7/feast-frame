# Business Context: Feast Frame

## 1. Executive Summary
**Feast Frame** is a visual-first food discovery application designed to help users decide what to eat based on visual appeal. Unlike traditional food delivery apps that prioritize text lists, Feast Frame focuses on high-quality imagery to drive decision-making, solving the problem of "not knowing what a dish looks like."

## 2. Core Value Proposition
*   **Visual Discovery**: High-resolution images are the primary interface element.
*   **Transparency**: Detailed ingredient lists and descriptions for every dish.
*   **Ease of Use**: Intuitive filtering and search to narrow down choices by cuisine, rating, and location.

## 3. User Journey & Experience

### 3.1. Landing & Discovery
*   **Hero Section**: Users are greeted with a visually striking hero section emphasizing discovery.
*   **Search & Filter**: A prominent search bar allows users to find food by:
    *   **Keywords**: Restaurant name, cuisine, or description.
    *   **Location**: Currently defaults to "Pakistan".
    *   **Filters**: Cuisine type, Minimum Rating.
    *   **Sorting**: Highest Rated, Most Reviewed, Name (A-Z), Newest.
*   **Restaurant Listing**:
    *   **Grid/List View**: Users can toggle between a visual-heavy grid view and a detailed list view.
    *   **Restaurant Cards**: Display key info: Image, Name, Cuisine, Rating, Delivery Time, and "New"/"Featured" badges.

### 3.2. Restaurant Exploration
*   **Restaurant Profile**: Clicking a restaurant opens its dedicated page.
*   **Menu Search**: Users can search for specific dishes within the restaurant's menu.
*   **Menu Display**: Dishes are presented in a grid, allowing for quick visual scanning.

### 3.3. Dish Details (Visual Decision)
*   **Detailed View**: Clicking a dish reveals deep details (implied by `DishInfo` component).
*   **Key Information**:
    *   **Large Visuals**: High-quality dish image.
    *   **Price**: Clear pricing display.
    *   **Ingredients**: A tag-based list of ingredients to inform dietary choices.
    *   **Description**: A rich text description of the dish.

## 4. Technical Overview (Frontend)

### 4.1. Architecture
*   **Framework**: Next.js 16 (App Router) with React 19.
*   **Styling**: Tailwind CSS for utility-first styling, with `globals.css` for base themes.
*   **UI Components**:
    *   **Radix UI**: For accessible primitives (Checkbox, Dropdown Menu, Slot).
    *   **Lucide React**: For consistent iconography.
    *   **Custom Components**: Modular components for `RestaurantCard`, `DishCard`, `DishInfo`, `SearchBar`.

### 4.2. Data Management
*   **Current State**: The application currently relies on mock data (`mockRestaurants`), indicating it is in the prototype/MVP phase.
*   **Backend Integration**: Prepared for backend integration (likely via API calls replacing the mock data).

### 4.3. Key Features Implemented
*   **Dynamic Routing**: `/restaurants/[id]` for individual restaurant pages.
*   **Client-Side State**: React `useState` and `useMemo` for real-time filtering and sorting without page reloads.
*   **Responsive Design**: Mobile-first approach using Tailwind's responsive modifiers.
*   **Dark Mode Support**: Implemented via `next-themes` and Tailwind's `dark:` variant.

## 5. Future Considerations
*   **Backend Connection**: Connect the frontend to the FastAPI backend.
*   **User Authentication**: Implement login/signup flows (UI likely exists or is planned).
*   **Cart & Checkout**: Enable actual ordering functionality.
