import './Footer.scss';
import { footerContent } from './footerContent';
import CTA from './CTA/CTA';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <CTA />
      <div className="footer__content">
        <div className="footer__heading">
          <span className="footer__heading-part1">{footerContent.heading.part1}</span>
          <span className="footer__heading-part2">{footerContent.heading.part2}</span>
        </div>
        <nav className="footer__nav">
          <ul>
            {footerContent.navigationLinks.map((link, index) => (
              <li key={index}>
                <NavLink 
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__bottom">
          <p className="footer__bottom-copyright">
            {footerContent.copyright}
          </p>
          <div className="footer__bottom-socials">
            {footerContent.socialLinks.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                <img src={social.src} alt={social.alt} className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
