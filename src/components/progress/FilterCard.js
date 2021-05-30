import { useState } from 'react';
import { Link } from 'react-router-dom';


import dropdownIcon from '../../assets/images/resource-cards/dropdown_icon.png';
import reload from '../../assets/images/learning/reload.png';
import list from '../../assets/images/learning/list.png';
import list2 from '../../assets/images/learning/list2.png';

const FilterCard = () => {
    const [schoolYear, setSchoolYear] = useState(false);
    const [school, setSchool] = useState(false);
    const [schoolStatus, setSchoolStatus] = useState(false);

    return (
        <div>
            <div className='container'>


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
                                            <div className="down-icon-three"><img src={dropdownIcon} alt="Images" /></div>
                                    </button>

                                    {schoolYear ? (<div className="dropdown-menu new-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 75px, 0px)' }}>
                                        <div className="custom_checkbox_area">
                                            <label>
                                                <input type="radio" name="check" />
                                                <span>All</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="check" />
                                                <span>Completed</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="check" />
                                                <span>In Progress</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="check" />
                                                <span>Upcoming</span>
                                            </label>
                                        </div>
                                    </div>) : null}
                                </div>
                            </li>

                            <li>
                                <div className="dropdown">
                                    <button onClick={() => setSchool(!school)} className="dropdown-toggle menu-drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        School
                                            <div className="down-icon-three"><img src={dropdownIcon} alt="Images" /></div>
                                    </button>

                                    {school ? (<div className="dropdown-menu new-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 75px, 0px)' }}>
                                        <div className="custom_checkbox_area">
                                            <label>
                                                <input type="radio" name="check" />
                                                <span>Type 1</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="check" />
                                                <span>Type 2</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="check" />
                                                <span>Type 3</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="check" />
                                                <span>Type 4</span>
                                            </label>
                                        </div>
                                    </div>) : null}
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button onClick={() => setSchoolStatus(!schoolStatus)} className="dropdown-toggle menu-drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Status
                                            <div className="down-icon-three"><img src={dropdownIcon} alt="Images" /></div>
                                    </button>

                                    {schoolStatus ? (<div className="dropdown-menu new-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 75px, 0px)' }}>
                                        <div className="custom_checkbox_area">
                                            <label>
                                                <input type="radio" name="check" />
                                                <span>Status 1</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="check" />
                                                <span>Status 2</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="check" />
                                                <span>Status 3</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="check" />
                                                <span>Status 4</span>
                                            </label>
                                        </div>
                                    </div>) : null}
                                </div>
                            </li>
                            <li>
                                <Link to="#"><img src={reload} alt="photos" /> Reset filters</Link>
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
            </div>
        </div>
    );
};

export default FilterCard;