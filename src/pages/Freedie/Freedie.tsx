import { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import wheel from '../../assets/freedi/Brutalist 52.png';
import gear from '../../assets/freedi/Vector2.svg';
import FLists from '../../components/freedie/flist/FLists';
import frediebg from '../../assets/freedi/FrEdiBuddies without title.webp'
import './Freedie.scss';
import FCarousel from '../../components/freedie/fcarousel/FCarousel';
import { useThemeContext } from '../../utils/ThemeContextProvider';
// import ParallaxImage from '../../components/Portfolio/ParallaxImage';
import FreediePara from '../../components/freedie/freedie-para';
import { useGSAP } from '@gsap/react';
import FreedieHero from '../../components/freedie/FreedieHero/FreedieHero';
import TheStory from '../../components/freedie/TheStory/TheStory';
import FreedieSlider from '../../components/freedie/freedieSlider/FreedieSlider';
gsap.registerPlugin(ScrollTrigger);

const Freedie: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(() => {
    // Check localStorage for disclaimer state
    if (typeof window !== 'undefined') {
      return localStorage.getItem('freedieDisclaimerAccepted') !== 'true';
    }
    return true;
  }); // Show disclaimer initially
  const bgref = useRef<HTMLDivElement>(null)
  const { isActive, removeClass } = useThemeContext();
  const [viewMode, setViewModeState] = useState<'slider' | 'list'>('slider');
  const [sliderScrollPosition, setSliderScrollPosition] = useState<number | null>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      removeClass();
      document.documentElement.classList.remove('active');
      document.body.classList.remove('active');
    }
  }, []);

  // Ensure disclaimer state is synced with localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('freedieDisclaimerAccepted') === 'true') {
        setShowDisclaimer(false);
      }
    }
  }, []);

  useEffect(() => {
    if (isCarouselVisible) {
      setScrollY(window.scrollY);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }
  }, [isCarouselVisible]);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    setCarouselVisible(true);
  };

  const handleCloseCarousel = () => {
    setCarouselVisible(false);
  };

  const handleScrollPositionChange = (position: number) => {
    setSliderScrollPosition(position);
  };

  const handleViewModeChange = (mode: 'slider' | 'list') => {
    console.log('handleViewModeChange called with mode:', mode);
    if (mode === viewMode) return;
    setTimeout(() => {
      if (mode === 'list') {
        // Add timeout to ensure ScrollTrigger animation has settled
        setTimeout(() => {
          console.log('Switching to list view, killing ScrollTriggers...');
          // Kill all ScrollTriggers to unpin the slider
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          // Force a complete page reset by removing any pinned content
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          // Use a longer timeout to ensure everything is reset
          setTimeout(() => {
            console.log('setTimeout executing...');
            console.log('Current scrollY after reset:', window.scrollY);
            // Get the list container position
            const listContainer = listContainerRef.current;
            if (listContainer) {
              // Use scrollIntoView to scroll to the list component
              listContainer.scrollIntoView({
                behavior: 'auto',
                block: 'start'
              });
            } else {
              console.log('List container not found!');
            }
          }, 0); // Longer timeout to ensure complete reset
        }, 0); // Timeout to ensure ScrollTrigger animation has settled
      }
      setViewModeState(mode);
    }, 800);
  };

  // Handler for closing disclaimer and persisting state
  const handleDisclaimerClose = () => {
    setShowDisclaimer(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('freedieDisclaimerAccepted', 'true');
    }
  };

  return (
    <>
            <FreedieHero/>
            <TheStory/>

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="f-modal">
          <div className="f-modal-content">
            <p className='modal-p'>
            While Ash P Reads Editing Services carefully vets all FrEdiBuddies also known as Independent Service Providers for reliability, professionalism, and quality standards, our role is strictly limited to providing referrals between Independent Service Providers and clients seeking their services.
              <span className="spacer"></span>
              Ash P Reads Editing Services makes no guarantee that our FrEdiBuddies will accept recommended projects, nor do we guarantee that our FrEdiBuddies will be awarded any projects for which they are referred. We do not provide or manage service contracts; all contractual arrangements must be established directly between the Independent Service Providers and clients.
              <span className="spacer"></span>
              As a referral service, Ash P Reads Editing Services does not mediate transactions, oversee service delivery, or collect any fees, commissions, or royalties from any transaction. FrEdiBuddies maintain full control over their pricing and service offerings. If you experience any issues with a Service Provider, please contact us at ashpreads@gmail.com so we may evaluate their continued inclusion in our referral network.
              <span className="spacer"></span>
              This disclaimer outlines the complete scope of our service and limitations of our responsibility. All parties agree to these terms when using our referral service.
            </p>
            <div className="f-modal-buttons">
              <button onClick={handleDisclaimerClose}>Agree</button>
              <button onClick={handleDisclaimerClose}>Disagree</button>
            </div>
          </div>
        </div>
      )}

      <FCarousel
        startIndex={selectedIndex}
        isVisible={isCarouselVisible}
        onClose={handleCloseCarousel}
      />

      <div className="f-container"
        ref={bgref}
      >
        <div className="f-wrapper">
          {/* <div className="f-top">
            <div className="f-left">
              <h2 className="f-heading">
                Ash P Reads &nbsp;
                <span className="f-colour">FrEdiBuddies</span>
              </h2>
              <div className="fredi-desc">
                <span className='bottom-tag'>
                  A supportive platform for all Independent Service Providers.
                </span>
                <span className="spacer"></span>
                <span>
                Ash P Reads FrEdiBuddies is a collective of verified and authenticated Independent Service Providers
                </span>
              </div>
            </div>
            <div className="f-right">
              <div className="wheel">
                <img src={wheel} alt="wheel-image" className="wheel-img" />
              </div>
            </div>
          </div> */}

          <div className="f-bottom">
            <div className="f-headingb">
              {/* <p className="f-hb">Meet Our FrEdiBuddies</p> */}
            </div>
            <div
              className="f-toggle-wrapper"
              ref={listContainerRef}
              style={{ backgroundColor: viewMode === 'slider' ? '#2E2E2E' : '#4B3B74' }}
            >
            {viewMode === 'list' && (
              <div className="f-toggle-header">
                <div className='toggle-box'>
                <button
                  className=""
                  onClick={() => handleViewModeChange('slider')}
                >
                  Discover
                </button>
                <span></span>
                <button
                  className="active"
                  onClick={() => handleViewModeChange('list')}
                >
                  List
                </button>
                </div>
              </div>
            )}
              <div className="f-toggle-content">
                

                {viewMode === 'slider' ? (
                  
                  <FreedieSlider onItemClick={handleItemClick} viewMode={viewMode} setViewMode={handleViewModeChange} onScrollPositionChange={handleScrollPositionChange} />
                ) : (
                  <FLists onItemClick={handleItemClick} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="back-gear">
          <div className="f-gear">
            <img src={gear} alt="gear-image" className="gear-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Freedie;
