import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaPhoneAlt, FaEnvelope, FaHeadphonesAlt } from 'react-icons/fa';
import './TechnicalSupport.css';

const faqs = [
  {
    id: 'faq-1',
    question: 'Why choose FRP fan blades over aluminum or cast iron?',
    answer: 'FRP (Fiberglass Reinforced Plastic) blades are aerodynamically correct with complex hollow aerofoil shapes (twisted and tapered). They weigh up to 60% less than metallic equivalents, which reduces motor startup torque, reduces drive shaft stress, and delivers up to 20-30% direct electrical power savings while completely preventing corrosion.'
  },
  {
    id: 'faq-2',
    question: 'How often should a cooling tower fan undergo dynamic balancing?',
    answer: 'We recommend verifying vibration amplitudes annually. If vibration levels exceed 2.5 mm/s RMS (or if visual inspection shows cavitation pitting, sediment scale, or leading edge erosion on the blades), a computerized dynamic field balance should be executed immediately to prevent gearbox bearing damage.'
  },
  {
    id: 'faq-3',
    question: 'Can Hi Flow retrofit fans from other manufacturers?',
    answer: 'Yes! We design bespoke impellers and hubs. Our engineers calculate the static pressure, motor power, and RPM of your existing wet cooling tower or dry heat exchanger to construct a drop-in high-efficiency FRP fan replacement with matching hub connections.'
  },
  {
    id: 'faq-4',
    question: 'What is the typical downtime required for a fan overhauling project?',
    answer: 'For a standard fan replacement (such as removing legacy metal/wood blades and installing our dynamic FRP fan assembly), we typically require a shutdown window of just 8 to 12 hours. We perform extensive preparatory modeling to ensure rapid on-site commissioning.'
  },
  {
    id: 'faq-5',
    question: 'How do you prevent water droplet erosion on blade tips?',
    answer: 'Every Hi Flow FRP fan blade undergoes specialized compression molding with a premium polyurethane leading-edge protective coating (erosion shield). This coating acts as a highly resilient barrier against water droplet impacts inside counterflow cooling cylinders.'
  }
];

function TechnicalSupport() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="support-page">
      <section className="support-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-inner"
        >
          <h1>Technical Support</h1>
          <p>
            Access 24/7 technical advice, engineering calculations, and troubleshooting guides from our specialized field services team.
          </p>
        </motion.div>
      </section>

      {/* Accordion FAQ Grid */}
      <section className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Read standard advice and engineering parameters compiled by our product design office.</p>
        </div>

        <div className="faq-accordion-wrap">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div key={faq.id} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <FaChevronDown className="arrow-icon" />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-answer-panel"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Direct Contact / Support Info Cards */}
      <section className="direct-support-section">
        <div className="support-channels-grid">
          <div className="channel-card">
            <FaPhoneAlt className="channel-icon" />
            <h3>Emergency Helpline</h3>
            <p>Direct contact for urgent dynamic balancing or catastrophic fan breakdowns.</p>
            <span className="channel-detail">+91 98765 43210</span>
          </div>

          <div className="channel-card">
            <FaEnvelope className="channel-icon" />
            <h3>Engineering Desk</h3>
            <p>Send raw CAD files, motor speed profiles, or airflow requirements for simulation.</p>
            <span className="channel-detail">support@hiflowfans.com</span>
          </div>

          <div className="channel-card">
            <FaHeadphonesAlt className="channel-icon" />
            <h3>Standard Helpline</h3>
            <p>General questions, replacement spares tracking, or invoice queries.</p>
            <span className="channel-detail">Mon - Sat (9:00 AM - 6:00 PM)</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnicalSupport;