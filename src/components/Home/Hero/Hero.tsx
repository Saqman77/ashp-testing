import ContactUs from '../../get-in-touch-button/ContactUs';
import Schedule from '../../schedule/Schedule';
import './Hero.scss';
import { heroContent } from './heroContent';
import downArrow from '/src/assets/home/arrow-down.svg';

const Hero: React.FC = () => {
    const highlightWords = (text: string) => {
        const parts = text.split(/(two decades|editing)/);
        return parts.map((part, index) => {
            if (part === 'two decades' || part === 'editing') {
                return (
                    <span key={index} className="highlight-wrapper">
                        <span className="highlight-bg"></span>
                        <span className="highlight">{part}</span>
                    </span>
                );
            }
            return <span key={index} className="normal">{part}</span>;
        });
    };

    return (
        <div className="hero-container">
            <div className="hero-main">
                <div className="content-wrapper">
                    <h1>{highlightWords(heroContent.heading)}</h1>
                    <div className="cta-wrapper">
                        <ContactUs />
                        <Schedule />
                    </div>
                    <div className="hero-box">
                        <p className="scroll-down">{heroContent.scrollDown}</p>
                        <div className="arrow-wrapper">
                            <img src={downArrow} alt="down-arrow" className="down-arrow" />
                        </div>
                    </div>
                </div>
                <div className="hero-bg">
                    <div className="top-left">
                        <svg width="218" height="225" viewBox="0 0 218 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M134.467 112.5C287.266 112.5 198.148 -30.6894 121.718 92.0682C198.088 -30.6894 19.8523 -30.6894 96.2817 92.0682C19.9121 -30.6894 -69.2057 112.5 83.5335 112.5C-69.2656 112.5 19.8523 255.689 96.2817 132.932C19.9121 255.689 198.148 255.689 121.718 132.932C198.088 255.745 287.206 112.5 134.467 112.5Z" fill="#FCE4E4" />
                        </svg>
                    </div>
                    <div className="bottom-right">
                        <svg width="261" height="261" viewBox="0 0 261 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M261 130.5C242.98 112.48 219.397 103.502 195.75 103.502C212.442 86.8103 222.748 63.7326 222.748 38.2522C197.267 38.2522 174.19 48.5581 157.498 65.25C157.498 41.6664 148.52 18.0196 130.5 0C112.48 18.0196 103.502 41.6032 103.502 65.25C86.8103 48.5581 63.7326 38.2522 38.2522 38.2522C38.2522 63.7326 48.5581 86.8103 65.25 103.502C41.6664 103.502 18.0196 112.48 0 130.5C18.0196 148.52 41.6032 157.498 65.25 157.498C48.5581 174.19 38.2522 197.267 38.2522 222.748C63.7326 222.748 86.8103 212.442 103.502 195.75C103.502 219.397 112.48 242.98 130.5 261C148.52 242.98 157.498 219.397 157.498 195.75C174.19 212.442 197.267 222.748 222.748 222.748C222.748 197.267 212.442 174.19 195.75 157.498C219.397 157.561 242.98 148.52 261 130.5Z" fill="#C2BFD6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero; 