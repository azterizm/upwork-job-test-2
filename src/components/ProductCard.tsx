import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../lib/utils";
import type { Product } from "../types";
import { formatCurrency } from "../utils/money";

interface ProductCardProps {
	product: Product;
	onAddToCart: (product: Product) => void;
	className?: string;
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
	({ className, product, onAddToCart }, ref) => {
		// Get category icon
		const getCategoryIcon = (category: string) => {
			switch (category.toLowerCase()) {
				case "electronics":
					return "🔌";
				case "furniture":
					return "🏠";
				case "clothing":
				case "apparel":
					return "👕";
				case "beauty":
					return "💄";
				case "fragrances":
					return "🌸";
				case "groceries":
					return "🛒";
				default:
					return "📦";
			}
		};

		return (
			<motion.div
				ref={ref}
				whileHover={{ y: -5 }}
				transition={{ type: "spring", stiffness: 300, damping: 20 }}
				className={cn(
					"relative h-[400px] w-full max-w-sm rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl cursor-pointer",
					className,
				)}
			>
				<div className="absolute inset-4 rounded-xl bg-white shadow-inner">
					<div className="relative z-10 flex h-full flex-col justify-between p-6">
						{/* Category and Price Header */}
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-2 text-gray-600">
								<span className="text-lg">
									{getCategoryIcon(product.category)}
								</span>
								<span className="text-sm font-medium">{product.category}</span>
							</div>
							<div className="text-right">
								<span className="text-2xl font-bold text-emerald-600">
									{formatCurrency(product.price)}
								</span>
							</div>
						</div>

						{/* Product Name */}
						<div className="text-gray-800">
							<h2 className="text-xl font-bold tracking-tight line-clamp-2">
								{product.title}
							</h2>
						</div>

						{/* Product Image */}
						<div className="flex justify-center items-end">
							<motion.img
								src={product.thumbnail}
								alt={product.title}
								whileHover={{ scale: 1.05 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
								className="h-32 w-32 object-contain"
							/>
						</div>

						{/* Add to Cart Button */}
						<div className="flex justify-center">
							<motion.button
								type="button"
								onClick={() => onAddToCart(product)}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 font-medium shadow-md"
							>
								Add to Cart
							</motion.button>
						</div>
					</div>
				</div>
			</motion.div>
		);
	},
);

ProductCard.displayName = "ProductCard";
