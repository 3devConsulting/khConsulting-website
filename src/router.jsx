import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFund from "./pages/NotFund";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFund />,
  },
]);

export default router;
