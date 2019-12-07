import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import ComputerBackground from "./Images/technics-q-c-640-480-1.jpg";
const AboutMe = props => (
  <Container fluid>
    <Row className="justify-content-center">
      <h1>About Me</h1>
    </Row>
    <Container>
      <Jumbotron className="shadow-lg">
        <Row>
          <Col lg="4">
            <img
              className="w-100 rounded-circle"
              src={ComputerBackground}
              alt="Selfieeee"
            />
          </Col>
          <Col lg="8">
            <p>
              Hey there! Thanks for visiting my website! My name is Joshua
              Kelly. As a recent graduate of Georgia Tech's Full Stack Web
              Development Boot Camp Program, web development has completely
              taken over my life. Keeping up with trends and constantly changing
              technologies has certainly become a lifestyle. Honestly tho, if it
              were any different, then I wouldn't want it. This industry
              embodies creativity and imagination at its finest. There's always
              an undying push to innovate, intense competition to be the best,
              and massive potential to change the world. I feel blessed to have
              finally found an outlet to make my mark in history.
            </p>
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
  </Container>
);
export default AboutMe;
