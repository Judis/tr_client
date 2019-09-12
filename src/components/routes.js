import fp from "lodash/fp";
import Signup from "./NonAuth/Signup/Signup";
import Signin from "./NonAuth/Signin/Signin";
import RestorePassword from "./NonAuth/RestorePassword/RestorePassword";
import HomePage from "./HomePage/HomePage";

export const routes = [
  {
    path: "/signup",
    component: Signup,
    exact: true,
    alias: "signup",
    scope: "nonauth"
  },
  {
    path: "/signin",
    component: Signin,
    exact: true,
    alias: "signin",
    scope: "nonauth"
  },
  {
    path: "/restore_password",
    component: RestorePassword,
    exact: true,
    alias: "pass_restore",
    scope: "nonauth"
  },
  {
    path: "/",
    component: HomePage,
    exact: true,
    alias: "root",
    scope: "auth"
  }
];

export function getUrlByAlias(routeAlias) {
  const route = fp.find({ alias: routeAlias }, routes);
  if (route === undefined) {
    throw new Error("Can't find route by alias");
  }
  return route.path;
}
