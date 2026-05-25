import { motion } from 'framer-motion';
import { FaCalculator, FaFileInvoiceDollar, FaRegLightbulb } from 'react-icons/fa';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import './RequestQuote.css';

function RequestQuote() {
  return (
    <div className="request-quote-page">
      <section className="quote-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-inner"
        >
          <h1>Request for Quotation (RFQ)</h1>
          <p>
            Submit your specific airflow parameters, cooling tower sizes, or blower duties, and our sales engineers will perform structural calculations to issue a proposal.
          </p>
        </motion.div>
      </section>

      <section className="quote-main-section">
        <div className="quote-layout-grid">
          
          {/* Column 1: Info & Engineering Tips */}
          <div className="guidelines-column">
            
            <div className="instruction-card">
              <FaFileInvoiceDollar className="card-top-icon" />
              <h2>RFQ Submission Guidelines</h2>
              <p>To help us calculate your pricing and impeller torque accurately, please review these key metrics before completing the specifications:</p>
              
              <ul className="guidelines-list">
                <li>
                  <strong>Fan Diameter:</strong> Measure either the exact impeller diameter or the inside cylinder diameter of the fan ring/stack.
                </li>
                <li>
                  <strong>Required Airflow:</strong> State target volume in cubic feet per minute (CFM) or cubic meters per hour (m³/h).
                </li>
                <li>
                  <strong>Static Pressure:</strong> Provide in mmWG or Pascals. If unavailable, specify the fan speed (RPM) or application.
                </li>
                <li>
                  <strong>Temperature / Gas Profile:</strong> State if the fan operates in hot flue gases, acid fumes, or highly humid cooling tower drafts.
                </li>
              </ul>
            </div>

            {/* Quick calculations card */}
            <div className="guidelines-card-secondary">
              <div className="card-header-icon-wrap">
                <FaCalculator className="header-icon" />
                <h3>Calculations Support</h3>
              </div>
              <p>Our computational fluid dynamics (CFD) group performs structural calculations, blade modal analyses, and torque rating matches to pair the fan hub with your existing gear shaft coupling.</p>
              <div className="tip-box">
                <FaRegLightbulb className="tip-icon" />
                <p><strong>Retrofitting tip:</strong> Upgrading heavy metal fans to aerodynamic FRP fans often drops current draws by up to 25% while maintaining matching volumes!</p>
              </div>
            </div>

          </div>

          {/* Column 2: The Spec-Form */}
          <div className="form-column">
            <div className="column-title">
              <h2>Technical RFQ Sheet</h2>
              <p>Please enter company details and all known technical specs to trigger automated engineering processing.</p>
            </div>
            <QuoteForm />
          </div>

        </div>
      </section>
    </div>
  );
}

export default RequestQuote;