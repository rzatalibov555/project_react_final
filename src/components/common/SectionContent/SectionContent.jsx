import { useContext, useEffect, useRef } from "react";
import "./SectionContent.css";
import { ThemeContext } from "../../../context/ThemeContext.jsx";

const SectionContent = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    const sectionContentRef = useRef();

    useEffect(() => {
        if (sectionContentRef.current) {
            sectionContentRef.current.style.width = theme.is_sidebar_collapsed ?
                "calc(100% - 80px)" : "calc(100% - 264px)";
            sectionContentRef.current.style.marginLeft = theme.is_sidebar_collapsed ?
                "80px" : "264px";
        }
    }, [theme]);

    return (
        <section className="section__content" ref={sectionContentRef}>
            {children}
        </section>
    );
}

export default SectionContent;