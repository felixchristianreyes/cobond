import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbarbs from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
  return (
    <Navbarbs bg="light" expand="lg">
      <Container>
        <Navbarbs.Brand href="#home">
          <img src="./images/logo.png" alt="logo"></img>
          
        </Navbarbs.Brand>
        <Navbarbs.Toggle aria-controls="basic-navbar-nav" />
        <Navbarbs.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbarbs.Collapse>
      </Container>
    </Navbarbs>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
