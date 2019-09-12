import React from "react";
import { Field, Form } from "formik";
import InputComponent from "../../FormComponents/InputComponent/InputComponent";
import ButtonComponent from "../../FormComponents/ButtonComponent/ButtonComponent";

function SigninForm({ isSubmitting }) {
  return (
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
  );
}

export default SigninForm;
