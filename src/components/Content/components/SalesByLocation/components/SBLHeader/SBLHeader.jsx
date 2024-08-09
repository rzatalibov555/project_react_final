import "./SBLHeader.css";

const SBLHeader = ({ title, description }) => {
    return (
        <div className="sbl__header">
            <div className="sbl__heading">
                <h1 className="sbl__title">{title}</h1>
                <p className="sbl__description">{description}</p>
            </div>
            <div className="sbl__icon">
                <i className="fi fi-sr-menu-dots-vertical"></i>
            </div>
        </div>
    );
}

export default SBLHeader;