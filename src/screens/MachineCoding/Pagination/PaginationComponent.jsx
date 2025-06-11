import { Button } from "@/components/ui/button";

export const ITEMS_PER_PAGE = 10;

const PaginationComponent = ({
	currentPage = 1,
	setCurrentPage = () => {},
	products = [],
}) => {
	const TOTAL_PAGES = Math.ceil(products?.length / ITEMS_PER_PAGE) || 0;

	const handlePageChange = (value) => {
		if (value === "inc")
			setCurrentPage((prev) => Math.min(prev + 1, TOTAL_PAGES));
		else if (value === "dec") setCurrentPage((prev) => Math.max(prev - 1, 1));
		else setCurrentPage(value);
	};

	return (
		<div className="p-2 flex flex-row flex-wrap gap-2 items-center">
			<Button
				disabled={currentPage === 1}
				onClick={() => handlePageChange("dec")}
			>
				◀️
			</Button>
			{Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
				<Button
					key={page}
					onClick={() => handlePageChange(page)}
					className={currentPage === page ? "bg-blue-400 text-white" : ""}
				>
					{page}
				</Button>
			))}
			<Button
				disabled={currentPage === TOTAL_PAGES}
				onClick={() => handlePageChange("inc")}
			>
				▶️
			</Button>
		</div>
	);
};

export default PaginationComponent;
