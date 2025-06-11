import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import IRoutes from "./routes/IRoutes";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<IRoutes />
	</StrictMode>
);
