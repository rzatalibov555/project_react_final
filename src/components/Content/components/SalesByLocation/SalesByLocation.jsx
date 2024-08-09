import { useContext } from "react";
import "./SalesByLocation.css";
import { FilterContext } from "../../../../context/FilterContext.jsx";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import SBLHeader from "./components/SBLHeader/SBLHeader.jsx";
import SBLList from "./components/SBLList/SBLList.jsx";

const SalesByLocation = () => {
    const { getTranslate } = useContext(LanguageContext);
    const { getCurrentFilter, getSalesByLocation } = useContext(FilterContext);

    return (
        <div className="sales-by-location">
            <SBLHeader title={getTranslate("sbl_header_title")} description={getTranslate("sbl_header_description")} />
            <SBLList salesLocationItem={getSalesByLocation} currentFilter={getCurrentFilter} />
        </div>
    );
}

export default SalesByLocation;