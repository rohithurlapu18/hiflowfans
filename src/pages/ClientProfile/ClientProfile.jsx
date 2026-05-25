import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { clientsData } from '../../data/clientsData';
import ClientSlider from '../../components/ClientSlider/ClientSlider';
import './ClientProfile.css';

function ClientProfile() {
  const { stats, testimonials, brands } = clientsData;

  return (
    <div className="client-profile-page">
      <section className="client-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-inner"
        >
          <h1>Client Portfolio</h1>
          <p>
            Trusted by national power grids, oil majors, chemical complexes, and heavy metallurgical plants across India for engineering reliability and energy saving.
          </p>
        </motion.div>
      </section>

      {/* Numerical Achievements */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Infinite Logo Carousel */}
      <ClientSlider />

      {/* Core Clients Grid */}
      <section className="clients-detail-section">
        <div className="section-header">
          <h2>Enterprise Footprint</h2>
          <p>We work closely with these national leaders to execute heavy industrial airflow infrastructure.</p>
        </div>

        <div className="brands-grid">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              className="brand-item-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <h3>{brand.name}</h3>
              <span className="brand-badge">{brand.industry}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Block */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Client Endorsements</h2>
          <p>Read opinions from the engineering leaders responsible for thermal utilities and factory overhauls.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="quote-text">"{test.quote}"</p>
              <div className="quote-author-meta">
                <span className="author-name">{test.author}</span>
                <span className="author-title">{test.designation}</span>
                <span className="author-company">{test.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ClientProfile;