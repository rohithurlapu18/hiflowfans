import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div className='home'>
      <section className='hero'>
        <div className='overlay'></div>

        <motion.div
          className='hero-content'
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src='dist/images/logo.png'
            alt='Company Logo'
            className='company-logo'
          />

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi Flow Fans
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            In Pursuit of Energy Saving
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            High Performance Industrial Cooling Solutions, FRP Fans,
            Ventilation Systems and Energy Efficient Industrial Equipment.
          </motion.p>

          <motion.div
            className='hero-buttons'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Link to='/products'>
              <button className='primary-btn'>Explore Products</button>
            </Link>

            <Link to='/contact-us'>
              <button className='secondary-btn'>Contact Us</button>
            </Link>
          </motion.div>
        </motion.div>

        <div className='floating-circle one'></div>
        <div className='floating-circle two'></div>
        <div className='floating-circle three'></div>
      </section>

      <section className='about-preview'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Company</h2>

          <p>
            Hi Flow Fans is a leading manufacturer of industrial cooling tower
            fans, FRP fans, ventilation systems and energy saving industrial
            airflow solutions.
          </p>
        </motion.div>
      </section>

      <section className='features'>
        <motion.div
          className='feature-card'
          whileHover={{ scale: 1.05 }}
        >
          <h3>Energy Efficient</h3>
          <p>Advanced airflow technology for lower power consumption.</p>
        </motion.div>

        <motion.div
          className='feature-card'
          whileHover={{ scale: 1.05 }}
        >
          <h3>Industrial Quality</h3>
          <p>Manufactured with durable industrial-grade materials.</p>
        </motion.div>

        <motion.div
          className='feature-card'
          whileHover={{ scale: 1.05 }}
        >
          <h3>Trusted Support</h3>
          <p>Reliable technical assistance and customer service.</p>
        </motion.div>
      </section>
    </div>
  )
}

export default Home