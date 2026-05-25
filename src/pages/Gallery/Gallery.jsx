import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { galleryData } from '../../data/galleryData';
import './Gallery.css';

const categories = ['All', 'FRP Fans', 'Blowers', 'Balancing', 'Ventilation', 'Components'];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-inner"
        >
          <h1>Project Gallery</h1>
          <p>
            Explore actual field installations of our customized heavy-duty fans, on-site dynamic balancing projects, and high-flow fiberglass ventilation casings.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="gallery-filter-section">
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

      {/* Visual Dynamic Grid */}
      <section className="gallery-grid-section">
        <motion.div layout className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="gallery-card"
              >
                <div className="gallery-img-wrap">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-card-hover">
                    <p className="hover-desc">{item.description}</p>
                  </div>
                </div>

                <div className="gallery-card-body">
                  <span className="gallery-badge">{item.category}</span>
                  <h3>{item.title}</h3>
                  <div className="location-tag">
                    <FaMapMarkerAlt className="location-icon" />
                    <span>{item.location}</span>
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

export default Gallery;