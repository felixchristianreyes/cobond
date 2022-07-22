import React from "react";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="footer-newsletter">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h4>Join Our Newsletter</h4>
          <p>
            Subscribe to know about the latest news
          </p>
          <form action="" method="post">
            <input type="email" name="email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  </div>
);

Newsletter.propTypes = {};

Newsletter.defaultProps = {};

export default Newsletter;
