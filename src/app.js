import React, { useState, useEffect } from "react";

import { Container, Form, Row, Col } from "react-bootstrap";

import "bootstrap/scss/bootstrap.scss";

const App = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    window.parent.postMessage("message", "http://localhost:3000");
  });

  return (
    <Container>
      <div className="mt-3 bg-light">
        <Row className="justify-content-center h-100 p-5">
          <Col md={5}>
            <Form.Group
              className="mb-3"
              controlId="formBasicValue"
              className="mb-3 align-self-stretch mx-5"
            >
              <Form.Label className="text-dark">Value</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Value"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default App;
