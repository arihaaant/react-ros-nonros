import React, { Component } from "react";
import {Navbar, Nav, NavDropdown, Container} from  "react-bootstrap";

class Header extends Component {
render(){
    return(
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">ROS Connection to Non ROS robot</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Get Started</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">About ROS-nonROS </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">About Us</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
   }
}

export default Header;