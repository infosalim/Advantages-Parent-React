import { Link } from 'react-router-dom';

import loginLogo from '../../assets/images/login/login-logo.png';
 
const LoginForm = () => {
    return (
        <div className="login-content-area">
        <div className="container">
            <div className="login-content">
                <div className="login-heading">
                    <h1>Log in</h1>
                </div>
                <div className="login-form">
                    <form>
                        <div className="single-login-form">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Username" id="username"/> 
                        </div>
                        <div className="single-login-form">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" id="password"/> 
                        </div>

                        <div className="single-login-checkbox-form">
                            <input type="checkbox" id="html"/>
                           <label htmlFor="html">Remember me</label>
                       </div>
                        <div className="single-login-submit-button">
                            <input type="submit" value="Log in"/>
                        </div>
                    </form>
                    <div className="login-form-text">
                        <Link to="#">Forgot your password?</Link>
                       <Link to="#"><span>Are you a parent?</span> Set your password and activate your account</Link>
                    </div>
                </div>

                <div className="login-form-logo">
                    <Link to="#"><img src={loginLogo} alt="Images"/></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default LoginForm;