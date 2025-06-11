import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH_NAME } from "../config/PathName";
import App from "../App";
import MachineCodingComponent from "../components/MachineCodingComponent";
import PolyfillsComponent from "../components/PolyfillsComponent";

const IRoutes = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div className="container">Loading...</div>}>
				<Routes>
					<Route path={PATH_NAME.HOME} element={<App />}>
						<Route
							path={PATH_NAME.MACHINE_CODING}
							element={<MachineCodingComponent />}
						/>
						<Route
							path={PATH_NAME.POLYFILLS}
							element={<PolyfillsComponent />}
						/>
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default IRoutes;
