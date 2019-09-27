import React from "react";
import { Icon } from "antd";
import styles from "./SubmitButton.module.css";

function SubmitButton(props) {
  const { title, icon, isSubmitting } = props;

  return (
    <button
      className={styles.form_button}
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting && <Icon type="loading" spin />}{" "}
      {icon && <Icon type={icon} />} {title}
    </button>
  );
}

export default SubmitButton;
