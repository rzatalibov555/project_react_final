import SectionRow from "../components/common/SectionRow/SectionRow.jsx";
import SectionContent from "../components/common/SectionContent/SectionContent.jsx";
import BlockContent from "../components/common/BlockContent/BlockContent.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Topbar from "../components/Content/components/Topbar/Topbar.jsx";
import Error from "../components/Error/Error.jsx";

const NotFoundPage = () => {
    return (
        <SectionRow>
            <Sidebar />
            <SectionContent>
                <Topbar />
                <BlockContent>
                    <Error errorCode={404} />
                </BlockContent>
            </SectionContent>
        </SectionRow>
    );
}

export default NotFoundPage;