import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import Swiper React components
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const PricingSlider = () => {

    const [checked, setChecked] = useState(true);
    const ref = useRef(null);

    const price_number_height = () => {
        const prices = ref.current.querySelectorAll('.price');

        if (prices.length < 1) return;

        Array.from(prices).forEach((price) => {
            const month = price.querySelector('.month');
            const year = price.querySelector('.year');
    
            price.style.height = Math.max(month.offsetHeight, year.offsetHeight) - 2 + 'px';
            // price.style.width = Math.max(month.offsetWidth, year.offsetWidth) + 'px';
        });
    }

    useEffect(() => {
        price_number_height();
        window.addEventListener('resize', price_number_height);

        return () => {
            window.removeEventListener('resize', price_number_height);
        }
    }, []);

    useEffect(() => {
        const prices = ref.current.querySelectorAll('.price');

        if (prices.length < 1) return;

        if ( checked ) {
            Array.from(prices).forEach((price) => {
                if ( price === undefined || price === null ) return;
                price.classList.remove('price-month');
            });
        } else {
            Array.from(prices).forEach((price) => {
                if ( price === undefined || price === null ) return;
                price.classList.add('price-month');
            });
        }
    }, [checked])


    return (
        <div className="pricing">
            <div className="row">
                <div className="col">
                    <div className="switch">
                        <div className="form-check form-switch">
                            <label 
                            className="form-check-label" 
                            htmlFor="price-switch">Monthly</label>
                            <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="price-switch" 
                            onChange={() => { setChecked( !checked ) }}
                            defaultChecked={checked}
                            />
                            <label 
                            className="form-check-label" 
                            htmlFor="price-switch">Annual</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="pricing-slider" ref={ref}>
                        <Swiper
                            className='swiper-container'
                            resizeObserver={true}
                            breakpoints={{
                                0: {
                                    enabled: true,
                                    centeredSlides: true,
                                    slidesPerView: 1.2,
                                    spaceBetween: 30,
                                    initialSlide: 1
                                },
                                400: {
                                    enabled: true,
                                    centeredSlides: true,
                                    slidesPerView: 1.4,
                                    spaceBetween: 30,
                                    initialSlide: 1
                                },
                                576: {
                                    enabled: true,
                                    centeredSlides: true,
                                    slidesPerView: 1.5,
                                    spaceBetween: 30,
                                    initialSlide: 1
                                },
                                768: {
                                    enabled: true,
                                    centeredSlides: true,
                                    slidesPerView: 1.8,
                                    spaceBetween: 30,
                                    initialSlide: 1
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                    enabled: false,
                                    centeredSlides: false
                                }
                            }}
                            pagination={false}
                        >
                            <SwiperSlide>
                                <div className="pricing-single basic">
                                    <h5 className="plan">Free</h5>
                                    <div className="price price-month">
                                        <div className="month">
                                            $<span className="number">0.00</span><sup>/mo</sup>
                                        </div>
                                        <div className="year">
                                            $<span className="number">0.00</span><sup>/yr</sup>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="button button-basic">
                                        <div className="button-inner">
                                            <div className="button-content">
                                                <h4>Get Started</h4>
                                            </div>
                                        </div>
                                    </Link>
                                    <ul>
                                        <li className="available">Learn on 2 chapters daily</li>
                                        <li className="available">Learn with 2 chatbots daily</li>
                                        <li className="available">Search 10 sentences daily</li>
                                        <li className="available">Ask 2 free questions daily</li>
                                        <li>Favorite chapters</li>
                                        <li>Weekly test</li>
                                        <li>Compare with other learners</li>
                                        <li>Learning reports</li>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </ul>
                                    <h6>No commitments, cancel anytime.</h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="pricing-single standard">
                                    <h5 className="plan">Standard</h5>
                                    <div className="price price-month">
                                        <div className="month">
                                            $<span className="number">10.00</span><sup>/mo</sup>
                                        </div>
                                        <div className="year">
                                            $<span className="number">100.00</span><sup>/yr</sup>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="button button-standard">
                                        <div className="button-inner">
                                            <div className="button-content">
                                                <h4>Get Started</h4>
                                            </div>
                                        </div>
                                    </Link>
                                    <ul>
                                        <li className="available">Learn on unlimited chapters</li>
                                        <li className="available">Learn with unlimited chatbots</li>
                                        <li className="available">Search unlimited sentences</li>
                                        <li className="available">Ask unlimited free questions</li>
                                        <li className="available">Favorite chapters</li>
                                        <li className="available">Weekly test</li>
                                        <li className="available">Compare with other learners</li>
                                        <li className="available">Learning reports</li>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </ul>
                                    <h6>No commitments, cancel anytime.</h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="pricing-single premium">
                                    <h5 className="plan">Enterprise</h5>
                                    <div className="price price-month">
                                        <div className="month">
                                            Contact
                                        </div>
                                        <div className="year">
                                            Contact
                                        </div>
                                    </div>
                                    <Link to="/contact" className="button button-premium">
                                        <div className="button-inner">
                                            <div className="button-content">
                                                <h4>Get Started</h4>
                                            </div>
                                        </div>
                                    </Link>
                                    <ul>
                                        <li className="available">Learn on unlimited chapters</li>
                                        <li className="available">Learn with unlimited chatbots</li>
                                        <li className="available">Search unlimited sentences</li>
                                        <li className="available">Ask unlimited free questions</li>
                                        <li className="available">Favorite chapters</li>
                                        <li className="available">Weekly test</li>
                                        <li className="available">Compare with other learners</li>
                                        <li className="available">Learning reports</li>
                                        <li className="available">School & Class</li>
                                    </ul>
                                    <h6>No commitments, cancel anytime.</h6>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingSlider;
