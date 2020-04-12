import React from "react";
import "../App.css";
import "../Style/NavBar.css";
import { Navbar } from "react-bootstrap";
import UserDropDown from "../Components/NavBar/UserDropDown";
import SignUpSignIn from "../Components/NavBar/SignUpSignIn";

function NavBarContainer(props) {
  return (
    <Navbar className="navBg" variant="light" sticky="top">
      <Navbar.Brand class="navbar-brand">HistorianDB</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        {props.data.loggedIn === true ? (
          <UserDropDown {...props} />
        ) : (
          <SignUpSignIn />
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBarContainer;
