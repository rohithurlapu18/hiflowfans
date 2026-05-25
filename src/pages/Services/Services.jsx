import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineAssessment, MdDynamicFeed, MdBuildCircle, MdDesignServices } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import './Services.css';

const iconMap = {
  MdDynamicFeed: MdDynamicFeed,
  MdOutlineAssessment: MdOutlineAssessment,
  MdBuildCircle: MdBuildCircle,
  MdDesignServices: MdDesignServices
};

function Services() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const activeService = servicesData.find((s) => s.id === activeTab);

  return (
    <div className="services-page">
      <section className="services-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-inner"
        >
          <h1>Engineering & On-Site Services</h1>
          <p>
            From precise dynamic balancing to thermal efficiency airflow audits, our expert field engineers deliver guaranteed performance optimization.
          </p>
        </motion.div>
      </section>

      <section className="services-tabs-container">
        <div className="tabs-sidebar">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <button
                key={service.id}
                className={`tab-btn ${activeTab === service.id ? 'active' : ''}`}
                onClick={() => setActiveTab(service.id)}
              >
                {IconComponent && <IconComponent className="tab-icon" />}
                <span>{service.name}</span>
              </button>
            );
          })}
        </div>

        <div className="tab-content-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="content-inner"
            >
              <h2>{activeService.name}</h2>
              <p className="service-lead">{activeService.shortDesc}</p>
              <p className="service-detail">{activeService.longDesc}</p>

              <div className="specs-grid">
                <div className="spec-card">
                  <h3>Key Benefits</h3>
                  <ul>
                    {activeService.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="spec-card">
                  <h3>Our Execution Process</h3>
                  <ol>
                    {activeService.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="cta-panel">
                <p>Have an immediate industrial balancing or efficiency auditing requirement?</p>
                <Link to="/request-quote" className="services-cta-btn">
                  Schedule an Engineer / Request Quote
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

export default Services;