/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { classNames, useScrollPosition } from "../tools";



const Navbar = () => {
  //activate sidebar
  const [sidebar, setSidebar] = useState(false);
  const [activate, setActivate] = useState([]);

  useEffect(() => {
    if (sidebar) {
      setActivate('navbar-mobile');
    } else {
      setActivate('');
    }
  }, [sidebar])

  //console.logs position of window.offsetY
  const scrollPosition = useScrollPosition();

  return (
    <header
      id="header"
      className={classNames(
        scrollPosition > 100 ? "header-scrolled fixed-top" : "fixed-top"
      )}
      data-testid="Navbar"
    >
      <div className="container d-flex align-items-center">
        <a href="/" className="logo me-auto">
          GUSBAMPS
        </a>

        <nav id="navbar" className={`navbar ${activate}`}>
          <ul>
            <li>
              <a className="nav-link scrollto" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Features
              </a>
            </li>
            <li className="dropdown">
              <a className="nav-link" href="#">
                <span>
                  Community <FaChevronDown />
                </span>
              </a>
              <ul>
                <li>
                  <a href="#">Join Discord</a>
                </li>
                <li>
                  <a href="#">Provide toilet data</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link getstarted scrollto" href="#about">
                Get Started
              </a>
            </li>
          </ul>
          <FaBars className="bi bi-list mobile-nav-toggle" onClick={() => {
            setSidebar(!sidebar);
          }}/>
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
