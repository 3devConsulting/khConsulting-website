import { useLanguage } from "../context/LanguageContext";
import { icons } from "../assets/icon/icons";

const ServiceItem = ({
  icon,
  altText,
  titleKey,
  descriptionKey,
  animation,
}) => {
  const { translate } = useLanguage();

  return (
    <div
      className="flex mb-10 flex-col items-center w-[75%]"
      data-aos={animation}
    >
      <div className="flex-shrink-0 p-2 mb-5 rounded-tl-lg rounded-br-lg border-[#8F0C2E] border flex items-center justify-center">
        <img className="w-10" src={icon} alt={translate(altText)} />
      </div>
      <div className="flex flex-col items-center text-center">
        <label className="mb-1 text-xl uppercase">{translate(titleKey)}</label>
        <h3 className="text-sm">{translate(descriptionKey)}</h3>
      </div>
    </div>
  );
};

function OurServices() {
  const { translate } = useLanguage();

  return (
    <div className="w-full h-auto px-4 py-20 sm:px-10 lg:px-28 xl:px-36 flex flex-col">
      <section className="w-full font-bold mb-[80px] text-4xl flex justify-center">
        {translate("our_services")}
      </section>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <ServiceItem
          icon={icons.certification}
          altText="certification"
          titleKey="certification"
          descriptionKey="certification_description"
          animation="fade-up"
        />
        <ServiceItem
          icon={icons.manufacturing}
          altText="industrialization"
          titleKey="industrialization"
          descriptionKey="industrialization_description"
          animation="fade-up"
        />
        <ServiceItem
          icon={icons.positive}
          altText="accompaniment"
          titleKey="accompaniment"
          descriptionKey="accompaniment_description"
          animation="fade-up"
        />
        <ServiceItem
          icon={icons.collaboration}
          altText="customer_relationship"
          titleKey="customer_relationship"
          descriptionKey="customer_relationship_management_description"
          animation="fade-up"
        />
        <ServiceItem
          icon={icons.natural}
          altText="essential_oils"
          titleKey="essential_oils"
          descriptionKey="essential_oils_description"
          animation="fade-up"
        />
        <ServiceItem
          icon={icons.ask}
          altText="request"
          titleKey="request"
          descriptionKey="request_description"
          animation="fade-up"
        />
      </section>
    </div>
  );
}

export default OurServices;
