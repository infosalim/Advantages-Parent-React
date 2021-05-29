import {useState} from 'react';
import {Link} from 'react-router-dom';

import SingleProgress from './SingleProgress';

import dropdownIcon from '../../assets/images/resource-cards/dropdown_icon.png';
import reload from '../../assets/images/learning/reload.png';
import list from '../../assets/images/learning/list.png';
import list2 from '../../assets/images/learning/list2.png';
import angleTop from '../../assets/images/learning/angel-top.png';
import angleBottom from '../../assets/images/learning/angel-buttom.png';
import class1 from '../../assets/images/home/class1.png';
import pone from '../../assets/images/home/pone.png';
import board1 from '../../assets/images/learning/bord1.png';
import board2 from '../../assets/images/learning/bord2.png';
import board3 from '../../assets/images/learning/bord3.png';
import board4 from '../../assets/images/learning/bord4.png';
import board5 from '../../assets/images/learning/bord5.png';
import sliderM from '../../assets/images/learning/slider-m.png';
import sliderM2 from '../../assets/images/learning/slider-m2.png';
import sliderM3 from '../../assets/images/learning/slider-m3.png';
import sliderM4 from '../../assets/images/learning/slider-m4.png';
import sliderM5 from '../../assets/images/learning/slider-m5.png';
import price1 from '../../assets/images/learning/price1.png';
import price2 from '../../assets/images/learning/price2.png';
import price3 from '../../assets/images/learning/price3.png';

const ProgressTable = () => {
    const [schoolYear, setSchoolYear] = useState(false);
    const [school, setSchool] = useState(false);
    const [schoolStatus, setSchoolStatus] = useState(false);
    return (
        <div className="ra_sortable_area">
                <div className="container">
                    <div className="pt_view_main_area button">
                        <div className="pt_left_view">
                            <h3 className="top_down_none">View:</h3>
                        </div>
                        <div className="pt_right_view">
                            <Link className="btn_style_3 change" to="#">Current Course Progress</Link>
                            <Link className="btn_style_4 click" to="#">Full Path Progress</Link>
                        </div>
                    </div>
                    <div className="dropdown_search_flex changed">
                        {/* <!-- Start Dropdown Menu --> */}
                        <div className="mu_dropdown_menu_content dropdown">
                            {/* <!-- End Mobile Menu icon --> */}
                            <ul>
                                <li>Showing 6 of 6</li>
                                <li>Filter:</li>
                                <li>
                                    <div className="dropdown">
                                        <button onClick={() => setSchoolYear(!schoolYear)} className="dropdown-toggle menu-drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            School year
                                            <div className="down-icon-three"><img src={dropdownIcon} alt="Images"/></div>
                                        </button>

                                        {schoolYear ? (<div className="dropdown-menu new-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 75px, 0px)'}}>
                                            <div className="custom_checkbox_area">
                                                <label>
                                                    <input type="radio" name="check"/>
                                                    <span>All</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="check"/>
                                                    <span>Completed</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="check"/>
                                                    <span>In Progress</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="check"/>
                                                    <span>Upcoming</span>
                                                </label>
                                            </div>
                                        </div>) :null}
                                    </div>
                                </li>

                                <li>
                                    <div className="dropdown">
                                        <button onClick={() => setSchool(!school)} className="dropdown-toggle menu-drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            School
                                            <div className="down-icon-three"><img src={dropdownIcon} alt="Images"/></div>
                                        </button>

                                        {school ? (<div className="dropdown-menu new-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 75px, 0px)'}}>
                                            <div className="custom_checkbox_area">
                                                <label>
                                                    <input type="radio" name="check"/>
                                                    <span>Type 1</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="check"/>
                                                    <span>Type 2</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="check"/>
                                                    <span>Type 3</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="check"/>
                                                    <span>Type 4</span>
                                                </label>
                                            </div>
                                        </div>) : null}
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <button  onClick={() => setSchoolStatus(!schoolStatus)} className="dropdown-toggle menu-drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Status
                                            <div className="down-icon-three"><img src={dropdownIcon} alt="Images"/></div>
                                        </button>

                                        {schoolStatus ? (<div className="dropdown-menu new-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 75px, 0px)'}}>
                                            <div className="custom_checkbox_area">
                                                <label>
                                                    <input type="radio" name="check"/>
                                                    <span>Status 1</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="check"/>
                                                    <span>Status 2</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="check"/>
                                                    <span>Status 3</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="check"/>
                                                    <span>Status 4</span>
                                                </label>
                                            </div>
                                        </div>) : null}
                                    </div>
                                </li>
                                <li>
                                    <Link to="#"><img src={reload} alt="photos"/> Reset filters</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- End Dropdown Menu --> */}
                        {/* <!-- Start View icons --> */}
                        <div className="mu_view_icons">
                            <ul>
                                <li>View :</li>
                                <li>
                                    <Link to="#"><img className="view_img_1" src={list2} alt='view' /></Link>
                                </li>
                                <li>
                                    <Link to="#"><img className="view_img_2" src={list} alt='view' /></Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- End View icons --> */}
                    </div>
                    <div className="ra_sortable_main_area_start">
                        <div className=""></div>
                    </div>

                    {/* <!-- Sort Able Main Area start  --> */}
                    <div className="ra_sortable_header_area">
                        <div className="ra_sortable_area_menu_ex_area"></div>
                        <div className="ra_sortable_header_area_menu">
                            <ul>
                                <li>
                                    Certificates &amp; Badges
                                    <ul>
                                        <li><img src={angleTop} alt="images"/></li>
                                        <li><img src={angleBottom} alt="images"/></li>
                                    </ul>
                                </li>
                                <li>
                                    In-progress Grade
                                    <ul>
                                        <li><img src={angleTop} alt="images"/></li>
                                        <li><img src={angleBottom} alt="images"/></li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="ata_je_ki_rokom"><span>Overdue</span> <span>Activities</span></div>
                                    <ul>
                                        <li><img src={angleTop} alt="images"/></li>
                                        <li><img src={angleBottom} alt="images"/></li>
                                    </ul>
                                </li>
                                <li>
                                    Credits Earned
                                    <ul>
                                        <li><img src={angleTop} alt="images"/></li>

                                        <li><img src={angleBottom} alt="images"/></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ra_sortable_body_main_area">
                        <ul id="id01">
                            {/* <!-- Single item area start --> */}
                            <li>
                                <SingleProgress
                                    thumb={class1}
                                    isNew={true}
                                    title='Environmental Science'
                                    progress='80'
                                    hasCertificate
                                    certificates='2'
                                    certificateIsActive
                                    profileThumb={pone}
                                    profileName='Mrs. Jackson'
                                    profileSection='Section one'
                                    grade='A (95%)+'
                                    overActivity='0'
                                    earnedCredit='1'
                                />
                            </li>
                            <li>
                                <SingleProgress
                                    thumb={board1}
                                    title='Geography'
                                    progress='75'
                                    profileThumb={sliderM3}
                                    profileName='Mr. Hanson'
                                    profileSection='Section one'
                                    grade='A (92%)+'
                                    overActivity='1'
                                    earnedCredit='.5'
                                />
                            </li>
                            <li>
                                <SingleProgress
                                    thumb={board2}
                                    title='Pre-Algebra'
                                    progress='50'
                                    profileThumb={sliderM4}
                                    profileName='Ms. Olsen'
                                    profileSection='Morning Section'
                                    hasCertificate
                                    certificates='3'
                                    grade='B (87%)+'
                                    overActivity='0'
                                    earnedCredit='.33'
                                />
                            </li>
                            <li>
                                <SingleProgress
                                    thumb={board3}
                                    title='Spanish 1'
                                    progress='80'
                                    profileThumb={sliderM2}
                                    profileName='Mr. Smith'
                                    profileSection='Afternoon Section'
                                    hasCertificate
                                    certificates='10'
                                    grade='B (89%)+'
                                    overActivity='0'
                                    earnedCredit='1'
                                />
                            </li>
                            <li>
                                <SingleProgress
                                    thumb={board4}
                                    title='History of the World'
                                    progress='75'
                                    profileThumb={sliderM5}
                                    profileName='Mr. Williams'
                                    profileSection='Section Three'
                                    grade='A (91%)-'
                                    overActivity='2'
                                    earnedCredit='1'
                                />
                            </li>
                            <li>
                                <SingleProgress
                                    thumb={board5}
                                    title='Intro to Business'
                                    progress='80'
                                    profileThumb={sliderM}
                                    profileName='Ms. Johnson'
                                    profileSection='Section Four'
                                    grade='B (84%)-'
                                    overActivity='1'
                                    earnedCredit='.5'
                                />
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Sort Able Main Area start  --> */}
                    <div className="ra_sortable_buttom_area">
                        <h3>Achievement Badges <span>7</span></h3>

                        <div className="ra_sortable_buttom_area_item_main">
                            <div className="ra_sortable_buttom_single_item">
                                <div className="ra_sortable_buttom_single_item_sub">
                                    <img src={price1} alt="images"/>
                                    <div className="ra_sortable_buttom_single_item_content">
                                        <h5>Math Wizard</h5>
                                        <p>Earned 01-22-2120</p>
                                        <p>Course</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ra_sortable_buttom_single_item">
                                <div className="ra_sortable_buttom_single_item_sub">
                                    <img src={price2} alt="images"/>
                                    <div className="ra_sortable_buttom_single_item_content">
                                        <h5>Reading Star</h5>
                                        <p>Earned 01-22-2120</p>
                                        <p>Course</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ra_sortable_buttom_single_item">
                                <div className="ra_sortable_buttom_single_item_sub">
                                    <img src={price3} alt="images"/>
                                    <div className="ra_sortable_buttom_single_item_content">
                                        <h5>World Leader</h5>
                                        <p>Earned 01-22-2120</p>
                                        <p>Course</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ra_sortable_buttom_single_item">
                                <div className="ra_sortable_buttom_single_item_sub">
                                    <img src={price3} alt="images"/>
                                    <div className="ra_sortable_buttom_single_item_content">
                                        <h5>Helpful Mentor</h5>
                                        <p>Earned 01-22-2120</p>
                                        <p>Course</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ra_sortable_buttom_single_item">
                                <div className="ra_sortable_buttom_single_item_sub">
                                    <img src={price2} alt="images"/>
                                    <div className="ra_sortable_buttom_single_item_content">
                                        <h5>Math Prize</h5>
                                        <p>Earned 01-22-2120</p>
                                        <p>Course</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ra_sortable_buttom_single_item">
                                <div className="ra_sortable_buttom_single_item_sub">
                                    <img src={price3} alt="images"/>
                                    <div className="ra_sortable_buttom_single_item_content">
                                        <h5>Super Science</h5>
                                        <p>Earned 01-22-2120</p>
                                        <p>Course</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ra_sortable_buttom_single_item">
                                <div className="ra_sortable_buttom_single_item_sub">
                                    <img src={price1} alt="images"/>
                                    <div className="ra_sortable_buttom_single_item_content">
                                        <h5>Earth Warrior</h5>
                                        <p>Earned 01-22-2120</p>
                                        <p>Course</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ProgressTable;