import { useState } from 'react';
import { Link } from 'react-router-dom';

import certificate from '../../assets/images/learning/certificat.png';
import more from '../../assets/images/learning/more.png';

const SingleProgress = ({ 
    thumb,
    isNew,
    title,
    hasCertificate,
    certificates,
    certificateIsActive,
    progress,
    profileThumb,
    profileName,
    profileSection,
    grade,
    overActivity,
    isLinked,
    earnedCredit }) => {
    
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className="class_area_sort_flex">
            {/* <!-- single myclassroom left content --> */}
            <div className="ra_sort_left_area_body">
                <div className="myclassroome-single-left-content">
                    <div className="myclassroom-single-left-content-image">
                        <img src={thumb} alt="Images" />
                        {isNew ? <div className="myclassroom-single-left-new-button">
                            <button>new</button>
                        </div> :null }
                    </div>
                    <div className="myclassroom-single-right-content-text">
                        <div className="myclassroom-single-left-content-top-text">
                            <h1>{title}</h1>
                        </div>
                        <div className="myclassroom-single-left-content-course-progress">
                            <div className="course-progress-left">
                                <p>Course progress</p>
                                <div className="myclassroom-single-left-cross-progress">
                                    <div className="barra-nivel" data-nivel={`${progress}%`} style={{ width: `${progress}%` }}></div>
                                </div>
                            </div>
                            <div className="course-progress-right">
                                <h5 className="counter">{progress}</h5>
                                <span>%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- single myclassroom left content --> */}
            <div className="ra_sortable_certificate_main">
                <div className="ra_sortable_certificate_main_sub_item_area">
                    <div className="profile-section">
                        <div className="profile-left-section-content">
                            <img src={profileThumb} alt="Images" />
                        </div>
                        <div className="profile-right-section-content">
                            <p>{profileName}</p>
                            <span>{profileSection}</span>
                        </div>
                    </div>
                    {hasCertificate ? <div className="ra_sortable_certificate_sub1">
                        <img src={certificate} alt="images" />
                        <Link to="#"><span className={`${certificateIsActive ? 'active' : null}`}>{certificates}</span></Link>
                    </div>: null}
                </div>
            </div>
            <div className="ra_sortable_certificate_main2">
                <div className="ra_sortable_certificate_main2_sub_item_area">
                    <div className="ra_sortable_certificate_sub_item1">
                        <p>{grade}</p>
                    </div>
                    <div className="ra_sortable_certificate_sub_item2">
                        <p>{overActivity}</p>
                        {isLinked ? <p>Link?</p> : null}
                    </div>
                    <div className="ra_sortable_certificate_sub_item13">
                        <p>{earnedCredit}</p>
                    </div>
                </div>
            </div>
            <div className="ra_sortable_right_btn_area">
                <div className="ra_sortable_right_btn_area_sub_item_area">
                    <div className="ra_sortable_right_btn_area_sub1">
                        <div className="dropdown">
                            <div className="contact-button contact-button2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <Link to="#" onClick={() => setDrawerOpen(!drawerOpen)}>View details</Link>
                            </div>

                            {drawerOpen ? <div className="dropdown-menu new-menu extra_class_niye_border" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 37px, 0px)' }}>
                                <Link className="dropdown-item" to="#">Course information</Link>
                                <Link className="dropdown-item" to="#">Course resources</Link>
                                <Link className="dropdown-item" to="#">Download certificate</Link>
                            </div> : null}
                        </div>
                    </div>
                    <div className="ra_sortable_right_btn_area_sub2">
                        <Link to="#"><img src={more} alt="images" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProgress;