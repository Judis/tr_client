import React from "react";
import { Route } from "react-router-dom";
import { Row, Col } from "antd";
import styles from "./NonAuthPages.module.css";

function NonAuthPages({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (
        <Row type="flex" justify="space-around" align="middle">
          <Col xl={6} lg={9} md={12} sm={12} xs={18}>
            <div className={styles["non-auth-logo-container"]}>
              <img
                className={styles["non-auth-logo"]}
                src="/img/logo.svg"
                alt="Logo"
              />
            </div>
            <Component />
          </Col>
        </Row>
      )}
    />
  );
}

export default NonAuthPages;
