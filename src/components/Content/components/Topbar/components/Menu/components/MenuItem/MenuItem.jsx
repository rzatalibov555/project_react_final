import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./MenuItem.css";
import { LanguageContext } from "../../../../../../../../context/LanguageContext.jsx";

const CalendarItem = ({ badgeCount }) => {
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <div className="topbar__menu-item topbar__menu-item-calendar">
            <i className="fi fi-sr-calendar"></i>
            {badgeCount > 0 && <span className="topbar__menu-badge">{badgeCount}</span>}
            <div className="topbar__menu-dropdown-calendar">
                <div className="topbar__menu-calendar">
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={currentLanguage}>
                        <DateCalendar
                            value={dayjs()}
                            views={["year", "month", "day"]}
                        />
                    </LocalizationProvider>
                </div>
            </div>
        </div>
    );
}

const EnvelopeItem = ({ envelopeData }) => {
    const { getTranslate } = useContext(LanguageContext);

    const totalCount = envelopeData?.total_count;
    const chat = envelopeData?.data?.chat;
    const discussion = envelopeData?.data?.discussion;
    const reviews = envelopeData?.data?.reviews;
    const support = envelopeData?.data?.support;

    return (
        <div className="topbar__menu-item topbar__menu-item-envelope">
            <i className="fi fi-sr-envelope"></i>
            {totalCount > 0 && (
                <span className="topbar__menu-badge">
                    {totalCount >= 100 ? "99+" : totalCount}
                </span>
            )}
            <div className="topbar__menu-dropdown-envelope">
                <div className="topbar__menu-envelope">
                    <ul className="topbar__me-list">
                        <li className="topbar__me-item">
                            <Link to="/chat" className="topbar__me-link">
                                <span className="topbar__me-item-title">{getTranslate("topbar_menu_chat")}</span>
                                {chat > 0 && (
                                    <span className="topbar__me-item-badge">
                                        {chat >= 100 ? "99+" : chat}
                                    </span>
                                )}
                            </Link>
                        </li>
                        <li className="topbar__me-item">
                            <Link to="/discussion" className="topbar__me-link">
                                <span className="topbar__me-item-title">{getTranslate("topbar_menu_discussion")}</span>
                                {discussion > 0 && (
                                    <span className="topbar__me-item-badge">
                                        {discussion >= 100 ? "99+" : discussion}
                                    </span>
                                )}
                            </Link>
                        </li>
                        <li className="topbar__me-item">
                            <Link to="/reviews" className="topbar__me-link">
                                <span className="topbar__me-item-title">{getTranslate("topbar_menu_reviews")}</span>
                                {reviews > 0 && (
                                    <span className="topbar__me-item-badge">
                                        {reviews >= 100 ? "99+" : reviews}
                                    </span>
                                )}
                            </Link>
                        </li>
                        <li className="topbar__me-item">
                            <Link to="/support" className="topbar__me-link">
                                <span className="topbar__me-item-title">{getTranslate("topbar_menu_support")}</span>
                                {support > 0 && (
                                    <span className="topbar__me-item-badge">
                                        {support >= 100 ? "99+" : support}
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const BellItem = ({ bellData }) => {
    const { getTranslate, currentLanguage } = useContext(LanguageContext);
    const [notificationList, setNotificationList] = useState([]);

    useEffect(() => {
        setNotificationList(bellData?.data?.sort((a, b) => b.timestamp - a.timestamp));
    }, [bellData]);

    const total_count = notificationList?.reduce((acc, cur) => {
        return acc + (!cur.is_readed ? 1 : 0);
    }, 0);

    const computeTimeAgo = (timestamp) => {
        const timestampSeconds = Math.floor((Date.now() - (timestamp * 1000)) / 1000);
        const intervals = [
            { "label": getTranslate("topbar_menu_notification_time_second"), "divisor": 1 },
            { "label": getTranslate("topbar_menu_notification_time_minute"), "divisor": 60 },
            { "label": getTranslate("topbar_menu_notification_time_hour"), "divisor": 3600 },
            { "label": getTranslate("topbar_menu_notification_time_day"), "divisor": 86400 }
        ];
        for (let idx = intervals.length - 1; idx >= 0; idx--) {
            const { label, divisor } = intervals[idx];
            const interval = Math.floor(timestampSeconds / divisor);
            if (interval > 0)
                return `${interval} ${label} ${getTranslate("topbar_menu_notification_time_ago")}`;
        }
        return getTranslate("topbar_menu_notification_time_just_now");
    }

    const handleMarkAsRead = (index) => {
        const updatedNotifications = notificationList.map((item, idx) => {
            return idx === index ? { ...item, "is_readed": true } : item;
        });
        setNotificationList(updatedNotifications);
    }

    const handleMarkAllAsRead = () => {
        const updatedNotifications = notificationList.map(item => ({ ...item, "is_readed": true }));
        setNotificationList(updatedNotifications);
    }

    return (
        <div className="topbar__menu-item topbar__menu-item-bell">
            <i className="fi fi-sr-bell"></i>
            {total_count > 0 && (
                <span className="topbar__menu-badge">
                    {total_count >= 100 ? "99+" : total_count}
                </span>
            )}
            <div className="topbar__menu-dropdown-bell">
                <div className="topbar__menu-bell">
                    <div className="topbar__menu-bell-header">
                        <h1 className="topbar__mbh-title">{getTranslate("topbar_menu_notification")}</h1>
                        <span className="topbar__mbh-settings">
                            <i className="fi fi-sr-settings"></i>
                        </span>
                    </div>
                    <div className="topbar__menu-bell-body">
                        {Array.isArray(notificationList) && notificationList.length > 0 ? (
                            notificationList.map((item, idx) => (
                                <div className={`topbar__menu-bell-item ${!item.is_readed ? "unread" : ""}`} key={idx}>
                                    <div className="topbar__mbb-header">
                                        <span className="topbar__mbb-cart-icon">
                                            {item.type === "Stock" ? (
                                                <>
                                                    <i className="fi fi-sr-box"></i>
                                                    {getTranslate("topbar_menu_stock")}
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fi fi-sr-shopping-cart"></i>
                                                    {getTranslate("topbar_menu_orders")}
                                                </>
                                            )}
                                        </span>
                                        <span className="topbar__mbb-clock-icon">
                                            <i className="fi fi-sr-clock"></i>
                                            {computeTimeAgo(item.timestamp)}
                                        </span>
                                    </div>
                                    <div className="topbar__mbb-body">
                                        <h1 className="topbar__mbb-title">{item.title[currentLanguage]}</h1>
                                        <p className="topbar__mbb-description">{item.description[currentLanguage]}</p>
                                    </div>
                                    {!item.is_readed && (
                                        <div className="topbar__mbb-footer">
                                            <button className="topbar__mbb-mark-as-read" onClick={() => handleMarkAsRead(idx)}>
                                                <i className="fi fi-sr-check"></i>
                                                <span className="topbar__mbb-mark-as-read-text">
                                                    {getTranslate("topbar_menu_mark_as_read")}
                                                </span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="topbar__menu-bell-body-empty">
                                <strong className="topbar__menu-bell-body-empty-title">
                                    No Notifications
                                </strong>
                                <p className="topbar__menu-bell-body-empty-description">
                                    You have no new notifications at the moment. Check back later to stay updated!
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="topbar__menu-bell-footer">
                        <button className="topbar__mbf-mark-all-as-read" onClick={handleMarkAllAsRead}>
                            <i className="fi fi-rr-list-check"></i>
                            <span className="topbar__mbf-mark-all-as-read-text">
                                {getTranslate("topbar_menu_mark_all_as_read")}
                            </span>
                        </button>
                        <Link to="/notifications" className="topbar__mbf-see-more">
                            <span className="topbar__mbf-see-more-text">
                                {getTranslate("topbar_menu_see_more")}
                            </span>
                            <i className="fi fi-rr-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div >
        </div >
    );
}

export { CalendarItem, EnvelopeItem, BellItem };