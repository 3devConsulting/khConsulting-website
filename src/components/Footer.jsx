import '../assets/styles/css/footer.css';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram,  FaEnvelope, FaPhone, FaMapMarkerAlt  } from 'react-icons/fa';
import { icons } from "../assets/icon/icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src={icons.logo} />
      </div>
      <div className="footer-contacts">
        <ul>
          <li><FaEnvelope /> kh-consult_mada@outlook.com</li>
          <li><FaPhone /> (+261) 34 93 584 34</li>
          <li><FaMapMarkerAlt /> Lot VT 5 CS Ampahateza, Ambohipo, 101 Antananarivo </li>
        </ul>
      </div>
      {/* <div className="footer-social-links">
        <ul>
          <li><a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a></li>
          <li><a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a></li>
          <li><a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a></li>
          <li><a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a></li>
        </ul>
      </div> */}
      <div className="footer-credits">
        <p>Développé par <strong>3devConsulting</strong></p>
        <p>&copy; 2024 Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;