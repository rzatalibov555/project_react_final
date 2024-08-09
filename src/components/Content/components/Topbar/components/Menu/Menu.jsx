import { useContext, useEffect, useState } from "react";
import "./Menu.css";
import { AuthContext } from "../../../../../../context/AuthContext.jsx";
import { CalendarItem, EnvelopeItem, BellItem } from "./components/MenuItem/MenuItem.jsx";
import Language from "./components/Language/Language.jsx";
import Profile from "./components/Profile/Profile.jsx";
import DazelApi from "../../../../../../api/DazelApi.js";

const Menu = () => {
    const { userData, Logout } = useContext(AuthContext);
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        DazelApi.getProfileData().then(response => setProfileData(response));
    }, []);

    const handleLogout = (event) => {
        event.preventDefault();
        Logout();
    }

    const envelopeData = profileData?.envelope;
    const notificationData = profileData?.notification;

    return (
        <div className="topbar__menu">
            <CalendarItem />
            <EnvelopeItem envelopeData={envelopeData} />
            <BellItem bellData={notificationData} />
            <Language />
            <hr className="topbar__divider" />
            <Profile
                first_name={userData?.first_name}
                last_name={userData?.last_name}
                position={userData?.position}
                profile_img={userData?.profile_img}
                is_online={userData?.is_online}
                onLogout={handleLogout}
            />
        </div>
    );
}

export default Menu;