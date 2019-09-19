import React from "react";
import { localStorageAuth } from "../../LocalStorageAuth/LocalStorageAuth";

function AuthPageWrapper({ children }) {
  const signoutHandler = () => {
    localStorageAuth.signout();
    window.location.reload();
  };

  return (
    <div>
      <p>
        User logged in <a onClick={signoutHandler}>Log out</a>
      </p>
      {children}
    </div>
  );
}

export default AuthPageWrapper;
