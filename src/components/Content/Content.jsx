import { FilterProvider } from "../../context/FilterContext.jsx";
import SectionGrid from "../common/SectionGrid/SectionGrid.jsx";
import Topbar from "./components/Topbar/Topbar.jsx";
import PageHeader from "./components/PageHeader/PageHeader.jsx";
import BadgeCards from "./components/BadgeCards/BadgeCards.jsx";
import Target from "./components/Target/Target.jsx";
import Statistic from "./components/Statistic/Statistic.jsx";
import TopSellingProduct from "./components/TopSellingProduct/TopSellingProduct.jsx";
import SalesByLocation from "./components/SalesByLocation/SalesByLocation.jsx";
import RecentOrders from "./components/RecentOrders/RecentOrders.jsx";

const Content = () => {
    return (
        <FilterProvider>
            <SectionGrid templateColumns={"1fr"}>
                <Topbar />
            </SectionGrid>
            <SectionGrid templateColumns={"1fr"}>
                <PageHeader />
            </SectionGrid>
            <SectionGrid templateColumns={"1fr"}>
                <BadgeCards />
            </SectionGrid>
            <SectionGrid templateColumns={"1fr 2fr"}>
                <Target />
                <Statistic />
            </SectionGrid>
            <SectionGrid templateColumns={"2fr 1fr"}>
                <TopSellingProduct />
                <SalesByLocation />
            </SectionGrid>
            <SectionGrid templateColumns={"1fr"}>
                <RecentOrders />
            </SectionGrid>
        </FilterProvider >
    );
}

export default Content;