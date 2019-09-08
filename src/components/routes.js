import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import RestorePassword from "./RestorePassword/RestorePassword";
import fp from "lodash/fp";

export const routes = [
  {
    path: "/signup",
    component: Signup,
    alias: "signup",
    scope: "nonauth"
  },
  {
    path: "/signin",
    component: Signin,
    alias: "signin",
    scope: "nonauth"
  },
  {
    path: "/restore_password",
    component: RestorePassword,
    alias: "pass_restore",
    scope: "nonauth"
  }
];

export function getUrlByAlias(routeAlias) {
  const route = fp.find({ alias: routeAlias }, routes);
  if (route === undefined) {
    throw new Error("Can't find route by alias");
  }
  return route.path;
}
