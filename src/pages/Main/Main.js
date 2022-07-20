import React from "react";
import MainNav from "../Main/MainNav/MainNav";
import "./Main.css";
import Footer from "../Home/Footer/Footer";
import GoogleMapsComponent from "./GoogleMapsComponent/GoogleMapsComponent";

const Main = () => (
  <>
    <MainNav />
    <GoogleMapsComponent />
    <Footer />
  </>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
