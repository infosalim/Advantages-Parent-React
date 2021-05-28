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

const Header = () => {
    const [dropDown, setDropDown] = useState(false);
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
                                        <a className="dropdown-item width-two" href="/#">Parent Page <span>3</span></a>
                                        <a className="dropdown-item width-two" href="/settings.html">Settings</a>
                                        <a className="dropdown-item width-two" href="/#">Log Out</a>
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
        </header>
    );
};

export default Header;