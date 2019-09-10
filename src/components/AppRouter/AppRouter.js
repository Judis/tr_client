import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NonAuthPages from "../NonAuthPages/NonAuthPages";
import { routes } from "../routes";

function AppRouter() {
  return (
    <Router>
      {routes
        .filter(route => route.scope === "nonauth")
        .map((route, i) => (
          <NonAuthPages key={i} path={route.path} component={route.component} />
        ))}
    </Router>
  );
}

export default AppRouter;
