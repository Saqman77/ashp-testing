import React from 'react';
import { servicesContent } from './servicesContent';
import { servicesCardsContent } from './servicesCardsContent';
import ServiceCard from './ServiceCard';
import styles from './Services.module.scss';

const Services: React.FC = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.header}>
                <h2 className={styles.heading}>{servicesContent.heading}</h2>
                <p className={styles.description}>{servicesContent.description}</p>
            </div>
            
            <div className={styles.cardsContainer}>
                {servicesCardsContent.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
};

export default Services; 