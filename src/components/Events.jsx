import React from "react";
import Navbar2 from "./Navbar2";
import Footer from "./Footer"
import "./Events.css";

const Events = () => {
  const eventCategories = [
    { name: "src/Assets/Gaming.svg" },
    { name: "src/Assets/Gaming3.svg" },
    { name: "src/Assets/Gaming4.svg" },
    { name: "src/Assets/CodingEvents.svg" },{ name: "src/Assets/Gaming3.svg" },
    { name: "src/Assets/Gaming4.svg" },
    { name: "src/Assets/OpenEvents.svg" },{ name: "src/Assets/Gaming3.svg" },
    { name: "src/Assets/Gaming4.svg" },
    { name: "src/Assets/Robotics.svg" },{ name: "src/Assets/Gaming3.svg" },
    { name: "src/Assets/Gaming4.svg" },
    { name: "src/Assets/CyberSec.svg" },{ name: "src/Assets/Gaming3.svg" },
    { name: "src/Assets/Gaming4.svg" },
    { name: "src/Assets/GDXR.svg" },{ name: "src/Assets/Gaming3.svg" },
    { name: "src/Assets/Gaming4.svg" },
    { name: "src/Assets/ML.svg" },{ name: "src/Assets/Gaming3.svg" },
    { name: "src/Assets/Gaming4.svg" },
    { name: "src/Assets/EV.svg" },
  ];

  return (
    <div className="events-container">
      <Navbar2 />
      <div className="events-main">
        <div className="events-background">
        </div>

        <div className="events-title">
          <img className="event-img" src="src/Assets/EventsLogo.svg" alt="" />
        </div>
        <div className="events-grid">
            <div className="event-grid-bg"></div>
          {eventCategories.map((category, index) => (
            <div key={index} className="event-card">
              <img src={category.name} alt="" />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Events;
