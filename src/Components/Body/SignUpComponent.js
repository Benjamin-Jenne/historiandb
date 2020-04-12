import React from "react";
import "../../App.css";

import { Form, Button } from "react-bootstrap";

function SignUpComponent(props) {
  return (
    <div>
      <Form>
        <Form.Group className="Signup">
          <br />
          <br />
          <h1>Sign Up</h1>
          <br />
          <Form.Control type="text" placeholder="first name" />
          <br />
          <Form.Control type="text" placeholder="last name" />
          <br />
          <Form.Control type="email" placeholder="email" />
          <br />
          <Form.Control type="password" placeholder="password" />
          <br />
          <Button variant="dark" className="SignUpButton">
            Sign Up
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SignUpComponent;
