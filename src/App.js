import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/Home/Home";


function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (

    <div className="App">
      
      <Home />

    </div>
  );
}

export default App;
