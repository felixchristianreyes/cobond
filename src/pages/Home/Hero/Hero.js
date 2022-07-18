import React from "react";
import "./Hero.css";


const Hero = () => (
  <section id="hero" className="d-flex align-items-center" data-testid="Hero">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1>One-stop solution for those goosebumps</h1>
          <h2>
            Community generated public restrooms. <br />
            For people who have frequent calls with nature.
          </h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" className="nav-link btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </div>
        <div
          className="col-lg-6 order-1 order-lg-2 hero-img"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src="https://png2.cleanpng.com/sh/91abca9819e4008c06400ee7dc1b38ab/L0KzQYq3VsA5N5x5jpH0aYP2gLBuTfNtcaEyeeR9LYDygsXogvxmNZ9qjOl4cnuwd8PokPhqa6Qye9H2cIX3dcO0ifNwdqQyfORqd3nxd37pggRpepD0hZ99b3nvdcW0lQJidqR1eeRuboSwcb73TgBvb15ohNt5LUXmdrS8VcMyPmE9UKcBLkm5Q4K6UMQ4OWY7SKI9MEe4Q4SCVcQveJ9s/kisspng-clip-art-portable-network-graphics-computer-icons-drawing-bathroom-toilet-transparent-amp-png-clip-5cfc5531608856.9631304715600407533954.png"
            className="img-fluid animated"
            alt="toilet"
          />
        </div>
      </div>
    </div>
  </section>
);

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
