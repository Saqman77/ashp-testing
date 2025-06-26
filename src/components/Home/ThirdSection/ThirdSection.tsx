import React from 'react';
import ContactUs from '../../get-in-touch-button/ContactUs';
import Schedule from '../../schedule/Schedule';
import { thirdSectionContent } from './ThirdSectionContent';
import './ThirdSection.scss';

const ThirdSection: React.FC = () => {
    return (
        <div className="third-section">
            <div className="third-section-content">
                <div className="left-content">
                    <h2>{thirdSectionContent.heading}</h2>
                    <p className='top-p'>{thirdSectionContent.paragraph1}</p>
                    <p className='bot-p'>{thirdSectionContent.paragraph2}</p>
                    <div className="cta-wrapper">
                        <ContactUs />
                        <Schedule />
                    </div>
                </div>
                <div className="right-content">
                    <div className="image-container">
                        <img 
                            src={thirdSectionContent.image} 
                            alt="Quality editing services" 
                            className="section-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection; 