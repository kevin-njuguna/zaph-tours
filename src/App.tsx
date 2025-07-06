import "./App.css";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
//import { Typography } from "@mui/material";
import Home from "./pages/Home";
import TripTypes from "./pages/TripTypes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="destinations">
        <Destinations />
      </section>
      <section id="trip-types">
        <TripTypes />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
