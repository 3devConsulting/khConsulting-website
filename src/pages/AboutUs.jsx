import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "./../assets/image/images";
import { useLanguage } from "../context/LanguageContext";
// import "aos/dist/aos.css";

function AboutUs() {
  const { translate } = useLanguage();

  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: false,
  };

  return (
    <div className="bg-[#f5f7fa] w-full h-screen flex flex-col px-4 sm:px-10 lg:px-28 xl:px-36">
      <Slider {...settings} className="w-full h-full">
        <div className="flex flex-row items-center justify-between w-full h-screen slide">
          <section
            className="flex-1 flex items-center justify-center flex-col"
            data-aos="fade-up"
          >
            <h1 className="text-3xl font-bold text-[#8F0C2E] w-full flex justify-start mb-5">
              {translate(`synergy_for_madagascar`)}
            </h1>
            <label className="text-lg text-[#31343B] w-full flex justify-start">
              {translate(
                `a_team_of_engineers_and_experts_from_different_sectors_with_a_common_goal:_to_promote_and_develop_Madagascar's_economy_by_accompanying_operators_who_require_our_technical_support`
              )}
            </label>
          </section>
          <section className="flex-1 flex items-center justify-center">
            <img
              src={images.synergie}
              className="w-[30vw]"
              alt="Logo"
              data-aos="zoom-in"
            />
          </section>
        </div>
        <div className="flex flex-row items-center justify-between w-full h-screen slide py-36">
          <section
            className="flex-1 flex items-center justify-start flex-col h-full"
            data-aos="fade-up"
          >
            <h1 className="text-3xl font-bold text-[#8F0C2E] w-full flex justify-start mb-5">
              {translate(`quality`)}
            </h1>
            <label className="text-lg text-[#31343B] w-full flex justify-start">
              {translate(
                `offering_quality_service_to_our_customers_Enabling_our_customers_to_bring_their_projects_to_fruition_and_improve_existing_ones_always_with_the_aim_of_achieving_Quality`
              )}
            </label>
          </section>
          <section className="flex-1 flex items-center justify-center">
            <img
              src={images.excellence}
              className="w-[30vw]"
              alt="Logo"
              data-aos="zoom-in"
            />
          </section>
          <section
            className="flex-1 flex items-center justify-end flex-col h-full pb-10"
            data-aos="fade-up"
          >
            <h1 className="text-3xl font-bold text-[#8F0C2E] w-full flex justify-start mb-5">
              {translate(`quality`)}
            </h1>
            <label className="text-lg text-[#31343B] w-full flex justify-start">
              {translate(
                `offering_quality_service_to_our_customers_Enabling_our_customers_to_bring_their_projects_to_fruition_and_improve_existing_ones_always_with_the_aim_of_achieving_Quality`
              )}
            </label>
          </section>
        </div>
      </Slider>
    </div>
  );
}

export default AboutUs;
