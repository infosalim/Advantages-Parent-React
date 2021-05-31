import {Link} from 'react-router-dom';

import loginFooterLogo from '../../assets/images/login/login-footer-logo.png';

const LoginFooter = () => {
    return (
        <div className="login-footer-area">
        <div className="container">
            <div className="login-footer-content">
                <div className="login-footer-top-content">
                    <div className="login-footer-top-left-content">
                        <Link to="#"><img src={loginFooterLogo} alt="Images"/></Link>
                    </div>
                    <div className="login-footer-top-right-content">
                        <div className="single-login-footer-left">
                            <Link to="#">Need help?</Link>
                        </div>
                         <div className="single-login-footer-right">
                            <Link to="#">Contact Support</Link>
                        </div>
                    </div>
                </div>
                <div className="login-footer-bottom-content">
                    <p>2021 © ASSIST <span>/</span> All Rights Reserved <span>/</span> <Link to="#">Privacy</Link> <span>/</span> <Link to="#">Terms of Use</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default LoginFooter;