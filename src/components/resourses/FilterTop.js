import { useState } from 'react';
import { Link } from 'react-router-dom';

import error from '../../assets/images/parent/error.png';
import lt1 from '../../assets/images/learning/lt-one.png';
import lt2 from '../../assets/images/learning/lt-two.png';
import downArrow from '../../assets/images/home/down-arrow.png';

const FilterTop = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <section className="list_resource_pages_main_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="list_resource_alert">
                            {/* <!-- Start Alert Area --> */}
                            <div className="mu_alert_box">
                                <div className="mu_alert_box_left">
                                    <img src={error} alt='images' />
                                    <p>You have 1 new resource.</p>
                                </div>
                                <div className="mu_alert_box_right">
                                    <Link to="#">Dismiss</Link>
                                </div>
                            </div>
                            {/* <!-- End Alert Area --> */}
                        </div>
                    </div>
                    <div className="col-md-12">
                        {/* <!--==================== Start Dropdown & Searchbar Area =====================--> */}
                        <div className="list_prog_heading">
                            <div className="mu_full_menu_area">
                                <div className="dropdown_search_flex">
                                    {/* <!-- Start Mobile Dropdown Menu --> */}
                                    <div className="mu_dropdown_menu_content update">
                                        <div className="dropdown">
                                            <button onClick={() => setDropdown(!dropdown)} className="dropdown-toggle menu-drop" type="button" id="newdropdownbtntwo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <div className="view-students-new-content">
                                                    <div className="view-students-new-image">
                                                        <img src={lt1} alt="Images" />
                                                        <img src={lt2} alt="Images" />
                                                    </div>
                                                    <div className="view-students-new-text">
                                                        <p>View Students <span>2</span></p>
                                                    </div>
                                                    <div className="down-icon-four-update"><img src={downArrow} alt="Images" /></div>
                                                </div>
                                            </button>

                                            {dropdown ? <div className="dropdown-menu new-menu" aria-labelledby="newdropdownbtntwo">
                                                <div className="custom_checkbox_area new-class-add">
                                                    <div className="single-checkbox-area">
                                                        <label>
                                                            <input type="radio" />
                                                            <span>Janelle Marshall - Grade 8</span>
                                                        </label>
                                                    </div>
                                                    <div className="single-checkbox-area">
                                                        <label>
                                                            <input type="radio" />
                                                            <span>Kenneth Marshall - Grade 6</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div> : null}
                                        </div>
                                        <div className="resources-paragraf">
                                            <p>Resources</p>
                                        </div>
                                    </div>
                                    {/* <!-- End Mobile Dropdown Menu --> */}
                                </div>
                            </div>
                        </div>

                        {/* <!--==================== End Dropdown & Searchbar Area =====================--> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterTop;