import { useContext } from "react";
import "./PageHeader.css";
import { AuthContext } from "../../../../context/AuthContext.jsx";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import { FilterContext } from "../../../../context/FilterContext.jsx";

const PageHeader = () => {
    const { getTranslate } = useContext(LanguageContext);
    const { userData } = useContext(AuthContext);
    const {
        getCurrentFilter,
        setLast24Hour,
        setLast7Days,
        setLast30Days,
        setLast12Months,
        setAllTime
    } = useContext(FilterContext);

    const filterActiveClass = (filterType) => {
        return getCurrentFilter.toUpperCase() === filterType ? "page-header__filter-btn--active" : "";
    }

    return (
        <div className="page-header">
            <div className="page-header__welcome">
                <h1 className="page-header__welcome-title">
                    {getTranslate("page_header_welcome_title")} {userData.first_name}
                </h1>
                <p className="page-header__welcome-description">
                    {getTranslate("page_header_welcome_description_part1")}
                    {userData.first_name}
                    {getTranslate("page_header_welcome_description_part2")}
                </p>
            </div>
            <div className="page-header__filter-container">
                <div className="page-header__filter">
                    <button
                        className={`page-header__filter-btn ${filterActiveClass("ALL_TIME")}`}
                        onClick={() => setAllTime()}
                    >
                        {getTranslate("page_header_filter_all_date")}
                    </button>
                    <button
                        className={`page-header__filter-btn ${filterActiveClass("12_MONTHS")}`}
                        onClick={() => setLast12Months()}
                    >
                        {getTranslate("page_header_filter_12_months")}
                    </button>
                    <button
                        className={`page-header__filter-btn ${filterActiveClass("30_DAYS")}`}
                        onClick={() => setLast30Days()}
                    >
                        {getTranslate("page_header_filter_30_days")}
                    </button>
                    <button
                        className={`page-header__filter-btn ${filterActiveClass("7_DAYS")}`}
                        onClick={() => setLast7Days()}
                    >
                        {getTranslate("page_header_filter_7_days")}
                    </button>
                    <button
                        className={`page-header__filter-btn ${filterActiveClass("24_HOUR")}`}
                        onClick={() => setLast24Hour()}
                    >
                        {getTranslate("page_header_filter_24_hour")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;