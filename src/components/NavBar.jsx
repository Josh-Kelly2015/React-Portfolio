import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const NavBar = props => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Joshua Kelly</Navbar.Brand>
    <Navbar.Toggle areia-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/bio">Bio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio">My Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact"> Contact Me</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
