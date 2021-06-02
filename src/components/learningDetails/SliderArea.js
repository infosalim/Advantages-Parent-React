import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import SingleSlideItem from './SingleSlideItem';

import instructor1 from '../../assets/images/learning/slider-m.png';
import cardThumb from '../../assets/images/learning/sky.png';
import viewModule from '../../assets/images/learning/view_module.png';
import viewList from '../../assets/images/learning/view_list.png';

SwiperCore.use([Navigation, Pagination, A11y]);

const SliderArea = () => {
    return (
        <section className="ra_resources_area">
            <div className="container">
                <div className="ra_resources_content">
                    <div className="row">
                        <div className="col-xl-12">
                            {/* <!-- Start Resources Area --> */}
                            <div className="myclassroom-area">
                                <div className="myclassroom-header">
                                    <div className="myclassroom-header-left">
                                        <p>Resources</p>
                                        <span>17</span>
                                    </div>
                                    <div className="myclassroom-header-right">
                                        <div className="myclassroom-header-single">
                                            <Link to="#"><img src={viewModule} alt="" /></Link>
                                        </div>
                                        <div className="myclassroom-header-single">
                                            <Link to="#"><img src={viewList} alt="Images" /></Link>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- start Slider animations content --> */}
                                <div className="ra_resources_slider_area_ex">
                                    <div className="ra_resources_slider_area owl-carousel owl-theme">
                                        {/* <!-- Slider single item area start  --> */}
                                        {/* <Slider {...settings}> */}
                                        <Swiper
                                            spaceBetween={10}
                                            slidesPerView={4}
                                            navigation={{ clickable: true }}
                                            pagination={{ clickable: true }}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            onSlideChange={() => console.log('slide change')}
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
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Student Science Welcome Document'
                                                    details='Student Science Welcome Document with lab information'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}

                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Student Science Welcome Document'
                                                    details='Student Science Welcome Document with lab information'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}

                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}

                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}

                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}
                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}
                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}
                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}
                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}
                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}
                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}
                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}
                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}
                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}
                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}
                                            {/* <!-- Slider single item area start  --> */}
                                            <SwiperSlide>
                                                <SingleSlideItem
                                                    addedDate='02-17-2021'
                                                    dueDate='02-22-2021'
                                                    title='Quiz 1 Study Guide'
                                                    details='Practice questions for the first quiz'
                                                    instructor='Mrs. Jackson'
                                                    subject='Environmental Science'
                                                    instructorThumb={instructor1}
                                                    cardThumb={cardThumb}
                                                />
                                            </SwiperSlide>
                                            {/* <!-- Slider single item area end  --> */}
                                            {/* </Slider> */}
                                        </Swiper>
                                    </div>
                                </div>

                                {/* <!-- start see all class button --> */}
                                <div className="ra_resources_area_bottom_text">
                                    <Link to="#">View all 30 resources</Link>
                                </div>
                                {/* <!-- end see all class button --> */}
                            </div>
                            {/* <!-- End MyClassroom Area --> */}
                        </div>

                        {/* <!-- Right sidebar area start  --> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderArea;