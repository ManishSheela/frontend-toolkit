import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH_NAME } from "../config/PathName";
import App from "../App";
import Home from "../pages/Home";
import MachineCoding from "../pages/MachineCoding";
import Polyfills from "../pages/Polyfills";
import NotFound from "../pages/NotFound";
import Hooks from "../pages/Hooks";

const IRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={PATH_NAME.HOME} element={<App />}>
					<Route index element={<Home />} />
					<Route path={PATH_NAME.MACHINE_CODING} element={<MachineCoding />} />
					<Route path={PATH_NAME.POLYFILLS} element={<Polyfills />} />
					<Route path={PATH_NAME.HOOKS} element={<Hooks />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default IRoutes;
