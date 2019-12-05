import React from "react";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";
const NavBar = props => (
  <Nav justify variant="tabs" className="navbar">
    <Nav.Item>
      <Nav.Link>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
      </Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link>
        <Link
          activeClass="active"
          to="bio"
          spy={true}
          smooth={true}
          duration={500}
        >
          Bio
        </Link>
      </Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link>
        <Link
          activeClass="active"
          to="myPortfolio"
          spy={true}
          smooth={true}
          duration={500}
        >
          My Portfolio
        </Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <Link
          activeClass="active"
          to="contactMe"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact Me
        </Link>
      </Nav.Link>
    </Nav.Item>
  </Nav>
);
export default NavBar;
