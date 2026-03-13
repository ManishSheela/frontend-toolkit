import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH_NAME } from "../config/PathName";
import App from "../App";
import Home from "../pages/Home";
import MachineCoding from "../pages/MachineCoding";
import Polyfills from "../pages/Polyfills";
import NotFound from "../pages/NotFound";

const IRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={PATH_NAME.HOME} element={<App />}>
					<Route index element={<Home />} />
					<Route path={PATH_NAME.MACHINE_CODING} element={<MachineCoding />} />
					<Route path={PATH_NAME.POLYFILLS} element={<Polyfills />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default IRoutes;
