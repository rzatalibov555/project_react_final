import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { LanguageContext } from "../../../../../../../../context/LanguageContext.jsx";

const Profile = ({ first_name, last_name, position, profile_img, is_online, onLogout }) => {
    const { currentLanguage, getTranslate } = useContext(LanguageContext);
    
    return (
        <div className="topbar__profile">
            <div className={`topbar__profile-img-container ${is_online ? "online" : "offline"}`}>
                <img src={profile_img} className="topbar__profile-img" alt={getTranslate("profile_img_alt")} />
            </div>
            <div className="topbar__profile-content">
                <h1 className="topbar__profile-name">{`${first_name} ${last_name}`}</h1>
                <p className="topbar__profile-position">{position[currentLanguage]}</p>
            </div>
            <div className="topbar__profile-icon">
                <i className="fi fi-sr-caret-down"></i>
                <i className="fi fi-sr-caret-up"></i>
            </div>
            <div className="topbar__profile-dropdown">
                <ul className="topbar__pd-list">
                    <li className="topbar__pd-item">
                        <Link to="/profile" className="topbar__pd-item-link">
                            {getTranslate("profile_profile")}
                        </Link>
                    </li>
                    <li className="topbar__pd-item">
                        <Link to="/settings" className="topbar__pd-item-link">
                            {getTranslate("profile_setting")}
                        </Link>
                    </li>
                    <li className="topbar__pd-item logout" onClick={(event) => onLogout(event)}>
                        <Link to="/#" className="topbar__pd-item-link">
                            <span className="topbar__pd-item-name">{getTranslate("profile_sign_out")}</span>
                            <span className="topbar__pd-item-icon">
                                <i className="fi fi-rr-sign-out-alt"></i>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Profile;