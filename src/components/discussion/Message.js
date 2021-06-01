import { useState } from 'react';
import { Link } from 'react-router-dom';

import message from '../../assets/images/discussion/message.png';
import avater from '../../assets/images/discussion/avatar.png';
import profile from '../../assets/images/discussion/profile.png';
import star from '../../assets/images/discussion/Star.png';
import dropdownIcon from '../../assets/images/resource-cards/dropdown_icon.png';
import li1 from '../../assets/images/discussion/li1.png';
import li2 from '../../assets/images/discussion/li2.png';
import li3 from '../../assets/images/discussion/li3.png';
import li4 from '../../assets/images/discussion/li4.png';
import li5 from '../../assets/images/discussion/li5.png';
import li6 from '../../assets/images/discussion/li6.png';
import li7 from '../../assets/images/discussion/li7.png';
import client1 from '../../assets/images/discussion/client1.png';
import discussion2 from '../../assets/images/discussion/disimg2.png';
import chart from '../../assets/images/discussion/chart.png';
import plus from '../../assets/images/discussion/plus.png';
import icon from '../../assets/images/discussion/icon.png';
import imag from '../../assets/images/discussion/imag.png';
import imag2 from '../../assets/images/discussion/imag2.png';
import mOption from '../../assets/images/discussion/moption.png';
import mom from '../../assets/images/discussion/mom.png';

const Message = () => {
    const [courses, setCourses] = useState(false);
    const [sortBy, setSortBy] = useState(false);

    return (
        <div className="mu_messages_page">
            <div className="container">
                {/* <!-- Start Header Top --> */}
                <div className="mu_discussion_header_top_text">
                    <p>Discussions</p>
                </div>
                {/* <!-- End Header Top --> */}

                <div className="mu_main_discussion_page">
                    {/* <!--//////////////////////////// Start Left Site discussion Page ////////////////////////--> */}
                    <div className="mu_main_left_discussion">
                        {/* <!-- Start Message --> */}
                        <div className="mu_chart_area mu_chart_area2">
                            <div className="mu_chart">
                                <div className="mu_chart_left">
                                    <img src={message} alt='images' />
                                    <h4>Message</h4>
                                </div>
                                <div className="mu_chart_right">
                                    <p>25 NEW</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Message --> */}

                        {/* <!--============== Start left site Header --> */}
                        <div className="mu_dis_left_header">
                            <ul>
                                <li><Link to="#">All</Link></li>
                                <li><Link to="#">Class Discussins</Link></li>
                                <li><Link to="#">Groups</Link></li>
                                <li className="mu_dis_left_li_flex">
                                    <Link to="#">
                                        <img src={star} alt='images' />
                                        <p>Starred</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!--============== End left site Header --> */}

                        {/* <!--888888888888888888888 Start Message Area Left Site Overflow Scroll 8888888888888888888--> */}
                        <div className="mu_message_scroll_left">
                            {/* <!--============== Start dropdown menu --> */}
                            <div className="mu_dis_dropdown_btn">
                                <div className="mu_dis_le_dropdown">
                                    <ul>
                                        <li>
                                            <div className="dropdown">
                                                <button onClick={() => setCourses(!courses)} className="dropdown-toggle menu-drop mu_dis_le_dropdown_li_btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    All Courses
                                                    <div className="down-icon-three mu_dis_li_img"><img src={dropdownIcon} alt="Images" /></div>
                                                </button>

                                                {courses ? <div className="dropdown-menu new-menu" aria-labelledby="dropdownMenuButton">
                                                    <Link className="dropdown-item" to="#">Action</Link>
                                                    <Link className="dropdown-item" to="#">Action Two</Link>
                                                    <Link className="dropdown-item" to="#">Action Three</Link>
                                                </div> : null}
                                            </div>
                                        </li>

                                        <li>
                                            <div className="dropdown">
                                                <button onClick={() => setSortBy(!sortBy)} className="dropdown-toggle menu-drop mu_dis_le_dropdown_li_btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Sort
                                                    <div className="down-icon-three mu_dis_li_img"><img src={dropdownIcon} alt="Images" /></div>
                                                </button>

                                                {sortBy ? <div className="dropdown-menu new-menu" aria-labelledby="dropdownMenuButton">
                                                    <Link className="dropdown-item" to="#">Action</Link>
                                                    <Link className="dropdown-item" to="#">Action Two</Link>
                                                    <Link className="dropdown-item" to="#">Action Three</Link>
                                                </div> : null}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mu_header_btn mu_dis_le_dropdown_btn">
                                    <Link to="#">New</Link>
                                </div>
                            </div>
                            {/* <!--============== End dropdown menu --> */}

                            {/* <!--============== Start My Teacher --> */}
                            <div className="mu_my_teacher_dis">
                                <p>Teachers</p>
                            </div>
                            <div className="mu_dis_teacher_img">
                                <ul>
                                    <li>
                                        <Link to="#"><img src={li1} alt='images' /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><img src={li2} alt='images' /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><img src={li3} alt='images' /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><img src={li4} alt='images' /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><img src={li5} alt='images' /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><img src={li6} alt='images' /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><img src={li7} alt='images' /></Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--============== End My Teacher --> */}

                            {/* <!--============== Start Class Discussion Area --> */}
                            <div className="mu_my_teacher_dis">
                                <p>Chats</p>
                            </div>
                            {/* <!-- Single Discussion --> */}
                            <div className="mu_dis_content_left">
                                <div className="mu_dis_img_con_flex_left">
                                    <div className="mu_dis_content_img_left">
                                        <div className="mu_dis_con_img_img1">
                                            <img src={star} alt='images' />
                                        </div>

                                        <div className="mu_dis_content_img_posi">
                                            <img src={client1} alt='images' />
                                            <div className="mu_dis_con_p_pos">
                                                <Link to="#">NEW</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mu_dis_content_description_left">
                                        <p>9:52 AM</p>
                                        <div className="mu_dis_con_pad">
                                            <h4>Mrs. Jackson</h4>
                                            <p>Environmental Science</p>
                                        </div>
                                        <p>What did you like about the assignment? Do you have any questions?…</p>
                                    </div>
                                </div>
                                <div className="mu_dis_time_left">
                                    <p>02/20</p>
                                    <Link to="#">2</Link>
                                </div>
                            </div>

                            {/* <!-- Single Discussion --> */}
                            <div className="mu_dis_content_left">
                                <div className="mu_dis_img_con_flex_left">
                                    <div className="mu_dis_content_img_left">
                                        <div className="mu_dis_con_img_img1 mu_dis_con_img_img1reply">
                                            <img src={star} alt='iamges' />
                                        </div>

                                        <div className="mu_dis_content_img_posi mu_dis_content_img_posi2">
                                            <img src={discussion2} alt='images' />
                                        </div>
                                    </div>

                                    <div className="mu_dis_content_description_left">
                                        <div className="mu_dis_con_pad mu_dis_con_pad2">
                                            <h4>Mr. Smith</h4>
                                            <p>Hi , can you help me on this one? I do really need help. I’m…</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mu_dis_time_left">
                                    <p>02/19</p>
                                </div>
                            </div>
                            {/* <!--============== End Class Discussion Area --> */}
                        </div>
                        {/* <!--888888888888888888888 End Message Area Left Site Overflow Scroll 8888888888888888888--> */}
                    </div>
                    {/* <!--//////////////////////////// End Left Site discussion Page ////////////////////////////--> */}

                    {/* <!--//////////////////////////// Start Right Site discussion Page ////////////////////////////--> */}
                    <div className="mu_main_right_discussion">
                        {/* <!-- Start Chart Text --> */}
                        <div className="mu_messages_area mu_messages_area2">
                            <div className="mu_messages mu_messages2">
                                <div className="mu_messages_left">
                                    <img src={chart} alt='images' />
                                    <h4>Chat</h4>
                                </div>
                                <div className="mu_messages_right">
                                    <p>25 NEW</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Chart Text --> */}

                        {/* <!--============== Start Right Site Header --> */}
                        <div className="mu_dis_right_header">
                            <div className="mu_dis_right_header_left">
                                <p>Mrs. Jackson</p>
                            </div>

                            <div className="mu_dis_right_header_right">
                                <div className="mu_dis_right_header_rtr">
                                    <ul>
                                        <li>
                                            <Link to="#"><img src={client1} alt='images' /></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mu_dis_right_header_rtl">
                                    <Link className="mu_dis_right_header_rtl2" to="#"><img src={plus} alt='images' /></Link>
                                    <Link className="mu_dis_right_header_rtl3" to="#"><img src={icon} alt='images' /></Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--============== End Right Site Header --> */}

                        {/* <!--============== Start Right profile Content Area--> */}
                        <div className="mu_right_profile_area">
                            <div className="mu_profile_img_content_flex">
                                <div className="mu_dis_profile_img">
                                    <div className="mu_dis_profile_img_img">
                                        <img src={profile} alt='images' />
                                    </div>
                                    <div className="mu_dis_profile_img_title">
                                        <div className="mu_dis_profile_img_title_flex">
                                            <h5>Mrs. Jackson</h5>
                                            <p>NEW</p>
                                        </div>
                                        <Link to="#">Environmental Science</Link>
                                    </div>
                                </div>

                                <div className="mu_dis_profile_content">
                                    <div className="mu_dis_profile_content_rt">
                                        <img src={message} alt='images' />
                                        <p>Message</p>
                                    </div>
                                    <div className="mu_dis_profile_content_rb">
                                        <p>02-20-2021 9:52 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--============== End Right profile Content Areae --> */}

                        {/* <!--888888888888888 Start Message area Right Site 1 & 2 overflow scroll 88888888888888--> */}

                        <div className="mu_message_scroll_right">
                            {/* <!--============== Start Message Area 1 --> */}
                            <div className="mu_dis_message_area1">
                                <div className="mu_dis_Single_message_box">
                                    <div className="mu_message_sin_img">
                                        <img src={avater} alt='images' />
                                    </div>
                                    <div className="mu_message_sin_content">
                                        <div className="mu_message_conte_flex">
                                            <p>Carolyn Connor &nbsp; 09:53 AM</p>
                                            <p>02-20-2021</p>
                                        </div>
                                        <div className="mu_message_sin_con_par">
                                            <p>Hey y’all!</p>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mu_dis_Single_message_box mu_dis_message_area1_box2">
                                    <div>
                                        <div className="mu_message_sin_img">
                                            <img src={mom} alt='images' />
                                        </div>
                                        <div className="mu_dis_message_option">
                                            <Link to="#"><img src={mOption} alt='images' /></Link>
                                        </div>
                                    </div>
                                    <div className="mu_message_sin_content mu_message_sin_content2">
                                        <div className="mu_message_conte_flex">
                                            <p>09:54 AM</p>
                                            <p>02-20-2021</p>
                                        </div>
                                        <div className="mu_message_sin_con_par">
                                            <p>
                                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced
                                                in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                                                interested. Sections 1.10.32 and 1.10.33.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mu_new_messag">
                                    <Link to="#">2 new</Link>
                                    <p>09:55 AM</p>
                                </div>
                            </div>
                            {/* <!--============== End Message Area 1 --> */}

                            {/* <!--============== Start Message Area 2 --> */}
                            <div className="mu_dis_message_area1 mu_dis_message_area2">
                                <div className="mu_dis_Single_message_box_option">
                                    <div className="mu_dis_Single_message_box">
                                        <div className="mu_message_sin_img">
                                            <img src={avater} alt='images' />
                                        </div>
                                        <div className="mu_message_sin_content mu_message_sin_content3">
                                            <div className="mu_message_conte_flex">
                                                <p>Steven Smith &nbsp; 09:55 AM</p>
                                                <p>02-20-2021</p>
                                            </div>
                                            <div className="mu_message_sin_con_par">
                                                <p>
                                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also
                                                    reproduced in their exact original form, accompanied by English versions from the 1914.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mu_dis_message_option">
                                        <Link to="#"><img src={mOption} alt='images' /></Link>
                                    </div>
                                </div>

                                <div className="mu_dis_Single_message_box_option">
                                    <div className="mu_dis_Single_message_box">
                                        <div className="mu_message_sin_img">
                                            <img src={mom} alt='images' />
                                        </div>
                                        <div className="mu_message_sin_content mu_message_sin_content3">
                                            <div className="mu_message_conte_flex">
                                                <p>Ashley Stevens &nbsp; 09:56 AM</p>
                                                <p>02-20-2021</p>
                                            </div>
                                            <div className="mu_message_sin_con_par mu_message_sin_con_par2">
                                                <p>
                                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also
                                                    reproduced in their exact original form, accompanied by English versions from the 1914.
                                                </p>
                                                <p>Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mu_dis_message_option">
                                        <Link to="#"><img src={mOption} alt='images' /></Link>
                                    </div>
                                </div>

                                <div className="mu_message_typein">
                                    <div className="mu_message_typein_prof">
                                        <img src={avater} alt='images' />
                                        <p>Carolyn Connor</p>
                                    </div>
                                    <div className="mu_message_typein_type">
                                        <p>Typing...</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--============== End Message Area 2 --> */}
                        </div>
                        {/* <!--888888888888888 End Message area Right Site 1 & 2 overflow scroll 88888888888888--> */}

                        {/* <!-- Start Type a message --> */}
                        <div className="mu_type_a_message">
                            <div className="mu_type_a_message_text">
                                <input type="text" placeholder="Type a message..." name="" />
                            </div>
                            <div className="mu_type_a_message_img">
                                <div className="fileUpload">
                                    <Link to="#"><img src={imag} alt='images' /></Link>
                                    <input type="file" className="upload" />
                                </div>
                                <div className="fileUpload">
                                    <Link to="#"><img src={imag2} alt='images' /></Link>
                                    <input type="file" className="upload" />
                                </div>

                            </div>
                        </div>
                        {/* <!-- End Type a message --> */}
                    </div>
                    {/* <!--//////////////////////////// End Right Site discussion Page ////////////////////////////--> */}
                </div>
            </div>
        </div>
    );
};

export default Message;