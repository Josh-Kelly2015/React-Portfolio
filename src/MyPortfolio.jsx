import React from "react";
import ComputerBackground from "./Images/technics-q-c-640-480-1.jpg";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
const MyPortfolio = props => (
  <section className="container-fluid text-white bg-dark" id="myPortfolio">
    <Container>
      <Row className="justify-content-center">
        <h1>My Portfolio</h1>
      </Row>
      <Carousel>
        <Carousel.Item>
          <div class="cardContainer">
            <div class="card">
              <input type="checkbox" name="" />
              <div className="toggle">+</div>
              <img
                src={ComputerBackground}
                className="d-block w-100 imgBx"
                alt="RPG Game"
              />
              <Carousel.Caption className="content">
                <h1>Evolve Business</h1>
                {/* <p>
                  A car maintenance and overall car health management dashboard
                </p> */}
                <Button
                  variant="primary"
                  href="https://finalprojectthree.herokuapp.com/"
                  size="lg"
                >
                  Heroku
                </Button>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="cardContainer">
            <div class="card">
              <input type="checkbox" name="" />
              <div className="toggle">+</div>
              <img
                src={ComputerBackground}
                className="d-block w-100 imgBx"
                alt="RPG Game"
              />
              <Carousel.Caption className="content">
                <h1>Car Med</h1>
                {/* <p>
                  A car maintenance and overall car health management dashboard
                </p> */}
                <Button
                  variant="primary"
                  href="https://afternoon-wave-65413.herokuapp.com/"
                  size="lg"
                >
                  Heroku
                </Button>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div class="cardContainer">
            <div class="card">
              <input type="checkbox" name="" />
              <div className="toggle">+</div>
              <img
                src={ComputerBackground}
                className="d-block w-100 imgBx"
                alt="RPG Game"
              />
              <Carousel.Caption className="content">
                <h1>T.O.A.D</h1>
                {/* <p>
                  A car maintenance and overall car health management dashboard
                </p> */}
                <Button
                  variant="primary"
                  href="https://afternoon-wave-65413.herokuapp.com/"
                  size="lg"
                >
                  Heroku
                </Button>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  </section>
);
export default MyPortfolio;
