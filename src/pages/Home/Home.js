import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;