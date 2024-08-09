import { useContext, useRef } from "react";
import "./Sidebar.css";
import { LanguageContext } from "../../context/LanguageContext.jsx";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import Logo from "./components/Logo/Logo.jsx";
import LogoSvg from "./assets/img/logo.svg";
import Menu from "./components/Menu/Menu.jsx";
import HideButton from "./components/HideButton/HideButton.jsx";

const Sidebar = () => {
    const sidebarRef = useRef(null);
    const { getTranslate } = useContext(LanguageContext);
    const { theme, toggleSidebar } = useContext(ThemeContext);

    const showSidebar = () => {
        if (sidebarRef.current.classList.contains("collapsed"))
            toggleSidebar();
    }

    const menuItems = [
        {
            "name": getTranslate("sidebar_dashboard_menu"),
            "icon": "fi fi-sr-apps",
            "href": "/dashboard",
            "dropdown": []
        },
        {
            "name": getTranslate("sidebar_blank_menu"),
            "icon": "fi fi-sr-file",
            "href": "/blank",
            "dropdown": []
        },
        {
            "name": getTranslate("sidebar_ecommerce_menu"),
            "icon": "fi fi-sr-shopping-cart",
            "href": "/e-commerce",
            "dropdown": [
                {
                    "name": getTranslate("sidebar_example_menu"),
                    "href": "/e-commerce/1"
                },
                {
                    "name": getTranslate("sidebar_example_menu"),
                    "href": "/e-commerce/2"
                }
            ]
        },
        {
            "name": getTranslate("sidebar_project_menu"),
            "icon": "fi fi-sr-assept-document",
            "href": "/project",
            "dropdown": []
        },
        {
            "name": getTranslate("sidebar_contact_menu"),
            "icon": "fi fi-sr-comment-user",
            "href": "/contact",
            "dropdown": [
                {
                    "name": getTranslate("sidebar_example_menu"),
                    "href": "/contact/1"
                },
                {
                    "name": getTranslate("sidebar_example_menu"),
                    "href": "/contact/2"
                }
            ]
        },
        {
            "name": getTranslate("sidebar_finance_menu"),
            "icon": "fi fi-sr-money",
            "href": "/finance",
            "dropdown": []
        },
        {
            "name": getTranslate("sidebar_file_manager_menu"),
            "icon": "fi fi-sr-folder",
            "href": "/file-manager",
            "dropdown": []
        },
        {
            "name": getTranslate("sidebar_chat_menu"),
            "icon": "fi fi-sr-comment-alt",
            "href": "/chat",
            "dropdown": []
        },
        {
            "name": getTranslate("sidebar_calendar_menu"),
            "icon": "fi fi-sr-calendar",
            "href": "/calendar",
            "dropdown": []
        }
    ];

    return (
        <aside
            className={`sidebar ${theme.is_sidebar_collapsed ? "collapsed" : ""}`}
            onClick={showSidebar}
            ref={sidebarRef}
        >
            <Logo
                img={LogoSvg}
                href="/dashboard"
                title="Dazel"
                isCollapsed={theme.is_sidebar_collapsed}
            />
            <Menu
                items={menuItems}
                isCollapsed={theme.is_sidebar_collapsed}
            />
            <HideButton
                onClick={toggleSidebar}
                isCollapsed={theme.is_sidebar_collapsed}
            />
        </aside>
    );
}

export default Sidebar;