import React, { Fragment } from "react";
import { Formik } from "formik";
import { withRouter } from "react-router-dom";
import NonAuthFormHeader from "../../FormComponents/NonAuthFormHeader/NonAuthFormHeader";
import NonAuthFormFooter from "../../FormComponents/NonAuthFormFooter/NonAuthFormFooter";
import FormContainer from "../../FormComponents/FormContainer/FormContainer";
import SigninForm from "../Forms/SignInForm";
import { signinMockRequest, signinRequest } from "../../../server/apiRequest";
import signinHandler from "../../../server/responseHandlers/signinHandler";
import { getUrlByAlias } from "../../routes";
import { SigninSchema } from "../../validators";

function Signin({ history }) {
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
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SigninSchema}
          onSubmit={(values, { setSubmitting }) => {
            signinMockRequest(values)
              .then(response => signinHandler(response, history))
              .then(() => setSubmitting(false));
          }}
          component={SigninForm}
        />
      </FormContainer>
      <NonAuthFormFooter footerLinks={footerLinks} />
    </Fragment>
  );
}

export default withRouter(Signin);
