import React from "react";
import { Icon } from "antd";
import styles from "./InputComponent.module.css";
import InputErrorComponent from "../InputErrorComponent/InputErrorComponent";

function InputComponent({ field, form: { touched, errors }, ...props }) {
  const { placeholder, icon } = props;
  const inputClass = icon
    ? styles.form_input + " " + styles.with_prefix
    : styles.form_input;

  return (
    <div className={styles.form_input_container}>
      {icon && (
        <span className={styles.form_input_prefix}>
          <Icon type={icon} className={styles.input_icon} />
        </span>
      )}
      <input
        {...field}
        {...props}
        autoComplete="off"
        className={inputClass}
        placeholder={placeholder}
      />
      {touched[field.name] && errors[field.name] && (
        <InputErrorComponent errorText={errors[field.name]} />
      )}
    </div>
  );
}

export default InputComponent;
