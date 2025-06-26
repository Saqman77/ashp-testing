import './schedule.scss'
import arrow from '/src/assets/buttons/right-arrow.svg';

const Schedule = () => {
  return (
    <a href="https://calendly.com/ashpreads" className='schedule-button'><button>        <div className="contact-us-text">
    <p>Book a free video consultation</p>
  </div>
  <div className="contact-us-arrow">
    <img src={arrow} alt="right-arrow" />
  </div></button></a>
  )
}

export default Schedule