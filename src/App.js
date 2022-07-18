import "./App.css";
import Navbar from "./pages/Home/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./pages/Home/Hero/Hero";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import Services from "./pages/Home/Services/Services";
import Newsletter from "./pages/Home/Newsletter/Newsletter";
import Footer from "./pages/Home/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
