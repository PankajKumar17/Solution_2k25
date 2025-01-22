import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <img src="/assets/logo.svg" alt="Solutions logo" className="solutions-logo" />
      <div className={`hamburger-button ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`main-navbar ${menuActive ? "active" : ""}`}>
        <a href="/"><img className="nav_btn_img" src="/assets/home.svg" alt="home-icon" /></a>
        <a href="./events"><img className="nav_btn_img" src="/assets/about us.svg" alt="About-us" /></a>
        <a href="./team"><img className="nav_btn_img" src="/assets/our team.svg" alt="Our-Team" /></a>
        <a href="./schedule/index.html?index=0"><img className="nav_btn_img" src="/assets/Register.svg" alt="register" /></a>
      </div>
    </nav>
  );
}

export default Navbar;
