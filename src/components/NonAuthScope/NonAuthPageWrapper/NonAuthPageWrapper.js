import React from "react";
import { Row, Col } from "antd";
import styles from "./NonAuthPageWrapper.module.css";

function NonAuthPageWrapper({ children }) {
  return (
    <Row type="flex" justify="space-around" align="middle">
      <Col xl={6} lg={9} md={12} sm={12} xs={18}>
        <div className={styles.non_auth_logo_container}>
          <img
            className={styles.non_auth_logo}
            src="/img/logo.svg"
            alt="Logo"
          />
        </div>
        {children}
      </Col>
    </Row>
  );
}

export default NonAuthPageWrapper;
