import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { AuthContext } from "../../context/AuthContext.jsx";
import { LanguageContext } from "../../context/LanguageContext.jsx";

const LoginForm = () => {
    const { Login, isAuth, Error } = useContext(AuthContext);
    const { getTranslate } = useContext(LanguageContext);
    const navigate = useNavigate();
    const loginRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        if (isAuth)
            navigate('/dashboard', { replace: true });
    }, [isAuth, navigate]);

    const handleLogin = (event) => {
        event.preventDefault();
        if (loginRef.current && passwordRef.current && Login(loginRef.current.value, passwordRef.current.value))
            navigate('/dashboard', { replace: true });
    }

    return (
        <section className="section__login">
            <form action="#" method="post" encType="application/json">
                <div className="login__form">
                    <h1 className="login__heading">{getTranslate("login_heading")}</h1>
                    {Error !== null && <p className="login__error">{Error}</p>}
                </div>
                <div className="login__form">
                    <label htmlFor="input__login">{getTranslate("login_label")}</label>
                    <input type="text" id="input__login" placeholder={getTranslate("login_placeholder")} ref={loginRef} />
                </div>
                <div className="login__form">
                    <label htmlFor="input__login">{getTranslate("password_label")}</label>
                    <input type="password" id="input__password" placeholder={getTranslate("password_placeholder")} ref={passwordRef} />
                </div>
                <div className="login__form">
                    <button type="submit" className="btn__login" onClick={(event) => handleLogin(event)}>
                        {getTranslate("login_button")}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default LoginForm;