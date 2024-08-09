import "./SectionGrid.css";

const SectionGrid = ({ templateColumns, gap, children }) => {
    return (
        <section
            className="section__grid"
            style={{
                "gridTemplateColumns": templateColumns,
                "gap": gap,
            }}>
            {children}
        </section>
    );
}

export default SectionGrid;