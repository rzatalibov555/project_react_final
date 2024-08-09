import { useContext } from "react";
import "./Language.css";
import { LanguageContext } from "../../../../../../../../context/LanguageContext.jsx";

const Language = () => {
    const { currentLanguage, changeLanguage, Languages } = useContext(LanguageContext);

    return (
        <div className="topbar__menu-language">
            <div className="ml__current">
                <img
                    src={Languages.find(language => language.code === currentLanguage).icon}
                    className="ml__current-img"
                    alt="Language"
                />
            </div>
            <div className="ml__select">
                <ul className="ml__list">
                    {Languages.map((language, idx) => (
                        <li className="ml__item" key={idx}>
                            <button className="ml__item-btn" onClick={() => changeLanguage(language.code)}>
                                <img
                                    className="ml__item-btn-img"
                                    src={language.icon}
                                    alt={`Language ${language.code}`}
                                />
                                <span className="ml__item-btn-text">{language.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Language;