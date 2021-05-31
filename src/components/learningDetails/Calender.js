import { useState } from 'react';
import { Link } from 'react-router-dom';

const Calender = () => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <section className="upcoming-area ra_calender_area">
            <div className="container">
                <div className="upcoming-heading-content new-project">
                    <p>Environmental Science Calendar</p>
                    <div className="ra_day_tody_area">
                        <div className="ra_day_tody_area_sub">
                            {/* <!-- btn area start  --> */}
                            <div className="contact-button">
                                <Link to="#">Today </Link>
                            </div>
                            {/* <!-- btn area start  --> */}
                            <div className="contact-button">
                                <Link to="#">Week </Link>
                            </div>
                            {/* <!-- btn area start  --> */}
                            <div className="contact-button">
                                <Link to="#">Month </Link>
                            </div>
                        </div>
                    </div>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn first-btn extra_btn_btnclass">
                            <span><img src="assets/images/home/left-arrow.png" alt="Images" /> </span>
                        </label>
                        <label className="btn">
                            <div className="dropdown">
                                <button onClick={() => setDropdown(!dropdown)} className="btn border-0 dropdown-toggle items shasha" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    June 20 2021 - June 26 2021
                                    <div className="down-icon-last"><img src="assets/images/home/ssss.png" alt="Images" /></div>
                                </button>
                                {dropdown ? <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 24px, 0px)' }}>
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div> : null}
                            </div>
                        </label>
                        <label className="btn first-btn extra_btn_btnclass active" aria-pressed="true">
                            <span><img src="assets/images/home/right-arrow.png" alt="Images" /></span>
                        </label>
                    </div>
                    <div className="ra_day_tody_area ra_day_tody_area_right_site_area">
                        <div className="ra_day_tody_area_sub">
                            {/* <!-- btn area start  --> */}
                            <div className="contact-button">
                                <Link to="#">Full classroom schedule</Link>
                            </div>
                        </div>
                    </div>
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
                                        <div className="monday-first-card">
                                            <p>
                                                Study Guide Due
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="monday-first-card">
                                            <p>
                                                Study Guide Review
                                            </p>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td>
                                        <div className="monday-first-card">
                                            <p>
                                                Report Outline Due
                                            </p>
                                        </div>
                                    </td>

                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className="monday-first-card">
                                            <p>
                                                Quiz Practice
                                            </p>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="ra_calender_area_bottom_checkbox change">
                    <div className="ra_custom_checkbox_area_item">
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" />
                            <label className="custom-control-label" for="customCheck">Show my class attendance</label>
                        </div>
                        <ul>
                            <li>
                                <Link to="#"><i className="fa fa-angle-left" aria-hidden="true"></i></Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calender;