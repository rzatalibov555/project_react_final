import "./SBLList.css";
import SBLItem from "./components/SBLItem/SBLItem.jsx";

const SBLList = ({ salesLocationItem, currentFilter }) => {
    return (
        <ul className="sbl__list">
            {salesLocationItem?.map((item, idx) => (
                <SBLItem item={item} currentFilter={currentFilter} key={idx} />
            ))}
        </ul>
    );
}

export default SBLList;