import { useState } from 'react';
import { Link } from 'react-router-dom';
import SingleChat from './SingleChat';

import chatThumb from '../../assets/images/home/chating.png';
import hideBtn from '../../assets/images/home/down-white.png';
import chatHeadingIcon from '../../assets/images/home/chating.png';
import upArrow from '../../assets/images/home/up-white.png';

import roomThumb1 from '../../assets/images/home/cone.png';
import roomThumb2 from '../../assets/images/home/ctwo.png';
import roomThumb3 from '../../assets/images/home/cthree.png';
import roomThumb4 from '../../assets/images/home/cfour.png';
import roomThumb5 from '../../assets/images/home/cfive.png';

const ChatBox = () => {
    const [showChat, setShowChat] = useState(false);
    return (
        <div className="chating-area">
            {/* <!-- Start Chating Heading Area --> */}
            <div className="chating-heading-area" onClick={() => setShowChat(true)}>
                <div className="chating-heading-left">
                    <Link to="#"><img src={chatHeadingIcon} alt="Images" /></Link>
                    <p>Chat <span>4</span></p>
                </div>
                <div className="chating-heading-right">
                    <button className="show-btns"><img src={upArrow} alt="Images" /></button>
                </div>
            </div>
            {/* <!-- Start Chating Heading Area --> */}

            {/* <!-- Start Chatting Content --> */}
            <div className={`chating-content ${showChat ? '' : 'show'}`}>
                <div className="chating-heading" onClick={() => setShowChat(false)}>
                    <div className="chating-heading-left">
                        <Link to="#"><img src={chatThumb} alt="Images" /></Link>
                        <p>Chat <span>4</span></p>
                    </div>
                    <div className="chating-heading-right">
                        <button className="hide-btns"><img src={hideBtn} alt="Images" /></button>
                    </div>
                </div>

                {/* <!-- single chating content --> */}
                <SingleChat
                    thumb={roomThumb1}
                    roomName='Study group +2'
                    lastText='Bring your overview she…'
                    date='22 Feb'
                    time='10:54 AM'
                />
                <SingleChat
                    thumb={roomThumb2}
                    roomName='Carolyn Connor +3'
                    lastText='What happened to the fi…'
                    date='22 Feb'
                    time='10:50 AM'
                />
                <SingleChat
                    thumb={roomThumb3}
                    roomName='Ashley Stevens'
                    lastText='Can you help me find my…'
                    date='22 Feb'
                    time='10:15 AM'
                />
                <SingleChat
                    thumb={roomThumb4}
                    roomName='Mark Tsima'
                    lastText='Checking in and saying hi…'
                    date='22 Feb'
                    time='10:12 AM'
                />
                <SingleChat
                    thumb={roomThumb5}
                    roomName='Aaron Keer'
                    lastText='Can you send me your no…'
                    date='22 Feb'
                    time='10:05 AM'
                />

                {/* <!-- start view all button --> */}
                <div className="view-all-button">
                    <Link to="#">View all</Link>
                </div>
                {/* <!-- end view all button --> */}
            </div>
            {/* <!-- End Chatting Content --> */}
        </div>
    );
};

export default ChatBox;