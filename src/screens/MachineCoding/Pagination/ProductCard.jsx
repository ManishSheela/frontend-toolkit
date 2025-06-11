const ProductCard = ({ product }) => {
	return (
		<div className="flex flex-col items-center p-2 rounded-sm bg-slate-400 gap-2">
			<img
				src={product?.images[0]}
				alt={product?.name}
				className="aspect-square object-cover h-20 w-20"
			/>
			<span>{product?.title}</span>
		</div>
	);
};

export default ProductCard;
