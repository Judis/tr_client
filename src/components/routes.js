import fp from "lodash/fp";
import Signup from "./NonAuthScope/Signup/Signup";
import Signin from "./NonAuthScope/Signin/Signin";
import RestorePassword from "./NonAuthScope/RestorePassword/RestorePassword";
import HomePage from "./AuthUserScope/HomePage/HomePage";

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
    scope: "userauth"
  }
];

export function getUrlByAlias(routeAlias) {
  const route = fp.find({ alias: routeAlias }, routes);
  if (route === undefined) {
    throw new Error("Can't find route by alias");
  }
  return route.path;
}
