import React from "react";
import "./team.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const teamMembers = [
  {
    name: "NABAJIT DAS",
    role: "SECRETARY",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium placeat.",
    image: "/assets/nabajit-team.svg",
  },
  {
    name: "NISHA DHAKA",
    role: "TREASURER",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam soluta.",
    image: "/assets/nabajit-team.svg",
  },
];

const Team = () => {
  return (
    <div>
      <Navbar />
      <div className="team-carousel-container">
        <div id="teamCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#teamCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
            {teamMembers.map((member, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="row align-items-center">
                  {/* Text Section */}
                  <div className="col-md-6 text-section">
                    <h1>{member.name}</h1>
                    <h3>{member.role}</h3>
                    <p>{member.description}</p>
                  </div>

                  {/* Image Section */}
                  <div className="col-md-6 image-section">
                    <img
                      src={member.image}
                      className="img-fluid"
                      alt={`Portrait of ${member.name}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide="prev"
            aria-label="Previous Slide"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide="next"
            aria-label="Next Slide"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Optional TE Member Section */}
      <div className="te-member">
        <img src="/assets/flame-bg.svg" alt="Flame Background" />
      </div>

      <Footer />
    </div>
  );
};

export default Team;
