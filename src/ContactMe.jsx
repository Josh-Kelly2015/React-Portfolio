import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
const ContactMe = props => (
  <Container fluid className="bg-light">
    <Row className="justify-content-center">
      <h1>Contact Me</h1>
    </Row>
    <Jumbotron className="shadow-lg">
      <form className="needs-validation " novalidate>
        <Row>
          <Col>
            <label for="validationCustom01">First name</label>
            <textarea
              className="form-control"
              id="validationTextarea"
              placeholder="John"
              required
            ></textarea>
            <div className="valid-feedback">Looks good!</div>
          </Col>
          <Col>
            <label for="validationCustom02">Last name</label>
            <textarea
              className="form-control"
              id="validationTextarea"
              placeholder="Doe"
              required
            ></textarea>
            <div className="valid-feedback">Looks good!</div>
          </Col>
        </Row>

        <Row>
          <Col>
            <label for="validationCustom03">Email</label>
            <textarea
              className="form-control"
              id="validationTextarea"
              placeholder="example123@domain.com "
              required
            ></textarea>
            <div className="invalid-feedback">
              Please provide a valid Email Address
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <label for="validationTextarea">Message</label>
            <textarea
              className="form-control"
              id="validationTextarea"
              placeholder="Click here to begin typing... "
              required
            ></textarea>
            <div className="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Button variant="primary">Submit form</Button>
        </Row>
      </form>
    </Jumbotron>
  </Container>
);
export default ContactMe;
