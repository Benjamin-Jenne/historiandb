import React from "react";
import "../../App.css";
import "../../Style/NavBar.css";
import { Navbar, NavDropdown } from "react-bootstrap";

function UserDropDown(props) {
  const greeting = "Hello, ";
  const LoginTitle = greeting.concat(props.data.userFirst);
  return (
    <div>
      <Navbar.Text>
        <i class="far fa-user fa-lg" style={{ color: "#000000" }}></i>
      </Navbar.Text>
      <NavDropdown
        className="navDropDown"
        title={LoginTitle}
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default UserDropDown;
