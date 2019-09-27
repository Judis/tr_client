import React from "react";
import styles from "./InputErrorComponent.module.css";

function InputErrorComponent({ errorText }) {
  return <p className={styles.input_error}>{errorText}</p>;
}

export default InputErrorComponent;
