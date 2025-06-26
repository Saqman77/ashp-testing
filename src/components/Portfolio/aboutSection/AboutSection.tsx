import React, { useRef } from 'react';
import { aboutSectionContent } from './aboutSectionContent';
import AboutSectionCards from './aboutSectionCards/AboutSectionCards';
import AboutHeading from './aboutHeading/AboutHeading';
import spark from '../../../../src/assets/about/sparkle.svg'
import './aboutSection.scss';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const AboutSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const sparkles = gsap.utils.toArray<HTMLElement>('.sparkle img');

        sparkles.forEach((sparkle) => {
            // Scale animation
            gsap.fromTo(sparkle,
                {
                    scale: 0,
                    opacity: 0,
                    transformOrigin: 'center'
                },
                {
                    scale: () => gsap.utils.random(0.8, 1.2),
                    opacity: 1,
                    duration: () => gsap.utils.random(0.5, 0.7),
                    ease: 'power2.out',
                    repeat: -1,
                    yoyo: true,
                    delay: () => gsap.utils.random(0, 1)
                }
            );

            // Separate opacity animation for appear/disappear effect
            gsap.fromTo(sparkle,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power1.out',
                    repeat: -1,
                    yoyo: true,
                    delay: () => gsap.utils.random(0, 1)
                }
            );
        });
    }, { scope: sectionRef });

    return (
        <section className="aboutSection" ref={sectionRef}>
            <h2 className="smallHeading">
                <div className="sparkle big">
                    <img src={spark} alt="" />
                </div>
                {aboutSectionContent.smallHeading}</h2>

            <h1 className="mainHeading">
                <div className="sparkle small">
                    <img src={spark} alt="" />
                </div>
                <span className="since">{aboutSectionContent.mainHeading.since}</span>{' '}
                <span className="year">{aboutSectionContent.mainHeading.year}</span>
            </h1>

            <p className="firstParagraph">
                <span className="companyName">{aboutSectionContent.firstParagraph.companyName}</span>{' '}
                <span className="serviceName">{aboutSectionContent.firstParagraph.serviceName}</span>
                <span className="description">{aboutSectionContent.firstParagraph.description}</span>
            </p>

            <p className="secondParagraph">
                {aboutSectionContent.secondParagraph.start}
                <span className="familyRun">
                    <div className="sparkle medium">
                        <img src={spark} alt="" />
                    </div>
                    {aboutSectionContent.secondParagraph.familyRun}
                </span>
                {aboutSectionContent.secondParagraph.middle}
                <span className="bestSelling">{aboutSectionContent.secondParagraph.bestSelling}<div className="sparkle medium">
                    <img src={spark} alt="" /></div></span>
                {aboutSectionContent.secondParagraph.authors}
                <span className="awardWinning">{aboutSectionContent.secondParagraph.awardWinning}<div className="sparkle small">
                    <img src={spark} alt="" /></div></span>{' '}
                <span className="publisher">{aboutSectionContent.secondParagraph.publisher}</span>
            </p>

            
            <AboutSectionCards spark={spark} />
            <AboutHeading spark={spark}/>
        </section>
    );
};

export default AboutSection; 