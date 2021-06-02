import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, A11y } from 'swiper';

import SingleSlideItem from './SingleSlideItem';

import lt1 from '../../assets/images/learning/lt-one.png';
import lt2 from '../../assets/images/learning/lt-two.png';
import downArrow from '../../assets/images/home/down-arrow.png';

SwiperCore.use([Navigation, A11y]);

const SliderArea = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="ra_event_area myScheduleArea">
            <div className="container">
                <div className="ra_event">
                    <div className="ra_event_right_btn new-class-update">
                        <div className="calander-dropdown-content">
                            <div className="dropdown">
                                <button onClick={() => setDropdown(!dropdown)} className="dropdown-toggle menu-drop" type="button" id="newdropdownbtntwo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="view-students-new-content">
                                        <div className="view-students-new-image">
                                            <img src={lt1} alt="Images" />
                                            <img src={lt2} alt="Images" />
                                        </div>
                                        <div className="view-students-new-text">
                                            <p>View Students <span>2</span></p>
                                        </div>
                                        <div className="down-icon-four-update"><img src={downArrow} alt="Images" /></div>
                                    </div>
                                </button>

                                {dropdown ? <div className="dropdown-menu new-menu" aria-labelledby="newdropdownbtntwo">
                                    <div className="custom_checkbox_area new-class-add">
                                        <div className="single-checkbox-area">
                                            <label>
                                                <input type="radio" />
                                                <span>Janelle Marshall - Grade 8</span>
                                            </label>
                                        </div>
                                        <div className="single-checkbox-area">
                                            <label>
                                                <input type="radio" />
                                                <span>Kenneth Marshall - Grade 6</span>
                                            </label>
                                        </div>
                                    </div>
                                </div> : null}
                            </div>
                        </div>
                        <div className="contact-button">
                            <Link to="#">Print</Link>
                        </div>
                    </div>
                    <div className="ra_event_main_area head">
                        <h2>Upcoming Events</h2>
                        <div className="ra_event_main_area_slider changed">
                            <div className="ra_event_main_area_slider_items owl-carousel owl-theme">
                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    navigation={{ clickable: true }}
                                    breakpoints={{
                                        "320": {
                                            "slidesPerView": 1,
                                        },
                                        "640": {
                                            "slidesPerView": 2,
                                        },
                                        "768": {
                                            "slidesPerView": 3,
                                        },
                                        "1024": {
                                            "slidesPerView": 4,
                                        }
                                    }}
                                >
                                    <SwiperSlide>
                                        <SingleSlideItem
                                            month='Jun'
                                            date='20'
                                            instructor='Janelle'
                                            subject='Environmental Science'
                                            details='Prep work for this week’s lab demo'
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <SingleSlideItem
                                            month='Jun'
                                            date='20'
                                            instructor='Kenneth'
                                            subject='Algebra 1'
                                            details='Quiz for Unit One'
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <SingleSlideItem
                                            month='Jun'
                                            date='23'
                                            instructor='Janelle'
                                            subject='Environmental Science'
                                            details='Prep work for this week’s lab demo'
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <SingleSlideItem
                                            month='Jun'
                                            date='24'
                                            instructor='Kenneth'
                                            subject='Social Science'
                                            details='Complete the study pack before turning in your report.'
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <SingleSlideItem
                                            month='Jun'
                                            date='24'
                                            instructor='Kenneth'
                                            subject='Environmental Science'
                                            details='Prep work for this week’s lab demo'
                                        />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderArea;