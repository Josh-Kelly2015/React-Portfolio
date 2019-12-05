import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ComputerBackground from "../Images/technics-q-c-640-480-1.jpg";
const AboutMe = props => (
  <section className="container-fluid bg-white" id="bio">
    <div className="container">
      <div className="row justify-content-center mb-3 border-bottom">
        <h1>About Me</h1>
      </div>
      <div className="jumbotron shadow-lg p-3">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-5 col-md-6 ">
            <img
              className="img-thumbnail"
              src={ComputerBackground}
              alt="Selfieeee"
            />
          </div>
          <div className="col-xl-8 col-lg-12 col-md-12 m-auto">
            <p>
              Natural logical thinker, inspired to pursue a greater cause.
              Currently working as a full-time employee for Telecom Innovations,
              as a low-voltage-technician. Experienced in HTML5, CSS3,
              Javascript, JQuery, Bootstrap, ReactJs, Node Js, MySQL, MongoDB,
              Express and Handlebars JS. Superior analyst and critical thinker
              searching for a position in frontend development.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="row justify-content-center mb-2 border-bottom">
              <h2>Skills</h2>
            </div>
            <ListGroup>
              <ListGroup.Item>React.JS, Handlebars, HTML</ListGroup.Item>
              <ListGroup.Item>
                CSS, BootStrap, Material UI, Flexbox, Media Queries
              </ListGroup.Item>
              <ListGroup.Item>JavaScript, jQuery</ListGroup.Item>
              <ListGroup.Item>
                REST, Node.js, Express, Axios, Mongoose, Sequelize
              </ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              <ListGroup.Item>MongoDB, MySQL</ListGroup.Item>
              <ListGroup.Item>MVC Paradigm</ListGroup.Item>
              <ListGroup.Item>
                Postman, Robo3T, MongoDB Compass, VSCode, AdobeXD, GitHub
              </ListGroup.Item>
              <ListGroup.Item>Heroku, GitHub</ListGroup.Item>
              <ListGroup.Item>
                Quick Learner, Adaptable, Natural Leader
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col">
            <div className="row justify-content-center mb-2 border-bottom">
              <h2>Goals</h2>
            </div>
            <ListGroup>
              <ListGroup.Item>Experiment with CSS animations</ListGroup.Item>
              <ListGroup.Item>
                CSS, BootStrap, Material UI, Flexbox, Media Queries
              </ListGroup.Item>
              <ListGroup.Item>Polish JavaScript skills</ListGroup.Item>
              <ListGroup.Item>Always learn, Always Grow</ListGroup.Item>
              <ListGroup.Item>Attend Local Networking Events</ListGroup.Item>
              <ListGroup.Item>Study Angular, Vue, Python, C#</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default AboutMe;
