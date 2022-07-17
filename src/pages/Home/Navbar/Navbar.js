/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import select from "../tools";
import "./Navbar.css";

const Navbar = () => {
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  return (
    <header id="header" class="fixed-top ">
      <div class="container d-flex align-items-center">

        <a href="index.html" class="logo me-auto">
          <img src="assets/img/logo.png" alt="" class="img-fluid" />tests
        </a>

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a class="scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a class="scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a class="scrollto" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a class="scrollto" href="#team">
                Team
              </a>
            </li>
            <li class="dropdown">
              <a href="#">
                <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li class="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i class="bi bi-chevron-right"></i>
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
              <a class=" scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a class="getstarted scrollto" href="#about">
                Get Started
              </a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
