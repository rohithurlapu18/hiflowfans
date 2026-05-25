import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const whatsappNumber = '+919999999999'; // Example number
  const message = 'Hello Hi Flow Fans team, I would like to inquire about industrial fans and cooling systems.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Hi Flow Fans on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="tooltip-text">Chat with an Expert</span>
    </a>
  );
}

export default WhatsAppButton;
