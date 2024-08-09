import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import SectionRow from "../components/common/SectionRow/SectionRow.jsx";
import SectionContent from "../components/common/SectionContent/SectionContent.jsx";
import BlockContent from "../components/common/BlockContent/BlockContent.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Topbar from "../components/Content/components/Topbar/Topbar.jsx";

const BlankPage = () => {
    const { getTranslate } = useContext(LanguageContext);

    return (
        <SectionRow>
            <Sidebar />
            <SectionContent>
                <Topbar />
                <BlockContent>
                    {getTranslate("empty_page_label")}
                </BlockContent>
            </SectionContent>
        </SectionRow>
    );
}

export default BlankPage;