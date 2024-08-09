import { useContext } from "react";
import "./SBLItem.css";
import { LanguageContext } from "../../../../../../../../context/LanguageContext.jsx";

const SBLItem = ({ item, currentFilter }) => {
    const { currentLanguage, getTranslate } = useContext(LanguageContext);
    const { country_name = {}, country_flag = "" } = item;
    const { sales_count = 0, revenue = 0, percentage = 0 } = item?.date_data?.[currentFilter] ?? {};

    return (
        <li className="sbl__item">
            <div className="sbl__flag-sales">
                <div className="sbl__flag">
                    <img src={country_flag} className="sbl__flag-img" alt={country_name?.[currentLanguage]} />
                </div>
                <div className="sbl__location-sales">
                    <span className="sbl__location">{country_name?.[currentLanguage]}</span>
                    <span className="sbl__sales">{sales_count} {getTranslate("sbl_sales_label")}</span>
                </div>
            </div>
            <div className="sbl__details">
                <span className="sbl__amount">${revenue.toLocaleString("en-US")}</span>
                <span className={`sbl__performance ${percentage > 0 ? "sbl__performance--positive" : percentage < 0 ? "sbl__performance--negative" : "sbl__performance--neutral"}`}>
                    {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
                </span>
            </div>
        </li>
    );
}

export default SBLItem;