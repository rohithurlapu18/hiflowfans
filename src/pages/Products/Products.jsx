import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import './Products.css';

const categories = ['All', 'FRP Fans', 'Axial Fans', 'Blowers', 'Components'];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  return (
    <div className="products-page">
      <section className="products-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-inner"
        >
          <h1>Industrial Airflow Catalog</h1>
          <p>
            Explore our state-of-the-art aerodynamic fan impellers, fiber-reinforced assemblies, heavy duty blowers, and certified spare internals.
          </p>
        </motion.div>
      </section>

      {/* Categories filter tabs */}
      <section className="products-filter-section">
        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <motion.div layout className="products-grid">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="product-card"
              >
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} />
                  <span className="product-category-tag">{product.category}</span>
                </div>

                <div className="product-info-panel">
                  <h2>{product.name}</h2>
                  <p className="product-desc">{product.description}</p>

                  <div className="specs-list">
                    <h3>Engineering Specifications</h3>
                    <div className="specs-grid">
                      {Object.entries(product.specs).map(([key, val]) => (
                        <div className="spec-item" key={key}>
                          <span className="spec-key">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="spec-value">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="features-list">
                    <h3>Key Advantages</h3>
                    <ul>
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-cta-row">
                    <Link to="/request-quote" className="quote-link-btn">
                      Request Performance Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

export default Products;