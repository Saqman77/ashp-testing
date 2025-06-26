import React from 'react';
import styles from './FreedieHero.module.scss';
import flower from '../../../assets/freedi/freedieFlowers.svg'
import { freedieHeroContent } from './content';

const FreedieHero: React.FC = () => {
    return (
        <div className={styles.freedieHero}>
             <div className={`${styles.flower} ${styles.small} ${styles.left}`}>
                <img src={flower} alt="bg-flower" />
            </div>
            <div className={`${styles.flower} ${styles.small} ${styles.right}`}>
                <img src={flower} alt="bg-flower" />
            </div>
            <div className={`${styles.flower} ${styles.small} ${styles.bottom}`}>
                <img src={flower} alt="bg-flower" />
            </div>
            <h2 className={styles.mainHeading}>
                {freedieHeroContent.mainHeading.default}
                <span className={styles.highlighted}>
                    <span className={styles.highlightedText}>
                        {freedieHeroContent.mainHeading.highlighted}
                    </span>
                    <span className={styles.highlightedBg}></span>
                </span>
            </h2>
            <h3 className={styles.subHeading}>
                {freedieHeroContent.subHeading}
            </h3>
            <div className={styles.card}>
                <p className={styles.cardText}>
                    {freedieHeroContent.cardText}
                </p>
            </div>
            <div className={`${styles.flower} ${styles.medium}`}>
                <img src={flower} alt="bg-flower" />
            </div>
        </div>
    );
};

export default FreedieHero; 