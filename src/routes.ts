import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactMe from "./components/ContactMe";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage
    },
    {
        path: "/contact",
        Component: ContactMe
    }
]);

export default router;