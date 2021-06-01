import React from 'react';
import {Link} from 'react-router-dom';

import lt1 from '../../assets/images/learning/lt-one.png';
import lt2 from '../../assets/images/learning/lt-two.png';

const ScheduleChart = () => {
    return (
        <section className="upcoming-area ra_schedule_calender_area new_update_class_schedule">
            <div className="container">
                <div className="ra_upcoming_heading">
                    <p>In Class Sections</p>
                </div>

                <div className="row">
                    <div className="col-lg-12" style={{overflow: 'auto'}}>
                        <table className="table bg-white text-center tables-design">
                            <thead className="table-active">
                                <tr>
                                    <th scope="col">Sunday</th>
                                    <th scope="col">Monday</th>
                                    <th scope="col">Tuesday</th>
                                    <th scope="col">Wednesday</th>
                                    <th scope="col">Thursday</th>
                                    <th scope="col">Friday</th>
                                    <th scope="col">Saturday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <div className="monday-first-card shedule-calendar ra_monday-first-card_ex_s new-border-class">
                                            <div className="add-table-new-content">
                                                <img src={lt1} alt="Images"/>
                                                <p>Kenneth</p>
                                            </div>
                                            <p>
                                                Spanish 1
                                            </p>
                                            <p>
                                                10:30am - 11:30am
                                            </p>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className="monday-first-card shedule-calendar ra_monday-first-card_ex_s new-border-class">
                                            <div className="add-table-new-content">
                                                <img src={lt1} alt="Images"/>
                                                <p>Kenneth</p>
                                            </div>
                                            <p>
                                                Spanish 1
                                            </p>
                                            <p>
                                                10:30am - 11:30am
                                            </p>
                                        </div>
                                    </td>

                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <div className="monday-first-card shedule-calendar new-border-class">
                                            <div className="add-table-new-content">
                                                <img src={lt2} alt="Images"/>
                                                <p>Janelle</p>
                                            </div>
                                            <p>
                                                Environmental Science
                                            </p>
                                            <p>
                                                2:00pm - 3:00pm
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="monday-first-card shedule-calendar ra_monday-first-card_ex_b new-border-class">
                                            <div className="add-table-new-content">
                                                <img src={lt1} alt="Images"/>
                                                <p>Kenneth</p>
                                            </div>
                                            <p>
                                                Algebra 1
                                            </p>
                                            <p>
                                                1:30pm - 2:30pm
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="monday-first-card shedule-calendar new-border-class">
                                            <div className="add-table-new-content">
                                                <img src={lt2} alt="Images"/>
                                                <p>Janelle</p>
                                            </div>
                                            <p>
                                                Environmental Science
                                            </p>
                                            <p>
                                                2:00pm - 3:00pm
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="monday-first-card shedule-calendar ra_monday-first-card_ex_b new-border-class">
                                            <div className="add-table-new-content">
                                                <img src={lt1} alt="Images"/>
                                                <p>Kenneth</p>
                                            </div>
                                            <p>
                                                Algebra 1
                                            </p>
                                            <p>
                                                1:30pm - 2:30pm
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="monday-first-card shedule-calendar new-border-class">
                                            <div className="add-table-new-content">
                                                <img src={lt2} alt="Images"/>
                                                <p>Janelle</p>
                                            </div>
                                            <p>
                                                Environmental Science
                                            </p>
                                            <p>
                                                2:00pm - 3:00pm
                                            </p>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="ra_calender_area_bottom_checkbox">
                    <ul>
                        <li>
                            <Link to="#"><i className="fa fa-angle-left" aria-hidden="true"></i></Link>
                        </li>
                        <li className="ra_side_area_active">1</li>
                        <li>
                            <Link to="#"><i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ScheduleChart;