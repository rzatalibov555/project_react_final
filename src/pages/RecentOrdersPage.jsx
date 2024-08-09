import SectionRow from "../components/common/SectionRow/SectionRow.jsx";
import SectionContent from "../components/common/SectionContent/SectionContent.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Topbar from "../components/Content/components/Topbar/Topbar.jsx";
import RecentOrders from "../components/Content/components/RecentOrders/RecentOrders.jsx";
import SectionFlex from "../components/common/SectionFlex/SectionFlex.jsx";

const RecentOrdersPage = () => {
    return (
        <SectionRow>
            <Sidebar />
            <SectionContent>
                <Topbar />
                <SectionFlex>
                    <RecentOrders />
                </SectionFlex>
            </SectionContent>
        </SectionRow>
    );
}

export default RecentOrdersPage;
