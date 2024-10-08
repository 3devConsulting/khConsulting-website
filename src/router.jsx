import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/khConsulting-website",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
