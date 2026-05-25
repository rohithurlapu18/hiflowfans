import { clientsData } from '../../data/clientsData';
import './ClientSlider.css';

function ClientSlider() {
  const { brands } = clientsData;

  // Duplicate items twice to ensure a seamless infinite scrolling effect
  const sliderItems = [...brands, ...brands, ...brands];

  return (
    <div className="client-slider-container">
      <h4 className="slider-title">TRUSTED BY INDUSTRY LEADERS</h4>
      <div className="slider-track-wrap">
        <div className="slider-track">
          {sliderItems.map((brand, idx) => (
            <div className="slider-slide" key={`${brand.name}-${idx}`}>
              <div className="client-logo-card">
                <span className="logo-icon-placeholder">{brand.logoText}</span>
                <span className="logo-fullname">{brand.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientSlider;
