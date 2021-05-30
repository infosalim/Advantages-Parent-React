import React from 'react';
import { Link } from 'react-router-dom';

import messageIndivudual from '../../assets/images/message-individual/Star.png';
import profileImg from '../../assets/images/message-individual/profile_img.png';
import mailIcon from '../../assets/images/messages/mail_icon.png';
import client1 from '../../assets/images/messages/client1.png';
import client2 from '../../assets/images/messages/client2.png';
import chart from '../../assets/images/messages/chart.png';
import search from '../../assets/images/resource-cards/Search.png';
import searchBtn from '../../assets/images/resource-cards/search_bar_btn_icon.png';

import down from '../../assets/images/messages/down.png';
import alertIcon from '../../assets/images/messages/alert.png';
import deleteIcon from '../../assets/images/messages/delete.png';
import email from '../../assets/images/messages/email.png';
import clock from '../../assets/images/messages/clock.png';
import checkbox from '../../assets/images/messages/checkbox.png';
import tag from '../../assets/images/messages/tag.png';
import file from '../../assets/images/messages/file.png';
import option from '../../assets/images/messages/option.png';
import less from '../../assets/images/messages/less.png';
import greater from '../../assets/images/messages/greater.png';

const MessageSection = () => {
    return (
        <div className="mu_messages_page">
            <div className="container">
                <div className="mu_messages_all">
                    {/* <!--============================ Start Left Site Messages Page ========================--> */}
                    <div className="mu_messages_page_left_site">
                        {/* <!-- Start Message --> */}
                        <div className="mu_messages_area">
                            <div className="mu_messages">
                                <div className="mu_messages_left">
                                    <img src={mailIcon} alt='images' />
                                    <h4>Messages</h4>
                                </div>
                                <div className="mu_messages_right">
                                    <p>25 NEW</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Message --> */}

                        {/* <!-- Start Messages box Accordion --> */}
                        <div className="mu_messages_box_area">
                            <ul id="mu_accordion_three" className="mu_accordion2">
                                <li>
                                    <div className="link">
                                        <div className="mu_li_flex">
                                            <p>Inbox</p>
                                            <p>150</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="link">Announcements</div>
                                </li>
                                <li>
                                    <div className="link">Starred</div>
                                </li>
                                <li>
                                    <div className="link">Important</div>
                                </li>
                                <li>
                                    <div className="link">Sent</div>
                                </li>
                                <li>
                                    <div className="link">Archived</div>
                                </li>
                                <li>
                                    <div className="link">Deleted</div>
                                </li>
                                <li>
                                    <div className="link">Tags</div>
                                </li>

                                <li>
                                    <div className="link">Recent Discussion</div>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- End Messages box Accordion --> */}

                        {/* <!-- Start Recent Client --> */}
                        <div>
                            <ul className="mu_recent_client">
                                <li>
                                    <div className="mu_accrodion_li_flex">
                                        <div><img src={client1} alt='images' /></div>
                                        <div>
                                            <p>Mrs. Jackson added Create earth friendly options to Resources</p>
                                            <p>Nov 15 at 5:29 PM</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="mu_accrodion_li_flex">
                                        <div><img src={client2} alt='images' /></div>
                                        <div>
                                            <p>Daniel added a new question to Library Group</p>
                                            <p>Nov 14 at 9:12 PM</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- End Recent Client --> */}

                        {/* <!-- Start Button --> */}
                        <div className="mu_message_button">
                            <Link to="#">Go to discussions</Link>
                            <Link to="#">Add Chat</Link>
                        </div>
                        {/* <!-- End Button --> */}
                    </div>
                    {/* <!-- End Messages box Accordion --> */}
                    {/* <!--============================ End Left Site Messages Page ========================--> */}

                    {/* <!--============================ Start Right Site Messages Page ========================--> */}
                    <div className="mu_messages_page_right_site">
                        {/* <!-- Start Chart Text --> */}
                        <div className="mu_chart_area">
                            <div className="mu_chart">
                                <div className="mu_chart_left">
                                    <img src={chart} alt='images' />
                                    <h4>Chat</h4>
                                </div>
                                <div className="mu_chart_right">
                                    <p>25 NEW</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Chart Text --> */}

                        <div className="mu_right_site_border">
                            {/* <!-- ====== Start search Header =======--> */}
                            <div className="mu_chart_header mu_chart_header2">
                                {/* <!-- Start header button --> */}
                                <div className="mu_header_btn mu_header_btn2">
                                    <Link to="#">New Message</Link>
                                    <Link to="#">Send SMS</Link>
                                </div>
                                {/* <!-- End header button --> */}

                                {/* <!-- Start Search Bar --> */}
                                <div className="mu_search_bar mu_search_bar_reply">
                                    <form>
                                        <div className="search_box_area">
                                            <input type="search" name="" placeholder="Search ..."/>
                                            <div className="search_icon">
                                                <img src={search} alt='images'/>
                                            </div>
                                        </div>
                                        <button>All<img src={searchBtn} alt='images' /></button>
                                        <div className="mu_dropdown" style={{display: 'none'}}>
                                            <ul>
                                                <li><Link to="#" target="blank">Action</Link></li>
                                                <li><Link to="#" target="blank">Action two</Link></li>
                                                <li><Link to="#" target="blank">Action three</Link></li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                                {/* <!-- End Search Bar --> */}
                            </div>
                            {/* <!--============ End search Header ==========--> */}

                            {/* <!--============ Start Icons Header ==========--> */}
                            <div className="mu_icon_header">
                                {/* <!--==== Start icon header left --> */}
                                <div className="mu_icon_header_left">
                                    <div className="mu_icon_header_left_flex">
                                        {/* <!-- Start Check box --> */}
                                        <div className="mu_icon_header_checkbox">
                                            <form>
                                                <div className="mu-form-group">
                                                    <input type="checkbox" id="muchek"/>
                                                    <label htmlFor="muchek"></label>
                                                </div>
                                            </form>
                                        </div>
                                        {/* <!-- End Check box --> */}

                                        {/* <!-- Start icons area --> */}
                                        <div className="mu_icon_header_icons">
                                            <ul>
                                                <li>
                                                    <Link to="#"><img src={down} alt='images'/></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><img src={alertIcon} alt='images'/></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><img src={deleteIcon} alt='images'/></Link>
                                                </li>
                                                <li><span>|</span></li>
                                                <li>
                                                    <Link to="#"><img src={email} alt='images'/></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><img src={clock} alt='images'/></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><img src={checkbox} alt='images'/></Link>
                                                </li>
                                                <li><span>|</span></li>
                                                <li>
                                                    <Link to="#"><img src={file} alt='images'/></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><img src={tag} alt='images'/></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><img style={{width: 3, height: 14}} src={option} alt='images'/></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- End icons area --> */}
                                    </div>
                                    <div className="mu_filter_announcement">
                                        <p>Filter: Announcements</p>
                                    </div>
                                </div>
                                {/* <!--==== End icon header left --> */}

                                {/* <!--====== Start icon header Right --> */}
                                <div className="mu_icon_header_right">
                                    <p>Showing 10 of 250</p>
                                </div>
                                {/* <!--==== End icon header Right --> */}
                            </div>
                            {/* <!--============ End Icons Header ==========--> */}

                            {/* <!--//////////////////////////// Start Single Profile Message Letter List ////////////////////////////////--> */}

                            <div className="mu_single_letter">
                                {/* <!-- Start Letter Top Button --> */}
                                <div className="mu_letter_top_button">
                                    <div className="mu_header_btn mu_header_btn12">
                                        <Link to="#">Back to inbox</Link>
                                    </div>
                                    <div className="mu_header_btn mu_header_btn12f">
                                        <Link to="#">Print</Link>
                                        <img src={messageIndivudual} alt='images'/>
                                    </div>
                                </div>
                                {/* <!-- End Letter Top Button --> */}

                                {/* <!-- Start Letter Full Area --> */}
                                <div className="mu_profile_img_area">
                                    <div className="mu_profile_img_area_top">
                                        <div className="mu_profile_img_area_left">
                                            <img src={profileImg} alt='images'/>
                                            <p>Mrs. Jackson sent a message to the Parent Group</p>
                                        </div>
                                        <div className="mu_profile_img_area_right">
                                            <div className="mu_header_btn mu_header_btn12 mu_header_btn12_2">
                                                <Link to="#">Reply</Link>
                                                <Link to="#">Reply All</Link>
                                                <Link to="#">Forword</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mu_profile_img_area_content">
                                        <h6>Looking for Math Help</h6>
                                        <p>Hi Student, are you available to help with the math club on Friday?</p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                            type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                        <p>Thank you,</p>
                                        <p>Austin</p>
                                    </div>
                                </div>
                                {/* <!-- End Letter Full Area --> */}

                                {/* <!-- Start Letter bottom Button --> */}
                                <div className="mu_header_btn mu_header_btn12 mu_header_btn12_2 mu_header_btn12_3">
                                    <Link to="#">Reply</Link>
                                    <Link to="#">Reply All</Link>
                                    <Link to="#">Forword</Link>
                                </div>
                                {/* <!-- Start Letter bottom Button --> */}
                            </div>

                            {/* <!--//////////////////////////// End Single Profile Message Letter List ////////////////////////////////--> */}
                        </div>
                    </div>
                    {/* <!--============================ End Right Site Messages Page ========================--> */}
                </div>
                {/* <!-- Start Bottom Next Page --> */}
                <div className="mu_main_bottom">
                    <div className="mu_main_bottom_left"></div>
                    <div className="mu_main_bottom_right">
                        <div className="mu_main_bottom_next_change">
                            <div className="mu_icon_header_right">
                                <p>Showing 10 of 250</p>
                            </div>
                            {/* <!-- Start Next Button --> */}
                            <div className="mu_header_next_btn">
                                <div className="pagination_left_icon">
                                    <Link to="#"><img src={less} alt='images'/></Link>
                                </div>
                                <div className="mu_pagination_count_button">
                                    <Link className="active" to="#">1</Link>
                                </div>
                                <div className="pagination_right_icon">
                                    <Link to="#"><img src={greater} alt='images'/></Link>
                                </div>
                            </div>
                            {/* <!-- End Next Button --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End Bottom Next Page --> */}
            </div>
        </div>
    );
};

export default MessageSection;