import React from "react";
import "./team.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MemberCard = ({ image, name }) => (
  <div className="member-card">
    <img src={image} alt={name} className="member-image" />
    <div className="member-details">
      <h2>{name}</h2>
    </div>
  </div>
);

const teamMembers = [
  {
    name: "NABAJIT DAS",
    role: "SECRETARY",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium placeat.",
    image: "/team/nabajit-team.svg",
  },
  {
    name: "NABAJIT DAS",
    role: "SECRETARY",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam soluta.",
    image: "/team/nabajit-team.svg",
  },
];

const additionalMembers = [
  { name: "DEEPAK", image: "/team/deepak.svg" },
  { name: "DEEPAK", image: "/team/deepak.svg" },
  { name: "DEEPAK", image: "/team/deepak.svg" },
  { name: "DEEPAK", image: "/team/deepak.svg" },
  { name: "DEEPAK", image: "/team/deepak.svg" },
  { name: "DEEPAK", image: "/team/deepak.svg" },
  { name: "DEEPAK", image: "/team/deepak.svg" },
  { name: "DEEPAK", image: "/team/deepak.svg" },
  { name: "DEEPAK", image: "/team/deepak.svg" },
  { name: "DEEPAK", image: "/team/deepak.svg" },
  { name: "DEEPAK", image: "/team/deepak.svg" },
  { name: "DEEPAK", image: "/team/deepak.svg" },
];

const Team = () => (
  <div className="team-page">
    <Navbar />
    <div
      id="teamCarousel"
      className="carousel slide team-carousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {teamMembers.map((member, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="row align-items-center">
              <div className="col-md-6 text-section">
                <h1>{member.name}</h1>
                <h3>{member.role}</h3>
                <p>{member.description}</p>
              </div>
              <div className="col-md-6 image-section">
                <img
                  src={member.image}
                  alt={member.name}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#teamCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#teamCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
    <div className="Te-member-main">
      <div className="Te-member-Bg1">
        <h1 className="team-title">OUR TEAM</h1>
        <div className="member-cards-grid">
          {additionalMembers.map((member, index) => (
            <MemberCard key={index} image={member.image} name={member.name} />
          ))}
        </div>
      </div>
      <div className="Te-member-Bg2">
        <h1 className="team-title">AI-TITANS</h1>
        <div className="member-cards-grid">
          {additionalMembers.map((member, index) => (
            <MemberCard key={index} image={member.image} name={member.name} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default Team;
