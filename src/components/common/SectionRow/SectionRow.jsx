import "./SectionRow.css";

const SectionRow = ({ children }) => {
    return (
        <section className="section__row">
            {children}
        </section>
    );
}

export default SectionRow;