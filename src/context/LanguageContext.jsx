import { useState, createContext } from "react";
import { LanguageCollection } from "../lang/LanguageCollection.jsx";
import LangEN from "./assets/img/lang_en.png";
import LangRU from "./assets/img/lang_ru.png";
import LangAZ from "./assets/img/lang_az.png";

const LanguageContext = createContext(null);

const Languages = [
    { code: "en", name: "English", icon: LangEN },
    { code: "ru", name: "Русский", icon: LangRU },
    { code: "az", name: "Azərbaycan", icon: LangAZ },
];

const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState("en");

    const changeLanguage = (lang = "en") => {
        if (Languages.some(language => language.code === lang))
            setCurrentLanguage(lang);
        else
            setCurrentLanguage("en");
    }

    const getTranslate = (collectionWord) => {
        return LanguageCollection[collectionWord][currentLanguage];
    }

    return (
        <LanguageContext.Provider
            value={{
                currentLanguage,
                changeLanguage,
                getTranslate,
                Languages
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export { LanguageContext, LanguageProvider };