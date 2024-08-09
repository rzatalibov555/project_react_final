import { useState, useEffect, useContext, createContext } from "react";
import { LanguageContext } from "./LanguageContext.jsx";
import DazelApi from "../api/DazelApi.js";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const { getTranslate } = useContext(LanguageContext);
    const [authData, setAuthData] = useState({
        "is_logged": false,
        "user_data": null,
        "token": null,
        "error": null
        /* "is_logged": true,
        "user_data": {
            "first_name": "Jay",
            "last_name": "Hargudson",
            "position": {
                "en": "Manager",
                "ru": "Manager",
                "az": "Manager"
            },
            "profile_img": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/100.jpg",
            "is_online": true
        },
        "token": "0x0123456789ABCDEF",
        "error": null */
    });

    const Login = (username, password) => {
        if (username === "root" && password === "123") {
            DazelApi.loginUser(username, password).then(response => setAuthData(response));
        }
        else if (!username || !password) {
            setAuthData(prevData => ({ ...prevData, isLogged: false, error: getTranslate("auth_empty_credentials") }));
        }
        else {
            setAuthData(prevData => ({ ...prevData, isLogged: false, error: getTranslate("auth_incorrect_credentials") }));
        }
    }

    const Logout = () => {
        setAuthData((prevData) => {
            if (prevData.is_logged)
                return {
                    "is_logged": false,
                    "user_data": null,
                    "token": null,
                    "error": null
                }
            return { ...prevData };
        })
    }

    const isAuth = authData.is_logged;
    const userData = authData.user_data;
    const Error = authData.error;

    return (
        <AuthContext.Provider value={{ Login, Logout, isAuth, userData, Error }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
