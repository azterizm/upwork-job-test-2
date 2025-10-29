import type { Product } from "../types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
	products: Product[];
	onAddToCart: (product: Product) => void;
}

export const ProductGrid = ({ products, onAddToCart }: ProductGridProps) => {
	if (products.length === 0) {
		return (
			<div className="bg-white rounded-lg shadow-md p-8 text-center">
				<p className="text-gray-500 text-lg">
					No products found in this category.
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-items-center">
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					onAddToCart={onAddToCart}
				/>
			))}
		</div>
	);
};
