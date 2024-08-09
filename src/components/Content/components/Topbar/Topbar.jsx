import "./Topbar.css";
import Menu from "./components/Menu/Menu.jsx";
import Search from "./components/Search/Search.jsx";

const Topbar = () => {
    return (
        <nav className="topbar">
            <Search />
            <Menu />
        </nav>
    );
}

export default Topbar;