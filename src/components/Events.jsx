import React from "react";
import Navbar2 from "./Navbar2";
import Footer from "./Footer"
import "./Events.css";

const Events = () => {
  const eventCategories = [
    { name: "/assets/Gaming.svg" },
    { name: "/assets/Gaming3.svg" },
    { name: "/assets/Gaming4.svg" },
    { name: "/assets/CodingEvents.svg" },{ name: "/assets/Gaming3.svg" },
    { name: "/assets/Gaming4.svg" },
    { name: "/assets/OpenEvents.svg" },{ name: "/assets/Gaming3.svg" },
    { name: "/assets/Gaming4.svg" },
    { name: "/assets/Robotics.svg" },{ name: "/assets/Gaming3.svg" },
    { name: "/assets/Gaming4.svg" },
    { name: "/assets/CyberSec.svg" },{ name: "/assets/Gaming3.svg" },
    { name: "/assets/Gaming4.svg" },
    { name: "/assets/GDXR.svg" },{ name: "/assets/Gaming3.svg" },
    { name: "/assets/Gaming4.svg" },
    { name: "/assets/ML.svg" },{ name: "/assets/Gaming3.svg" },
    { name: "/assets/Gaming4.svg" },
    { name: "/assets/EV.svg" },
  ];

  return (
    <div className="events-container">
      <Navbar2 />
      <div className="events-main">
        <div className="events-background">
        </div>

        <div className="events-title">
          <img className="event-img" src="/assets/EventsLogo.svg" alt="" />
        <div className="blur"></div>
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
