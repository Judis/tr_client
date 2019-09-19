import React, { Fragment } from "react";
import NonAuthFormHeader from "../../FormComponents/NonAuthFormHeader/NonAuthFormHeader";
import NonAuthFormFooter from "../../FormComponents/NonAuthFormFooter/NonAuthFormFooter";
import FormContainer from "../../FormComponents/FormContainer/FormContainer";
import InputField from "../../FormComponents/InputField/InputField";
import SubmitButton from "../../FormComponents/SubmitButton/SubmitButton";
import { getUrlByAlias } from "../../routes";

function RestorePassword() {
  const footerLinks = [
    {
      url: getUrlByAlias("signin"),
      title: "Sign In"
    },
    {
      url: getUrlByAlias("signup"),
      title: "Sign Up"
    }
  ];

  return (
    <Fragment>
      <NonAuthFormHeader title="Forgot Password?" />
      <FormContainer>
        <form className="form-password-restore">
          <InputField
            icon="mail"
            name="email"
            type="email"
            placeholder="Email"
          />
          <SubmitButton icon="user" title="Restore Password" />
        </form>
      </FormContainer>
      <NonAuthFormFooter footerLinks={footerLinks} />
    </Fragment>
  );
}

export default RestorePassword;
