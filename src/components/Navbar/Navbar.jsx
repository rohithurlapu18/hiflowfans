import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaCalculator } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on page transition
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Monitor scroll for glass background activation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-glow-dot"></span>
          Hi Flow Fans
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-only">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/industries" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Industries
            </NavLink>
          </li>
          <li>
            <NavLink to="/client-profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Clients
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/quality" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Quality
            </NavLink>
          </li>
          <li>
            <NavLink to="/technical-support" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Support
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop Action Button */}
        <div className="nav-actions desktop-only">
          <Link to="/request-quote" className="quote-nav-btn">
            <FaCalculator className="btn-icon-calc" />
            <span>Request Quote</span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/industries">Industries</Link></li>
          <li><Link to="/client-profile">Clients</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/quality">Quality</Link></li>
          <li><Link to="/technical-support">Technical Support</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li className="mobile-btn-wrap">
            <Link to="/request-quote" className="mobile-quote-btn">
              Request Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;