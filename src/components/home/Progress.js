import {Link} from 'react-router-dom';

import error from '../../assets/images/parent/error.png';
import infoprofile from '../../assets/images/home/infoprofile.png';
import class1 from '../../assets/images/home/class1.png';
import stuInfo from '../../assets/images/home/stu-info.png';
import infoprofileTwo from '../../assets/images/home/infoprofiletwo.png';
import plusIcon from '../../assets/images/home/plus.png';

const Progress = () => {
    return (
        <div className="home-progress-area newp">
            {/* <!-- Start Home Page Alert --> */}
            <div className="container">
                <div className="homepage-alert">
                    <div className="mu_alert_box">
                        <div className="mu_alert_box_left">
                            <img src={error} alt='error' />
                            <p>Jannelle: permission slip overdue</p>
                        </div>
                        <div className="mu_alert_box_right">
                            <Link to="#">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Home Page Alert --> */}
            <div className="container">
                <div className="home-progress-content">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="home-progress-left-all-content-area">

                                {/* <!-- SINGLE HOME PRGORESS LEFT CONTENT AREA --> */}
                                <div className="single-home-progress-left-content-area">
                                    <div className="home-student-information">
                                        <div className="home-student-information-heading">
                                            <div className="home-student-info-left-content">
                                                <div className="home-student-info-head-img">
                                                    <img src={infoprofile} alt="Images" />
                                                </div>
                                                <div className="home-student-info-head-text">
                                                    <h2>Janelle Marshall</h2>
                                                    <div className="home-student-info-middle-text">
                                                        <p>Grade: <span>8</span></p>
                                                        <p>ID: <span>#12356</span></p>
                                                    </div>
                                                    <h4>Advantages School International</h4>
                                                </div>
                                            </div>

                                            <div className="home-student-info-right-content">
                                                <Link to="#">Student Info</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="home-student-all-information">

                                        {/* <!-- Single Home Student Information --> */}
                                        <div className="single-home-student-information">
                                            <div className="single-home-student-info-left-content">
                                                <div className="single-stuinfo-left-content">
                                                    <img src={class1} alt="Images" />
                                                </div>

                                                <div className="single-stuinfo-right-content">
                                                    <div className="single-stuinfo-top-right">
                                                        <h2>Environmental Science</h2>
                                                        <p>1 absence</p>
                                                    </div>
                                                    <div className="single-stuinfo-middle-right">
                                                        <p>Mrs. Jackson</p>
                                                        <p>Current Grade: B+ (89%)</p>
                                                    </div>

                                                    <div className="single-stuinfo-progressbar">
                                                        <div className="myclassroom-single-left-content-course-progress">
                                                            <div className="course-progress-left">
                                                                <p>Course progress</p>
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
                                            </div>

                                            <div className="single-home-student-info-right-content">
                                                <Link to="#"><img src={stuInfo} alt="Images" /></Link>
                                            </div>
                                        </div>
                                        {/* <!-- Single Home Student Information --> */}

                                        {/* <!-- Single Home Student Information --> */}
                                        <div className="single-home-student-information">
                                            <div className="single-home-student-info-left-content">
                                                <div className="single-stuinfo-left-content">
                                                    <img src={class1} alt="Images" />
                                                </div>

                                                <div className="single-stuinfo-right-content">
                                                    <div className="single-stuinfo-top-right">
                                                        <h2>Course Two</h2>
                                                        <p>1 absence</p>
                                                    </div>
                                                    <div className="single-stuinfo-middle-right">
                                                        <p>Mrs. Jackson</p>
                                                        <p>Current Grade: B+ (89%)</p>
                                                    </div>

                                                    <div className="single-stuinfo-progressbar">
                                                        <div className="myclassroom-single-left-content-course-progress">
                                                            <div className="course-progress-left">
                                                                <p>Course progress</p>
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
                                            </div>

                                            <div className="single-home-student-info-right-content">
                                                <Link to="#"><img src={stuInfo} alt="Images" /></Link>
                                            </div>
                                        </div>
                                        {/* <!-- Single Home Student Information --> */}

                                        {/* <!-- Single Home Student Information --> */}
                                        <div className="single-home-student-information">
                                            <div className="single-home-student-info-left-content">
                                                <div className="single-stuinfo-left-content">
                                                    <img src={class1} alt="Images" />
                                                </div>

                                                <div className="single-stuinfo-right-content">
                                                    <div className="single-stuinfo-top-right">
                                                        <h2>Course Three</h2>
                                                        <p>1 absence</p>
                                                    </div>
                                                    <div className="single-stuinfo-middle-right">
                                                        <p>Mrs. Jackson</p>
                                                        <p>Current Grade: B+ (89%)</p>
                                                    </div>

                                                    <div className="single-stuinfo-progressbar">
                                                        <div className="myclassroom-single-left-content-course-progress">
                                                            <div className="course-progress-left">
                                                                <p>Course progress</p>
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
                                            </div>

                                            <div className="single-home-student-info-right-content">
                                                <Link to="#"><img src={stuInfo} alt="Images" /></Link>
                                            </div>
                                        </div>
                                        {/* <!-- Single Home Student Information --> */}

                                        {/* <!-- Single Home Student Information --> */}
                                        <div className="single-home-student-information">
                                            <div className="single-home-student-info-left-content">
                                                <div className="single-stuinfo-left-content">
                                                    <img src={class1} alt="Images" />
                                                </div>

                                                <div className="single-stuinfo-right-content">
                                                    <div className="single-stuinfo-top-right">
                                                        <h2>Course Three</h2>
                                                        <p>1 absence</p>
                                                    </div>
                                                    <div className="single-stuinfo-middle-right">
                                                        <p>Mrs. Jackson</p>
                                                        <p>Current Grade: B+ (89%)</p>
                                                    </div>

                                                    <div className="single-stuinfo-progressbar">
                                                        <div className="myclassroom-single-left-content-course-progress">
                                                            <div className="course-progress-left">
                                                                <p>Course progress</p>
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
                                            </div>

                                            <div className="single-home-student-info-right-content">
                                                <Link to="#"><img src={stuInfo} alt="Images" /></Link>
                                            </div>
                                        </div>
                                        {/* <!-- Single Home Student Information --> */}

                                    </div>

                                    {/* <!-- Start Learning Progress Button --> */}
                                    <div className="learning-progress-button">
                                        <Link to="#">Learning Progress</Link>
                                    </div>
                                    {/* <!-- End Learning Progress Button --> */}

                                    {/* <!-- Start Last Accessed Paragraf --> */}
                                    <div className="last-accessed-paragraf">
                                        <p>Last accessed 04-05-2021 at 8:30am</p>
                                    </div>
                                    {/* <!-- Start Last Accessed Paragraf --> */}

                                </div>
                                {/* <!-- SINGLE HOME PRGORESS LEFT CONTENT AREA --> */}


                                {/* <!-- SINGLE HOME PRGORESS LEFT CONTENT AREA --> */}
                                <div className="single-home-progress-left-content-area">
                                    <div className="home-student-information kenneth">
                                        <div className="home-student-information-heading">
                                            <div className="home-student-info-left-content">
                                                <div className="home-student-info-head-img">
                                                    <img src={infoprofileTwo} alt="Images" />
                                                </div>
                                                <div className="home-student-info-head-text">
                                                    <h2>Kenneth Marshall</h2>
                                                    <div className="home-student-info-middle-text">
                                                        <p>Grade: <span>6</span></p>
                                                        <p>ID: <span>#12456</span></p>
                                                    </div>
                                                    <h4>Advantages School International</h4>
                                                </div>
                                            </div>

                                            <div className="home-student-info-right-content">
                                                <Link to="#">Student Info</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="home-student-all-information kenneth">

                                        {/* <!-- Single Home Student Information --> */}
                                        <div className="single-home-student-information">
                                            <div className="single-home-student-info-left-content">
                                                <div className="single-stuinfo-left-content">
                                                    <img src={class1} alt="Images" />
                                                </div>

                                                <div className="single-stuinfo-right-content">
                                                    <div className="single-stuinfo-top-right">
                                                        <h2>Environmental Science</h2>
                                                        <p>1 absence</p>
                                                    </div>
                                                    <div className="single-stuinfo-middle-right">
                                                        <p>Mrs. Jackson</p>
                                                        <p>Current Grade: B+ (89%)</p>
                                                    </div>

                                                    <div className="single-stuinfo-progressbar kenneth">
                                                        <div className="myclassNameroom-single-left-content-course-progress">
                                                            <div className="course-progress-left">
                                                                <p>Course progress</p>
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
                                            </div>

                                            <div className="single-home-student-info-right-content">
                                                <Link to="#"><img src={stuInfo} alt="Images" /></Link>
                                            </div>
                                        </div>
                                        {/* <!-- Single Home Student Information --> */}

                                        {/* <!-- Single Home Student Information --> */}
                                        <div className="single-home-student-information">
                                            <div className="single-home-student-info-left-content">
                                                <div className="single-stuinfo-left-content">
                                                    <img src={class1} alt="Images" />
                                                </div>

                                                <div className="single-stuinfo-right-content">
                                                    <div className="single-stuinfo-top-right">
                                                        <h2>Course Two</h2>
                                                        <p>2 absence</p>
                                                    </div>
                                                    <div className="single-stuinfo-middle-right">
                                                        <p>Mrs. Jackson</p>
                                                        <p>Current Grade: B+ (89%)</p>
                                                    </div>

                                                    <div className="single-stuinfo-progressbar kenneth">
                                                        <div className="myclassroom-single-left-content-course-progress">
                                                            <div className="course-progress-left">
                                                                <p>Course progress</p>
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
                                            </div>

                                            <div className="single-home-student-info-right-content">
                                                <Link to="#"><img src={stuInfo} alt="Images" /></Link>
                                            </div>
                                        </div>
                                        {/* <!-- Single Home Student Information --> */}

                                        {/* <!-- Single Home Student Information --> */}
                                        <div className="single-home-student-information">
                                            <div className="single-home-student-info-left-content">
                                                <div className="single-stuinfo-left-content">
                                                    <img src={class1} alt="Images" />
                                                </div>

                                                <div className="single-stuinfo-right-content">
                                                    <div className="single-stuinfo-top-right">
                                                        <h2>Course Three</h2>
                                                        <p>1 absence</p>
                                                    </div>
                                                    <div className="single-stuinfo-middle-right">
                                                        <p>Mrs. Jackson</p>
                                                        <p>Current Grade: B+ (89%)</p>
                                                    </div>

                                                    <div className="single-stuinfo-progressbar kenneth">
                                                        <div className="myclassroom-single-left-content-course-progress">
                                                            <div className="course-progress-left">
                                                                <p>Course progress</p>
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
                                            </div>

                                            <div className="single-home-student-info-right-content">
                                                <Link to="#"><img src={stuInfo} alt="Images" /></Link>
                                            </div>
                                        </div>
                                        {/* <!-- Single Home Student Information --> */}

                                        {/* <!-- Single Home Student Information --> */}
                                        <div className="single-home-student-information">
                                            <div className="single-home-student-info-left-content">
                                                <div className="single-stuinfo-left-content">
                                                    <img src={class1} alt="Images" />
                                                </div>

                                                <div className="single-stuinfo-right-content">
                                                    <div className="single-stuinfo-top-right">
                                                        <h2>Course Three</h2>
                                                        <p>1 absence</p>
                                                    </div>
                                                    <div className="single-stuinfo-middle-right">
                                                        <p>Mrs. Jackson</p>
                                                        <p>Current Grade: B+ (89%)</p>
                                                    </div>

                                                    <div className="single-stuinfo-progressbar kenneth">
                                                        <div className="myclassroom-single-left-content-course-progress">
                                                            <div className="course-progress-left">
                                                                <p>Course progress</p>
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
                                            </div>

                                            <div className="single-home-student-info-right-content">
                                                <Link to="#"><img src={stuInfo} alt="Images" /></Link>
                                            </div>
                                        </div>
                                        {/* <!-- Single Home Student Information --> */}

                                    </div>

                                    {/* <!-- Start Learning Progress Button --> */}
                                    <div className="learning-progress-button kenneth">
                                        <Link to="#">Learning Progress</Link>
                                    </div>
                                    {/* <!-- End Learning Progress Button --> */}

                                    {/* <!-- Start Last Accessed Paragraf --> */}
                                    <div className="last-accessed-paragraf">
                                        <p>Last accessed 04-05-2021 at 8:30am</p>
                                    </div>
                                    {/* <!-- Start Last Accessed Paragraf --> */}

                                </div>
                                {/* <!-- SINGLE HOME PRGORESS LEFT CONTENT AREA --> */}



                            </div>

                        </div>



                        <div className="col-xl-6 col-lg-6">
                            {/* <!-- Start Home Progress Right Content --> */}
                            <div className="home-progress-right-content">
                                <div className="inbox-messages-area new">
                                    <div className="inbox-message-header">
                                        <div className="inbox-message-left-header">
                                            <h1>Inbox Messages</h1>
                                            <Link to="#">New <span>4</span> </Link>
                                        </div>
                                        <div className="inbox-message-right-header">
                                            <Link to="#"><img src={plusIcon} alt="Images" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="inbox-messages-content">
                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p><span>Important!</span> New Document Added: Read and sign updated handbook</p>
                                        <div className="single-inbox-date-button announcement">
                                            <p>22 Feb &nbsp; 10:54 AM</p>
                                            <Link to="#">Announcement</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>No school on 03-05-2021</p>
                                        <div className="single-inbox-date-button">
                                            <p>21 Feb &nbsp; 08:52 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>After school math club, please complete survey</p>
                                        <div className="single-inbox-date-button announcement">
                                            <p>20 Feb &nbsp; 09:51 AM</p>
                                            <Link to="#">Announcement</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Please make sure your student profile is complete…</p>
                                        <div className="single-inbox-date-button">
                                            <p>20 Feb &nbsp; 08:52 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Return library materials before the end of the week…</p>
                                        <div className="single-inbox-date-button">
                                            <p>18 Feb &nbsp; 07:55 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Return library materials before the end of the week…</p>
                                        <div className="single-inbox-date-button">
                                            <p>18 Feb &nbsp; 07:55 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Return library materials before the end of the week…</p>
                                        <div className="single-inbox-date-button">
                                            <p>18 Feb &nbsp; 07:55 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Return library materials before the end of the week…</p>
                                        <div className="single-inbox-date-button">
                                            <p>18 Feb &nbsp; 07:55 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Return library materials before the end of the week…</p>
                                        <div className="single-inbox-date-button">
                                            <p>18 Feb &nbsp; 07:55 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Return library materials before the end of the week…</p>
                                        <div className="single-inbox-date-button">
                                            <p>18 Feb &nbsp; 07:55 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Return library materials before the end of the week…</p>
                                        <div className="single-inbox-date-button">
                                            <p>18 Feb &nbsp; 07:55 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Return library materials before the end of the week…</p>
                                        <div className="single-inbox-date-button">
                                            <p>18 Feb &nbsp; 07:55 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Return library materials before the end of the week…</p>
                                        <div className="single-inbox-date-button">
                                            <p>18 Feb &nbsp; 07:55 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Return library materials before the end of the week…</p>
                                        <div className="single-inbox-date-button">
                                            <p>18 Feb &nbsp; 07:55 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Return library materials before the end of the week…</p>
                                        <div className="single-inbox-date-button">
                                            <p>18 Feb &nbsp; 07:55 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Return library materials before the end of the week…</p>
                                        <div className="single-inbox-date-button">
                                            <p>18 Feb &nbsp; 07:55 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}

                                    {/* <!-- single inbox messages content --> */}
                                    <div className="single-inbox-messages-content">
                                        <p>Return library materials before the end of the week…</p>
                                        <div className="single-inbox-date-button">
                                            <p>18 Feb &nbsp; 07:55 AM</p>
                                            <Link to="#">Inbox</Link>
                                        </div>
                                    </div>
                                    {/* <!-- single inbox messages content --> */}



                                    <div className="view-all-message">
                                        <Link to="#">View all 30 messages</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Home Progress Right Content --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;