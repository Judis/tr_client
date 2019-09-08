import React from "react";
import styles from "./NonAuthFormHeader.module.css";

function NonAuthFormHeader({ title }) {
  return (
    <div className={styles["form-header"]}>
      <p>{title}</p>
    </div>
  );
}

export default NonAuthFormHeader;
