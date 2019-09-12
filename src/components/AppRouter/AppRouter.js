import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthPages from "../AuthPages/AuthPages";
import NonAuthPages from "../NonAuth/NonAuthPages/NonAuthPages";
import { routes } from "../routes";

function AppRouter() {
  return (
    <Router>
      {routes.map((route, i) => {
        return route.scope === "nonauth" ? (
          <NonAuthPages
            key={i}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ) : (
          <AuthPages
            key={i}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Router>
  );
}

export default AppRouter;
