import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import SponsorsPage from "./components/SponsorsPage";

function App() {
  return (
    <div>
        <Navbar />
        <LandingPage />
        <AboutUs />
        <SponsorsPage />
    </div>
  );
  
}

export default App;
