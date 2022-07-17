/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import select from "../tools";
import PropTypes from 'prop-types';
import "./Navbar.css";

const Navbar = () => {
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classNameList.add("header-scrolled");
      } else {
        selectHeader.classNameList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  return (
    <header id="header" className="fixed-top" data-testid="Navbar">
      <div className="container d-flex align-items-center">

        <a href="index.html" className="logo me-auto">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />tests
        </a>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="scrollto" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="scrollto" href="#team">
                Team
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a className=" scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="#about">
                Get Started
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
