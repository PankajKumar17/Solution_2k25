import React from "react";
import Navbar2 from "./Navbar2";
import Footer from "./Footer"
import "./events.css";

const Events = () => {
  const eventCategories = [
    { name: "Assets/Gaming.svg" },
    { name: "Assets/Gaming3.svg" },
    { name: "Assets/Gaming4.svg" },
    { name: "Assets/CodingEvents.svg" },{ name: "Assets/Gaming3.svg" },
    { name: "Assets/Gaming4.svg" },
    { name: "Assets/OpenEvents.svg" },{ name: "Assets/Gaming3.svg" },
    { name: "Assets/Gaming4.svg" },
    { name: "Assets/Robotics.svg" },{ name: "Assets/Gaming3.svg" },
    { name: "Assets/Gaming4.svg" },
    { name: "Assets/CyberSec.svg" },{ name: "Assets/Gaming3.svg" },
    { name: "Assets/Gaming4.svg" },
    { name: "Assets/GDXR.svg" },{ name: "Assets/Gaming3.svg" },
    { name: "Assets/Gaming4.svg" },
    { name: "Assets/ML.svg" },{ name: "Assets/Gaming3.svg" },
    { name: "Assets/Gaming4.svg" },
    { name: "Assets/EV.svg" },
  ];

  return (
    <div className="events-container">
      <Navbar2 />
      <div className="events-main">
        <div className="events-background">
        </div>

        <div className="events-title">
          <img className="event-img" src="Assets/EventsLogo.svg" alt="" />
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
