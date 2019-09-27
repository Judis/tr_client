import React, { Fragment } from "react";
import NonAuthFormHeader from "../../FormComponents/NonAuthFormHeader/NonAuthFormHeader";
import NonAuthFormFooter from "../../FormComponents/NonAuthFormFooter/NonAuthFormFooter";
import FormContainer from "../../FormComponents/FormContainer/FormContainer";
import InputField from "../../FormComponents/InputField/InputField";
import SubmitButton from "../../FormComponents/SubmitButton/SubmitButton";
import { getUrlByAlias } from "../../routes";

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
          <InputField
            icon="mail"
            name="email"
            type="email"
            placeholder="Email"
          />
          <InputField icon="user" name="user" type="text" placeholder="Name" />
          <InputField
            icon="lock"
            name="password"
            type="password"
            placeholder="Password"
          />
          <InputField
            icon="lock"
            name="password_confirmation"
            type="password"
            placeholder="Password Confirmation"
          />
          <SubmitButton icon="user" title="Sign Up" />
        </form>
      </FormContainer>
      <NonAuthFormFooter footerLinks={footerLinks} />
    </Fragment>
  );
}

export default Signup;
