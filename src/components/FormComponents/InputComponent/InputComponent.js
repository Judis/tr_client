import React from "react";
import { Icon } from "antd";
import styles from "./InputComponent.module.css";

function InputComponent(props) {
  const { name, type, placeholder, icon } = props;
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
        type={type}
        autoComplete="off"
        name={name}
        value=""
        className={inputClass}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputComponent;
