import React from "react";
import { Button, Form } from "react-bootstrap";

const RegistrationForm = () => {
  return (
    <div className="col-md-4 text-center rounded shadow">
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name..."
            required="true"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required="true"
          />
        </Form.Group>
        <Form.Group controlId="formBasicDate">
          <Form.Label>Select Time</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter your name..."
            required="true"
          />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Optional" />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Control type="text" placeholder="" required="true" />
        </Form.Group>

        <Button variant="primary" className="btn-block" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
