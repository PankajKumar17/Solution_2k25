import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutUs.css";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#about-us",
          start: "top 80%",
          end: "top -40%",
          scrub: 1,
        },
      });

      timeline
        .fromTo(
          "#about-us .letter img",
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 2, ease: "power2.out" }
        )
        .fromTo(
          "#about-us .left",
          { x: "0%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out" },
          "-=1"
        )
        .fromTo(
          "#about-us .right",
          { x: "0%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out" },
          "-=1.5"
        );

      return () => {
        timeline.kill();
      };
    });

    return () => {
      mm.revert(); 
    };
  }, []);

  return (
    <section id="about-us">
      <img src="/assets/Background.svg" alt="" />
      <h1>ABOUT US</h1>
      <div className="letter">
        <img loading="lazy" src="/assets/letter.svg" alt="" />
        <div className="left">
          <p>
          Gear up for Pune’s Biggest Techfest, Solutions 2k25, from March 18th to 23rd, 2025, hosted by the Technical Board of the Army Institute of Technology!

Experience 25+ electrifying events, from coding challenges to robotics quests, in a dynamic atmosphere buzzing with innovation and technology.

Compete for glory with a colossal prize pool of 9+ lakhs, making this an unmissable high-stakes extravaganza!
          </p>
        </div>
        <div className="right">
          <iframe
            width="465"
            height="300"
            src="https://www.youtube.com/embed/C1-PPNx2IKs?si=fpOO2GusezTicBKO"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
