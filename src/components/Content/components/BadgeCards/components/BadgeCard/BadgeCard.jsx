import { useContext } from "react";
import "./BadgeCard.css";
import { LanguageContext } from "../../../../../../context/LanguageContext.jsx";

const BadgeCard = ({ item, currentFilter }) => {
    const { currentLanguage, getTranslate } = useContext(LanguageContext);

    const iconBg = `linear-gradient(180deg, ${item.style.linear_gradient[0]} 0%, ${item.style.linear_gradient[1]} 100%)`;
    const { total_revenue = 0, percent_change = 0, daily_change = 0, is_money_eq = 0 } = item?.date_data?.[currentFilter] ?? {};

    const percentChangeClass = () => {
        if (percent_change > 0) {
            return "badge-card__percentage--positive";
        } else if (percent_change < 0) {
            return "badge-card__percentage--negative";
        } else {
            return "badge-card__percentage--neutral";
        }
    }

    return (
        <div className="badge-card">
            <div className="badge-card__container">
                <div className="badge-card__title-count">
                    <h1 className="badge-card__title">{item.name[currentLanguage]}</h1>
                    <h2 className="badge-card__count">
                        {is_money_eq
                            ? `\$${total_revenue.toLocaleString("en-US")}`
                            : total_revenue.toLocaleString("en-US")}
                    </h2>
                </div>
                <div className="badge-card__icon" style={{ backgroundImage: iconBg }}>
                    <i className={item.style.icon}></i>
                </div>
            </div>
            <div className="badge-card__container">
                <span className={`badge-card__percentage ${percentChangeClass()}`}>
                    {percent_change > 0 ? (
                        <>
                            +{percent_change.toLocaleString("en-US")}%
                            <i className="fi fi-sr-caret-up"></i>
                        </>
                    ) : (
                        <>
                            {percent_change.toLocaleString("en-US")}%
                            {percent_change !== 0 && <i className="fi fi-sr-caret-down"></i>}
                        </>
                    )}
                </span>
                <div className="badge-card__today">
                    {daily_change >= 0 ? (
                        `+${daily_change.toLocaleString("en-US")}${is_money_eq ? "$" : ""} ${getTranslate("badge_card_today")}`
                    ) : (
                        `${daily_change.toLocaleString("en-US")}${is_money_eq ? "$" : ""} ${getTranslate("badge_card_today")}`
                    )}
                </div>
            </div>
        </div>
    );
}

export default BadgeCard;