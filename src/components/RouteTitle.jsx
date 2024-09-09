import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTitles = {
  "/aboutUs": "KH Consulting",
  "/blogNews": "Blog & News",
  "/contact": "Contact",
  "/faq": "FAQ",
  "/ourServices": "Our Services",
  "/pricing": "Pricing",
  "*": "Page Not fund",
};

const RouteTitle = ({ element, title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = `${routeTitles[location.pathname] || routeTitles["*"]}`;
  }, [location.pathname]);

  return element;
};

export default RouteTitle;
