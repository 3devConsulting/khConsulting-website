import { createContext, useState, useEffect, useContext } from "react";
import English from "../locales/En.json"
import French from "../locales/Fr.json"

// Create a context for managing language settings
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("Fr");
  const [currentTranslations, setCurrentTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async (language) => {
      // const response = await fetch(`/src/locales/${language}.json`);
      // const data = await response.json();
      // console.log(data)
      const data = language == 'Fr' ? French: English;
      setCurrentTranslations(data);
    };

    loadTranslations(currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  const translate = (key) => {
    const keyPath = key.split(".");
    return keyPath.reduce(
      (translationObject, keyPart) =>
        translationObject && translationObject[keyPart]
          ? translationObject[keyPart]
          : key,
      currentTranslations
    );
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeLanguage, translate }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
