// import { useEffect } from "react";
import Horizontal from "../../components/Portfolio/aboutHero/Horizontal"
import Scroll from "../../components/Portfolio/pastwork/Scroll"
import './Portfolio.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";
import { useThemeContext } from "../../utils/ThemeContextProvider";
import AboutSection from "../../components/Portfolio/aboutSection/AboutSection";
import Profile from "../../components/Portfolio/profile/Profile";
import SecondProfile from "../../components/Portfolio/profile/SecondProfile";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


interface PortfolioProps {
  key: string;
}

const Portfolio = ({ key }: PortfolioProps) => {

   const [selectedIndex, setSelectedIndex] = useState(0);
  const [isServVisible, setServVisible] = useState(false);
  
 // Empty dependency array ensures this runs only on mount and unmount
  const [scrollY, setScrollY] = useState(0);

      const {isActive,removeClass} = useThemeContext();
      
      
      useEffect(()=>{
        if(isActive){
          removeClass();
          document.documentElement.classList.remove('active')
          document.body.classList.remove('active')
        }
      },[])
    

  useEffect(() => {
    if (isServVisible) {
      // Lock body scroll
      setScrollY(window.scrollY); // Save current scroll position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Unlock body scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY); // Restore scroll position
    }
  }, [isServVisible]);
 useEffect(()=>{
    const headerP = document.querySelector('.header-blur') as HTMLElement
    const nav = document.querySelector('.nav ul') as HTMLElement
    const btns = document.querySelectorAll('.menu-btn span') as NodeListOf<HTMLElement>;
    if (headerP) {
      headerP.style.background = 'transparent';
      btns.forEach(btn => btn.style.backgroundColor = '#ffffff');
      nav.style.color = '#ffffff';
    }

    return () => {
      if (headerP) {
        headerP.style.background = ''; // Reset to its original value
        nav.style.color = '';
        btns.forEach(btn => btn.style.backgroundColor = '');
      }
    };

 },[key])
 const handleItemClick = (index: number) => {
  setSelectedIndex(index);
  setServVisible(true);
};

const handleCloseServ = () => {
  setServVisible(false);
};



  return (
    <div className="a-container" key={key}>
      {/* <h1
        style={{
          position:'fixed',
          color: 'red',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '99999',
          boxShadow: 'inset 0px 0px 4px 8px rgba(255, 0, 0, 0.17)',
          fontSize: '5vw',
          opacity: '0.7'
        }}

      >
        Under construction
      </h1> */}
      <Horizontal/>
      <AboutSection/>
      <Profile/>
      <SecondProfile/>
      <Scroll
            startIndex={selectedIndex}
            isVisible={isServVisible}
            onClose={handleCloseServ}
            onItemClick={handleItemClick}
      />
    </div>
  )
}

export default Portfolio