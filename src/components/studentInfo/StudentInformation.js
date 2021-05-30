import { useState } from 'react';
import { Link } from 'react-router-dom';

import profile from '../../assets/images/home/porfile.png';
import downArrow from '../../assets/images/home/down-arrow.png';
import infoHead from '../../assets/images/student-inforamtion/head.png';
import edit from '../../assets/images/student-inforamtion/edit.png';
import infoEdit from '../../assets/images/student-inforamtion/info-edit.png';

const StudentInformation = () => {
    const [dropdown, setDropdown] = useState(false);
    
    return (
        <div className="stundents-information-area">
            {/* <!-- Start Students Information Content --> */}
            <div className="container">
                <div className="students-information-content">
                    <div className="students-information-dropdown">
                        <div className="dropdown">
                            <button onClick={() => setDropdown(!dropdown)} className="dropdown-toggle menu-drop" type="button" id="newdropdownbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="jannle-marshall">
                                    <div className="jannle-marshall-image">
                                        <img src={profile} alt="Images" />
                                    </div>
                                    <div className="jannle-marshall-text">
                                        <p>Janelle Marshall</p>
                                    </div>
                                    <div className="down-icon-four-update"><img src={downArrow} alt="Images" /></div>
                                </div>
                            </button>

                            {dropdown ? <div className="dropdown-menu new-menu new-class" aria-labelledby="newdropdownbtn" x-placement="bottom-start" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 6px, 0px)' }}>
                                <Link className="dropdown-item" to="#">Janelle Marshall - Grade 8</Link>
                                <Link className="dropdown-item" to="#">Kenneth Marshall - Grade 6</Link>
                            </div> : null}
                        </div>
                    </div>
                    <div className="student-information-heading">

                        <div className="student-information-left-heading-image">
                            <div className="student-information-heading-profile">
                                <img src={infoHead} alt="Images" />
                                <div className="student-information-edit">
                                    <Link to="#"><img src={edit} alt="Images" /></Link>
                                </div>
                            </div>
                            <div className="student-information-heading-right">
                                <Link to="#"><img src={infoEdit} alt="Images" />Edit information</Link>
                            </div>
                        </div>

                        <div className="student-information-text">

                            {/* <!-- single student information  --> */}
                            <div className="student-information-single-text">
                                <div className="student-information-single-text-heading">
                                    <h2>Janelle Tamara Marshall</h2>
                                </div>
                                <div className="student-information-single-info">
                                    <p>Gender:<span>Female</span></p>
                                    <p>Goes by:  <span>Jan Marshall</span></p>
                                    <p>Ethnicity:  <span>Ethnicity</span></p>
                                    <p>Phone:  <span> <Link to="tel:555-324-0123">555-324-0123</Link></span></p>
                                    <p>Date of birth:  <span>555-324-0123</span></p>
                                    <p>Comments:      </p>
                                </div>
                            </div>
                            {/* <!-- single student information  --> */}

                            {/* <!-- single student information  --> */}
                            <div className="student-information-single-text">
                                <div className="student-information-single-text-heading">
                                    <h3>Address (Default)</h3>
                                </div>
                                <div className="student-information-single-info">
                                    <p>Street: <span>1245 Maple Lane</span></p>
                                    <p>City:      <span>Cincinnati</span> </p>
                                    <p>State:     <span>OH</span></p>
                                    <p>Zip:         <span>45202</span></p>
                                    <p>Country:  <span>United States</span></p>
                                </div>
                            </div>
                            {/* <!-- single student information  --> */}

                            {/* <!-- single student information  --> */}
                            <div className="student-information-single-text">
                                <div className="student-information-single-text-heading">
                                    <h3>Parent / Mentor contact</h3>
                                </div>
                                <div className="student-information-single-info">
                                    <p>Parent Name:     <span>Judy Marshall</span></p>
                                    <p>Email Mother:     <span><Link to="mailto:judymarshall@gmail.com">judymarshall@gmail.com</Link></span></p>
                                    <p>Phone Mother:  <span> <Link to="tel:555-234-1786">555-234-1786</Link></span></p>
                                    <p>Emergency contact:   <span>Active</span></p>
                                </div>
                            </div>
                            {/* <!-- single student information  --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Students Information Content --> */}
        </div>
    );
};

export default StudentInformation;