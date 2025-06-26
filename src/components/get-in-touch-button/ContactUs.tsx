import { Link } from "react-router-dom";
import './ContactUs.scss'
import arrow from '/src/assets/buttons/right-arrow.svg';
import { useThemeContext } from "../../utils/ThemeContextProvider";



const ContactUs = ({ }) => {
  const { closeMenu } = useThemeContext();
  return (
    <Link to="/contact" className="navigate-button" onClick={closeMenu}>
      <button className="contact-us-button">
        <div className="contact-us-text">
          <p>Contact Us!</p>
        </div>
        <div className="contact-us-arrow">
          <img src={arrow} alt="right-arrow" />
        </div>
      </button>
    </Link>
  );
};

export default ContactUs;