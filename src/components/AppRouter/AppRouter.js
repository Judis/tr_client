import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NonAuthPages from "../NonAuthPages/NonAuthPages";

function AppRouter({ routes }) {
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
