import React from "react";
import { withRouter } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import InputComponent from "../../FormComponents/InputComponent/InputComponent";
import ButtonComponent from "../../FormComponents/ButtonComponent/ButtonComponent";
import { SigninSchema } from "../../validators";
import { signinMockRequest } from "../../../server/apiRequest";
import signinHandler from "../../../server/responseHandlers/signinHandler";

function SigninForm({ history }) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SigninSchema}
      onSubmit={(values, { setSubmitting }) => {
        signinMockRequest(values)
          .then(response => signinHandler(response, history))
          .then(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            component={InputComponent}
            placeholder="Email"
            icon="mail"
            type="email"
            name="email"
          />
          <Field
            component={InputComponent}
            placeholder="Password"
            icon="lock"
            type="password"
            name="password"
          />
          <ButtonComponent
            icon="user"
            title="Sign In"
            type="submit"
            isSubmitting={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
}

export default withRouter(SigninForm);
