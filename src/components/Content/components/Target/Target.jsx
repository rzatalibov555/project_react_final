import { useContext } from "react";
import "./Target.css";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import { FilterContext } from "../../../../context/FilterContext.jsx";
import ProgressBar from "./components/ProgressBar/ProgressBar.jsx";

const Target = () => {
    const { getTranslate } = useContext(LanguageContext);
    const { getCurrentFilter, getTarget } = useContext(FilterContext);

    const { goal = 0 } = getTarget;

    const {
        revenue = 0,
        is_revenue_price_rising = false,
        progress = 0,
        change = 0,
        earnings_today = 0,
        week = 0,
        is_week_price_rising = false,
        is_goal_price_rising = false
    } = getTarget?.date_data?.[getCurrentFilter] ?? {};

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return `${(num / 1000000).toFixed(2).replace(/\.00$/, '')}kk`;
        } else if (num >= 1000) {
            return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}k`;
        } else {
            return `${num}`;
        }
    };

    return (
        <div className="target">
            <div className="target__header">
                <div className="target__heading">
                    <h1 className="target__title">{getTranslate("target_title")}</h1>
                    <p className="target__description">{getTranslate("target_description")}</p>
                </div>
                <div className="target__icon">
                    <i className="fi fi-sr-menu-dots-vertical"></i>
                </div>
            </div>
            <div className="target__progress-bar">
                <ProgressBar strokeWidth={8} progress={progress}>
                    <div className="target__progress-bar-detail">
                        <span className={`target__pbd-percent ${change > 0 ? 'target__pbd-percent--positive' : change < 0 ? 'target__pbd-percent--negative' : 'target__pbd-percent--neutral'}`}>
                            {`${change}%`}
                            {change > 0 && <i className="fi fi-rr-caret-up"></i>}
                            {change < 0 && <i className="fi fi-rr-caret-down"></i>}
                        </span>
                        <span className="target__pbd-today">
                            {earnings_today > 0 && `+${earnings_today.toLocaleString("en-US")}$ `}
                            {earnings_today <= 0 && `${earnings_today.toLocaleString("en-US")}$ `}
                            {getTranslate("target_progress_today")}
                        </span>
                    </div>
                </ProgressBar>
            </div>
            <div className="target__detail">
                <h1 className="target__detail-today">
                    {getTranslate("target_detail_today_part1")}
                    <span className="target__detail-today-bold">
                        {` ${earnings_today.toLocaleString("en-US")}$ `}
                    </span>
                    {getTranslate("target_detail_today_part2")}
                </h1>
                <div className="target__statistic">
                    <div className="target__statistic-item">
                        <h1 className="target__statistic-title">{getTranslate("target_statistic_target")}</h1>
                        <div className={`target__statistic-value ${is_goal_price_rising ? "target__statistic-value--positive" : "target__statistic-value--negative"}`}>
                            {`\$${formatNumber(goal)}`}
                            {is_goal_price_rising && <i className="fi fi-rr-caret-up"></i>}
                            {!is_goal_price_rising && <i className="fi fi-rr-caret-down"></i>}
                        </div>
                    </div>
                    <div className="target__statistic-item">
                        <h1 className="target__statistic-title">{getTranslate("target_statistic_revenue")}</h1>
                        <div className={`target__statistic-value ${is_revenue_price_rising ? "target__statistic-value--positive" : "target__statistic-value--negative"}`}>
                            {`\$${formatNumber(revenue)}`}
                            {is_revenue_price_rising && <i className="fi fi-rr-caret-up"></i>}
                            {!is_revenue_price_rising && <i className="fi fi-rr-caret-down"></i>}
                        </div>
                    </div>
                    <div className="target__statistic-item">
                        <h1 className="target__statistic-title">{getTranslate("target_statistic_this_week")}</h1>
                        <div className={`target__statistic-value ${is_week_price_rising ? "target__statistic-value--positive" : "target__statistic-value--negative"}`}>
                            {`\$${formatNumber(week)}`}
                            {is_week_price_rising && <i className="fi fi-rr-caret-up"></i>}
                            {!is_week_price_rising && <i className="fi fi-rr-caret-down"></i>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Target;