import React from "react";
import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";

function HowItWorks() {
  return (
    <Container className="text-center HowItWorks">
      <Row className="mt-5">
        <Col xs={12} md={4}>
          <i class="far fa-user fa-3x"></i>
          <h2>Create Account</h2>
          <hr></hr>
          <p>Permanently store your references in our database.</p>
          <br />
          <br />
          <br />
        </Col>
        <Col xs={12} md={4}>
          <i class="far fa-bookmark fa-3x"></i>
          <h2>Reference</h2>
          <hr></hr>
          <p>Cite a reference with a date and some keywords.</p>
          <br />
          <br />
          <br />
        </Col>
        <Col xs={12} md={4}>
          <i class="fas fa-search fa-3x"></i>
          <h2>Search</h2>
          <hr></hr>
          <p>Search your references based on keywords</p>
          <br />
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
}

export default HowItWorks;
