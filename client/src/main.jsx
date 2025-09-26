import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "./contexts/AppContext.jsx";
createRoot(document.getElementById("root")).render(
  // <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={"/"}>
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
  {
    /* </ClerkProvider> */
  }
);
