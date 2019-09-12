import * as Yup from "yup";

export const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("invalid email")
    .required("can't be blank"),
  password: Yup.string()
    .min(8, "minimum 8 characters")
    .required("can't be blank")
});
