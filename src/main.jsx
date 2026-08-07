import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import IRoutes from "./routes/IRoutes";
import { ThemeProvider } from "./context/theme-provider";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<IRoutes />
		</ThemeProvider>
	</StrictMode>
);
