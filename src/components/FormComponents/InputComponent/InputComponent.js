import React from "react";
import { Icon } from "antd";
import styles from "./InputComponent.module.css";

function InputComponent(props) {
  const { name, type, placeholder, icon } = props;
  const inputClass = icon
    ? styles["form-input"] + " " + styles["with-prefix"]
    : styles["form-input"];

  return (
    <div className={styles["form-input-container"]}>
      {icon && (
        <span className={styles["form-input-prefix"]}>
          <Icon type={icon} className={styles["input-icon"]} />
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
