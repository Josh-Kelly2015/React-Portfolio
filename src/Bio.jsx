import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import ComputerBackground from "./Images/technics-q-c-640-480-1.jpg";
const AboutMe = props => (
  <Container fluid className=" bg-light">
    <Row className="justify-content-center">
      <h1>About Me</h1>
    </Row>
    <Jumbotron>
      <Row>
        <Col lg="4">
          <img
            className="w-100 rounded-circle"
            src={ComputerBackground}
            alt="Selfieeee"
          />
        </Col>
        <Col lg="8">
          <h5>
            Natural logical thinker, inspired to pursue a greater cause.
            Currently working as a full-time employee for Telecom Innovations,
            as a low-voltage-technician. Experienced in HTML5, CSS3, Javascript,
            JQuery, Bootstrap, ReactJs, Node Js, MySQL, MongoDB, Express and
            Handlebars JS. Superior analyst and critical thinker searching for a
            position in frontend development.
          </h5>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Skills</h3>
          <ListGroup>
            <Card.Header>
              React.JS, Handlebars, BootStrap, Flex-Box, Media Queries
            </Card.Header>
            <Card.Header> HTML5, JavaScript, CSS3, jQuery</Card.Header>
            <Card.Header> MongoDB, MySQL, Mongoose, Sequelize</Card.Header>
            <Card.Header>Node Js, Express, Axios</Card.Header>
            <Card.Header>RESTful API's, AJAX, JSON, GIT</Card.Header>
            <Card.Header>
              MERN Stack, Postman, Robo3T, Adobe XD, GitHub, Heroku
            </Card.Header>
          </ListGroup>
        </Col>

        <Col>
          <h3>Goals</h3>
          <ListGroup>
            <Card.Header> Experiment with CSS animations</Card.Header>
            <Card.Header>Develop deeper JavaScript skills</Card.Header>
            <Card.Header>Always learn, Always Grow</Card.Header>
            <Card.Header>Attend Local Networking Events</Card.Header>
            <Card.Header>Study Angular, Vue, Python, C#</Card.Header>
          </ListGroup>
        </Col>
      </Row>
    </Jumbotron>
  </Container>
);
export default AboutMe;
