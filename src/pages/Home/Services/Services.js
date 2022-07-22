/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Services.css";
import {
  BsFillLightningChargeFill,
  BsClock,
  BsFillBadgeAdFill,
  BsWatch,
} from "react-icons/bs";

const Services = () => (
  <section id="services" className="services section-bg" data-testid="Services">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Features</h2>
        <p>
          If you want to know more what our website can offer, please see the
          cards below.
        </p>
      </div>

      <div className="row">
        <div
          className="col-xl-3 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="icon-box">
            <div className="icon d-flex">
              <h4>
                Fast{" "}
                <span>
                  <BsFillLightningChargeFill />
                </span>
              </h4>
            </div>

            <p>
              Our website is so fast that you'd be able to get navigate your way
              to your preferred destination at a nick of a time
            </p>
          </div>
        </div>

        <div
          className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="icon-box">
            <div className="icon d-flex">
              <h4>
                Availability{" "}
                <span>
                  <BsClock />
                </span>
              </h4>
            </div>

            <p>
              You can guarantee that the server is running 24/7 and the website
              would be of service to you at any given time
            </p>
          </div>
        </div>

        <div
          className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="icon-box">
            <div className="icon d-flex">
              <h4>
                No Ads{" "}
                <span>
                  <BsFillBadgeAdFill />
                </span>
              </h4>
            </div>

            <p>
              Who would want ads when you are going through 5 stages of grief?
              That's why no ads. F.O.R.E.V.E.R
            </p>
          </div>
        </div>

        <div
          className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="icon-box">
            <div className="icon d-flex">
              <h4>
                Direct{" "}
                <span>
                  <BsWatch />
                </span>
              </h4>
            </div>

            <p>
              No beating around the bush. Get to your{" "}
              <a href="locator">Toilet Seat</a> now!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Services.propTypes = {};

Services.defaultProps = {};

export default Services;
