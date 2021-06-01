import {useState} from 'react';
import {Link} from 'react-router-dom';

import leftArrow from '../../assets/images/home/left-arrow.png';
import rightArrow from '../../assets/images/home/right-arrow.png';
import sss from '../../assets/images/home/ssss.png';
import newAvatar from '../../assets/images/learning/new-avatar.png';
import sliderM from '../../assets/images/learning/slider-m.png';
import studentOne from '../../assets/images/learning/students-one.png';
import studentTwo from '../../assets/images/learning/students-two.png';
import studentAgain from '../../assets/images/learning/students-again.png';
import newImg from '../../assets/images/learning/new-image.png';

const MyScheduleTable = () => {
    const [dropdown, setDropdown] = useState(false);
    
    return (
        <div className="ra_day_view_area">
            <div className="container">
                {/* <!-- Top Calender area start  --> */}
                <div className="upcoming-heading-content">
                    <p>View:</p>
                    <div className="ra_day_tody_area">
                        <div className="ra_day_tody_area_sub">
                            {/* <!-- btn area start  --> */}
                            <div className="contact-button">
                                <Link to="#">Today </Link>
                            </div>
                            {/* <!-- btn area start  --> */}
                            <div className="contact-button">
                                <Link to="#" className="ra_active">Week </Link>
                            </div>
                            {/* <!-- btn area start  --> */}
                            <div className="contact-button">
                                <Link to="#">Month </Link>
                            </div>
                        </div>
                    </div>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <button className="btn first-btn extra_btn_btnclass">
                            <span><img src={leftArrow} alt="Images"/> </span>
                        </button>
                        <label className="btn">
                            <div className="dropdown">
                                <button onClick={() => setDropdown(!dropdown)} className="btn border-0 dropdown-toggle items shasha" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    June 20 2021 - June 26 2021
                                    <div className="down-icon-last"><img src={sss} alt="Images"/></div>
                                </button>
                                {dropdown ? <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 0, 0px)'}}>
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div> :null }
                            </div>
                        </label>
                        <button className="btn first-btn extra_btn_btnclass">
                            <span><img src={rightArrow} alt="Images"/></span>
                        </button>
                    </div>
                </div>
                {/* <!-- Top Calender area end  --> */}

                {/* <!-- Top Calender area start  --> */}
                <div className="ra_teacher_list_main_area">
                    <div className="ra_upcoming_heading">
                        <p>Online Sections</p>
                    </div>
                    <div className="ra_teacher_list_area">
                        <div className="ra_teacher_list_area_header new-class">
                            <div className="ra_teacher_list_area_header_single_item re_header_list_item1">
                                <h2>Course</h2>
                            </div>
                            <div className="ra_teacher_list_area_header_single_item re_header_list_item2">
                                <h2>Teacher</h2>
                            </div>
                            <div className="ra_teacher_list_area_header_single_item re_header_list_item3">
                                <h2>Section</h2>
                            </div>
                            <div className="ra_teacher_list_area_header_single_item re_header_list_item4">
                                <h2>Student</h2>
                            </div>
                        </div>

                        <div className="ra_teacher_list_area_body add-new-class">
                            <div className="ra_teacher_list_area_header_single_item_body re_body_list_item1">
                                <img src={newAvatar} alt="photos"/>
                                <p>Environmental Science</p>
                            </div>
                            <div className="ra_teacher_list_area_header_single_item_body re_body_list_item2">
                                <img src={sliderM} alt="photos"/>
                                <div className="ra_teacher_list_area_header_single_item_body_single_man">
                                    <h6>Mrs. Jackson</h6>
                                    <p>Section 1</p>
                                </div>
                            </div>
                            <div className="ra_teacher_list_area_header_single_item_body re_body_list_item3">
                                <p>Section One</p>
                            </div>
                            <div className="ra_teacher_list_area_header_single_item_body re_body_list_item4">
                                <div className="student-contents">
                                    <img src={studentOne} alt="Images"/>
                                    <p>Janelle</p>
                                </div>
                            </div>
                        </div>

                        <div className="ra_teacher_list_area_body add-new-class">
                            <div className="ra_teacher_list_area_header_single_item_body re_body_list_item1">
                                <img src={newImg} alt="photos"/>
                                <p>Spanish 01</p>
                            </div>
                            <div className="ra_teacher_list_area_header_single_item_body re_body_list_item2">
                                <img src={studentTwo} alt="photos"/>
                                <div className="ra_teacher_list_area_header_single_item_body_single_man">
                                    <h6>Ms. Martin</h6>
                                    <p>Section 1</p>
                                </div>
                            </div>
                            <div className="ra_teacher_list_area_header_single_item_body re_body_list_item3">
                                <p>Section One</p>
                            </div>
                            <div className="ra_teacher_list_area_header_single_item_body re_body_list_item4">
                                <div className="student-contents">
                                    <img src={studentAgain} alt="Images"/>
                                    <p>Kenneth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyScheduleTable;