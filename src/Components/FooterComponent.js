import React from "react";
import "../App.css";
import "../Style/Footer.css";
import { Container } from "react-bootstrap";

function FooterComponent() {
  return (
    <Container fluid bg="light" className="text-center footer">
      <small>
        &copy; {new Date().getFullYear()} HistorianDB All rights reserved.
      </small>
    </Container>
  );
}
export default FooterComponent;
