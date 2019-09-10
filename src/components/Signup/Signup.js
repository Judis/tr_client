import React, { Fragment } from "react";
import NonAuthFormHeader from "../FormComponents/NonAuthFormHeader/NonAuthFormHeader";
import NonAuthFormFooter from "../FormComponents/NonAuthFormFooter/NonAuthFormFooter";
import FormContainer from "../FormComponents/FormContainer/FormContainer";
import InputComponent from "../FormComponents/InputComponent/InputComponent";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponent";
import { getUrlByAlias } from "../routes";

function Signup() {
  const footerLinks = [
    {
      url: getUrlByAlias("signin"),
      title: "Sign In"
    },
    {
      url: getUrlByAlias("pass_restore"),
      title: "Forgot Password?"
    }
  ];

  return (
    <Fragment>
      <NonAuthFormHeader title="Sign Up" />
      <FormContainer>
        <form className="form-signup">
          <InputComponent
            icon="mail"
            name="email"
            type="email"
            placeholder="Email"
          />
          <InputComponent
            icon="user"
            name="user"
            type="text"
            placeholder="Name"
          />
          <InputComponent
            icon="lock"
            name="password"
            type="password"
            placeholder="Password"
          />
          <InputComponent
            icon="lock"
            name="password_confirmation"
            type="password"
            placeholder="Password Confirmation"
          />
          <ButtonComponent icon="user" title="Sign Up" type="button" />
        </form>
      </FormContainer>
      <NonAuthFormFooter footerLinks={footerLinks} />
    </Fragment>
  );
}

export default Signup;
