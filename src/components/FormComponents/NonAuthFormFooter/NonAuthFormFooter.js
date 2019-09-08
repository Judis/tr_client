import React from "react";
import { Link } from "react-router-dom";
import styles from "./NonAuthFormFooter.module.css";

function NonAuthFormFooter({ footerLinks }) {
  return (
    <div className={styles["footer-form-links"]}>
      {footerLinks.map((link, i) => {
        return (
          <Link key={i} className={styles["footer-link"]} to={link.url}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
}

export default NonAuthFormFooter;
