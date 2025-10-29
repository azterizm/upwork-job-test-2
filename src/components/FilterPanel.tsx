import type { Category } from "../types";

interface FilterPanelProps {
	categories: Category[];
	selectedCategory: Category | "All";
	onCategoryChange: (category: Category | "All") => void;
}

export const FilterPanel = ({
	categories,
	selectedCategory,
	onCategoryChange,
}: FilterPanelProps) => {
	return (
		<div className="bg-white rounded-lg shadow-md p-4 h-fit md:sticky md:top-4">
			<h2 className="text-lg font-semibold mb-4 text-gray-800">Categories</h2>
			<ul className="space-y-2">
				<li>
					<button
						type="button"
						onClick={() => onCategoryChange("All")}
						className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
							selectedCategory === "All"
								? "bg-emerald-500 text-white"
								: "bg-gray-100 text-gray-700 hover:bg-gray-200"
						}`}
					>
						All Products
					</button>
				</li>
				{categories.map((category) => (
					<li key={category}>
						<button
							type="button"
							onClick={() => onCategoryChange(category)}
							className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
								selectedCategory === category
									? "bg-emerald-500 text-white"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							{category}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
