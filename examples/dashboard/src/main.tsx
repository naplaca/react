import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "./providers/router.provider.tsx";
import reportWebVitals from "./report-web-vitals.ts";
import "./styles.css";

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider />
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
