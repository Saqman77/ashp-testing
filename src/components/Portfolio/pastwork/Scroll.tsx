import { useEffect, useRef, useState } from "react";
import { services } from "./services";
import img1 from "../../assets/about/Ash P.jpg";
import img2 from "../../assets/about/AshPReads-EditingServices-Logo.png";
import img3 from "../../assets/about/Ash P bio.png";
import img4 from "../../assets/about/Hira P Bio .png";
import img5 from "../../assets/about/Hira.jpg";
import img6 from "../../assets/about/TheTeam.webp";
import logo1 from "../../assets/footer/BIPOC-Chapter-300x300.png";
import logo2 from "../../assets/footer/ETC+Member+Circle.png";
import logo3 from "../../assets/footer/pro_reader.png";
import logo4 from "../../assets/footer/Simple_Logo_ALT.png";
import logo5 from "../../assets/footer/R&R logo final-03 (1).png";
import AI from "/src/assets/footer/Graduate Website Badge_AI for Editors.png";
import EFA from "/src/assets/footer/EFA-Member-Logo-Transparent.png";
import "./scroll.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import ServiceGrid from "./ServiceGrid";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface ScrollProps {
  startIndex: number;
  isVisible: boolean;
  onClose: () => void;
  onItemClick: (index: number) => void;
}

const Scroll = ({
  startIndex,
  isVisible,
  onClose,
  onItemClick,
}: ScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useGSAP(
    () => {
      //   const ctx = gsap.context(() => {
      // const panels = gsap.utils.toArray<HTMLElement>('.ash');

      const tl2 = gsap.timeline();
      const tl = gsap.timeline();
      tl.fromTo(
        ".ash .s-heading",
        {
          x: "-100%",
          scale: 0,
          opacity: 0,
        },
        {
          x: "0%",
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          immediateRender: false, // Prevents GSAP from jumping to the final position
          scrollTrigger: {
            trigger: ".ash",
            start: "top 80%", // Trigger animation when '.ash' enters viewport
            end: "+=200px",
            scrub: 1,
            toggleActions: "play pause resume reverse", // Fix animation flow
            // markers: true, // Debugging, remove when done
          },
        }
      );

      const certs = document.querySelectorAll(".ash .cert-text");

      certs.forEach((cert) => {
        gsap.fromTo(
          cert,
          { x: "100%", scale: 0, opacity: 0 },
          {
            x: "0%",
            scale: 1,
            opacity: 1,
            stagger: 1,
            scrollTrigger: {
              trigger: ".ash",
              start: "top 50%",
              end: "+=200px",
              scrub: 1,
              // onLeave:()=>{
              //     gsap.to(cert,{
              //          x:'100%',
              //          scale: 0,
              //          opacity:0,
              //         stagger:0.1,
              //         scrollTrigger:{
              //             trigger: cert,
              //             start:'bottom 30%',
              //             end:'+=200px',
              //             scrub: true,
              //             // markers: true
              //         }
              //     })
              // }
            },
          }
        );
      });
      gsap.fromTo(
        ".ash .q-text",
        { x: "100%", scale: 0, opacity: 0 },
        {
          x: "0%",
          scale: 1,
          opacity: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: ".ash",
            start: "top 80%",
            end: "+=200px",
            scrub: 1,
            // }
          },
        }
      );

      tl.fromTo(
        ".panel.ash .panel-front",
        {
          backgroundColor: "#7163DE",
        },
        {
          backgroundColor: "#7163de7c",
          scrollTrigger: {
            trigger: ".ash",
            start: "-20% top",
            end: "+=100px",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".projects .panel-front",
        {
          opacity: "0",
        },
        {
          opacity: "1",
          scrollTrigger: {
            trigger: ".projects .panel-front",
            start: "-30% center",
            end: "10%",
            scrub: 1,
            //     gsap.to('.projects .panel-front',{
            //         opacity:'0'
            //     })
            // },
            // markers: true
          },
        }
      );
      tl2.fromTo(
        ".hira .s-heading",
        { x: "100%", scale: 0, opacity: 0 },
        {
          x: "0%",
          scale: 1,
          opacity: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: ".hira",
            start: "top 80%",
            end: "+=200px",
            scrub: 1,
            // }
          },
        }
      );

      const hCerts = document.querySelectorAll(".hira .cert-text");

      hCerts.forEach((cert) => {
        gsap.fromTo(
          cert,
          { x: "100%", scale: 0, opacity: 0 },
          {
            x: "0%",
            scale: 1,
            opacity: 1,
            stagger: 1,
            scrollTrigger: {
              trigger: ".hira",
              start: "top 80%",
              end: "+=200px",
              scrub: 1,
              // }
            },
          }
        );
      });
      gsap.fromTo(
        ".hira .q-text",
        { x: "100%", scale: 0, opacity: 0 },
        {
          x: "0%",
          scale: 1,
          opacity: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: ".hira",
            start: "top 80%",
            end: "+=200px",
            scrub: 1,
            // }
          },
        }
      );

      tl2.fromTo(
        ".panel.hira .panel-front",
        {
          backgroundColor: "#7163DE",
        },
        {
          backgroundColor: "#7163de7c",
          scrollTrigger: {
            trigger: ".hira",
            start: "-20% top",
            end: "+=100px",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".projects-hira .panel-front",
        { opacity: 0 },
        {
          opacity: 1,

          scrollTrigger: {
            trigger: ".projects-hira",
            start: "-30% center",
            end: "10%",
            scrub: 1,
            // }
          },
        }
      );

      //   return () => ctx.revert(); // Clean up the ScrollTrigger and animations on unmount
    },
    { scope: scrollRef }
  );

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  return (
    <div className="s-container" ref={scrollRef}>
 

      <section className="our-work">
        <div className="work-wrapper">
          <div className="work-heading">
            <h3 className="s-heading">Our Work</h3>
          </div>

          <ul className="services-list">
            {services.map(
              (list: { id: string; service: string }, index: number) => {
                return (
                  <li key={list.id} onClick={() => onItemClick(index)}>
                    <p className="s-text">
                      {list.service}
                      <span className="services-indicator"></span>
                    </p>{" "}
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <ServiceGrid
          close={onClose}
          isVisible={isVisible}
          service={services[currentIndex]}
          start={() =>
            onItemClick(
              currentIndex < services.length - 1 ? currentIndex + 1 : 0
            )
          }
          end={() =>
            onItemClick(
              currentIndex > 0 ? currentIndex - 1 : services.length - 1
            )
          }
          next={
            currentIndex < services.length - 1
              ? services[currentIndex + 1].service
              : "no"
          }
          last={
            services.length > 0 && currentIndex > 0
              ? services[currentIndex - 1].service
              : services.length > 0
              ? services[0].service
              : "No name available"
          }
          currentIndex={currentIndex}
          length={services.length}
        />
      </section>
    </div>
  );
};

export default Scroll;
