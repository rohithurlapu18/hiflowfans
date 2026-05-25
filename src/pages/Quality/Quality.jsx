import { motion } from 'framer-motion';
import { FaCertificate, FaShieldAlt, FaVial, FaFileAlt } from 'react-icons/fa';
import './Quality.css';

const qualityStandards = [
  {
    title: 'ISO 9001:2015 Certification',
    icon: FaCertificate,
    desc: 'Our manufacturing plant adheres strictly to ISO standards, ensuring structured document controls, routine internal audits, and continuous optimization of fabrication procedures.'
  },
  {
    title: 'Precision Balancing (ISO 1940)',
    icon: FaShieldAlt,
    desc: 'Every fan impeller is dynamically balanced to G2.5 (standard) or G1.0 (high precision) grades using computerized laser vibration analyzers to guarantee zero vibration.'
  },
  {
    title: 'Non-Destructive Testing (NDT)',
    icon: FaVial,
    desc: 'Raw metallic castings undergo rigorous X-ray inspection to eliminate inner cavities. FRP fan blades undergo ultrasonic thickness mapping to guarantee uniform strength.'
  },
  {
    title: 'CFD & Aerodynamic Testing',
    icon: FaFileAlt,
    desc: 'Each custom blade angle and twist profile is evaluated using computational fluid dynamics (CFD) simulations to maximize static pressure and energy savings.'
  }
];

const rawMaterials = [
  {
    item: 'Fiberglass Resin Matrix',
    spec: 'Vinyl Ester / Epoxy composite resin with UV stabilization and chemical-resistant additives.'
  },
  {
    item: 'FRP Internal Core',
    spec: 'High-density closed-cell polyurethane foam block cores to ensure maximum stiffness-to-weight ratios.'
  },
  {
    item: 'Impeller Hub Assemblies',
    spec: 'Carbon Steel (Hot Dip Galvanized according to IS-4759), SS-304, or SS-316 high grade castings.'
  },
  {
    item: 'Aluminum Alloy Castings',
    spec: 'LM-6 grade high tensile aluminum alloy, fully spark-proof for extreme hazardous gas sectors.'
  }
];

function Quality() {
  return (
    <div className="quality-page">
      <section className="quality-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-inner"
        >
          <h1>Quality Assurance</h1>
          <p>
            AN ISO 9001:2015 Certified Company. At Hi Flow Fans, quality is not a metric, it is our core engineering foundation.
          </p>
        </motion.div>
      </section>

      {/* Grid of QA Standards */}
      <section className="standards-section">
        <div className="standards-grid">
          {qualityStandards.map((std, idx) => {
            const Icon = std.icon;
            return (
              <motion.div
                key={std.title}
                className="std-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="std-icon-wrap">
                  <Icon className="std-icon" />
                </div>
                <h3>{std.title}</h3>
                <p>{std.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Raw Material Specification Table */}
      <section className="specifications-section">
        <div className="section-header">
          <h2>Raw Material Specifications</h2>
          <p>We source only high-grade certified alloys and resin polymers to build components designed to survive 20+ years of operation.</p>
        </div>

        <motion.div
          className="specs-table-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <table className="specs-table">
            <thead>
              <tr>
                <th>Component / Material</th>
                <th>Engineering Specifications & Standards</th>
              </tr>
            </thead>
            <tbody>
              {rawMaterials.map((mat, idx) => (
                <tr key={idx}>
                  <td className="mat-name">{mat.item}</td>
                  <td className="mat-spec">{mat.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Balancing Demonstration Section */}
      <section className="balancing-demo-section">
        <div className="demo-glass-card">
          <div className="demo-content">
            <h2>The Importance of Dynamic Balancing</h2>
            <p>
              An unbalance of just 50 grams on a 6-meter cooling tower fan running at 150 RPM creates destructive centripetal forces. This continuous impact damages gearbox bearings, destroys dynamic shafts, and causes high vibration shut-downs.
            </p>
            <p>
              At Hi Flow Fans, our dynamic balancing division applies strict ISO 1940 guidelines. By reducing vibrations, we cut mechanical energy losses, drop localized motor noise below 85 dBA, and increase gearbox life.
            </p>
          </div>
          <div className="demo-badge">
            <span className="badge-title">VIBRATION LIMIT</span>
            <span className="badge-number">&lt; 1.5</span>
            <span className="badge-unit">mm/s RMS</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Quality;