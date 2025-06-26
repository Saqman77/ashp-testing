import React, { useState } from 'react';
import { ServiceCard as ServiceCardType } from './servicesCardsContent';
import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
    service: ServiceCardType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);

    const handleFlip = () => {
        setIsFlipping(true);
        setIsFlipped(!isFlipped);
        setTimeout(() => {
            setIsFlipping(false);
        }, 300); // Match the flip transition duration
    };

    return (
        <div className={styles.cardContainer}>
            <div className={`${styles.card} ${isFlipped ? styles.flipped : ''} ${isFlipping ? styles.flipping : ''}`}>
                {/* Front of card */}
                <div className={styles.cardFront} style={{ backgroundColor: service.backgroundColor }}>
                    <div className={styles['serv-header']}>
                        <div className={styles.iconContainer}>
                            <img src={service.icon} alt={service.title} className={styles.icon} />
                        </div>
                        <div className={styles['s-header-text']}>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.subtitle}>{service.subtitle}</p>
                        </div>
                    </div>
                    <button className={styles.readMore} onClick={handleFlip}>
                        {service.readMoreText}
                        <img src={service.readMoreIcon} alt="Read More" className={styles.readMoreIcon} />
                    </button>
                </div>

                {/* Back of card */}
                <div className={styles.cardBack} style={{ backgroundColor: service.backgroundColor }}>
                    <div className={styles.description}>
                        {service.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <button className={styles.flipBack} onClick={handleFlip}>
                        {service.backText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard; 