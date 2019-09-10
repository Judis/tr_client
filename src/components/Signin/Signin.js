import React, { Fragment } from "react";
import NonAuthFormHeader from "../FormComponents/NonAuthFormHeader/NonAuthFormHeader";
import NonAuthFormFooter from "../FormComponents/NonAuthFormFooter/NonAuthFormFooter";
import FormContainer from "../FormComponents/FormContainer/FormContainer";
import InputComponent from "../FormComponents/InputComponent/InputComponent";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponent";
import { getUrlByAlias } from "../routes";

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
        <form className="form-signin">
          <InputComponent
            icon="mail"
            name="email"
            type="email"
            placeholder="Email"
          />
          <InputComponent
            icon="lock"
            name="password"
            type="password"
            placeholder="Password"
          />
          <ButtonComponent icon="user" title="Sign In" type="button" />
        </form>
      </FormContainer>
      <NonAuthFormFooter footerLinks={footerLinks} />
    </Fragment>
  );
}

export default Signin;
