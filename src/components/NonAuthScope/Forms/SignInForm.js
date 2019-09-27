import React from "react";
import { withRouter } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import SubmitButton from "../../FormComponents/SubmitButton/SubmitButton";
import InputField from "../../FormComponents/InputField/InputField";
import { signinMock } from "../../../api/signinRequest";

function SigninForm({ history }) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) =>
        signinMock(values, history, setSubmitting)
      }
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            component={InputField}
            placeholder="Email"
            icon="mail"
            type="email"
            name="email"
          />
          <Field
            component={InputField}
            placeholder="Password"
            icon="lock"
            type="password"
            name="password"
          />
          <SubmitButton
            icon="user"
            title="Sign In"
            isSubmitting={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
}

export default withRouter(SigninForm);
