import type { CartItem } from "../types";
import { computeTotal, removeItem, updateQuantity } from "../utils/cart";
import { formatCurrency } from "../utils/money";

interface CartSummaryProps {
	cart: CartItem[];
	onUpdateCart: (cart: CartItem[]) => void;
}

export const CartSummary = ({ cart, onUpdateCart }: CartSummaryProps) => {
	const { subtotal, discount, total } = computeTotal(cart);
	const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

	const handleQuantityChange = (productId: number, newQuantity: number) => {
		const updatedCart = updateQuantity(cart, productId, newQuantity);
		onUpdateCart(updatedCart);
	};

	const handleRemoveItem = (productId: number) => {
		const updatedCart = removeItem(cart, productId);
		onUpdateCart(updatedCart);
	};

	return (
		<div className="bg-white rounded-lg shadow-md p-4 h-fit md:sticky md:top-4">
			<h2 className="text-lg font-semibold mb-4 text-gray-800">
				Cart Summary ({itemCount} {itemCount === 1 ? "item" : "items"})
			</h2>

			{cart.length === 0 ? (
				<p className="text-gray-500 text-center py-4">Your cart is empty</p>
			) : (
				<>
					<div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
						{cart.map((item) => (
							<div key={item.product.id} className="border-b pb-3">
								<div className="flex justify-between items-start mb-2">
									<h4 className="font-medium text-gray-800 text-sm line-clamp-2">
										{item.product.title}
									</h4>
									<button
										type="button"
										onClick={() => handleRemoveItem(item.product.id)}
										className="text-red-500 hover:text-red-700 text-sm"
									>
										Remove
									</button>
								</div>
								<div className="flex justify-between items-center">
									<div className="flex items-center space-x-2">
										<button
											type="button"
											onClick={() =>
												handleQuantityChange(item.product.id, item.quantity - 1)
											}
											className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm"
										>
											-
										</button>
										<span className="text-sm w-8 text-center">
											{item.quantity}
										</span>
										<button
											type="button"
											onClick={() =>
												handleQuantityChange(item.product.id, item.quantity + 1)
											}
											className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm"
										>
											+
										</button>
									</div>
									<span className="font-medium text-sm">
										{formatCurrency(item.product.price * item.quantity)}
									</span>
								</div>
							</div>
						))}
					</div>

					<div className="border-t pt-3 space-y-2">
						<div className="flex justify-between text-sm">
							<span>Subtotal:</span>
							<span>{formatCurrency(subtotal)}</span>
						</div>

						{discount > 0 && (
							<div className="flex justify-between text-sm text-emerald-600">
								<span>Discount (10%):</span>
								<span>-{formatCurrency(discount)}</span>
							</div>
						)}

						<div className="flex justify-between font-semibold text-lg pt-2 border-t">
							<span>Total:</span>
							<span className="text-emerald-600">{formatCurrency(total)}</span>
						</div>

						{discount > 0 && (
							<p className="text-xs text-emerald-600 text-center mt-2">
								10% discount applied (orders under $500)
							</p>
						)}
					</div>
				</>
			)}
		</div>
	);
};
