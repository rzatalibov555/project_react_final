import SectionRow from "../components/common/SectionRow/SectionRow.jsx";
import AuthContent from "../components/common/AuthContent/AuthContent.jsx";
import LoginForm from "../components/LoginForm/LoginForm.jsx";

const LoginPage = () => {
    return (
        <SectionRow>
            <AuthContent>
                <LoginForm />
            </AuthContent>
        </SectionRow>
    );
}

export default LoginPage;