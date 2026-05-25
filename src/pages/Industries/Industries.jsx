import { motion } from 'framer-motion';
import { FaIndustry, FaFireAlt, FaWind, FaTools, FaFlask, FaCogs } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Industries.css';

const industriesList = [
  {
    title: 'Thermal & Nuclear Power Plants',
    icon: FaFireAlt,
    bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    description: 'Supplying heavy-duty 34-foot cooling tower fan assemblies that withstand continuous base load operations and optimize steam condensation processes.',
    stats: '150+ Plants Served'
  },
  {
    title: 'Petrochemical & Oil Refineries',
    icon: FaFlask,
    bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
    description: 'Providing spark-proof, high-temperature aluminum alloy and specialized epoxy-cured FRP fans for oil refineries and hazardous gas handling sections.',
    stats: '80+ Refineries Equipped'
  },
  {
    title: 'HVAC & Commercial Cooling',
    icon: FaWind,
    bgImage: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600&auto=format&fit=crop',
    description: 'High-volume axial and centrifugal airflow systems optimized for commercial complexes, ventilation ducts, and central air systems.',
    stats: '1200+ Projects Installed'
  },
  {
    title: 'Chemical & Fertilizer Plants',
    icon: FaIndustry,
    bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
    description: 'Bespoke hand-cured vinyl ester resin fan casings designed specifically to survive continuous acid fume exposure and toxic vapor vents.',
    stats: '300+ Chemical Plants'
  },
  {
    title: 'Cement & Heavy Metallurgy',
    icon: FaCogs,
    bgImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop',
    description: 'High-pressure dust extraction blowers and dynamic-balancing retrofits that prevent abrasion wear from fine dust particles.',
    stats: '95+ Steel & Cement Mills'
  },
  {
    title: 'Marine & Mine Ventilation',
    icon: FaTools,
    bgImage: 'https://images.unsplash.com/photo-1508873696983-2df519f0397e?q=80&w=600&auto=format&fit=crop',
    description: 'Explosion-proof mine ventilation systems and marine axial fans engineered for aggressive environments and saline air resistance.',
    stats: '50+ Mine Shafts Fitted'
  }
];

function Industries() {
  return (
    <div className="industries-page">
      <section className="industries-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-inner"
        >
          <h1>Industries Served</h1>
          <p>
            From extreme acid-fume operations in chemical ducts to continuous thermal power production base loads, our custom fans operate seamlessly globally.
          </p>
        </motion.div>
      </section>

      <section className="industries-grid-container">
        <div className="industries-grid">
          {industriesList.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                className="industry-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="card-bg"
                  style={{ backgroundImage: `url(${ind.bgImage})` }}
                >
                  <div className="card-overlay"></div>
                </div>

                <div className="card-content">
                  <div className="icon-wrap">
                    <Icon className="ind-icon" />
                  </div>
                  <h3>{ind.title}</h3>
                  <p>{ind.description}</p>
                  <div className="card-footer">
                    <span className="ind-stat">{ind.stats}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="bottom-cta-panel">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cta-card"
          >
            <h2>Need a Custom Engineering Evaluation?</h2>
            <p>
              Our engineers collaborate closely with plant managers to formulate aerodynamically correct, highly efficient options designed for your exact workflow.
            </p>
            <div className="cta-buttons">
              <Link to="/request-quote" className="btn-primary">
                Submit Specifications (RFQ)
              </Link>
              <Link to="/contact-us" className="btn-secondary">
                Consult an Engineer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Industries;