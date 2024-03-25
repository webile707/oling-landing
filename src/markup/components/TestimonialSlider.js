import React from 'react';

// import Swiper React components
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

// images
import testimonial_image_1 from '../../assets/images/testimonial-slide-img-2.png';
import testimonial_image_2 from '../../assets/images/testimonial-slide-img-1.png';
import testimonial_image_3 from '../../assets/images/testimonial-slide-img-3.png';

const TestimonialSlider = () => {

    const data = [
        {
            image: testimonial_image_1,
            testimony: '“DOIA revolutionized my language learning experience. The personalized approach and diverse learning content kept me engaged and motivated. I saw significant progress in my fluency within a short period. Highly recommended!”',
            name: 'Mark H.'
        },
        {
            image: testimonial_image_2,
            testimony: '“I have tried various language learning platforms, but DOIA stands out. The real-time progress tracking and detailed analytics helped me stay on track and celebrate my achievements. The intelligent chatbot was a game-changer, providing valuable practice and feedback. DOIA truly made language learning enjoyable.”',
            name: 'Sarah T.'
        },
        {
            image: testimonial_image_3,
            testimony: '“Joining the DOIA community was the best decision I made for my language learning journey. The vibrant community of learners and interactive features like Q&A sessions and classes made the process collaborative and exciting. Thanks to DOIA, I not only improved my language skills but also made friends from around the world.”',
            name: 'Emily M.'
        }
    ];

    return (
        <div className="testimonial-slider">
            <Swiper
                className='swiper-container'
                resizeObserver={true}
                spaceBetween={0}
                initialSlide={1}
                // init={false}
                speed={250}
                slideToClickedSlide={true}
                slidesPerView={1.7}
                loop={true}
                centeredSlides={true}
                breakpoints={{
                    0: {
                        direction: 'horizontal',
                    },
                    992: {
                        direction: 'vertical',
                    }
                }}
            >
                {
                    data.map((element, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <div className="testimonial-slide">
                                    <div className="image">
                                        <div className="image-wrapper">
                                            <div className="image-inner">
                                                <img src={element.image} alt="testimony" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>{element.testimony}</p>
                                        <h5>— {element.name}</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;
