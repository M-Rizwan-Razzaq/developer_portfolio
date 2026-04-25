import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";

const storedTextTheme = window.localStorage.getItem("artisan-text-theme");

if (storedTextTheme) {
  document.documentElement.dataset.textTheme = storedTextTheme;
} else {
  document.documentElement.dataset.textTheme = "violet";
}

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="artisan-portfolio-theme">
    <App />
  </ThemeProvider>
);
