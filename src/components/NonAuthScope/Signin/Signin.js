import React, { Fragment } from "react";
import NonAuthFormHeader from "../../FormComponents/NonAuthFormHeader/NonAuthFormHeader";
import NonAuthFormFooter from "../../FormComponents/NonAuthFormFooter/NonAuthFormFooter";
import FormContainer from "../../FormComponents/FormContainer/FormContainer";
import SigninForm from "../Forms/SignInForm";
import { getUrlByAlias } from "../../routes";

function Signin() {
  const footerLinks = [
    {
      url: getUrlByAlias("signup"),
      title: "Sign Up"
    },
    {
      url: getUrlByAlias("pass_restore"),
      title: "Forgot Password?"
    }
  ];

  return (
    <Fragment>
      <NonAuthFormHeader title="Sign In" />
      <FormContainer>
        <SigninForm />
      </FormContainer>
      <NonAuthFormFooter footerLinks={footerLinks} />
    </Fragment>
  );
}

export default Signin;
