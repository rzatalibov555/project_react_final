import "./AuthContent.css";

const AuthContent = ({ children }) => {
    return (
        <section className="section__auth">
            {children}
        </section>
    );
}

export default AuthContent;