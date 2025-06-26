import React from 'react'
import { contactHeroContent } from './contactHeroContent'
import './contactHero.scss'
import ContactForm from './contactForm/ContactForm'
import fan from '../../../assets/contact/contactfan.svg'
import ContactBar from './contactBar/ContactBar'

const ContactHero = () => {
  return (
    <div className='c-hero-container'>
        <div className="fanner">
          <img src={fan} alt="" />
        </div>
        <div className="c-heading">
          {contactHeroContent.icon && (
            <img src={contactHeroContent.icon} alt={contactHeroContent.iconAlt || "Heading Icon"} className="c-heading-icon" />
          )}
          <h1 className="c-heading-title">
            <span style={{ color: '#4B3B74' }}>{contactHeroContent.headingLeft}</span>
            <span style={{ color: '#C9549D' }}>{contactHeroContent.headingRight}</span>
          </h1>
        </div>
        <div className='c-form-wrapper'>
          <ContactForm/>
          <ContactBar/>
        </div>
    </div>
  )
}

export default ContactHero