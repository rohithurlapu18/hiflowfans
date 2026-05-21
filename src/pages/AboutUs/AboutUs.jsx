import { motion } from 'framer-motion'
import './AboutUs.css'

function AboutUs() {
  return (
    <div className='about-page'>

      <section className='about-hero'>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>About Hi Flow Fans</h1>

          <p>
            Delivering Energy Efficient Industrial Cooling Solutions Since 1991
          </p>
        </motion.div>
      </section>

      <section className='company-overview'>

        <motion.div
          className='overview-content'
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2>Who We Are</h2>

          <p>
            Hi Flow Fans is one of the trusted manufacturers and suppliers of
            Industrial Cooling Tower Fans, FRP Fans, Axial Flow Fans,
            Ventilation Systems and Industrial Airflow Solutions in India.
          </p>

          <p>
            Established in the year <strong>1991</strong>, our company has been
            consistently delivering high performance and energy efficient
            industrial products to various industries across the country.
          </p>

          <p>
            With decades of engineering experience, we focus on innovation,
            durability, energy saving and customer satisfaction while
            maintaining international quality standards.
          </p>

        </motion.div>

        <motion.div
          className='overview-image'
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <img
            src='/images/about-company.jpg'
            alt='Industrial Manufacturing'
          />

        </motion.div>

      </section>

      <section className='certifications'>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2>Quality & Certifications</h2>

          <div className='cert-grid'>

            <div className='cert-card'>
              <h3>ISO Certified Company</h3>

              <p>
                AN ISO 9001:2015 Certified Company committed to maintaining high quality
                manufacturing standards and industrial excellence.
              </p>
            </div>

            <div className='cert-card'>
              <h3>Quality Assurance</h3>

              <p>
                Every product undergoes strict quality testing and performance
                inspection before delivery.
              </p>
            </div>

            <div className='cert-card'>
              <h3>Engineering Excellence</h3>

              <p>
                Designed with advanced engineering practices for durability,
                reliability and energy efficiency.
              </p>
            </div>

          </div>

        </motion.div>

      </section>

      <section className='mission-section'>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2>Our Mission</h2>

          <p>
            “In Pursuit of Energy Saving” — Our mission is to provide innovative,
            reliable and energy efficient industrial airflow solutions that help
            industries improve productivity while reducing energy consumption.
          </p>

        </motion.div>

      </section>

    </div>
  )
}

export default AboutUs