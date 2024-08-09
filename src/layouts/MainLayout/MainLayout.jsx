import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
    return (
        <main className="main">
            <Outlet />
        </main>
    );
}

export default MainLayout;