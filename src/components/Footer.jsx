import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="lamp">
            <img src="src/Assets/lamp.svg" alt="" />
        </div>
      <div className="above">
        <div className="header-text">
            There will be great battles ahead. Only the Samurai will remain standing.
        </div>
        <div className="line"></div>
        <div className="footer-content">
            <div className="contact-section">
            <h2>CONTACT US</h2>
            <div className="contact-details">
                <div className="contact-card">
                    <img src="src/Assets/nabajit.svg" alt="" />
                    <h2>Nabjit Das</h2>
                    <p> +91_8509442084</p>
                </div>
                <div className="contact-card">
                    <img src="src/Assets/nisha.svg" alt="" />
                    <h2>Nisha Dhaka</h2>
                    <p>+91_7015797784</p>
                </div>
            </div>
            </div>
            <div className="samurai-image">
                <img src="src/Assets/footer.svg" alt="Samurai" />
            </div>
        </div>
        <div className="line"></div>
        <div className="social-media">
            <h3>Connect with us on:</h3>
            <div className="icons">
                <a href="https://www.instagram.com/aittechnicalboard?igsh=bGM3MTh4NTBnYWVq"><img src="src/Assets/insta.svg" alt="" /></a>
                <a href="https://www.linkedin.com/company/ait-technical-board/"><img src="src/Assets/linkedin.svg" alt="" /></a>
                <a href="https://www.instagram.com/aittechnicalboard?igsh=bGM3MTh4NTBnYWVq"><img src="src/Assets/fb.svg" alt="" /></a>
                <a href="https://www.linkedin.com/company/ait-technical-board/"><img src="src/Assets/location.svg" alt="" /></a>
            </div>
        </div>
        <div className="footer-note">Made with love Technical Board.</div>
      </div>
    </div>
  );
};

export default Footer;
