import { useState, createContext } from "react";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        "is_sidebar_collapsed": false
    });

    const toggleSidebar = () => {
        setTheme((prev) => ({
            ...prev,
            "is_sidebar_collapsed": !prev.is_sidebar_collapsed
        }));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleSidebar }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };