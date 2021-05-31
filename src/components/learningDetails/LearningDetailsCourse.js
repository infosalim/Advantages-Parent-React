import {useState} from 'react';
import { Link } from 'react-router-dom';

import profileImg from '../../assets/images/home/porfile.png';
import arrow from '../../assets/images/learning/arrow.png';
import downArrow from '../../assets/images/home/down-arrow.png';
import sliderColor from '../../assets/images/learning/slider-color.png';
import sliderColor2 from '../../assets/images/learning/slider-color2.png';
import jesica from '../../assets/images/learning/jecika.png';

const LearningDetailsCourse = () => {
    const [dropdown, setDropdown] = useState(false);
    
    return (
        <section className="ra_science_area">
            {/* <!-- Start Home Text Area --> */}
            {/* <div className="home-text-area">
                <div className="container">
                    <div className="home-text-content">
                        <h4><span>Progress Tracking</span> / Environmental Science</h4>
                    </div>
                </div>
            </div> */}
            {/* <!-- End Home Text Area --> */}

            <div className="container">
                <div className="ra_science_main_area">
                    <div className="ra_science_top_calendar">
                        <div className="jannle-marshall">
                            <div className="jannle-marshall-image">
                                <img src={profileImg} alt="Images" />
                            </div>
                            <div className="jannle-marshall-text">
                                <p>Janelle Marshall</p>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <Link to="#"><span>Course progress </span> <img src={arrow} alt='images' /></Link>
                            </li>
                            <li>
                                <Link to="#"><span>Calendar</span> <img src={arrow} alt='images' /></Link>
                            </li>
                        </ul>
                    </div>

                    <div className="ra_science">
                        {/* <!-- Mrs. Jackson area start  --> */}
                        <div className="ra_jackson_top">
                            <div className="header-profile-dropdown">
                                <div className="dropdown">
                                    <button onClick={() => setDropdown(!dropdown)} className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="profile-content">
                                            <span className="profile-image">
                                                <img src={jesica} alt="Images" />
                                            </span>
                                            <span className="profile-text">
                                                <h5>Environmental Science</h5>
                                                <p>Mrs. Jackson</p>
                                            </span>
                                        </span>
                                        <div className="down-icon-two"><img src={downArrow} alt="Images" /></div>
                                    </button>

                                    {dropdown ? <div className="dropdown-menu adjust" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(32px, 16px, 0)' }}>
                                        <Link className="dropdown-item width-two" to="#">Action</Link>
                                        <Link className="dropdown-item width-two" to="#">Action Two</Link>
                                        <Link className="dropdown-item width-two" to="#">Action Three</Link>
                                    </div> : null}
                                </div>
                            </div>
                            <div className="ra_jackson_btn_area">
                                <div className="contact-button">
                                    <Link to="#">Message Mrs. Jackson</Link>
                                </div>
                                <div className="contact-button contact-button2">
                                    <Link to="#">Launch Course</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Progress bar area start  --> */}
                        <div className="ra_science_progress_area">
                            {/* <!-- Progress Single area start  --> */}
                            <div className="ra_science_progress_area_sub">
                                <div className="ra_science_progress_area_sub_item">
                                    <div className="slider-course-progress">
                                        <div className="slider-course-progress-left">
                                            <p>Course Progress <span className="counter">75</span>%</p>
                                            <div className="myclassroom-single-left-cross-progress">
                                                <div className="barra-nivel" data-nivel="75%" style={{ width: '75%' }}></div>
                                            </div>
                                        </div>
                                        <div className="course-progress-right course-progress-right_ex_ex">
                                            <h5><span>18</span>/24 activities complete</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Progress Single area start  --> */}
                            <div className="ra_science_progress_area_sub">
                                <div className="ra_science_progress_area_sub_item ra_science_progress_area_sub_item _ex_item">
                                    <div className="slider-course-progress">
                                        <div className="slider-course-progress-left">
                                            <p>Course Attendance</p>
                                            <div className="myclassroom-single-left-cross-progress myclassroom-single-left-cross-progress_extra">
                                                <div className="barra-nivel" data-nivel="75%" style={{ width: '75%' }}></div>
                                            </div>
                                            <div className="ra_bottom_area_science">
                                                <div className="ra_bottom_area_science ra_bottom_area_science_ex">
                                                    <img src={sliderColor} alt="photos" />
                                                    <p>Present (<span>18</span> days)</p>
                                                </div>
                                                <div className="ra_bottom_area_science">
                                                    <img src={sliderColor2} alt="photos" />
                                                    <p>Present (<span>3</span> days)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="course-progress-right">
                                            <h5>21 days (in progress)</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Progress Single area start  --> */}
                            <div className="ra-course-progress-left">
                                <div className="course-progress-left">
                                    <p>Current Grade: B+ (89%)</p>
                                </div>
                            </div>
                        </div>
                        <div className="ra_science_content_area">
                            <p>Office hours: Monday - Friday 1:30 - 2:30pm PST | Tuesday -Thursday 10:30 - 11:30am PST <Link to="#"> Go to teacher’s office</Link></p>

                            <p>
                                Environmental science is an interdisciplinary academic field that integrates physical, biological and information sciences (including ecology, biology, physics, chemistry, plant science, zoology, mineralogy,
                                oceanography, limnology, soil science, geology and physical geography.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningDetailsCourse;