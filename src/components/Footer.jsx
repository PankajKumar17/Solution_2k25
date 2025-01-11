import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="lamp">
            <img src="Assets/lamp.svg" alt="" />
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
                    <img src="Assets/nabajit.svg" alt="" />
                </div>
                <div className="contact-card">
                    <img src="Assets/nisha.svg" alt="" />
                </div>
            </div>
            </div>
            <div className="samurai-image">
                <img src="Assets/footer.svg" alt="Samurai" />
            </div>
        </div>
        <div className="line"></div>
        <div className="social-media">
            <h3>Connect with us on:</h3>
            <div className="icons">
                <img src="Assets/insta.svg" alt="" />
                <img src="Assets/linkedin.svg" alt="" />
                <img src="Assets/fb.svg" alt="" />
                <img src="Assets/location.svg" alt="" />
            </div>
        </div>
        <div className="footer-note">Made with love Technical Board.</div>
      </div>
    </div>
  );
};

export default Footer;
