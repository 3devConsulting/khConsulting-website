import AboutUs from "./pages/AboutUs";
// import BlogNews from "./pages/BlogNews";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import OurServices from "./pages/OurServices";
import Pricing from "./pages/Pricing";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import faqData from "./data/Faq.json"
import Plan from "./data/Pricing.json"
import Footer from "./components/Footer";


function App() {
  AOS.init({
    duration: 2000,
  });

  return (
    <div className="w-full flex flex-col font-soinsansneue">
      <header className="w-full">
        <Header />
      </header>

      {/* Main content with height adjustment */}
      <main className="w-full" style={{ marginTop: "4rem" }}>
        <section id="about-us" className="min-h-screen">
          <AboutUs />
        </section>
        <section id="our-services" className="min-h-screen">
          <OurServices />
        </section>
        <section id="pricing" className="min-h-screen">
          <Pricing services={Plan.services}/>
        </section>
        {/* <section id="blog-news" className="min-h-screen">
          <BlogNews />
        </section> */}
        <section id="faq" className="min-h-screen">
          <Faq faqs={faqData.faq}/>
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
