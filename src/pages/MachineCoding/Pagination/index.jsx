import { useEffect, useMemo, useState,lazy } from "react";
import ProductCard from "./ProductCard";
const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);
import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./index.jsx?raw";
import LearningBox from "@/src/components/organisms/LearningBox";

// #region implementation
const getPageNumbers = (totalPages, currentPage) => {
  const pages = [];

  if (totalPages <= 5) {
    return Array.from(
      { length: totalPages },
      (_, i) => i + 1
    );
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, "...", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [
      1,
      "...",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
const usePagination = (items = [], itemsPerPage = 10) => {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(items.length / itemsPerPage);

	const paginatedData = useMemo(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;

		return items.slice(startIndex, startIndex + itemsPerPage);
	}, [items, currentPage, itemsPerPage]);

	const goToPage = (page) => {
		if (page < 1 || page > totalPages) return;

		setCurrentPage(page);
	};

	return {
		paginatedData,
		currentPage,
		totalPages,
		goToPage,
		nextPage: () => goToPage(currentPage + 1),
		prevPage: () => goToPage(currentPage - 1),
	};
};

export default function Pagination() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch(
				"https://dummyjson.com/products?limit=500"
			);

			const json = await res.json();

			setProducts(json.products || []);
		};

		fetchProducts();
	}, []);

	const {
		paginatedData,
		currentPage,
		totalPages,
		goToPage,
		nextPage,
		prevPage,
	} = usePagination(products, 10);

	return (
		<>
			<LearningBox className="gap-4">
				<div className="max-w-6xl mx-auto my-10 p-5">
					<h1 className="text-center text-3xl font-bold mb-6">
						Products Pagination
					</h1>

					<div className="text-center text-base font-semibold mb-5">
						Page {currentPage} of {totalPages}
					</div>

					<div className="flex justify-center items-center gap-2 mb-8 flex-wrap">
						<button
							onClick={prevPage}
							disabled={currentPage === 1}
							className="px-4 py-2 text-black border border-gray-300 rounded-lg bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
						>
							Prev
						</button>

						{getPageNumbers(totalPages, currentPage).map((page, index) =>
							page === "..." ? (
								<span
									key={`ellipsis-${index}`}
									className="px-2 font-bold text-black-500"
								>
									...
								</span>
							) : (
								<button
									key={page}
									onClick={() => goToPage(page)}
									className={`w-10 h-10 rounded-lg border font-semibold transition-colors ${currentPage === page
										? "bg-gray-900 text-white border-gray-900"
										: "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
										}`}
								>
									{page}
								</button>
							)
						)}

						<button
							onClick={nextPage}
							disabled={currentPage === totalPages}
							className="text-black px-4 py-2 border border-black-300 rounded-lg bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
						>
							Next
						</button>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
						{paginatedData.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</div>
			</LearningBox>
			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>


	);
}
// #endregion implementation
