import React from "react";
import { Route } from "react-router-dom";

function AuthPages({ component: Component, ...rest }) {
  return <Route {...rest} render={() => <Component />} />;
}

export default AuthPages;
