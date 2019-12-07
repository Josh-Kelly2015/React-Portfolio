import React from "react";
import ComputerBackground from "./Images/technics-q-c-640-480-1.jpg";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const MyPortfolio = props => (
  <Container fluid>
    <Row className="justify-content-center">
      <h1>My Portfolio</h1>
    </Row>
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            src={ComputerBackground}
            className="d-block w-100"
            alt="RPG Game"
          />
          <Carousel.Caption>
            <h1>Evolve Business</h1>
            <p>Helping businesses over come innefficincies</p>
            <Button
              variant="primary"
              href="https://finalprojectthree.herokuapp.com/"
              size="lg"
            >
              Heroku
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={ComputerBackground}
            className="d-block w-100"
            alt="RPG Game"
          />
          <Carousel.Caption>
            <h1>Car Med</h1>
            <p>A car maintenance and overall car health management dashboard</p>
            <Button
              variant="primary"
              href="https://afternoon-wave-65413.herokuapp.com/"
              size="lg"
            >
              Heroku
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={ComputerBackground}
            className="d-block w-100"
            alt="RPG Game"
          />
          <Carousel.Caption>
            <h1>T.O.A.D</h1>
            <p>An app to help managers assign employees to projects</p>
            <Button
              variant="primary"
              href="https://afternoon-wave-65413.herokuapp.com/"
              size="lg"
            >
              Heroku
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  </Container>
);
export default MyPortfolio;
