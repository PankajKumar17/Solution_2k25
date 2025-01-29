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
            Behold the extravaganza of jolliness! Army Institute of Technology
            brings you the gala of its annual tech fest "Solutions" to celebrate
            the glory of talent and insight. With more than 20 events under the
            belt, Solutions provides an environment of competition with ecstasy
            and style. With 7 successful editions in its list, Solutions is back
            with rip-roaring events to transcend the norm.
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
