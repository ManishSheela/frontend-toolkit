/* eslint-disable react/no-unescaped-entities */

import ContentArea from "@/src/components/organisms/ContentArea";

const NotFound = () => {
	return (
		<ContentArea>
			<div className="flex flex-col items-center justify-center text-center">
				<h2 className="text-3xl font-semibold text-gray-800 mb-2">
					404 - Not Found
				</h2>
				<p className="text-gray-500">
					Sorry, the page you're looking for doesn't exist.
				</p>
			</div>
		</ContentArea>
	);
};

export default NotFound;
