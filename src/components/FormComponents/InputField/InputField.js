import React from "react";
import { Icon } from "antd";
import styles from "./InputField.module.css";
import InputErrorMessage from "../InputErrorMessage/InputErrorMessage";

function InputField({
  field,
  form: { touched, errors },
  placeholder,
  icon,
  type
}) {
  const inputClass = icon
    ? styles.form_input + " " + styles.with_prefix
    : styles.form_input;
  const showError = touched[field.name] && errors[field.name];

  return (
    <div className={styles.form_input_container}>
      {icon && (
        <span className={styles.form_input_prefix}>
          <Icon type={icon} className={styles.input_icon} />
        </span>
      )}
      <input
        {...field}
        type={type}
        autoComplete="off"
        className={inputClass}
        placeholder={placeholder}
      />
      {showError && <InputErrorMessage errorText={errors[field.name]} />}
    </div>
  );
}

export default InputField;
