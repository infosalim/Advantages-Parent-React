import {useState} from 'react';
import { Link } from 'react-router-dom';
import Select from "react-select";

import logo from '../assets/images/home/logo.png';
import leftContImg from '../assets/images/home/mail.png';
import helpContImg from "../assets/images/home/help_outline.png";
import profileImg from "../assets/images/home/mom.jpg";
import downIcon2 from "../assets/images/home/down-arrow.png";

import ukFlag from '../assets/images/home/flag.png';
import usFlag from '../assets/images/home/us.png';

import homeIcon from "../assets/images/home/home.png";
import calender from "../assets/images/home/icon.png";
import equalizer from "../assets/images/home/equalizer.png";
import resource from "../assets/images/home/inbox.png";
import searchIcon from "../assets/images/home/search.png";

const Header = () => {
    const [dropDown, setDropDown] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [calenderSubmenu, setCalenderSubmenu] = useState(false);
    const options = [
        { value: 'UK', label: <div><img src={ukFlag} height="30px" width="30px" alt='flag' />UK </div> },
        { value: 'USA', label: <div><img src={usFlag} height="30px" width="30px"  alt='flag' />USA </div> },
    ];

    const customStyles = {
        control: () => ({
          border: 'none',
          display: 'flex',
          alignItems: 'center'
        }),
        indicatorsContainer: ()=>({
            border: 'none'
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }

    return (
        <header className="header-area">
            {/* Start Header Top Area */}
            <div className="header-top-area">
                <div className="container">
                    <div className="header-top-content">
                        {/* Start Header Top Left Content */}
                        <div className="header-top-left-content">
                            {/* Start Header Logo Dropdown */}
                            <div className="header-logo-dropdown">
                                <Link to="/#"><img src={logo} alt="Images" /></Link>
                            </div>
                            {/* End Header Logo Dropdown */}

                            {/* Start Custom Flug Select  */}
                            <div className="header-flag-dropdown">
                                <select className="vodiapicker">
                                    <option value="en" className="test" data-thumbnail="assets/images/home/flag.png">English</option>
                                    <option value="en" className="test" data-thumbnail="assets/images/home/us.png">Us</option>
                                </select>
                                <Select
                                    defaultValue={ options[0] }
                                    options={options}
                                    styles={customStyles}
                                />
                            </div>
                            {/* End Custom Flug Select  */}
                        </div>
                        {/* End Header Top Left Content */}

                        {/* Start Header Top Right Content */}
                        <div className="header-top-right-content">
                            {/* Start Header Profile Inbox Area */}
                            <div className="inbox-area-content">
                                <div className="inbox-left-content-image">
                                    <Link to="/#"><img src={leftContImg} alt="Images" /></Link>
                                </div>
                                <div className="inbox-right-content-text">
                                    <p>Inbox</p>
                                </div>
                            </div>
                            {/* End Header Profile Inbox Area */}

                            {/* Start Header Profile Dropdown */}
                            <div className="header-profile-dropdown">
                                <div className="dropdown">
                                    <button onClick={() => setDropDown(!dropDown)} className="dropdown-toggle" id="dropdownMenuButton">
                                        <span className="profile-content">
                                            <span className="profile-image">
                                                <img src={profileImg} alt="Images" />
                                            </span>
                                            <span className="profile-text">
                                                <h5>Gene Marshall</h5>
                                                <p>Parent</p>
                                            </span>
                                        </span>
                                        <div className="down-icon-two"><img src={downIcon2} alt="Images" /></div>
                                    </button>
                                    {dropDown ? (<div className="dropdown-menu adjust" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item width-two" to="/#">Parent Page <span>3</span></Link>
                                        <Link className="dropdown-item width-two" to="/settings.html">Settings</Link>
                                        <Link className="dropdown-item width-two" to="/#">Log Out</Link>
                                    </div>) : null}
                                    
                                </div>
                            </div>
                            {/* End Header Profile Dropdown  */}

                            {/* Start Custom Flug Select   */}
                            <div className="help-contetn">
                                <Link to='/#'>
                                    <img src={helpContImg} alt="Images" />
                                    <span>Help</span>
                                </Link>
                            </div>
                            {/* End Custom Flug Select   */}
                        </div>
                        {/* End Header Top Right Content */}
                    </div>
                </div>
            </div>
            {/* End Header Top Area */}
            {/* Start Header Bottom Area */}
        <div className="header-bottom-area">
            <div className="container">
                 {/* start mobile menu icon  */}
                <div onClick={() => setMobileNavOpen(!mobileNavOpen)} className="mobile-menu-icon">
                    <div className={`all-p-humber ${mobileNavOpen ? 'open' : null}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {/* end mobile menu icon  */}

                 {/* start mobile search box area  */}
                <div className="mobile-search-icon">
                    <button onClick={() => setSearchOpen(!searchOpen)}><img src={searchIcon} alt="Images" /></button>
                    {searchOpen ? <div id="search">
                        <button onClick={() => setSearchOpen(false)} type="button" className="close"><i className="fa fa-times" aria-hidden="true"></i></button>
                        <form>
                            <input type="search" placeholder="Search Keyword" />
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div> : null}
                </div>
                 {/* end mobile search box area  */}

                 {/* Start Header Desktop Menu Area  */}
                <div className="header-bottom-content">
                    <ul>
                        <li className="home">
                            <Link className="tablinks" to="/#">
                                <img src={homeIcon} alt="Images" />
                                Home
                            </Link>
                        </li>

                        <li className="learning">
                            <Link className="tablinks" to="/#">
                                <img src={calender} alt="Images" />
                                Calendar
                            </Link>
                        </li>

                        <li className="p_traking">
                            <Link className="tablinks" to="/#">
                                <img src={equalizer} alt="Images" />
                                Progress tracking
                            </Link>
                        </li>
                        <li className="resources">
                            <Link className="tablinks" to="/#">
                                <img src={resource} alt="Images" />
                                Resources
                                <span>14</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* End Header Desktop Menu Area  */}

                {/* Start Mobile Dropdown Menu  */}
                <div className="mobile_main_menu_content">
                    {mobileNavOpen ? <ul id="mu_accordion" className="mu_accordion">
                        <li className="home">
                            <div className="link">
                                <Link className="tablinks actives" to="/#">
                                    <img src={homeIcon} alt="Images" />
                                    Home
                                </Link>
                            </div>
                        </li>

                        <li className="learning">
                            <div className="link">
                                <Link className="tablinks" to="/#">
                                    <img src={calender} alt="Images" />
                                    Calendar <i onClick={() => setCalenderSubmenu(!calenderSubmenu)} className="fa fa-chevron-down custom"></i>
                                </Link>
                            </div>
                            <ul className="mu_submenu" style={{display: `${calenderSubmenu ? 'block' : 'none'}`}}>
                                <li><Link to="/#">Action</Link></li>
                                <li><Link to="/#">Action Two</Link></li>
                                <li><Link to="/#">Action Three</Link></li>
                            </ul>
                        </li>

                        <li className="p_traking">
                            <div className="link">
                                <Link className="tablinks" to="/#">
                                    <img src={equalizer} alt="Images" />
                                    Progress tracking
                                </Link>
                            </div>
                        </li>
                        <li className="resources">
                            <div className="link">
                                <Link className="tablinks" to="/#">
                                    <img src={resource} alt="Images" />
                                    Resources
                                    <span>14</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="link">
                                <Link to="/settings">Settings</Link>
                            </div>
                        </li>
                        <li>
                            <div className="link">
                                <Link to="/#">Log out</Link>
                            </div>
                        </li>
                    </ul> : null}
                </div>
                {/* <!-- End Mobile Dropdown Menu --> */}
            </div>
        </div>
            {/* End Header Bottom Area */}
        </header>
    );
};

export default Header;