import React from "react";
import styles from "./FormContainer.module.css";

function FormContainer(props) {
  return <div className={styles.form_container}>{props.children}</div>;
}

export default FormContainer;
