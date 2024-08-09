import SectionRow from "../components/common/SectionRow/SectionRow.jsx";
import SectionContent from "../components/common/SectionContent/SectionContent.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Content from "../components/Content/Content.jsx";

const DashboardPage = () => {
    return (
        <SectionRow>
            <Sidebar />
            <SectionContent>
                <Content />
            </SectionContent>
        </SectionRow>
    );
}

export default DashboardPage;