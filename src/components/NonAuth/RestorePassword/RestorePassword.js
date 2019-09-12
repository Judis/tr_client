import React, { Fragment } from "react";
import NonAuthFormHeader from "../../FormComponents/NonAuthFormHeader/NonAuthFormHeader";
import NonAuthFormFooter from "../../FormComponents/NonAuthFormFooter/NonAuthFormFooter";
import FormContainer from "../../FormComponents/FormContainer/FormContainer";
import InputComponent from "../../FormComponents/InputComponent/InputComponent";
import ButtonComponent from "../../FormComponents/ButtonComponent/ButtonComponent";
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
          <InputComponent
            icon="mail"
            name="email"
            type="email"
            placeholder="Email"
          />
          <ButtonComponent icon="user" title="Restore Password" type="button" />
        </form>
      </FormContainer>
      <NonAuthFormFooter footerLinks={footerLinks} />
    </Fragment>
  );
}

export default RestorePassword;
