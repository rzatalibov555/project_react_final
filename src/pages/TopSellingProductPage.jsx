import SectionRow from "../components/common/SectionRow/SectionRow.jsx";
import SectionContent from "../components/common/SectionContent/SectionContent.jsx";
import SectionFlex from "../components/common/SectionFlex/SectionFlex.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Topbar from "../components/Content/components/Topbar/Topbar.jsx";
import TopSellingProduct from "../components/Content/components/TopSellingProduct/TopSellingProduct.jsx";

const TopSellingProductPage = () => {
    return (
        <SectionRow>
            <Sidebar />
            <SectionContent>
                <Topbar />
                <SectionFlex>
                    <TopSellingProduct />
                </SectionFlex>
            </SectionContent>
        </SectionRow>
    );
}

export default TopSellingProductPage;
