import React from "react";
import styles from "./InputErrorMessage.module.css";

function InputErrorMessage({ errorText }) {
  return <p className={styles.input_error}>{errorText}</p>;
}

export default InputErrorMessage;
