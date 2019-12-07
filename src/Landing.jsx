import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
const Home = props => (
  <section className="container-fluid text-white bg-dark" id="home">
    <Container>
      <Row>
        <Col>
          <h1>Joshua Kelly</h1>
          <p>Full Stack Web Developer</p>
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Button
          size="lg"
          className="mr-2"
          href="https://github.com/Josh-Kelly2015"
        >
          Github
        </Button>
        <Button
          className="ml-2"
          href="https://www.linkedin.com/in/joshua-kelly-482196185/"
          size="lg"
        >
          LinkedIn
        </Button>
      </Row>
    </Container>
  </section>
);
export default Home;
