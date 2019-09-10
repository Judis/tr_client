import React from "react";
import styles from "./NonAuthFormHeader.module.css";

function NonAuthFormHeader({ title }) {
  return (
    <div className={styles.form_header}>
      <p className={styles.form_header_text}>{title}</p>
    </div>
  );
}

export default NonAuthFormHeader;
