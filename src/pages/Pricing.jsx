import '../assets/styles/css/pricing.css';

const Pricing = ({ services }) => {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title text-center text-4xl font-bold mb-12">Nos Tarifs</h2>
      <div className="pricing-cards">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`pricing-card bg-white rounded-lg shadow-xl p-6 transition duration-300 hover:scale-105 ${
              service.prix.type === "Forfait" ? "border border-green-500" : 
              service.prix.type === "Sur devis" ? "border border-yellow-500" : 
              "border border-red-500"
            }`}
          >
            <div>
              <h3 className="pricing-plan-name text-2xl font-bold mr-2 text-center">{service.nom}</h3>
            </div>
            
            <p className="text-gray-600 mb-6">{service.description}</p>

            <div className="mt-6">
              {service.prix.type === "Forfait" && (
                <div className="pricing-price text-3xl font-bold mb-4">
                  <span className="amount">{service.prix.montant}</span>
                  <span className="currency">Ar</span>
                </div>
              )} 
              {service.prix.type === "Sur devis" && (
                <p className="pricing-price text-xl font-semibold mb-4">Prix sur demande</p>
              )}
              <p className="text-gray-600">{service.prix.details}</p>
            </div>

            <button className="pricing-button w-full bg-[#8F0C2E] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Contactez-nous
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
