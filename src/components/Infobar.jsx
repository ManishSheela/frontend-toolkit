import { useParams } from "react-router-dom";

const InfoBar = () => {
	const { title } = useParams();
	const header = title?.split("-").join(" ") || 'Homepage';

	return (
		<div className="flex w-full justify-between items-center py-2 px-4 border-b shadow-sm">
			<div className="flex flex-col">
				<div className="flex gap-5 items-center">
					<h2 className="text-2xl font-bold capitalize">{header}</h2>
				</div>
				<p className="text-gray-500 text-sm">
					Manage your account settings, preferences and integrations
				</p>
			</div>
		</div>
	);
};

export default InfoBar;
