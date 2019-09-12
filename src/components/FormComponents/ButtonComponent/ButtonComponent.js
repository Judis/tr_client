import React from "react";
import { Icon } from "antd";
import styles from "./ButtonComponent.module.css";

function ButtonComponent(props) {
  const { type, title, icon, isSubmitting } = props;

  return (
    <button className={styles.form_button} type={type} disabled={isSubmitting}>
      {isSubmitting && <Icon type="loading" spin />}{" "}
      {icon && <Icon type={icon} />} {title}
    </button>
  );
}

export default ButtonComponent;
