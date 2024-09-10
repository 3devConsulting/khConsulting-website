import { useState } from "react";
import { FiX, FiAlignRight } from "react-icons/fi";
import { icons } from "../assets/icon/icons";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { translate, currentLanguage } = useLanguage();
  const [selectLanguageIsOpen, setSelectLanguageIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to open and close language switcher
  const selectLanguageAction = () => {
    // if (sideMenuIsOpen) {
    //   setSideMenuIsOpen(false);
    // }
    setSelectLanguageIsOpen(!selectLanguageIsOpen);
  };

  const links = [
    { label: "about_us", anchor: "about-us" },
    { label: "our_services", anchor: "our-services" },
    { label: "pricing", anchor: "pricing" },
    { label: "blog_&_news", anchor: "blog-news" },
    { label: "faq", anchor: "faq" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-50">
      <div className="flex flex-row justify-between items-center px-4 sm:px-10 lg:px-28 xl:px-36 h-full">
        {/* Logo Section */}
        <section>
          <img
            src={icons.logo}
            className="w-[75px] sm:w-[95px] lg:w-[115px] xl:w-[135px]"
            alt="Logo"
          />
        </section>

        {/* Desktop Links (hidden on small screens) */}
        <section className="hidden sm:flex flex-row">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.anchor}
              smooth={true}
              duration={500}
              offset={-64}
              className="px-4 flex items-center cursor-pointer"
            >
              {translate(link.label)}
            </Link>
          ))}
        </section>

        <section className="flex flex-row">
          <button className="bg-[#8F0C2E] mr-4 text-white px-[1.5rem] py-[7px] rounded-[9999px]">
            {translate("contact")}
          </button>
          <button
            className="font-barlow text-lg flex flex-row items-center"
            onClick={selectLanguageAction}
          >
            <span>{currentLanguage}</span>
          </button>
          {selectLanguageIsOpen && (
            <div className="absolute z-10 h-screen bottom-0 pl-[40px] bg-white text-black right-0 top-14 w-full md:w-[25vw]">
              <LanguageSwitcher
                setSelectLanguageIsOpen={setSelectLanguageIsOpen}
              />
            </div>
          )}
        </section>

        {/* Mobile Hamburger Button */}
        <button
          className="sm:hidden flex items-center justify-center p-2"
          onClick={toggleSidebar}
        >
          <FiAlignRight className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar Menu (Visible on small screens) */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 md:hidden">
          <div className="p-4">
            <button className="text-right p-2" onClick={toggleSidebar}>
              <FiX className="w-6 h-6" />
            </button>

            <nav className="flex flex-col mt-4 space-y-2">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.anchor}
                  smooth={true}
                  duration={500}
                  className="block py-2 cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
