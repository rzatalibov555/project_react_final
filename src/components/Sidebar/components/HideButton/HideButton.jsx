import { useContext } from "react";
import "./HideButton.css";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";

const HideButton = ({ isCollapsed, onClick }) => {
    const { getTranslate } = useContext(LanguageContext);

    return (
        <button className="hide-btn" onClick={onClick}>
            {isCollapsed ? (
                <div className="hide-btn__icon-container">
                    <i className="fi fi-sr-caret-right"></i>
                </div>
            ) : (
                <>
                    <div className="hide-btn__text-container">
                        <span className="hide-btn__text">{getTranslate("sidebar_hide_menu")}</span>
                    </div>
                    <div className="hide-btn__icon-container">
                        <i className="fi fi-sr-caret-left"></i>
                    </div>
                </>
            )}
        </button>
    );
}

export default HideButton;