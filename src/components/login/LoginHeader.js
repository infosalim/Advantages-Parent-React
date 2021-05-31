import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/home/logo-two.png';

const LoginHeader = () => {
    return (
        <header className="login-header">
            <div className="container">
                <div className="login-logo">
                    <Link to="/"><img src={logo2} alt="Images" /></Link>
                </div>
            </div>
        </header>
    );
};

export default LoginHeader;