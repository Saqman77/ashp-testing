import './horizontal.scss'
// import ace from '../../assets/freedi/Spark 82.svg'
import downArrow from '/src/assets/home/arrow-down.svg';
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { horizontalContent } from './horizontal.Content';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Horizontal: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // Create main timeline
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: 'center center',
        end: '+=200px',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to('.h-heading', {
            color: `rgba(221, 141, 161, ${progress})`,
            textShadow: window.innerWidth < 1250 
              ? `0px 3px 4px hsla(0, 0%, 0%, ${0.61 * progress})`
              : `0px 5px 4px hsla(0, 0%, 0%, ${0.61 * progress})`,
            duration: 0.1
          });
        }
      },
    });

    // Create horizontal scroll timeline
    const horizontalTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: 'center center',
        end: '+=500px',
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          gsap.to(wrapper.current, {
            duration: 0.5,
            ease: 'power2.out',
          });
        },
      },
    });

    // Create cards animation timeline
    const cardsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: window.innerWidth < 1250 ? '+=100vh' : '+=100vh',
        scrub: true,
        onUpdate: (self) => {
          horizontalContent.cards.forEach((card) => {
            gsap.to(card.id, {
              x: `${card.endTranslateX * self.progress}px`,
              rotate: `${card.rotate * self.progress * 2}`,
              ease: 'power3.out',
            });
          });
        },
      },
    });

    // Cleanup function
    return () => {
      mainTimeline.kill();
      horizontalTimeline.kill();
      cardsTimeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="h-container"
      ref={boxRef}
    >
      <div className="h-grid">
      </div>
      <section className='h-wrapper'
        ref={wrapper}
      >
        {/* <div className='reveal'> 
              <svg width="48" height="98" viewBox="0 0 48 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_3_240)">
                    <path d="M18.3411 74.1924C18.3411 72.0809 18.3411 69.7582 18.3411 67.6467C18.5525 49.0651 18.9754 30.2725 19.1869 11.6909C19.1869 9.57939 19.1869 7.679 19.3984 5.56747C19.6098 2.82247 20.2442 -0.555987 23.8389 0.0774737C25.3191 0.288627 27.0108 3.45593 27.2222 5.35632C28.0681 20.9817 28.7024 36.3959 29.3368 52.0213C29.5483 55.6109 29.3368 59.2005 31.2399 63.0013C33.7774 58.7782 35.892 54.344 38.6409 50.332C39.9096 48.4317 43.0815 46.3201 44.9846 46.7424C48.7908 47.5871 48.3679 51.8101 47.0992 54.344C41.6013 67.0132 36.1034 79.8936 29.5483 92.1405C25.3191 99.9532 18.9754 99.9532 14.7463 92.1405C9.03698 81.7939 4.80785 70.6028 0.155803 59.834C-0.478567 58.567 1.00163 56.4555 1.42454 54.7663C3.11619 55.3997 5.65367 55.3997 6.4995 56.6667C8.61407 59.2005 9.88281 62.579 11.5745 65.5351C13.2661 68.7024 14.9578 71.8697 16.6494 74.8259C17.0723 74.4036 17.7067 74.1924 18.3411 74.1924Z" fill="#7163DE"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_3_240">
                      <rect width="48" height="98" fill="white"/>
                    </clipPath>
                  </defs>
              </svg>
            </div> */}
        <div className='h-content'>
          <div className="about-left">
            <img src={horizontalContent.image1} alt="trapezium-image-1" />
          </div>
          <div className="about-right">
            <img src={horizontalContent.image2} alt="trapezium-image-2" />
          </div>
          <h1 className='h-heading'>{horizontalContent.heading}</h1>
          <div className="hero-box">
            <p className="scroll-down">{horizontalContent.scrollDown}</p>
            <div className="arrow-wrapper">
              <img src={downArrow} alt="down-arrow" className="down-arrow" />
            </div>
          </div>
        </div>

        {horizontalContent.cards.map((card) => (
          <div className="h-card" id={card.id.slice(1)} key={card.id}>
            <img src={card.image} alt={card.alt} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Horizontal