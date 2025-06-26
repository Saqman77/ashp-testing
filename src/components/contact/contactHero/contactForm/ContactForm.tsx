import React, { useState } from 'react';
import styles from './contactForm.module.scss';
import right from "../../../../assets/buttons/right-arrow.svg"
import content from './contactFormContent';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string | undefined) => {
    setForm({ ...form, number: value || '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate random success/failure
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      setSuccess(true);
      setError(false);
      setForm({ name: '', email: '', number: '', message: '' });
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  const handleRetry = () => {
    setError(false);
    setSuccess(false);
    setForm({ name: '', email: '', number: '', message: '' });
  };

  const isFormIncomplete = !form.name || !form.email || !form.number || !form.message;

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      {(success || error) && (
        <div style={{textAlign: 'center', padding: '12px 0 24px 0'}}>
          {success && (
            <div className={styles.successMessage}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', margin: '0 auto 8px'}}>
                <circle cx="12" cy="12" r="12" fill="#7B6DDB"/>
                <path d="M7 13.5L11 17L17 9.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div style={{fontSize: '1.1rem', color: '#7B6DDB', fontWeight: 600}}>Sent successfully</div>
            </div>
          )}
          {error && (
            <div className={styles.errorMessage}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', margin: '0 auto 8px'}}>
                <circle cx="12" cy="12" r="12" fill="#E57373"/>
                <path d="M8 8L16 16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M16 8L8 16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <div style={{fontSize: '1.1rem', color: '#E57373', fontWeight: 600, marginBottom: 8}}>Failed to send. Please try again.</div>
              <button onClick={handleRetry} type="button" style={{padding: '6px 18px', fontSize: '1rem', background: '#E57373', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer'}}>Try Again</button>
            </div>
          )}
        </div>
      )}
      <div className={styles.topRow}>
        <span className={styles.fromLabel}>{content.fromLabel}</span>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder={content.namePlaceholder}
          value={form.name}
          onChange={handleChange}
          disabled={success || error}
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder={content.emailPlaceholder}
          value={form.email}
          onChange={handleChange}
          disabled={success || error}
        />
        <PhoneInput
          className={styles.input}
          placeholder={content.numberPlaceholder}
          value={form.number}
          onChange={handlePhoneChange}
          disabled={success || error}
          defaultCountry="US"
        />
      </div>
      <div className={styles.messageSection}>
        <label className={styles.messageLabel}>{content.messageLabel}</label>
        <textarea
          className={styles.textarea}
          name="message"
          placeholder={content.messagePlaceholder}
          value={form.message}
          onChange={handleChange}
          disabled={success || error}
        />
      </div>
      <div className={styles.buttonRow}>
        <button className={styles.sendButton} type="submit" disabled={success || error || isFormIncomplete}>
          {content.sendButton}
          <div className={styles.arrow}><img src={right} alt="" /></div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;