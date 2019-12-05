import React from "react";
import ComputerBackground from "../Images/technics-q-c-640-480-1.jpg";
import Carousel from "react-bootstrap/Carousel";
const MyPortfolio = props => (
  <section class="container-fluid text-white" id="myPortfolio">
    <div className="container">
      <div class="row justify-content-center mb-3 border-bottom">
        <h1>My Portfolio</h1>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ComputerBackground}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Evolve Business</h3>
            <p>Full Stack MERN app</p>
            <p>Manage an entire business inside one app!</p>
            <a
              class="btn btn-primary btn-lg"
              href="https://finalprojectthree.herokuapp.com/"
              role="button"
            >
              Heroku
            </a>
            <a
              class="btn btn-primary btn-lg btn-dark text-white"
              href="https://github.com/Josh-Kelly2015/2kBusiness"
              role="button"
            >
              GitHub
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ComputerBackground}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Car Med</h3>
            <p>A car maintenance and overall car health management dashboard</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Heroku
            </a>
            <a
              class="btn btn-primary btn-lg btn-dark text-white"
              href="https://github.com/Josh-Kelly2015/Car-Med"
              role="button"
            >
              GitHub
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ComputerBackground}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>T.O.A.D</h3>
            <p>A bold lunge in merging economics with code</p>
            <a
              class="btn btn-primary btn-lg"
              href="https://afternoon-wave-65413.herokuapp.com/"
              role="button"
            >
              Heroku
            </a>
            <a
              class="btn btn-primary btn-lg btn-dark text-white"
              href="https://github.com/Josh-Kelly2015/TOAD"
              role="button"
            >
              GitHub
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </section>
);
export default MyPortfolio;
