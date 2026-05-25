import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        
        {/* Column 1: Brand Info */}
        <div className="footer-column brand-col">
          <Link to="/" className="footer-logo">
            <span className="logo-dot"></span>
            Hi Flow Fans
          </Link>
          <p className="brand-desc">
            In Pursuit of Energy Saving. We specialize in designing and manufacturing high-efficiency industrial cooling tower fans, FRP fans, and axial ventilation blowers since 1991.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column links-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home Base</Link></li>
            <li><Link to="/about-us">Our History</Link></li>
            <li><Link to="/products">Product Models</Link></li>
            <li><Link to="/services">Engineering Services</Link></li>
            <li><Link to="/industries">Sectors Served</Link></li>
          </ul>
        </div>

        {/* Column 3: Secondary Quick Links */}
        <div className="footer-column links-col">
          <h3>Information</h3>
          <ul className="footer-links">
            <li><Link to="/client-profile">Client Portfolio</Link></li>
            <li><Link to="/gallery">Field Gallery</Link></li>
            <li><Link to="/quality">Quality Systems</Link></li>
            <li><Link to="/technical-support">FAQ & Support</Link></li>
            <li><Link to="/request-quote">Request RFQ</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div className="footer-column contact-col">
          <h3>Contact Details</h3>
          <ul className="footer-contact-info">
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              <span>Plot No. 42, GIDC, Makarpura, Vadodara, Gujarat - 390010</span>
            </li>
            <li>
              <FaPhoneAlt className="footer-icon" />
              <span>+91 265 2631234 / +91 98765 43210</span>
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              <span>info@hiflowfans.com</span>
            </li>
            <li>
              <FaGlobe className="footer-icon" />
              <span>www.hiflowfans.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {new Date().getFullYear()} Hi Flow Fans. All Rights Reserved. Engineered with precision.</p>
          <div className="tagline-wrap">
            <span className="energy-tag">ISO 9001:2015 CERTIFIED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;