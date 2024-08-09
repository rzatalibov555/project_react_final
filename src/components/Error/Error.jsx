import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import { LanguageContext } from "../../context/LanguageContext.jsx";

const Error = ({ errorCode }) => {
    const { getTranslate } = useContext(LanguageContext);

    if (errorCode === 404) {
        return (
            <div className="error">
                <h1 className="error__code">{getTranslate("error_404_title")}</h1>
                <p className="error__description">{getTranslate("error_404_description")}</p>
                <div className="error__advice">
                    <p className="error__advice-title">{getTranslate("error_404_advice_title")}</p>
                    <Link className="error__advice-link" to="/dashboard">{getTranslate("error_404_advice_link")}</Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="error">
                <h1 className="error__code">{getTranslate("error_unexpected_title")}</h1>
                <p className="error__description">{getTranslate("error_unexpected_description")}</p>
            </div>
        );
    }
}

export default Error;
