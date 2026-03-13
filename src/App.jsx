import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import InfoBar from "./components/molecules/Infobar";
import Loader from "./components/atoms/Loader";
import LearningLayout from "./components/organisms/LearningLayout";
import ContentArea from "./components/organisms/ContentArea";

function App() {
	return (
		<LearningLayout sidebar={<Sidebar />} header={<InfoBar />}>
			<ContentArea>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</ContentArea>
		</LearningLayout>
	);
}

export default App;
