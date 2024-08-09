import { useContext } from "react";
import "./Search.css";
import { LanguageContext } from "../../../../../../context/LanguageContext.jsx";

const Search = () => {
    const { getTranslate } = useContext(LanguageContext);

    return (
        <div className="topbar__search">
            <input
                type="text"
                className="topbar__search-input"
                placeholder={getTranslate("search_placeholder")}
            />
            <div className="topbar__search-icon">
                <i className="fi fi-rr-search"></i>
            </div>
        </div>
    );
}

export default Search;