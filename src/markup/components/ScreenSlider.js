import React from 'react';

import SectionHeading from './SectionHeading';

// import Swiper React components
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// images
import home_image_back from '../../assets/images/screenshots/home_back.png';
import home_image_main from '../../assets/images/screenshots/home_main.png';

import any_image_back from '../../assets/images/screenshots/any_back.png';
import any_image_main from '../../assets/images/screenshots/any_main.png';

import bot_image_back from '../../assets/images/screenshots/bot_back.png';
import bot_image_main from '../../assets/images/screenshots/bot_main.png';

import community_image_back from '../../assets/images/screenshots/community_back.png';
import community_image_main from '../../assets/images/screenshots/community_main.png';

import content_image_back from '../../assets/images/screenshots/content_back.png';
import content_image_main from '../../assets/images/screenshots/content_main.png';

import personalized_image_back from '../../assets/images/screenshots/personalized_back.png';
import personalized_image_main from '../../assets/images/screenshots/home_main.png';

import track_image_back from '../../assets/images/screenshots/track_back.png';
import track_image_main from '../../assets/images/screenshots/track_main.png';

import other_1 from '../../assets/images/screenshots/other_1.png';
import other_2 from '../../assets/images/screenshots/other_2.png';
import other_3 from '../../assets/images/screenshots/other_3.png';
import other_4 from '../../assets/images/screenshots/other_4.png';
import other_5 from '../../assets/images/screenshots/other_5.png';
import other_6 from '../../assets/images/screenshots/other_6.png';

const ScreenSlider = () => {

    const data = [
        {
            src: home_image_back
        },
        {
            src: home_image_main
        },
        {
            src: any_image_back
        },
        {
            src: any_image_main
        },
        {
            src: bot_image_back
        },
        {
            src: bot_image_main
        },
        {
            src: community_image_back
        },
        {
            src: community_image_main
        },
        {
            src: content_image_back
        },
        {
            src: content_image_main
        },
        {
            src: personalized_image_back
        },
        {
            src: personalized_image_main
        },
        {
            src: track_image_main
        },
        {
            src: track_image_back
        },
        {
            src: other_1
        },
        {
            src: other_2
        },
        {
            src: other_3
        },
        {
            src: other_4
        },
        {
            src: other_5
        },
        {
            src: other_6
        },
    ]

    return (
        <>
            {/* screen section header - start */}
            <div className="container" >
                <div className="row">
                    <div className="col-lg-8 offset-lg-0 col-10 offset-1">
                        <div className="screen-section-header">
                            <SectionHeading
                                icon='las la-tablet'
                                heading='DOIA universal app'
                                subHeading='Have a look at what’s inside the app.'
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-0 col-10 offset-1">
                        <div className="screen-slider-navigation slider-navigation">
                            <div className="screen-slider-navigation-prev">
                                <i className="las la-long-arrow-alt-left"></i>
                            </div>
                            <div className="screen-slider-navigation-next">
                                <i className="las la-long-arrow-alt-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* screen section header - end */}
            {/* screen section slider - start */}
            <div className="screen-slider">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={5}
                    navigation={{
                            nextEl: '.screen-slider-navigation-prev',
                            prevEl: '.screen-slider-navigation-next'
                    }}
                    centeredSlides={true}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.8
                        },
                        576: {
                            slidesPerView: 2.4
                        },
                        768: {
                            slidesPerView: 2.8
                        },
                        992: {
                            slidesPerView: 4.8
                        }
                    }}
                >
                    {
                        data.map((element, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <div className="screen-slide">
                                        <figure>
                                            <img src={element.src} alt="app-screen" />
                                        </figure>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
            {/* screen section slider - end */}  
        </>
    );
};

export default ScreenSlider;
