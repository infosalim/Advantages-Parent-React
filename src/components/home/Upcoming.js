import { Link } from 'react-router-dom';
import { useState } from 'react';

import leftArrow from '../../assets/images/home/left-arrow.png';
import sss from '../../assets/images/home/ssss.png';
import rightArrow from '../../assets/images/home/right-arrow.png';
import lt1 from '../../assets/images/learning/lt-one.png';
import lt2 from '../../assets/images/learning/lt-two.png';
import left from '../../assets/images/student-inforamtion/left.png';
import right from '../../assets/images/student-inforamtion/right.png';

const Upcoming = () => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className="upcoming-area new-project">
            <div className="container">
                <div className="upcoming-top-button">
                    <div className="upcomming-top-single-button">
                        <button>Today</button>
                    </div>
                    <div className="upcomming-top-single-button">
                        <button>Week</button>
                    </div>
                </div>
                <div className="upcoming-heading-content homepage">
                    <p>Upcoming Events</p>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">

                        <button className="btn first-btn extra_btn_btnclass">
                            <span><img src={leftArrow} alt="Images" /> </span>
                        </button>
                        <label className="btn">
                            <div className="dropdown">
                                <button onClick={() => setDropdown(!dropdown)} className="btn border-0 dropdown-toggle items shasha" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    June 20 2021 - June 26 2021
                            <div className="down-icon-last"><img src={sss} alt="Images" /></div>
                                </button>
                                {dropdown ? (<div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, -5px, 0px)'}}>
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>) : null} 
                            </div>
                        </label>
                        <button className="btn first-btn extra_btn_btnclass">
                            <span><img src={rightArrow} alt="Images" /></span>
                        </button>

                        <div className="add-event-buttons">
                            <Link to="#">Add Event</Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12" style={{overflow: 'auto'}}>
                        <table className="table bg-white text-center tables-design new-class">
                            <thead className="table-active">
                                <tr>
                                    <th scope="col">Sunday 20</th>
                                    <th scope="col" style={{backgroundColor: '#387ebe', color: 'white'}}>Monday 21</th>
                                    <th scope="col">Tuesday 22</th>
                                    <th scope="col">Wednesday 23</th>
                                    <th scope="col">Thursday 24</th>
                                    <th scope="col">Friday 25</th>
                                    <th scope="col">Saturday 26</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td style={{backgroundColor: '#f7f7fa', borderBottom: 'border-bottom: 1px solid #eaedf3'}}>
                                        <div className="monday-first-card add-new">
                                            <div className="add-table-new-content">
                                                <img src={lt2} alt="Images" />
                                                <p>Janelle</p>
                                            </div>
                                            <p>
                                                Social Studies
                                    </p>
                                            <p>
                                                All Day
                                    </p>
                                            <p>
                                                Study Guide Due
                                    </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="tudesday-card add-new">
                                            <div className="add-table-new-content">
                                                <img src={lt2} alt="Images" />
                                                <p>Janelle</p>
                                            </div>
                                            <p>
                                                Algebra 1
                                    </p>
                                            <p>
                                                1:30pm - 2:30pm
                                    </p>
                                            <p>
                                                Quiz for Unit One
                                    </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="monday-second-card add-new">
                                            <div className="add-table-new-content">
                                                <img src={lt1} alt="Images" />
                                                <p>Kenneth</p>
                                            </div>
                                            <p>
                                                Spanish 1
                                    </p>
                                            <p>
                                                10:30pm - 11:30pm
                                    </p>
                                            <p>
                                                Unite 3
                                    </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="monday-first-card add-new">
                                            <div className="add-table-new-content">
                                                <img src={lt2} alt="Images" />
                                                <p>Janelle</p>
                                            </div>
                                            <p>
                                                Social Studies
                                    </p>
                                            <p>
                                                All Day
                                    </p>
                                            <p>
                                                Report Online Due
                                    </p>
                                        </div>
                                    </td>
                                    <td>

                                        <div className="friday-card add-new">
                                            <div className="add-table-new-content">
                                                <img src={lt1} alt="Images" />
                                                <p>Kenneth</p>
                                            </div>
                                            <p>
                                                Environmental Science
                                </p>
                                            <p>
                                                2:00pm - 3:00pm
                                </p>
                                            <p>
                                                Prep Work for this week's lab demo
                                </p>
                                        </div>


                                    </td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="upcomming-view-classroom-content">
                    <div className="upcomming-view-classroom-left-content">
                        <Link to="#">View full classroom schedule</Link>
                    </div>
                    <div className="upcomming-view-classroom-right-content">
                        <Link to="#"><img src={left} alt="Images" /></Link>
                        <Link to="#"><img src={right} alt="Images" /></Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Upcoming;