# Product Store React App

A responsive single-page React application with product filtering, shopping cart functionality, and automatic discount calculations.

## Features

- **Responsive 3-Column Layout**: Clean design that adapts perfectly to desktop and mobile devices
  - Left: Product filter panel
  - Middle: Product grid display
  - Right: Cart summary

- **Product Management**:
  - Load products from static JSON data
  - Filter products by category (Electronics, Home, Apparel)
  - Responsive product grid with hover effects

- **Shopping Cart**:
  - Add products to cart with a single click
  - Real-time cart updates with item count and total price
  - Quantity adjustment (increase/decrease)
  - Remove items from cart
  - Automatic 10% discount for orders under $500

- **Business Logic**:
  - Subtotal calculation
  - Automatic discount application (10% when subtotal < $500)
  - Final total with discount applied
  - Clear display of discount amount

## Technical Implementation

- **React with TypeScript**: Functional components with hooks (useState, useEffect)
- **Tailwind CSS**: Responsive styling without UI libraries
- **Framer Motion**: Smooth 3D tilt animations and micro-interactions
- **Pure Functions**: Cart operations implemented as utility functions
- **Type Safety**: Full TypeScript implementation with proper type definitions
- **Modern Design**: Enhanced product cards with 3D effects and smooth animations

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

Note: The project includes Framer Motion for enhanced animations and Lucide React for icons.

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── FilterPanel.tsx      # Category filtering component
│   ├── ProductCard.tsx      # Individual product display
│   ├── ProductGrid.tsx      # Product grid container
│   └── CartSummary.tsx      # Shopping cart with totals
├── utils/
│   ├── cart.ts              # Cart manipulation utilities
│   └── money.ts            # Currency formatting
├── types.ts                 # TypeScript type definitions
├── App.tsx                  # Main application component
└── index.css                # Tailwind CSS imports
```

## Data Structure

Products are loaded from DummyJSON API at `https://dummyjson.com/products` with the following structure:
```json
{
  "id": 1,
  "name": "Product Name",
  "price": 99.99,
  "category": "Electronics",
  "image": "https://example.com/image.jpg"
}
```

For more information about the API, visit: https://dummyjson.com/docs/products

## Usage

1. **Browse Products**: All products are displayed in the center grid
2. **Filter by Category**: Use the left panel to filter products by category
3. **Add to Cart**: Click "Add to Cart" on any product
4. **Manage Cart**: 
   - Adjust quantities with + and - buttons
   - Remove items with the "Remove" button
   - View subtotal, discount, and final total in the cart summary
5. **Discount**: 10% discount is automatically applied when subtotal is under $500

## Development Notes

- The app uses Vite for fast development and building
- Tailwind CSS is configured with PostCSS
- All components are functional React components with TypeScript
- Cart state management is handled with React hooks
- The application is fully responsive and works on all device sizes
