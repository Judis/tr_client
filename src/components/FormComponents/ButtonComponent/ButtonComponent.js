import React from "react";
import { Icon } from "antd";
import styles from "./ButtonComponent.module.css";

function ButtonComponent(props) {
  const { type, title, icon } = props;

  return (
    <button className={styles.form_button} type={type}>
      {icon && <Icon type={icon} />}
      {title}
    </button>
  );
}

export default ButtonComponent;
