import { Link } from 'react-router-dom';
import SingleRequest from '../studentInfo/SingleRequest';

import mom from '../../assets/images/parent/mom.png';
import editpp from '../../assets/images/parent/edit_pp.png';
import save from '../../assets/images/parent/save.png';
import error from '../../assets/images/parent/error.png';

import transcript from '../../assets/images/parent/trans_icon.png';
import enrollment from '../../assets/images/parent/trans_icon_3.png';
import support from '../../assets/images/parent/trans_icon_4.png';
import record from '../../assets/images/parent/trans_icon_4.png';

const ParentCard = () => {
    return (
        <section className="student_pages_content_area parent-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="main_student_information_area">
                            <div className="infor_heading_area">
                                <div className="left_infor_area">
                                    <div className="infor_profile">
                                        <img src={mom} alt="images" />
                                        <Link to="#"><img src={editpp} alt="images" /></Link>
                                    </div>
                                </div>
                                <div className="right_infor_area">
                                    <Link to="#"><img src={save} alt="images" /><span>Save</span></Link>
                                    <Link to="#"><span>Cancel</span></Link>
                                </div>
                            </div>
                            <div className="information_biodata">
                                <h4>Gene Tamara Marshall</h4>
                                <div className="infor_bio_top">
                                    {/* <!-- single items of information --> */}
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <p>Gender:<span>Female</span></p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <p>Goes by:<span>Jan Marshall</span></p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="mailto:name@emailname.com">
                                                <p>Ethnicity:<span>name@emailname.com</span></p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="tel:+555-324-0123">
                                                <p>Phone:<span>555-324-0123</span></p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <p>Date of birth:<span>12-04-79</span></p>
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* <!-- single items of information --> */}
                                    <div className="infor_comment_area">
                                        <p>Comments:</p>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <p>Gender:<span>Female</span></p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <p>Goes by:<span>Jan Marshall</span></p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="mailto:name@emailname.com">
                                                    <p>Email:<span>name@emailname.com</span></p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="tel:+555-324-0123">
                                                    <p>Phone:<span>555-324-0123 (home)</span></p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- single items of information --> */}
                                    <div className="infor_address_area">
                                        <h5>Address (Default)</h5>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <p>Street:<span>1245 Maple Lane</span></p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <p>City:<span>Cincinnati</span></p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <p>State:<span>OH</span></p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <p>Zip::<span>45202</span></p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <p>Country:<span>United States</span></p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- single items of information --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="student_action_help_area">
                            <div className="student_action_heading">
                                <h5>Parent Actions</h5>
                                <Link to="#">Need Help?</Link>
                            </div>
                            <div className="student_action_alert_area">
                                {/* <!-- Start Alert Area --> */}
                                <div className="custom_alert_design">
                                    <div className="mu_alert_box_left">
                                        <img src={error} alt='images' />
                                        <p>You have a new invoice due on 02-15-2021.</p>
                                    </div>
                                    <div className="custom_alert_right">
                                        <Link to="#">Dismiss</Link>
                                    </div>
                                </div>
                                {/* <!-- End Alert Area --> */}
                            </div>
                            <div className="Student_action_single_items">
                                {/* <!-- single items --> */}
                                <SingleRequest
                                    title='Request Transcript (Official and Unofficial)'
                                    thumb={transcript}
                                    isTranscript
                                    btnText='View Unofficial Transcript'
                                />
                                {/* <!-- single items --> */}
                                <SingleRequest
                                    title='Request Enrollment'
                                    thumb={enrollment}
                                    btnText='Request Enrollment'
                                />
                                {/* <!-- single items --> */}
                            </div>

                            <div className="st_another_single_deffrent">
                                {/* <!-- single items --> */}
                                <SingleRequest
                                    title='Contact Support'
                                    thumb={support}
                                    btnText='Submit Support Ticket'
                                />
                                {/* <!-- single items --> */}
                                <SingleRequest
                                    title='Upload Student Records'
                                    thumb={record}
                                    btnText='Submit Support Ticket'
                                />
                                {/* <!-- single items --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParentCard;