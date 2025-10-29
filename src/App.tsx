import { useEffect, useState } from "react";
import { CartSummary } from "./components/CartSummary";
import { FilterPanel } from "./components/FilterPanel";
import { ProductGrid } from "./components/ProductGrid";
import type { CartItem, Category, DummyJSONResponse, Product } from "./types";
import { addItem } from "./utils/cart";

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const [cart, setCart] = useState<CartItem[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
		"All",
	);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch(
					"https://dummyjson.com/products?limit=100",
				);
				const data: DummyJSONResponse = await response.json();
				setProducts(data.products);
			} catch (error) {
				console.error("Error fetching products:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	const handleAddToCart = (product: Product) => {
		const updatedCart = addItem(cart, product);
		setCart(updatedCart);
	};

	const getUniqueCategories = (): Category[] => {
		const categories = products.map((product) => product.category);
		return Array.from(new Set(categories)) as Category[];
	};

	const getFilteredProducts = (): Product[] => {
		if (selectedCategory === "All") {
			return products;
		}
		return products.filter((product) => product.category === selectedCategory);
	};

	if (loading) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
					<p className="mt-2 text-gray-600">Loading products...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white shadow-sm border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<h1 className="text-2xl font-bold text-gray-900">Product Store</h1>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8">
					{/* Left: Filter Panel */}
					<div className="xl:col-span-3 order-2 xl:order-1">
						<FilterPanel
							categories={getUniqueCategories()}
							selectedCategory={selectedCategory}
							onCategoryChange={setSelectedCategory}
						/>
					</div>

					{/* Middle: Product Grid */}
					<div className="xl:col-span-6 order-1 xl:order-2">
						<ProductGrid
							products={getFilteredProducts()}
							onAddToCart={handleAddToCart}
						/>
					</div>

					{/* Right: Cart Summary */}
					<div className="xl:col-span-3 order-3">
						<CartSummary cart={cart} onUpdateCart={setCart} />
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
