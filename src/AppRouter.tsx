import React, { useEffect, useState } from "react";

import App from "./App";
import ThankYouPage from "./pages/ThankYouPage";

function getPathname() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

export default function AppRouter() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const handleRouteChange = () => setPathname(getPathname());
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  if (pathname === "/thank-you") {
    return <ThankYouPage />;
  }

  return <App />;
}
