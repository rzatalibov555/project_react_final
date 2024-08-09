import { useState, useEffect } from "react";
import "./Menu.css";
import MenuItem from "./components/MenuItem/MenuItem.jsx";

const Menu = ({ items, isCollapsed }) => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        if (isCollapsed)
            setOpenIndex(null);
    }, [isCollapsed]);

    const handleToggle = (idx) => {
        setOpenIndex((prevIndex) => prevIndex === idx ? null : idx);
    }

    return (
        <nav className="menu">
            <ul className="menu__list">
                {items.map((item, idx) => (
                    <MenuItem
                        icon={item.icon}
                        href={item.href}
                        dropdown={item.dropdown}
                        isCollapsed={isCollapsed}
                        isExpanded={openIndex === idx}
                        onToggle={() => handleToggle(idx)}
                        key={idx}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;