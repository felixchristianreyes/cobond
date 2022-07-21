import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import { BrowserRouter, Link } from "react-router-dom";


function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (

    <div className="App">
      
      {/* <Home /> */}
      <Main />

    </div>
  );
}

export default App;
