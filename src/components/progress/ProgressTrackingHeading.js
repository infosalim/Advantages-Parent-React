import { useState } from 'react';
import { Link } from 'react-router-dom';

import profile from '../../assets/images/home/porfile.png';
import downArrow from '../../assets/images/home/down-arrow.png';
import search from '../../assets/images/resource-cards/Search.png';
import searchBarBtn from '../../assets/images/resource-cards/search_bar_btn_icon.png';

const ProgressTrackingHeading = () => {
    const [userDropdown, setUserDropdown] = useState(false);
    const [searchDropdown, setSearchDropdown] = useState(false);
    const [actionDropdown, setActionDropdown] = useState(false);
    return (
        <div className="ra_process_tracking_area">
            <div className="container">
                <div className="ra_process_tracking_area_header">
                    {/* <!-- header area start  --> */}
                    <div className="ra_process_tracking_area_header_text">
                        <div className="dropdown">
                            <button onClick={() => setUserDropdown(!userDropdown)} className="dropdown-toggle menu-drop" type="button" id="newdropdownbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

                            {userDropdown ?<div className="dropdown-menu new-menu new-class" aria-labelledby="newdropdownbtn">
                                <Link className="dropdown-item" to="#">Janelle Marshall - Grade 8</Link>
                                <Link className="dropdown-item" to="#">Kenneth Marshall - Grade 6</Link>
                            </div> : null}
                        </div>

                        <h3>Janelle Marshall - College Preparation</h3>
                    </div>
                    <div className="ra_process_tracking_area_header_search_width">
                        <div className="ra_process_tracking_area_header_search">
                            {/* <!-- Search btn area start  --> */}
                            <div className="mu_search_bar mu_search_bar_reply">
                                <form>
                                    <div className="search_box_area">
                                        <input type="search" name="" placeholder="Search ..." />
                                        <div className="search_icon">
                                            <img src={search} alt='search'/>
                                        </div>
                                    </div>
                                    <button onClick={(e) => {e.preventDefault(); return setSearchDropdown(!searchDropdown)}}>All<img src={searchBarBtn} alt='search'/></button>
                                    {searchDropdown ? <div className="mu_dropdown">
                                        <ul>
                                            <li><Link to="#" target="blank">Action</Link></li>
                                            <li><Link to="#" target="blank">Action two</Link></li>
                                            <li><Link to="#" target="blank">Action three</Link></li>
                                        </ul>
                                    </div> : null}
                                </form>
                            </div>
                            {/* <!-- Search btn area End  --> */}

                            {/* <!-- Btn area start  --> */}
                            <div className="ra_sortable_area_btn_area">
                                <div className="myclassroom-single-right-right-content">
                                    <div className="dropdown">
                                        <button onClick={() => setActionDropdown(!actionDropdown)} className="dropdown-toggle menu-drop" type="button" id="launchcourse" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Actions
                                                <div className="action-button-arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></div>
                                        </button>

                                        {actionDropdown ? <div className="dropdown-menu course" aria-labelledby="launchcourse" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(6px, 6px, 0px)'}}>
                                            <Link className="dropdown-item" to="#">Download PDF</Link>
                                            <Link className="dropdown-item" to="#">Request Enrollment</Link>
                                            <Link className="dropdown-item" to="#">Request Transcript</Link>
                                        </div> : null}
                                    </div>
                                </div>
                                <div className="myclassroom-single-right-right-content">
                                    <div className="dropdown">
                                        <button className="dropdown-toggle menu-drop" type="button" id="launchcourse" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Print
                                            </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Btn area End  --> */}
                        </div>
                    </div>
                </div>
                <div className="ra_process_tracking_area_body">
                    {/* <!-- Single item area start  --> */}
                    <div className="ra_process_tracking_area_body_progress ra_process_tracking_single">
                        <h3>Avg. Graduation Progress</h3>
                        <div className="slider-course-progress">
                            <div className="slider-course-progress-left">
                                <div className="myclassroom-single-left-cross-progress">
                                    <div className="barra-nivel" data-nivel="72%" style={{width: '72%'}}></div>
                                </div>
                            </div>
                            <div className="course-progress-right">
                                <h5 className="counter">72</h5>
                                <span>%</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single item area start  --> */}
                    <div className="ra_process_tracking_area_body_gpa ra_process_tracking_single">
                        <h3>GPA</h3>
                        <h4>3.4</h4>
                    </div>

                    {/* <!-- Single item area start  --> */}
                    <div className="ra_process_tracking_area_body_status ra_process_tracking_single">
                        <h3>Graduation Status</h3>
                        <div className="ra_btn_btnarea">
                            <Link to="#">On Track</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressTrackingHeading;