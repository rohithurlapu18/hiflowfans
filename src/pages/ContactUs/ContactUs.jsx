import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm/ContactForm';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-page">
      <section className="contact-hero">
        <div className="hero-inner">
          <h1>Contact Us</h1>
          <p>
            Ready to upgrade your industrial fan systems or schedule on-site balancing? Reach out to our engineering support office directly.
          </p>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="contact-layout-grid">
          
          {/* Column 1: Info */}
          <div className="info-column">
            <div className="info-card">
              <h2>Get in Touch</h2>
              <p>Our sales and support teams are ready to assist you with customized airflow engineering and performance specifications.</p>
              
              <div className="contact-info-list">
                
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div className="info-text">
                    <h3>Head Office & Factory</h3>
                    <p>Plot No. 42, GIDC Industrial Estate, Makarpura, Vadodara, Gujarat - 390010, India</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaPhoneAlt className="info-icon" />
                  <div className="info-text">
                    <h3>Telephone / Mobile</h3>
                    <p>+91 265 2631234<br />+91 98765 43210</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div className="info-text">
                    <h3>Email Correspondence</h3>
                    <p>info@hiflowfans.com<br />sales@hiflowfans.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaClock className="info-icon" />
                  <div className="info-text">
                    <h3>Business Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed (Helpline active for emergencies)</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Embedded Google Map Placeholder */}
            <div className="map-placeholder-card">
              <h3>Our Factory Location</h3>
              <p className="map-info">Vadodara, Gujarat, India (Major Industrial Hub)</p>
              <div className="gmap-embed">
                {/* SVG mock map design */}
                <svg viewBox="0 0 400 200" className="mock-map-svg">
                  <rect width="100%" height="100%" fill="#0b0f19" rx="10" />
                  <circle cx="200" cy="100" r="80" fill="rgba(20, 184, 166, 0.05)" stroke="rgba(20, 184, 166, 0.2)" strokeWidth="1" />
                  <circle cx="200" cy="100" r="40" fill="rgba(6, 182, 212, 0.1)" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" />
                  <path d="M150 50 L250 150 M120 120 L280 80 M200 40 L200 160" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                  <circle cx="200" cy="100" r="8" fill="#ef4444" />
                  <text x="215" y="105" fill="#f8fafc" fontSize="12" fontWeight="bold">HI FLOW FANS</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="form-column">
            <div className="column-title">
              <h2>Send an Instant Message</h2>
              <p>Fill out the form below and an airflow engineer will respond within 2 hours during business hours.</p>
            </div>
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}

export default ContactUs;