import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";

import "./Activity.css";

const Activity = () => {
  const [show, setShow] = useState(false);

  return (
    <Col>
      <Col xs={6} className="activity-btn">
        <Button onClick={() => setShow(true)}>Activity Completed</Button>
      </Col>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
          <Toast.Body className="activity-body">
            Successfully you have done your activities
          </Toast.Body>
        </Toast>
      </Col>
    </Col>
  );
};

export default Activity;
