import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./MainNav.css";
import LoginRegister from "../LoginRegisterModal/LoginRegisterModal";

const MainNav = () => {
  return (
    <>
      <Navbar
        sticky="top"
        bg="dark"
        variant="dark"
        expand="lg"
        datatest-id="MainNav"
        className="navbar"
      >
        <Container>
          <Navbar.Brand href="/">GUSBAMPS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown
                variant="light"
                title="Community"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Join Discord
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Propose Location
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <LoginRegister />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

MainNav.propTypes = {};

MainNav.defaultProps = {};

export default MainNav;
