import React from 'react';
import './WishlistCard.scss';
import { IconConfig, CategorySection } from '../types';

interface WishlistCardProps {
    type: 'compatible' | 'incompatible';
    label: string;
    labelIcon: IconConfig;
    labelColor: string;
    title: string;
    icon: IconConfig;
    fiction?: CategorySection;
    nonfiction?: CategorySection;
    allGenres?: CategorySection;
    description?: string;
    allGenresLabel?: string;
    fictionTitle?: string;
    nonfictionTitle?: string;
}

const Icon: React.FC<{ config: IconConfig }> = ({ config }) => {
    if (config.type === 'svg') {
        return <img src={config.path} alt="" className="icon-svg" />;
    }
    return null;
};

const WishlistCard: React.FC<WishlistCardProps> = ({
    type,
    label,
    labelIcon,
    labelColor,
    title,
    icon,
    fiction,
    nonfiction,
    allGenres,
    description,
    allGenresLabel,
    fictionTitle,
    nonfictionTitle
}) => {
    return (
        <div className={`wishlist-card ${type}`}>
            <div className="card-header-row">
                <span className={`label-icon ${labelColor}`}>
                    <Icon config={labelIcon} />
                </span>
                <span className={`label-text ${labelColor}`}>{label}</span>
            </div>
            {type === 'incompatible' && description && (
                <div className="card-description">{description}</div>
            )}
            {type === 'incompatible' && allGenresLabel && (
                <div className="all-genres-label">{allGenresLabel}</div>
            )}
            <div className="card-content">
                {type === 'compatible' && fiction && nonfiction && (
                    <>
                        <div className="section">
                            <div className="section-header">
                                <Icon config={fiction.icon} />
                                <h4>{fictionTitle}</h4>
                            </div>
                            <ul className="bullets-grid">
                                {fiction.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="section">
                            <div className="section-header">
                                <Icon config={nonfiction.icon} />
                                <h4>{nonfictionTitle}</h4>
                            </div>
                            <ul className="bullets-grid">
                                {nonfiction.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
                {type === 'incompatible' && allGenres && (
                    <div className="section">
                        <div className="section-header incompatible-sec">
                            {/* <Icon config={allGenres.icon} /> */}
                        </div>
                        <ul className="bullets-grid">
                            {allGenres.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistCard; 