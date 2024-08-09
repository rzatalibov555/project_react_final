import { useContext } from "react";
import "./BadgeCards.css";
import { FilterContext } from "../../../../context/FilterContext.jsx";
import BadgeCard from "./components/BadgeCard/BadgeCard.jsx";

const BadgeCards = () => {
    const { getCurrentFilter, getBadges } = useContext(FilterContext);

    return (
        <div className="badge-cards">
            {Array.isArray(getBadges) && getBadges.length > 0 && (
                getBadges.map((item, idx) => (
                    <BadgeCard item={item} currentFilter={getCurrentFilter} key={idx} />
                ))
            )}
        </div>
    );
}

export default BadgeCards;