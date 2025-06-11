import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import InfoBar from "./components/Infobar";
import PreviewContainer from "./components/PreviewContainer";

function App() {
	return (
		<div className="flex h-screen w-screen">
			<Sidebar />
			<div className="w-full h-screen flex flex-col">
				<InfoBar />
				<div className="p-4 overflow-y-auto">
					<PreviewContainer>
						<Outlet />
					</PreviewContainer>
				</div>
			</div>
		</div>
	);
}

export default App;
