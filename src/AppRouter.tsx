import React, { useEffect, useState } from "react";

import App from "./App";
import ThankYouPage from "./pages/ThankYouPage";
import { BASE_PATH, getAppPathname } from "./config";

function getPathname() {
  return getAppPathname();
}

export default function AppRouter() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const handleRouteChange = () => setPathname(getPathname());
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  useEffect(() => {
    const browserPath =
      window.location.pathname.replace(/\/+$/, "") || "/";

    if (browserPath === "/" || browserPath === "") {
      window.location.replace(BASE_PATH);
    }
  }, []);

  if (pathname === "/thank-you") {
    return <ThankYouPage />;
  }

  if (pathname === "/") {
    return <App />;
  }

  return null;
}
