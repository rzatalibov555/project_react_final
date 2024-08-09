import { NavLink } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = ({ icon, href, dropdown, isCollapsed, isExpanded, onToggle, children }) => {
    const setActiveClass = ({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link";

    const handleClick = (event) => {
        if (dropdown.length) {
            event.preventDefault();
            onToggle();
        }
    };

    return (
        <li className="menu__item">
            {dropdown.length ? (
                <>
                    <NavLink to={href} className={setActiveClass} onClick={handleClick}>
                        <div className="menu__content">
                            <div className="menu__icon-wrapper">
                                <i className={icon}></i>
                            </div>
                            <div className="menu__text-wrapper">
                                <span className="menu__text">{!isCollapsed && children}</span>
                            </div>
                        </div>
                        {!isCollapsed && (
                            <div className="menu__icon-wrapper">
                                <i className="fi fi-sr-caret-down"></i>
                            </div>)}
                    </NavLink>
                    {isExpanded && (
                        <ul className="menu__list dropdown">
                            {dropdown.map((item, idx) => (
                                <li className="menu__item" key={idx}>
                                    <NavLink to={item.href} className={setActiveClass} end>
                                        <div className="menu__content">
                                            <div className="menu__icon-wrapper">
                                                <i className="fi fi-rr-bullet"></i>
                                            </div>
                                            <div className="menu__text-wrapper">
                                                <span className="menu__text">{!isCollapsed && item.name}</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <NavLink to={href} className={setActiveClass}>
                    <div className="menu__content">
                        <div className="menu__icon-wrapper">
                            <i className={icon}></i>
                        </div>
                        <div className="menu__text-wrapper">
                            <span className="menu__text">{!isCollapsed && children}</span>
                        </div>
                    </div>
                </NavLink>
            )}
        </li>
    );
}

export default MenuItem;