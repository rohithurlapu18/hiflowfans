import { motion } from 'framer-motion'
import './Products.css'

function Products() {
  return (
    <div className='products-page'>

      <section className='products-hero'>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h1>Our Products</h1>

          <p>
            High Performance Industrial Airflow Solutions
          </p>

        </motion.div>

      </section>

      <section className='product-section'>

        <motion.div
          className='product-card'
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className='product-image'>

            <img
              src='/images/products/high-flow-fan.jpg'
              alt='High Flow Fans'
            />

          </div>

          <div className='product-content'>

            <h2>High Flow Fans</h2>

            <p>
              Hi Flow Fans manufactures high efficiency industrial airflow
              systems designed for superior cooling performance, energy saving
              and long operational life.
            </p>

            <p>
              Our High Flow Fans are widely used in cooling towers,
              manufacturing industries, ventilation systems and industrial
              process applications.
            </p>

            <ul>
              <li>Energy Efficient Design</li>
              <li>Low Noise Operation</li>
              <li>High Air Delivery</li>
              <li>Industrial Grade Durability</li>
              <li>Low Maintenance</li>
            </ul>

            <a href="/request-quote">
                <button>Request Quote</button>
            </a>

          </div>

        </motion.div>

      </section>

    </div>
  )
}

export default Products