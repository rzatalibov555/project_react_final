import { useState, createContext, useEffect } from "react";
import DazelApi from "../api/DazelApi";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState("ALL_TIME");
    const [statistics, setStatistics] = useState({});

    useEffect(() => {
        DazelApi.getStatisticsData().then(stats => setStatistics(stats));
    }, []);

    const getCurrentFilter = filter.toLowerCase();

    const setAllTime = () => setFilter("ALL_TIME");
    const setLast12Months = () => setFilter("12_MONTHS");
    const setLast30Days = () => setFilter("30_DAYS");
    const setLast7Days = () => setFilter("7_DAYS");
    const setLast24Hour = () => setFilter("24_HOUR");

    const getBadges = statistics?.badges ?? [];
    const getTarget = statistics?.target ?? {};
    const getStatistic = statistics?.statistic ?? [];
    const getSalesByLocation = statistics?.sales_by_location ?? [];

    return (
        <FilterContext.Provider
            value={{
                getCurrentFilter,
                setLast24Hour,
                setLast7Days,
                setLast30Days,
                setLast12Months,
                setAllTime,
                getBadges,
                getTarget,
                getStatistic,
                getSalesByLocation,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
}

export { FilterContext, FilterProvider };