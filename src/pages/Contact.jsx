import { useState } from 'react';
import '../assets/styles/css/contact.css';
import { FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <section className="contact-title">
        Contactez-nous
      </section>
      <div className="contact-container">
        <div className="contact-list">
          <ul>
            <li><FaEnvelope /> kh-consult_mada@outlook.com</li>
            <li><FaPhone /> (+261) 34 93 584 34</li>
            <li><FaMapMarkerAlt /> Lot VT 5 CS Ampahateza, Ambohipo, 101 Antananarivo</li>
            <li><a className="flex" href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /> KH Consulting</a></li>
          </ul>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Envoyer</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
