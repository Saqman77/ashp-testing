import React from 'react';
import './Wishlist.scss';
import { wishListContent } from './wishListContent';
import { wishlistCardContent } from './wishlistCardContent';
import WishlistCard from './WishlistCard/WishlistCard';
import { WishListContent } from './types';

const Wishlist: React.FC = () => {
    return (
        <div className="wishlist-section">
            <div className="flower-wrapper">
                <svg width="1342" height="1342" viewBox="0 0 1342 1342" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M717.247 658.552C1550.3 435.127 1314.64 27.0793 704.963 637.212C1314.97 27.0793 906.681 -208.308 683.628 624.925C907.005 -208.308 435.682 -208.308 658.736 624.925C435.359 -208.632 27.3968 27.0793 637.077 636.888C27.3968 27.0793 -208.264 435.127 624.793 658.552C-208.264 435.127 -208.264 906.549 624.793 683.448C-208.264 906.873 27.3968 1314.92 637.077 704.789C27.0736 1314.92 435.359 1550.31 658.413 717.075C435.036 1550.31 906.358 1550.31 683.304 717.075C906.681 1550.31 1314.64 1314.6 704.64 704.789C1314.64 1314.92 1549.98 906.549 716.924 683.448C1550.3 906.549 1550.3 435.127 717.247 658.552Z" fill="#F4D6CD" />
                </svg>
            </div>
            <div className="wishlist-header-row">
                <div className="wishlist-header-title">
                    <h2>
                        <span className="wishlist-main">
                            {wishListContent.headingMain}
                            <div className="wishlist-heading-sub">
                                {wishListContent.headingSub} <span className="wishlist-highlight-wrapper"><span className="wishlist-highlight-bg"></span><span className="wishlist-highlight">{wishListContent.highlight}</span></span>
                            </div>
                        </span>
                    </h2>
                </div>
                <div className="wishlist-header-desc">
                    <p className='desc-p'>{wishListContent.description1}</p>
                    <p className='desc-p1'>{wishListContent.description2}</p>
                </div>
            </div>
            <div className="wishlist-cards">
                <h3 className="wishlist-section-title">{wishListContent.sectionTitles.wishingFor}</h3>
                <WishlistCard
                    type="compatible"
                    label={wishListContent.categories.wishingFor.label}
                    labelIcon={wishListContent.categories.wishingFor.labelIcon}
                    labelColor={wishListContent.categories.wishingFor.labelColor}
                    title={wishListContent.categories.wishingFor.title}
                    icon={wishListContent.categories.wishingFor.icon}
                    fiction={wishlistCardContent.wishingFor.fiction}
                    nonfiction={wishlistCardContent.wishingFor.nonfiction}
                    fictionTitle={wishListContent.fictionTitle}
                    nonfictionTitle={wishListContent.nonfictionTitle}
                />
                <h3 className="wishlist-section-title">{wishListContent.sectionTitles.notWishingFor}</h3>
                <WishlistCard
                    type="incompatible"
                    label={wishListContent.categories.notWishingFor.label}
                    labelIcon={wishListContent.categories.notWishingFor.labelIcon}
                    labelColor={wishListContent.categories.notWishingFor.labelColor}
                    title={wishListContent.categories.notWishingFor.title}
                    icon={wishListContent.categories.notWishingFor.icon}
                    allGenres={wishlistCardContent.notWishingFor["All genres"]}
                    description={wishListContent.notWishingForDescription}
                    allGenresLabel={wishListContent.allGenresLabel}
                />
            </div>
        </div>
    );
};

export default Wishlist; 