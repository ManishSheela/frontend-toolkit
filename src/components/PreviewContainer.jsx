const PreviewContainer = ({ children }) => {
	return (
		<div className="w-full shadow-sm min-h-[calc(100vh-102px)] grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center p-3 bg-slate-100">
			{children}
		</div>
	);
};

export default PreviewContainer;
