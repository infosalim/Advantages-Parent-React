import React from 'react';

const SingleChat = ({thumb, roomName, lastText, date, time}) => {
    return (
        <div className="single-chating-content">
        <div className="single-chating-left-content">
            <div className="single-chating-left-image">
                <img src={thumb} alt="Images" />
            </div>
            <div className="single-chating-right-content">
                <p>{roomName}</p>
                <p>{lastText}</p>
            </div>
        </div>
        <div className="single-chating-right-content">
            <p>{date}</p>
            <p>{time}</p>
        </div>
    </div>
    );
};

export default SingleChat;