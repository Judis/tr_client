import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NonAuthPageWrapper from "../NonAuthPageWrapper/NonAuthPageWrapper";
import { localStorageAuth } from "../../LocalStorageAuth/LocalStorageAuth";
import { getUrlByAlias } from "../../routes";

export function WithNonAuth(PageComponent) {
  return class extends Component {
    render() {
      if (localStorageAuth.isAuthenticated()) {
        const redirectUrl = getUrlByAlias("root");
        return <Redirect to={redirectUrl} />;
      }
      return (
        <NonAuthPageWrapper>
          <PageComponent />
        </NonAuthPageWrapper>
      );
    }
  };
}
