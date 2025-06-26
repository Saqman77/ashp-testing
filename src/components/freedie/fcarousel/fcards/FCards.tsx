import { useEffect, useRef, useState } from "react";
import "./fcards.scss";
import FB from "../../../../assets/freedi/Facebook.png";
import INSTA from "../../../../assets/freedi/insta.png";
import X from "../../../../assets/freedi/X.png";
import LINK from "../../../../assets/freedi/linked.png";
import SPOTIFY from "../../../../assets/freedi/Spotify.png";
import TREE from "../../../../assets/freedi/linktree-logo-icon.svg";
import YT from "../../../../assets/freedi/youtube.png";
import SC from "../../../../assets/freedi/soundcloud.svg";
import BANDC from "../../../../assets/freedi/bandcamp.png";
import GIT from "../../../../assets/freedi/github.png";
import INT from "../../../../assets/freedi/internet-svgrepo-com.svg";
import DN from "../../../../assets/freedi/download.svg";
import DRIB from "../../../../assets/freedi/dribbble-svgrepo-com.svg";
import BEHANCE from "../../../../assets/freedi/behance-svgrepo-com.svg";

interface FCardsProps {
  id: string;
  name: string;
  img: string;
  desc: string;
  role: string;
  mail: string;
  portfolio: string;
  fb: string;
  insta: string;
  x: string;
  link: string;
  spotify: string;
  tree: string;
  yt: string;
  cv: string;
  sc: string;
  git: string;
  bandC: string;
  behance: string;
  dribble: string;
  shout: string;
 
}

const ShoutoutPopup: React.FC<{ message: string }> = ({ message }) => {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      setFadeOut(false);

      const fadeTimer = setTimeout(() => setFadeOut(true), 5000);
      const hideTimer = setTimeout(() => setVisible(false), 5500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [message]);

  if (!visible) return null;

  return (
    <div className={`shoutout-popup ${fadeOut ? "fade-out" : "fade-in"}`}>
      <p className="shouter">{message}</p>
    </div>
  );
};

const FCards: React.FC<FCardsProps> = ({
  id,
  name,
  img,
  desc,
  role,
  mail,
  portfolio,
  fb,
  insta,
  x,
  link,
  spotify,
  tree,
  yt,
  sc,
  bandC,
  git,
  behance,
  dribble,
  shout,
  cv,
}) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 350;

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.classList.remove("active");
      void carouselElement.offsetWidth;
      carouselElement.classList.add("active");
    }
  }, [id]);

  return (
    <div className="f-card" id={id} ref={carouselRef}>
      {shout && <ShoutoutPopup message={shout} key={shout} />}
      <div className="card-top">
        <div
          className="left-img"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <img src={img} alt="profile-photo" className="l-img" />
        </div>
        <div className="right-main">
          <div className="right-role">
            <h3 className="main-name">
              {name}
            </h3>
            <p className="main-role">{role}</p>
          </div>
          <div className="right-desc">
            <p className="r-desc">
              {isExpanded ? (
                desc.split("\n").map((line, index) => (
                  <span key={index}>{line}<br /></span>
                ))
              ) : (
                <>
                  {desc.substring(0, maxLength)}
                  {desc.length > maxLength && (
                    <>
                      ...{" "}
                      <button className="read-more-btn" onClick={() => setIsExpanded(true)}>
                        Read More
                      </button>
                    </>
                  )}
                </>
              )}
              {isExpanded && (
                <button className="read-more-btn" onClick={() => setIsExpanded(false)}>
                  Read Less
                </button>
              )}
            </p>
          </div>
          <div className="socials">
            {fb && <a href={fb} className="f-social"><img src={FB} alt="social-icon" /></a>}
            {insta && <a href={insta} className="f-social"><img src={INSTA} alt="social-icon" /></a>}
            {x && <a href={x} className="f-social"><img src={X} alt="social-icon" /></a>}
            {link && <a href={link} className="f-social"><img src={LINK} alt="social-icon" /></a>}
            {spotify && <a href={spotify} className="f-social"><img src={SPOTIFY} alt="social-icon" /></a>}
            {tree && <a href={tree} className="f-social"><img src={TREE} alt="social-icon" /></a>}
            {yt && <a href={yt} className="f-social"><img src={YT} alt="social-icon" /></a>}
            {sc && <a href={sc} className="f-social"><img src={SC} alt="social-icon" /></a>}
            {bandC && <a href={bandC} className="f-social"><img src={BANDC} alt="social-icon" /></a>}
            {git && <a href={git} className="f-social"><img src={GIT} alt="social-icon" /></a>}
            {behance && <a href={behance} className="f-social"><img src={BEHANCE} alt="social-icon" /></a>}
            {dribble && <a href={dribble} className="f-social"><img src={DRIB} alt="social-icon" /></a>}
          </div>
        </div>
      </div>
      <div className="card-bottom">
        <div className="f-contact">
          <div className="mail-wrapper">
            <p className="mail">
              <span className="mail-span">E-mail:&nbsp; </span>
              <a href={`mailto:${mail}?subject=AshP%20Referral%`} className="freed-a">{mail}</a>
            </p>
          </div>
          <div className="phone-wrapper">
            <p className="phone">
              <span className="phone-span">Portfolio:&nbsp; </span>
              <a href={portfolio}><img src={INT} alt="social-icon" className="port-icon" /></a>
            </p>
            {cv && (
              <p className="phone">
                <span className="phone-span">Download CV:&nbsp; </span>
                <a href={cv}><img src={DN} alt="social-icon" className="port-icon" /></a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FCards;