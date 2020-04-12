import React from "react";
import "../../App.css";
import "../../Style/SignIn.css";

import { Form, Button } from "react-bootstrap";

function SignInComponent(props) {
  return (
    <div>
      <Form>
        <Form.Group className="Signup">
          <br />
          <br />
          <h1>Sign In</h1>
          <br />
          <Form.Control type="email" placeholder="email" />
          <br />
          <Form.Control type="password" placeholder="password" />
          <br />
          <Button variant="outline-dark" className="SignInButton">
            Sign In
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SignInComponent;
