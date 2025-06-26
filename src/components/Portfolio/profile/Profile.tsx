import React from 'react';
import { profileContent } from './firstProfileContent';
import tick from "/src/assets/home/greenTick.svg"
import tL from "/src/assets/about/about-ashp-top-left.svg"
import tR from "/src/assets/about/ashp-top-right-about.svg"
import bR from "/src/assets/about/ashp-about-bottom-right.svg"
import './Profile.scss';

const Profile: React.FC = () => {
    return (
        <div className="first-profile">
            <div className='first-profile__wrapper'>
                <div className="first-profile__top">
                    <div className="first-profile__top-left">
                        <img src={profileContent.img} alt="Ash's-profile" />
                    </div>
                    <div className="first-profile__top-right">
                        <div className="first-profile__header">
                            <h3 className="name">{profileContent.name}</h3>
                            <h4 className="title">{profileContent.title}</h4>
                        </div>
                        <p className="description">{profileContent.description}</p>
                        <div className="social-links">
                            {profileContent.socialLinks.map((link) => (
                                <a key={link.id} href={link.url}>
                                    <img src={link.icon} alt={`social-icon-${link.id}`} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                    <span className='seperator'></span>
                <div className="first-profile__bottom">
                    <h3 className="heading">Professional Certifications</h3>
                    <span className="divider"></span>
                    <div className="certifications-grid">
                        {profileContent.certifications.map((cert, index) => (
                            <div key={index} className="certification-item">
                                <div className="icon">
                                    <img src={tick} alt="check-mark-logo" />
                                </div>
                                <h4 className="title">{cert.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="element top-left">
                <img src={tL} alt="background-elemnt" />
            </div>
            <div className="element top-right">
                <img src={tR} alt="background-elemnt" />
            </div>
            <div className="element bottom-right">
                <img src={bR} alt="background-elemnt" />
            </div>
        </div>
    );
};

export default Profile; 