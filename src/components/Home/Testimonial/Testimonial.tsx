import React, { useState, useCallback, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { testimonialContent } from './testimonialContent';
import { testimonialCarouselContent } from './testimonialCarouselContent';
import styles from './Testimonial.module.scss';

const Testimonial: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
        mode: "snap",
        slides: {
            perView: 1,
            spacing: 20,
        },
        breakpoints: {
            '(min-width: 768px)': {
                slides: {
                    perView: 1,
                    spacing: 20,
                },
            },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 3000);

        return () => clearInterval(interval);
    }, [instanceRef]);

    const nextSlide = useCallback(() => {
        instanceRef.current?.next();
    }, [instanceRef]);

    const prevSlide = useCallback(() => {
        instanceRef.current?.prev();
    }, [instanceRef]);

    return (
        <section className={styles.testimonialSection}>
            <div className={styles.testimonialHeader}>
                <h2>{testimonialContent.heading}</h2>
                <p>{testimonialContent.description}</p>
            </div>

            <div className={styles.carouselContainer}>
                <button
                    className={`${styles.navButton} ${styles.prevButton}`}
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                >
                    <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.0009 47.54C17.4729 47.54 8.96094 39.028 8.96094 28.5C8.96094 17.972 17.4729 9.46002 28.0009 9.46002C38.5289 9.46002 47.0409 17.972 47.0409 28.5C47.0409 39.028 38.5289 47.54 28.0009 47.54ZM28.0009 11.7C18.7049 11.7 11.2009 19.204 11.2009 28.5C11.2009 37.796 18.7049 45.3 28.0009 45.3C37.2969 45.3 44.8009 37.796 44.8009 28.5C44.8009 19.204 37.2969 11.7 28.0009 11.7Z" fill="#C9549D" />
                        <path d="M28.3367 39.364L17.4727 28.5L28.3367 17.636L29.9047 19.204L20.6087 28.5L29.9047 37.796L28.3367 39.364Z" fill="#C9549D" />
                        <path d="M19.0391 27.38H38.0791V29.62H19.0391V27.38Z" fill="#C9549D" />
                    </svg>

                </button>

                <div ref={sliderRef} className={`${styles.carousel} keen-slider`}>
                    {testimonialCarouselContent.map((testimonial, index) => (
                        <div key={index} className={`${styles.slide} keen-slider__slide`}>
                            <div className={styles.quoteIcon}>
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.333 31.6665L22.1663 31.6665V18.9165L29.6363 8.33315H34.1747L29.7313 18.3332H36.333V31.6665ZM32.9997 28.3332V21.6665H25.4997V28.3332H32.9997ZM18.833 31.6665H4.66635V18.9165L12.1364 8.33315H16.6747L12.2313 18.3332L18.833 18.3332L18.833 31.6665ZM15.4997 28.3332V21.6665H7.99969V28.3332H15.4997Z" fill="black" fill-opacity="0.39" />
                                </svg>

                            </div>
                            <p className={styles.quote}>{testimonial.quote}</p>
                            <div className={styles.authorInfo}>
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className={`${styles.navButton} ${styles.nextButton}`}
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                >
                    <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.9991 47.54C38.5271 47.54 47.0391 39.028 47.0391 28.5C47.0391 17.972 38.5271 9.46002 27.9991 9.46002C17.4711 9.46002 8.95906 17.972 8.95906 28.5C8.95906 39.028 17.4711 47.54 27.9991 47.54ZM27.9991 11.7C37.2951 11.7 44.7991 19.204 44.7991 28.5C44.7991 37.796 37.2951 45.3 27.9991 45.3C18.7031 45.3 11.1991 37.796 11.1991 28.5C11.1991 19.204 18.7031 11.7 27.9991 11.7Z" fill="#C9549D" />
                        <path d="M27.6633 39.364L38.5273 28.5L27.6633 17.636L26.0953 19.204L35.3913 28.5L26.0953 37.796L27.6633 39.364Z" fill="#C9549D" />
                        <path d="M36.9609 27.38H17.9209V29.62H36.9609V27.38Z" fill="#C9549D" />
                    </svg>

                </button>
            </div>
        </section>
    );
};

export default Testimonial; 