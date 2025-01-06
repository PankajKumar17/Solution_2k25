import React from "react";
import "./SponsorsPage.css";

function SponsorsPage() {
  return (
    <section id="sponsors-page">
      <img src="Assets/sponsers.PNg" alt="" />
      <h1>SPONSORS</h1>
      <div className="sponsors">
        <div className="img1 sponsor-name">
          <img src="Assets/sponsor-name.svg" alt="Sponsor 1" />
        </div>
        <div className="row-2">
          <div className="img2 sponsor-name">
            <img src="Assets/sponsor-name.svg" alt="Sponsor 2" />
          </div>
          <div className="img3 sponsor-name">
            <img src="Assets/sponsor-name.svg" alt="Sponsor 3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorsPage;
