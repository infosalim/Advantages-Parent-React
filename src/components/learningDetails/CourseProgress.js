import React from 'react';
import { Link } from 'react-router-dom';
import FilterCard from '../progress/FilterCard';

import document from '../../assets/images/learning/ducument.png';
import more from '../../assets/images/learning/more.png';
import what from '../../assets/images/learning/what.png';
import laptop from '../../assets/images/learning/laptop.png';

const CourseProgress = () => {
    return (
        <div className="ra_courch_area">
            <FilterCard title='Course Progress' />
            <div className="container">
                <div className="ra_courch_area_header">
                    {/* <!-- Progress area list area start  --> */}
                    <div className="ra_courch_progress_area">
                        {/* <!--    Single item area Courch  1 --> */}
                        <div className="ra_courch_single_item_area">
                            {/* <!-- Top area start  --> */}
                            <div className="ra_courch_single_item_left">
                                <div className="ra_courch_single_item_left_sub_main">
                                    <img src={document} alt="zip" />
                                    <div className="ra_courch_single_item_left_content">
                                        <h5>Class Asssignment One</h5>
                                        <p>Learn about different types of coral reefs and where synthetic are being created.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Middle area start  --> */}
                            <div className="ra_courch_single_item_middle">
                                <div className="ra_courch_ra_progress_area">
                                    <div className="slider-course-progress">
                                        <div className="slider-course-progress-left">
                                            <p>Activity Progress</p>
                                            <div className="myclassroom-single-left-cross-progress">
                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                            </div>
                                        </div>
                                        <div className="course-progress-right">
                                            <h5 className="counter">100</h5>
                                            <span>%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Bottom area start  --> */}
                            <div className="ra_courch_single_item_right">
                                <div className="ra_courch_more_area">
                                    <img src={more} alt="more" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single item area Courch 2  --> */}
                        <div className="ra_courch_single_item_area">
                            {/* <!-- Top area start  --> */}
                            <div className="ra_courch_single_item_left">
                                <div className="ra_courch_single_item_left_sub_main">
                                    <img src={what} alt="zip" />
                                    <div className="ra_courch_single_item_left_content">
                                        <h5>Class Quiz for Assignment One</h5>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Middle area start  --> */}
                            <div className="ra_courch_single_item_middle">
                                <div className="ra_courch_ra_progress_area">
                                    <h5>Pass</h5>
                                    <h5>Grade B (85%)</h5>
                                </div>
                            </div>
                            {/* <!-- Bottom area start  --> */}
                            <div className="ra_courch_single_item_right">
                                <div className="ra_courch_more_area">
                                    <img src={more} alt="more" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single item area Courch 3 --> */}
                        <div className="ra_courch_single_item_area">
                            {/* <!-- Top area start  --> */}
                            <div className="ra_courch_single_item_left">
                                <div className="ra_courch_single_item_left_sub_main">
                                    <img src={document} alt="zip" />
                                    <div className="ra_courch_single_item_left_content">
                                        <h5>Class Asssignment Two</h5>
                                        <p>Reduce, reuse and recycle! How to lower your footprint.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Middle area start  --> */}
                            <div className="ra_courch_single_item_middle">
                                <div className="ra_courch_ra_progress_area">
                                    <div className="slider-course-progress">
                                        <div className="slider-course-progress-left">
                                            <p>Activity Progress</p>
                                            <div className="myclassroom-single-left-cross-progress">
                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                            </div>
                                        </div>
                                        <div className="course-progress-right">
                                            <h5 className="counter">100</h5>
                                            <span>%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Bottom area start  --> */}
                            <div className="ra_courch_single_item_right">
                                <div className="ra_courch_more_area">
                                    <img src={more} alt="more" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single item area Courch 2  --> */}
                        <div className="ra_courch_single_item_area">
                            {/* <!-- Top area start  --> */}
                            <div className="ra_courch_single_item_left">
                                <div className="ra_courch_single_item_left_sub_main">
                                    <img src={what} alt="zip" />
                                    <div className="ra_courch_single_item_left_content">
                                        <h5>Class Quiz for Assignment Two</h5>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Middle area start  --> */}
                            <div className="ra_courch_single_item_middle">
                                <div className="ra_courch_ra_progress_area">
                                    <h5>Pass</h5>
                                    <h5>Grade B (85%)</h5>
                                </div>
                            </div>
                            {/* <!-- Bottom area start  --> */}
                            <div className="ra_courch_single_item_right">
                                <div className="ra_courch_more_area">
                                    <img src={more} alt="more" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single item area Courch 3 --> */}
                        <div className="ra_courch_single_item_area">
                            {/* <!-- Top area start  --> */}
                            <div className="ra_courch_single_item_left">
                                <div className="ra_courch_single_item_left_sub_main">
                                    <img src={document} alt="zip" />
                                    <div className="ra_courch_single_item_left_content">
                                        <h5>Class Asssignment Two</h5>
                                        <p>Reduce, reuse and recycle! How to lower your footprint.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Middle area start  --> */}
                            <div className="ra_courch_single_item_middle">
                                <div className="ra_courch_ra_progress_area">
                                    <div className="slider-course-progress">
                                        <div className="slider-course-progress-left">
                                            <p>Activity Progress</p>
                                            <div className="myclassroom-single-left-cross-progress">
                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                            </div>
                                        </div>
                                        <div className="course-progress-right">
                                            <h5 className="counter">80</h5>
                                            <span>%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Bottom area start  --> */}
                            <div className="ra_courch_single_item_right">
                                <div className="ra_courch_more_area">
                                    <div className="contact-button">
                                        <Link to="#">Submit </Link>
                                    </div>
                                    <img src={more} alt="more" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single item area Courch 2  --> */}
                        <div className="ra_courch_single_item_area">
                            {/* <!-- Top area start  --> */}
                            <div className="ra_courch_single_item_left">
                                <div className="ra_courch_single_item_left_sub_main">
                                    <img src={what} alt="zip" />
                                    <div className="ra_courch_single_item_left_content">
                                        <h5>Class Quiz</h5>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Bottom area start  --> */}
                            <div className="ra_courch_single_item_right ra_extra_responsive_class">
                                <div className="ra_courch_more_area">
                                    <div className="contact-button">
                                        <Link to="#">Submit </Link>
                                    </div>
                                    <img src={more} alt="more" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single item area Courch 2  --> */}
                        <div className="ra_courch_single_item_area">
                            {/* <!-- Top area start  --> */}
                            <div className="ra_courch_single_item_left">
                                <div className="ra_courch_single_item_left_sub_main">
                                    <img src={laptop} alt="zip" />
                                    <div className="ra_courch_single_item_left_content">
                                        <h5>Final Presentation</h5>
                                        <p>Show the class what you’ve learned and how you can continue to develop Earth friendly habits.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Bottom area start  --> */}
                            <div className="ra_courch_single_item_right ra_extra_responsive_class">
                                <div className="ra_courch_more_area">
                                    <div className="contact-button">
                                        <Link to="#">Submit </Link>
                                    </div>
                                    <img src={more} alt="more"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseProgress;