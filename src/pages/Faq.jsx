import { useState } from 'react';
import '../assets/styles/css/faq.css';

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <section className="w-full font-bold mb-[80px] text-4xl flex justify-center">
      Questions Fréquemment Posées
      </section>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleIndex(index)}
            >
              <h3>{faq.question}</h3>
              <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>▼</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.reponse}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
