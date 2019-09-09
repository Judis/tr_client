import React from "react";
import { Link } from "react-router-dom";
import styles from "./NonAuthFormFooter.module.css";

function NonAuthFormFooter({ footerLinks }) {
  return (
    <div className={styles.footer_form_links}>
      {footerLinks.map((link, i) => {
        return (
          <Link key={i} className={styles.footer_link} to={link.url}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
}

export default NonAuthFormFooter;
