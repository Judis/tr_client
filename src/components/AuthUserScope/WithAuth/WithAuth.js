import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthPageWrapper from "../AuthPageWrapper/AuthPageWrapper";
import { localStorageAuth } from "../../LocalStorageAuth/LocalStorageAuth";
import { getUrlByAlias } from "../../routes";

export function WithAuth(PageComponent) {
  return class extends Component {
    render() {
      if (!localStorageAuth.isAuthenticated()) {
        const redirectUrl = getUrlByAlias("signin");
        return <Redirect to={redirectUrl} />;
      }
      return (
        <AuthPageWrapper>
          <PageComponent />
        </AuthPageWrapper>
      );
    }
  };
}
