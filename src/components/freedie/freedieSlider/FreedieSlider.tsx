import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FreedieSlider.scss'
import { freedie } from '../freedyContent'
import { freedieSliderHeading } from './FreedieSliderContent'

gsap.registerPlugin(ScrollTrigger)

// Add prop type for onItemClick
interface FreedieSliderProps {
    onItemClick: (index: number) => void;
    viewMode: 'slider' | 'list';
    setViewMode: (mode: 'slider' | 'list') => void;
    onScrollPositionChange?: (position: number) => void; // New prop for scroll position tracking
}

// Update component signature to accept the prop
const FreedieSlider: React.FC<FreedieSliderProps> = ({ onItemClick, viewMode, setViewMode, onScrollPositionChange }) => {
    // Create refs for the container elements
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [initialScrollPosition, setInitialScrollPosition] = useState<number | null>(null);
    const imageSources = freedie.map(member => member.imgSrc);

    // Ensure component is ready before initializing ScrollTriggers
    useEffect(() => {
        if (containerRef.current) {
            setIsReady(true);
            
            // Check if user is already at the slider area and capture scroll position
            const sliderElement = containerRef.current.querySelector('.slider');
            if (sliderElement && onScrollPositionChange) {
                const rect = sliderElement.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    // User is already at the slider area, capture current scroll position
                    const currentScrollPosition = window.scrollY;
                    setInitialScrollPosition(currentScrollPosition);
                    onScrollPositionChange(currentScrollPosition);
                }
            }
        }
    }, []);

    useGSAP(() => {
        // Only run if component is ready
        if (!isReady || !containerRef.current) return;

        // Kill all existing ScrollTriggers first
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Create main timeline for potential future animations
        const mainTimeline = gsap.timeline();

        // Get all slides and active slide images using refs and gsap.utils.toArray
        const slides = gsap.utils.toArray<HTMLElement>(".slide", containerRef.current);

        const getInitialTranslateZ = (slide: HTMLElement): number => {
            const style = window.getComputedStyle(slide);
            const matrix = style.transform.match(/matrix3d\((.+)\)/);
            if (matrix) {
                const values = matrix[1].split(", ");
                const value = values[14];
                return value ? parseFloat(value) : 0;
            }
            return 0;
        }

        const mapRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number): number => {
            return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
        }

        // Set the container height based on the scroll duration needed for all slides, plus viewport height
        const viewportHeight = window.innerHeight;
        // Pin should end after the last slide is visible and has reached 10% of its final position
        // Reduce scrollDuration to half
        const scrollDuration = ((slides.length - 1 + 0.1) * 2250) / 2;
        if (containerRef.current) {
            (containerRef.current as HTMLElement).style.height = `${scrollDuration + viewportHeight}px`;
        }

        // Create slider pin ScrollTrigger
        let sliderEl: HTMLElement | null = null;
        if (containerRef.current && 'querySelector' in containerRef.current) {
            sliderEl = (containerRef.current as HTMLElement).querySelector('.slider');
        }
        
        if (sliderEl) {
            ScrollTrigger.create({
                trigger: sliderEl,
                start: "top top",
                end: `+=${scrollDuration}`,
                pin: true,
                scrub: true,
                pinSpacing:false,
                onEnter: () => {
                    // Capture initial scroll position when ScrollTrigger starts
                    const currentScrollPosition = window.scrollY;
                    setInitialScrollPosition(currentScrollPosition);
                    if (onScrollPositionChange) {
                        onScrollPositionChange(currentScrollPosition);
                    }
                }
            });
        }

        // Create slide animation ScrollTriggers
        slides.forEach((slide, index) => {
            const intialZ = getInitialTranslateZ(slide);

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: `+=${scrollDuration}`,
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const zIncrement = progress * 22500;
                    const currentZ = intialZ + zIncrement;

                    let opacity;
                    if (currentZ > -2500) {
                        opacity = mapRange(currentZ, -2500, 0, 0.5, 1)
                    } else {
                        opacity = mapRange(currentZ, -5000, -2500, 0, 0.5)
                    }

                    slide.style.opacity = String(opacity)
                    slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`
                }
            });
        });

        // Create active index tracking ScrollTrigger
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: `+=${scrollDuration}`,
            scrub: true,
            pin: true,
            pinSpacing: false,
            onUpdate: (self) => {
                let maxZ = -Infinity;
                let activeIdx = 0;
                slides.forEach((slide, idx) => {
                    const style = window.getComputedStyle(slide);
                    const matrix = style.transform.match(/matrix3d\((.+)\)/);
                    let z = 0;
                    if (matrix) {
                        const values = matrix[1].split(", ");
                        z = values[14] ? parseFloat(values[14]) : 0;
                    }
                    // Find the slide with the highest z (closest to camera, but not behind)
                    if (z > maxZ && z < 100) {
                        maxZ = z;
                        activeIdx = idx;
                    }
                });
                setActiveIndex(activeIdx);
            }
        });

        // Play the main timeline (for any future animations)
        mainTimeline.play();

        // Return cleanup function
        return () => {
            mainTimeline.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, { scope: containerRef, dependencies: [isReady] }); // Scope the animations to the entire container and refresh when ready

    return (
        <div className="slider-container" ref={containerRef}>

            <div className="f-toggle-header">
                <h3 className='f-toggle-heading'>
                    {freedieSliderHeading}
                    
                </h3>
                <div className='toggle-box'>
                    <button
                        className={viewMode === 'slider' ? 'active' : ''}
                        onClick={() => {
                            if (viewMode === 'slider') return;
                            setViewMode('slider');
                        }}
                    >
                        Discover
                    </button>
                    <span></span>
                    <button
                        className={viewMode === 'list' ? 'active' : ''}
                        onClick={() => {
                            if (viewMode === 'list') return;
                            setViewMode('list');
                        }}
                    >
                        List
                    </button>
                </div>
            </div>
            <div className="slider">

                {freedie.map((member, idx) => {
                    // First slide is frontmost (Z=-2000), last is farthest back
                    const left = idx % 2 === 0 ? '30%' : '70%';
                    const zSpacing = 2500;
                    const zOffset = -2000;
                    const z = zOffset - (idx * zSpacing);
                    let opacity = 0;
                    if (idx === 0) opacity = 1;
                    else if (idx === 1) opacity = 0.5;
                    const slideId = `slide-${idx + 1}`;
                    return (
                        <div
                            className="slide"
                            id={slideId}
                            key={member.id}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left,
                                transform: `translateX(-50%) translateY(-50%) translateZ(${z}px)`,
                                opacity,
                                // width: '400px',
                                // height: '500px',
                                overflow: 'hidden',
                            }}
                            onClick={() => onItemClick(idx)}
                        >
                            <div className="slide-img">
                                <img src={member.imgSrc} alt={member.name} />
                            </div>
                            <div className="slide-copy">
                                <p>{member.name}</p>
                                <p id="index">{member.role}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default FreedieSlider