import { useEffect, useRef, useState } from "react";
import { freedie } from '../freedyContent'
import FCards from "./fcards/FCards";
import './fcarousel.scss'
interface CarouselProps {
  startIndex: number;
  isVisible: boolean;
  onClose: () => void;
}

const FCarousel: React.FC<CarouselProps> = ({ startIndex, isVisible, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const carouselRef = useRef<HTMLDivElement | null>(null);
 

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  // useEffect(() => {
  //   const carouselElement = carouselRef.current;

  //   if (carouselElement) {
  //     carouselElement.classList.remove("active"); // Remove the class
  //     void carouselElement.offsetWidth; // Trigger reflow to restart animation
  //     carouselElement.classList.add("active"); // Reapply the class
  //   }
  // }, [currentIndex]);

  if (!isVisible) return null;

    // const carouselRef = useRef<HTMLDivElement>(null);
    // const [isDragging, setIsDragging] = useState(false);
    // const [startX, setStartX] = useState(0);
    // const [scrollStart, setScrollStart] = useState(0);
  
    // const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to manage timeout
  
    // const handleMouseDown = (e: React.MouseEvent) => {
    //   const carousel = carouselRef.current;
    //   if (carousel) {
    //     setIsDragging(true);
    //     setStartX(e.clientX); // Record initial mouse position
    //     setScrollStart(carousel.scrollLeft); // Record initial scroll position
    //   }
    // };
  
    // const handleMouseMove = (e: MouseEvent) => {
    //   if (!isDragging) return;
  
    //   const carousel = carouselRef.current;
    //   if (carousel) {
    //     const deltaX = e.clientX - startX; // Difference in mouse position
    //     carousel.scrollLeft = scrollStart - deltaX; // Adjust scroll position
    //   }
    // };
  
    // const handleMouseUp = () => {
    //   // timeoutRef.current = setTimeout(() => {
    //     setIsDragging(false);
    //   // }, 500); // Delay of 100ms
    // };
  
    // useEffect(() => {
    //   if (isDragging) {
    //     document.addEventListener('mousemove', handleMouseMove);
    //     document.addEventListener('mouseup', handleMouseUp);
    //   } else {
    //     document.removeEventListener('mousemove', handleMouseMove);
    //     document.removeEventListener('mouseup', handleMouseUp);
    //   }
  
    //   return () => {
    //     document.removeEventListener('mousemove', handleMouseMove);
    //     document.removeEventListener('mouseup', handleMouseUp);
  
    //     if (timeoutRef.current) {
    //       clearTimeout(timeoutRef.current); // Clear timeout on cleanup
    //     }
    //   };
    // }, [isDragging]);
  
    // const moveRight = () => {
    //   const carousel = carouselRef.current as HTMLElement | null;
    //   if (carousel) {
    //     const card = carousel.querySelector('.f-card'); // Assuming the class of each card is `.card`.
    //     if (card) {
    //       const cardWidth = (card as HTMLElement).offsetWidth;
    //       carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    //     }
    //   }
    // };
  
    // const moveLeft = () => {
    //   const carousel = carouselRef.current as HTMLElement | null;
    //   if (carousel) {
    //     const card = carousel.querySelector('.fcard-wrapper'); // Assuming the class of each card is `.card`.
    //     if (card) {
    //       const cardWidth = (card as HTMLElement).offsetWidth;
    //       carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    //     }
    //   }
    // };

  return (
    <div className={`pop-up`} ref={carouselRef}>
      <div className="pop-wrapper">
        <div className="p-heading">
          <h2 className="pop-name">
          {freedie[currentIndex].name}
          </h2>
          <div className="close"
          onClick={() => onClose()}
          >Back</div>
        </div>
          <div className="p-wrapper">
            <div className="pop-carousel">
              {/* {freedie.map((list) => {
                return( */}
                <FCards
                id={freedie[currentIndex].id}
                name={freedie[currentIndex].name}
                img={freedie[currentIndex].imgSrc}
                desc={freedie[currentIndex].desc}
                role={freedie[currentIndex].role}
                mail={freedie[currentIndex].eMail}
                portfolio={freedie[currentIndex].portfolio}
                fb={freedie[currentIndex].fb}
                insta={freedie[currentIndex].insta}
                x={freedie[currentIndex].x}
                link={freedie[currentIndex].linkedIn}
                spotify={freedie[currentIndex].spotify}
                tree={freedie[currentIndex].linktree}
                yt={freedie[currentIndex].youtube}
                sc={freedie[currentIndex].soundcloud}
                bandC={freedie[currentIndex].bandcamp}
                git={freedie[currentIndex].github}
                behance={freedie[currentIndex].behance}
                dribble={freedie[currentIndex].dribble}
                shout={freedie[currentIndex].shout}
                // name={freedie[currentIndex].name}
                cv={freedie[currentIndex].cv}
              />
              {/* )
              })} */}
            </div>
          </div>
          <div className="pagers">
              <div className={`p-left ${currentIndex === 0 ? "disabled" : ""}`}>
                <div className="left-name"
                  onClick={() =>
                    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : freedie.length - 1))
                  }
                >
                      
                      
                      <p className="p-name">{freedie.length > 0 && currentIndex > 0
                        ? freedie[currentIndex - 1].name
                        : freedie.length > 0
                        ? freedie[0].name
                        : "No name available"}
                  </p>
                  <img src={freedie.length > 0 && currentIndex > 0
                      ? freedie[currentIndex - 1].imgSrc
                      : freedie.length > 0
                      ? freedie[1].imgSrc
                      : "No img available"} alt="prev-prof" />
                </div>
              </div>
              <div className={`p-right ${currentIndex === freedie.length - 1 ? "disabled" : ""}`}>
              <div className="right-name"
                onClick={() =>
                  setCurrentIndex((prev) => (prev < freedie.length - 1 ? prev + 1 : 0))
                }
              >
                <img 
                  src={freedie.length > 0 && currentIndex < freedie.length - 1
                    ? freedie[currentIndex + 1].imgSrc
                    : freedie[0].imgSrc} 
                  alt="next-prof" 
                />
                <p className="p-name">
                  {freedie.length > 0 && currentIndex < freedie.length - 1
                    ? freedie[currentIndex + 1].name
                    : freedie[0].name}
                </p>
              </div>
            </div>

            </div>
        </div>
      </div>

  )
}

export default FCarousel