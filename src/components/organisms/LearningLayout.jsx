const LearningLayout = ({ sidebar, header, children }) => {
	return (
		<div className="flex h-screen w-screen overflow-hidden">
			{sidebar}
			<div className="flex flex-col flex-1 min-w-0 h-full">
				{header}
				<div className="flex-1 min-h-0 overflow-hidden">{children}</div>
			</div>
		</div>
	);
};

export default LearningLayout;

