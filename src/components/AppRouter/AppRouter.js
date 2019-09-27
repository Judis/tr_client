import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WithNonAuth } from "../NonAuthScope/WithNonAuth/WithNonAuth";
import { WithAuth } from "../AuthUserScope/WithAuth/WithAuth";
import NotFound from "../NotFoundPage/NotFoundPage";
import { routes } from "../routes";

function getHOCPage(scope, component) {
  switch (scope) {
    case "nonauth":
      return WithNonAuth(component);
    case "userauth":
      return WithAuth(component);
  }
}

function AppRouter() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              exact={route.exact}
              path={route.path}
              component={getHOCPage(route.scope, route.component)}
            />
          );
        })}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
