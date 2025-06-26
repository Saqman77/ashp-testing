import React from 'react';
import aboutHeadingContent from './AboutHeadingContent';
import './AboutHeading.scss';

interface AboutSectionHeadingProps {
    spark: string;
}

const AboutHeading: React.FC<AboutSectionHeadingProps> = ({ spark }) => {
    return (
        <div className="aboutHeading">
            <h1>
                <div className="sparkle big">
                    <img src={spark} alt="" />
                </div>
                {aboutHeadingContent.mainHeading}
                <div className="sparkle small">
                    <img src={spark} alt="" />
                </div>
                <div className="sparkle medium first">
                    <img src={spark} alt="" />
                </div>
                <div className="sparkle medium second">
                    <img src={spark} alt="" />
                </div>
                <div className="sparkle medium third">
                    <img src={spark} alt="" />
                </div>
                <div className="sparkle medium fourth">
                    <img src={spark} alt="" />
                </div>
            </h1>
        </div>
    );
};

export default AboutHeading; 