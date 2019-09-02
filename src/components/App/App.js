import React from 'react';
import NonAuthForm from '../NonAuthForm/NonAuthForm';
import {LOGO_URL} from "../../util/const";
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div>
      <Row
        type="flex"
        justify="space-around"
        align="middle"
      >
        <Col
          className="content-col"
          xl={6}
          lg={9}
          md={9}
          sm={12}
          xs={18}
        >
          <div className="logo-container">
            <img
              src={LOGO_URL}
              alt="Logo"
            />
          </div>
          <NonAuthForm />
        </Col>
      </Row>
    </div>
  );
};

export default App;
