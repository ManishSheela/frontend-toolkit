import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import PaginationComponent, { ITEMS_PER_PAGE } from "./PaginationComponent";

const Pagination = () => {
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const fetchData = async () => {
		const res = await fetch("https://dummyjson.com/products?limit=500");
		const json = await res.json();
		console.log({ json });
		setData(json?.products);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const startProductIndex = (currentPage - 1) * ITEMS_PER_PAGE;

	const endProductIndex = startProductIndex + ITEMS_PER_PAGE;
	console.log({ startProductIndex, endProductIndex });
	return (
		<>
			<div className="flex flex-col gap-2">
				<PaginationComponent
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					products={data}
				/>
				<div className="flex flex-row flex-wrap gap-2 items-center p-2">
					{data?.slice(startProductIndex, endProductIndex).map((product) => {
						return <ProductCard key={product?.id} product={product} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Pagination;
