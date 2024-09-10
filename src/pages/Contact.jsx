import { useState } from 'react';
import '../assets/styles/css/contact.css'; 

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
       <section className="w-full font-bold mb-[80px] text-4xl flex justify-center">
       Contactez-nous
      </section>
      <div className="contact-container">
        <div className="contact-list">
      
          <ul>
            <li>Email: example@example.com</li>
            <li>Adresse: 123 Rue de Exemple, Ville, Pays</li>
            <li>Téléphone: +123 456 7890</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li>Facebook: <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
