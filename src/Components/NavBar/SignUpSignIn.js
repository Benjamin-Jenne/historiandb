import React from "react";
import "../../App.css";
import "../../Style/NavBar.css";
import { Button } from "react-bootstrap";

function SignUpSignIn() {
  return (
    <div>
      <Button variant="outline-dark" className="SignInButton">
        Sign In
      </Button>
      <Button variant="dark" className="SignUpButton">
        Sign Up
      </Button>
    </div>
  );
}

export default SignUpSignIn;
