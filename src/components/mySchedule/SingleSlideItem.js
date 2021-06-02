import React from 'react';

const SingleSlideItem = ({ month, date, instructor, subject, details }) => {
    return (
        <div className="ra_event_single_slider_area ra_event_single_slider_area3 change_slider">
        <div className="ra_event_single_slider_area_top">
            <h5>{month}</h5>
            <h4>{date}</h4>
        </div>
        <div className="ra_event_single_slider_area_bottom">
            <p>{instructor}</p>
            <h1>{subject}</h1>
            <p>{details}</p>
        </div>
    </div>
    );
};

export default SingleSlideItem;