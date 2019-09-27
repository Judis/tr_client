export const localStorageAuth = {
  authenticate() {
    window.localStorage.setItem("isAuth", "1");
  },
  signout() {
    window.localStorage.removeItem("isAuth");
  },
  isAuthenticated() {
    const isAuth = window.localStorage.getItem("isAuth");
    return isAuth === "1";
  }
};
