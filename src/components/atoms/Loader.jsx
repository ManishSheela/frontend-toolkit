const Loader = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
			<span className="mt-2 text-primary">Loading...</span>
		</div>
	);
};

export default Loader;
