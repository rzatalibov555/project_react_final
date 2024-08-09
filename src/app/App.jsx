import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import MainLayout from "../layouts/MainLayout/MainLayout.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import BlankPage from "../pages/BlankPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RecentOrdersPage from "../pages/RecentOrdersPage.jsx";
import TopSellingProductPage from "../pages/TopSellingProductPage.jsx";

const AuthorizedRoute = ({ component }) => {
    const { isAuth } = useContext(AuthContext);
    return isAuth ? component : <Navigate to="/login" replace />
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route index element={<AuthorizedRoute component={<DashboardPage />} />} />
                <Route path="dashboard" element={<AuthorizedRoute component={<DashboardPage />} />} />
                <Route path="recent-orders" element={<AuthorizedRoute component={<RecentOrdersPage />} />} />
                <Route path="top-selling-product" element={<AuthorizedRoute component={<TopSellingProductPage />} />} />
                <Route path="blank" element={<AuthorizedRoute component={<BlankPage />} />} />
                <Route path="*" element={<AuthorizedRoute component={<NotFoundPage />} />} />
            </Route>
        </Routes>
    );
}

export default App;