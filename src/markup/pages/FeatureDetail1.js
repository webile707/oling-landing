import React from 'react';

import PageHeader from '../components/PageHeader';
import TabSection from '../components/TabSection';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import BackgroundAnimation from '../components/BackgroundAnimation';
import ImageSlider from '../components/ImageSlider';

import feature_phone_1 from '../../assets/images/feature-section-1-phone.png';
import feature_image_1 from '../../assets/images/feature-section-1-img.jpg';
import feature_phone_2 from '../../assets/images/feature-section-2-phone.png';
import feature_image_2 from '../../assets/images/feature-section-2-img.jpg';

import feature_tab from '../data/featureTab';
import faq from '../data/faq';

const FeatureDetail1 = () => {
    return (
        <>
            {/* page header - start */}
            <PageHeader
                title='Feature Detailed.'
                pages={[
                    {
                        title: 'Home',
                        to: '/'
                    },
                    {
                        title: 'Features',
                        to: '/features1'
                    }
                ]}
            />
            {/* page header - end */}

            {/* tab section - start */}
            <TabSection data={feature_tab} subHeading='App Features' />
            {/* tab section - end */}

            {/* feature section - start */}
            <div className="feature-section feature-section-0 feature-section-spacing-1">
                <div className="feature-section-wrapper">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-7 offset-lg-0 order-lg-1 col-md-8 offset-md-2 col-10 offset-1 order-2">
                                <div className="feature-section-content">
                                    <SectionHeading
                                        icon='las la-cog'
                                        heading='app features'
                                        subHeading='Rich and full of features.'
                                    />
                                    <p className="c-grey">Seed doesn't he dry, male creepeth god them their in which by firmament to days two deep yielding darkness bring likeness.</p>
                                    <div className="icon-text-group">
                                        <div className="icon-text">
                                            <i className="las la-server"></i>
                                            <h4 className="c-dark">Unlimited Storage</h4>
                                            <p className="c-grey">Heat multiply is second divided fowl there isn't man cattle.</p>
                                        </div>
                                        <div className="icon-text">
                                            <i className="las la-user-shield"></i>
                                            <h4 className="c-dark">Data Protection</h4>
                                            <p className="c-grey">Heat multiply is second divided fowl there isn't man cattle.</p>
                                        </div>
                                    </div>
                                    <Button
                                        to="/contact"
                                        content="Get Started"
                                        type="button-2"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-0 order-lg-2 col-10 offset-1 order-1">
                                <div className="feature-section-image">
                                    <img src={feature_image_1} className="image" alt="feature-fore" />
                                    <img src={feature_phone_1} className="phone" alt="phone" />
                                    <div className="background-pattern background-pattern-radius">
                                        <BackgroundAnimation/>
                                        <div className="background-pattern-gradient"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* feature section - end */}

            {/* feature section - start */}
            <div className="feature-section feature-section-1 feature-section-spacing-2">
                <div className="feature-section-wrapper">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-5 offset-lg-0 col-10 offset-1">
                                <div className="feature-section-image">
                                    <img src={feature_image_2} className="image" alt="feature-fore" />
                                    <img src={feature_phone_2} className="phone" alt="phone" />
                                    <div className="background-pattern background-pattern-radius-reverse">
                                        <BackgroundAnimation/>
                                        <div className="background-pattern-gradient"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-10 offset-1">
                                <div className="feature-section-content">
                                    <SectionHeading
                                        icon='las la-cog'
                                        heading='app features'
                                        subHeading='Rich and full of features.'
                                    />                           
                                    <div className="icon-text-1-group">
                                        <div className="icon-text-1">
                                            <i className="las la-comments"></i>
                                            <div>
                                                <h4 className="c-dark">Video calls</h4>
                                                <p className="c-grey">He saw lesser whales man air. Seasons void fly replenish man divided open fifth own fruitful.</p>
                                            </div>
                                        </div>
                                        <div className="icon-text-1">
                                            <i className="las la-headset"></i>
                                            <div>
                                                <h4 className="c-dark">Private groups</h4>
                                                <p className="c-grey">Give whales creeping sixth. Blessed itself created dry they're firmament face whose face lesser spirit day dry.</p>
                                            </div>
                                        </div>
                                        <div className="icon-text-1">
                                            <i className="las la-photo-video"></i>
                                            <div>
                                                <h4 className="c-dark">Cloud storage</h4>
                                                <p className="c-grey">Waters seasons of place likeness good day let they're evening replenish years of over that.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        to="/contact"
                                        content="Get Started"
                                        type="button-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* feature section - end */}

            {/* faq section - start */}
            <div className="faq-section faq-section-1">
                <div className="faq-section-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-10 offset-xxl-1 col-lg-12 offset-lg-0 col-10 offset-1">
                                <SectionHeading
                                    icon='las la-file-alt'
                                    heading='discover'
                                    subHeading='Some frequently asked questions'
                                    additionalClasses='center width-64'
                                />
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-9 col-md-8 col-10">
                                <div className="faq-wrapper">
                                    <div className="faq" id="faq-accordion">
                                        {
                                            faq.map((element, key) => {
                                                return (
                                                    <div className="accordion-item" key={key}>
                                                        <div className="accordion-header" id={`faq-${key}`}>
                                                            <button
                                                            className={`accordion-button ${key !== 1 ? 'collapsed' : ''}`}
                                                            type="button" 
                                                            data-bs-toggle="collapse" 
                                                            data-bs-target={`#faq-collapse-${key}`} 
                                                            aria-expanded={key === 1 ? 'true': 'false'}
                                                            aria-controls={`faq-collapse-${key}`}>
                                                                <span>{element.question}</span>
                                                            </button>
                                                        </div>
                                                        <div 
                                                        id={`faq-collapse-${key}`} 
                                                        className={`accordion-collapse collapse ${key === 1 ? 'show' : ''}`}
                                                        aria-labelledby={`faq-${key}`} 
                                                        data-bs-parent="#faq-accordion">
                                                            <div className="accordion-body">
                                                                <p>{element.answer}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq section - end */}

            {/* instagram - start */}
            <div className="instagram">
                <div className="instagram-wrapper">
                    <ImageSlider/>
                    <div className="button-wrapper">
                        <Button
                            to='/'
                            content='Follow us on Instagram'
                            type='button-premium'
                            icon={<i className="fab fa-instagram"></i>}
                        />
                    </div>
                </div>
            </div>
            {/* instagram - end */}
        </>
    );
};

export default FeatureDetail1;
