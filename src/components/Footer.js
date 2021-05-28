import { Link } from 'react-router-dom';

import footerLogo from '../assets/images/home/footer-logo.png';
import footerBtn1 from '../assets/images/resource-cards/footer_btn_1.png';
import footerBtn2 from '../assets/images/resource-cards/footer_btn_2.png';

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-content">
                    {/* <!-- single footer content --> */}
                    <div className="single-footer-content">
                        <div className="footer-logo">
                            <Link to="#"><img src={footerLogo} alt="Images" /></Link>
                        </div>
                    </div>
                    {/* <!-- end footer content --> */}

                    {/* <!-- single footer content --> */}
                    <div className="single-footer-content">
                        <div className="footer-links">
                            <ul>
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">Calendar</Link></li>
                                <li><Link to="#">Progress Tracking</Link></li>
                            </ul>
                            {/* <!-- Start Footer Button --> */}
                            <div className="mu_footer_btn">
                                <Link to="#"><img src={footerBtn1} alt='App Store' /></Link>
                                <Link to="#"><img src={footerBtn2} alt='Google Play' /></Link>
                            </div>
                            {/* <!-- End Footer Button --> */}
                        </div>
                    </div>
                    {/* <!-- single footer content --> */}

                    {/* <!-- single footer content --> */}
                    <div className="single-footer-content">
                        <div className="footer-links">
                            <ul>
                                <li><Link to="#">Resources</Link></li>
                                <li><Link to="#">Inbox</Link></li>
                                <li><Link to="#">Settings</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- single footer content --> */}

                    {/* <!-- single footer content --> */}
                    <div className="single-footer-content">
                        <div className="need-help-content">
                            <p>Need help?</p>
                            <div className="contact-button">
                                <Link to="#">Contact Support</Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- single footer content --> */}
                </div>

                <div className="copyright-text">
                    <p>2021 © ASSIST / All Rights Reserved / <Link to="#">Privacy</Link> / <Link to="#">Terms of Use</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;