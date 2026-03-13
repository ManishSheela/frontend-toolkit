const ContentArea = ({ children }) => {
	return (
		<div className="flex flex-col lg:flex-row w-full h-full min-h-0 gap-4  p-2 overflow-hidden">
			{children}
		</div>
	);
};

export default ContentArea;
