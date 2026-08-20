const ProductCard = ({ product }) => {
	return (
		 <div
            key={product.id}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">
              <h3 className="text-black text-base font-medium mb-2 line-clamp-2">
                {product.title}
              </h3>

              <p className="text-lg font-bold text-gray-900">
                ${product.price}
              </p>
            </div>
          </div>
	);
};

export default ProductCard;
