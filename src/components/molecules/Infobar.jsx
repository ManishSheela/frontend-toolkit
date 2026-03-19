import { useLocation, useParams } from "react-router-dom";

const InfoBar = () => {
	const location = useLocation();
	const locationState = location.state || {};
	const { title } = useParams();

	const headerFromState = locationState.title;
	const descriptionFromState = locationState.description;

	const header = headerFromState || title?.split("-").join(" ") || "Homepage";
	const description =
		descriptionFromState ||
		"Explore machine-coding exercises and JavaScript polyfills.";

	return (
		<div className="flex flex-col w-full  bg-gray-50  py-2 px-4 border-b ">
			<h2 className="text-2xl font-bold">{header}</h2>
			<p className="text-gray-500 text-sm">{description}</p>
		</div>
	);
};

export default InfoBar;
