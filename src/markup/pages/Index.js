import React from 'react';

// components
import DownloadButton from '../components/DownloadButton';
import SectionHeading from '../components/SectionHeading';
import AppFeatureSingle from '../components/AppFeatureSingle';
import Button from '../components/Button';
import PricingSlider from '../components/PricingSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import ScreenSlider from '../components/ScreenSlider';
import ContactForm1 from '../components/ContactForm1';
import ContactForm2 from '../components/ContactForm2';
import BlogSingle from '../components/BlogSingle';
import BackgroundAnimation from '../components/BackgroundAnimation';
import VideoLightBox from '../components/VideoLightBox';
import ImageSlider from '../components/ImageSlider';

// images
import video_img from '../../assets/images/screenshots/video.jpg';
// import background_image_1 from '../../assets/images/patterns/pattern-1.jpg';
// import background_image_2 from '../../assets/images/patterns/pattern-2.jpg';

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

import our_video from '../../assets/videos/oling.mp4';

// data
import blog from '../data/blog';
import features from '../data/features';
import faq from '../data/faq';

const Index = () => {



    return (
        <>
            {/* hero - start */}
            <section id="overview">
                <div className="hero hero-1 feature-section feature-section-0">
                    <div className="hero-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-0 order-lg-1 col-10 offset-1 order-2">
                                    <div className="hero-content">
                                        <h1 className="c-dark">Welcome to OLING</h1>
                                        <p className="xlarge c-grey">Personalized Language Learning Application for Everyone</p>
                                        <p className="large c-grey">Mastering a new language has never been easier with OLING. Our innovative language learning platform combines cutting-edge technology and personalized learning techniques to help you achieve fluency faster and more effectively. Whether you're a beginner or an advanced learner, OLING has the tools and resources to cater to your unique language learning needs.</p>
                                        <DownloadButton color='c-white' />
                                    </div>
                                </div>
                                <div className="col-lg-5 offset-lg-1 order-lg-2 col-10 offset-1 order-1">
                                    <div className="hero-image">
                                        <div className="feature-section-image">
                                            <img src={home_image_back} className="image" alt="image" />
                                            <img src={home_image_main} className="phone" alt="phone" />
                                            <div className="background-pattern background-pattern-radius">
                                                <BackgroundAnimation />
                                                <div className="background-pattern-gradient"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* hero - end */}

            {/* app feature - start */}
            <section id="features">
                <div className="app-feature app-feature-1">
                    <div className="app-feature-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 offset-lg-0 col-10 offset-1">
                                    <SectionHeading
                                        heading='app features'
                                        subHeading='Get surprised by amazing features.'
                                        icon='las la-cog'
                                        additionalClasses='center width-64'
                                    />
                                </div>
                            </div>
                            <div className="row gx-5 gy-5">
                                {features.map((element, key) => {
                                    return (
                                        <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-10 offset-1" key={key}>
                                            <AppFeatureSingle
                                                icon={element.icon}
                                                heading={element.heading}
                                                excerpt={element.excerpt}
                                                containerClass='app-feature-single-2'
                                                link={element.to}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* app feature - end */}

            {/* video - start */}
            <section id="video">
                <div className="video-section">
                    <div className="video-section-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 offset-lg-1 order-lg-1 col-10 offset-1 order-2">
                                    <div className="video-section-content">
                                        <div className="section-heading section-heading-1 center-responsive c-white">
                                            <div className="sub-heading upper ls-1">
                                                <i className="las la-video"></i>
                                                <h5>Our video</h5>
                                            </div>
                                            <div className="main-heading">
                                                <h1>OLING is AI-powered language learning app that was built for both Android and iOS platforms as well as Web platform.</h1>
                                            </div>
                                        </div>
                                        <Button
                                            to="#contact"
                                            content="Get Started"
                                            type="button-1"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5 offset-lg-1 order-lg-2 order-1">
                                    <div className="video-section-video">
                                        <figure>
                                            <img className="drop-shadow-1" src={video_img} width='471' height='472' alt="drop-shadow" />

                                            <div className="play">
                                                <VideoLightBox URL={our_video} />
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="background-pattern background-pattern-radius drop-shadow-1">
                                <BackgroundAnimation />
                                <div className="background-pattern-gradient"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* video - end */}

            {/* feature section - start */}
            <section id="feature_detail_1">
                <div className="feature-section feature-section-0 feature-section-spacing-1">
                    <div className="feature-section-wrapper">
                        <div className="container">
                            <div className="row gx-5">
                                <div className="col-lg-7 offset-lg-0 order-lg-1 col-md-8 offset-md-2 col-10 offset-1 order-2">
                                    <div className="feature-section-content">
                                        <SectionHeading
                                            icon='las la-cog'
                                            heading='app features'
                                            subHeading='Discover the Power of Personalization'
                                        />
                                        <p className="c-grey">At OLING, we understand that every learner is different. That's why our system starts by evaluating your language skills in vocabulary and grammar across reading, writing, speaking, and listening. Using sophisticated algorithms, we create a proficiency profile tailored specifically to you. This allows us to recommend the best-fit learning chapters, ensuring that your language learning journey is optimized for maximum progress.</p>
                                        {/* <div className="icon-text-group">
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
                                    </div> */}
                                        <Button
                                            to="#contact"
                                            content="Get Started"
                                            type="button-2"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5 offset-lg-0 order-lg-2 col-10 offset-1 order-1 px-5 my-5">
                                    <div className="feature-section-image">
                                        <img src={personalized_image_back} className="image" alt="feature-fore" />
                                        <img src={personalized_image_main} className="phone" alt="phone" />
                                        <div className="background-pattern background-pattern-radius">
                                            <BackgroundAnimation />
                                            <div className="background-pattern-gradient"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* feature section - end */}

            {/* feature section - start */}
            <section id="feature_detail_2">
                <div className="feature-section feature-section-1 feature-section-spacing-2">
                    <div className="feature-section-wrapper">
                        <div className="container">
                            <div className="row gx-5">
                                <div className="col-lg-5 offset-lg-0 col-10 offset-1">
                                    <div className="feature-section-image">
                                        <img src={content_image_back} className="image" alt="feature-fore" />
                                        <img src={content_image_main} className="phone" alt="phone" />
                                        <div className="background-pattern background-pattern-radius-reverse">
                                            <BackgroundAnimation />
                                            <div className="background-pattern-gradient"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-10 offset-1">
                                    <div className="feature-section-content">
                                        <SectionHeading
                                            icon='las la-cog'
                                            heading='app features'
                                            subHeading='Flexible and Engaging Learning Content'
                                        />
                                        <p className="c-grey">Our extensive learning database offers a wide range of content, including conversations, dialogs, texts, and interactive multiple-choice questions (MCQs). With OLING, you have the freedom to generate chapters based on your interests, topics, and learning environment. Dive into engaging learning units that keep you motivated and excited to learn.</p>
                                        {/* <div className="icon-text-1-group">
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
                                    </div> */}
                                        <Button
                                            to="#contact"
                                            content="Get Started"
                                            type="button-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* feature section - end */}

            {/* feature section - start */}
            <section id="feature_detail_6">
                <div className="feature-section feature-section-0 feature-section-spacing-1">
                    <div className="feature-section-wrapper">
                        <div className="container">
                            <div className="row gx-5">
                                <div className="col-lg-7 offset-lg-0 order-lg-1 col-md-8 offset-md-2 col-10 offset-1 order-2">
                                    <div className="feature-section-content">
                                        <SectionHeading
                                            icon='las la-cog'
                                            heading='app features'
                                            subHeading='Learn Your Way, Anytime, Anywhere'
                                        />
                                        <p className="c-grey">With OLING, learning is not confined to a traditional classroom setting. Our platform allows you to learn on the go. Access our gamified learning units, MCQs, conversations, and texts from your computer, smartphone, or tablet. Whether you have a few minutes or a dedicated study session, OLING is always at your fingertips.</p>
                                        <Button
                                            to="#contact"
                                            content="Get Started"
                                            type="button-2"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5 offset-lg-0 order-lg-2 col-10 offset-1 order-1 px-5">
                                    <div className="feature-section-image">
                                        <img src={any_image_back} className="image" alt="feature-fore" />
                                        <img src={any_image_main} className="phone" alt="phone" />
                                        <div className="background-pattern background-pattern-radius">
                                            <BackgroundAnimation />
                                            <div className="background-pattern-gradient"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* feature section - end */}

            {/* feature section - start */}
            <section id="feature_detail_3">
                <div className="feature-section feature-section-1 feature-section-spacing-2">
                    <div className="feature-section-wrapper">
                        <div className="container">
                            <div className="row gx-5">
                                <div className="col-lg-5 offset-lg-0 col-10 offset-1">
                                    <div className="feature-section-image">
                                        <img src={track_image_back} className="image" alt="feature-fore" />
                                        <img src={track_image_main} className="phone" alt="phone" />
                                        <div className="background-pattern background-pattern-radius-reverse">
                                            <BackgroundAnimation />
                                            <div className="background-pattern-gradient"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-10 offset-1">
                                    <div className="feature-section-content">
                                        <SectionHeading
                                            icon='las la-cog'
                                            heading='app features'
                                            subHeading='Real-time Progress Tracking and Updates'
                                        />
                                        <p className="c-grey">Stay motivated and track your progress with our comprehensive learning analytics. After completing each chapter, you'll receive an overview of your scores, learned vocabulary and grammar, proficiency improvements, streak days, and areas for improvement. Watch as your total level increases and celebrate your language learning achievements.</p>
                                        <Button
                                            to="#contact"
                                            content="Get Started"
                                            type="button-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* feature section - end */}

            {/* feature section - start */}
            <section id="feature_detail_4">
                <div className="feature-section feature-section-0 feature-section-spacing-1">
                    <div className="feature-section-wrapper">
                        <div className="container">
                            <div className="row gx-5">
                                <div className="col-lg-7 offset-lg-0 order-lg-1 col-md-8 offset-md-2 col-10 offset-1 order-2">
                                    <div className="feature-section-content">
                                        <SectionHeading
                                            icon='las la-cog'
                                            heading='app features'
                                            subHeading='Engage with Our Intelligent Chatbot'
                                        />
                                        <p className="c-grey">Practice your language skills and have meaningful conversations with our intelligent chatbot. OLING's chatbot offers free talking options, grammatical advice, and corrections to enhance your language fluency. As you interact with the chatbot, your skill levels are automatically updated, ensuring that your progress is accurately reflected.</p>
                                        <Button
                                            to="#contact"
                                            content="Get Started"
                                            type="button-2"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5 offset-lg-0 order-lg-2 col-10 offset-1 order-1 px-5">
                                    <div className="feature-section-image">
                                        <img src={bot_image_back} className="image" alt="feature-fore" />
                                        <img src={bot_image_main} className="phone" alt="phone" />
                                        <div className="background-pattern background-pattern-radius">
                                            <BackgroundAnimation />
                                            <div className="background-pattern-gradient"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* feature section - end */}

            {/* feature section - start */}
            <section id="feature_detail_5">
                <div className="feature-section feature-section-1 feature-section-spacing-2">
                    <div className="feature-section-wrapper">
                        <div className="container">
                            <div className="row gx-5">
                                <div className="col-lg-5 offset-lg-0 col-10 offset-1">
                                    <div className="feature-section-image">
                                        <img src={community_image_back} className="image" alt="feature-fore" />
                                        <img src={community_image_main} className="phone" alt="phone" />
                                        <div className="background-pattern background-pattern-radius-reverse">
                                            <BackgroundAnimation />
                                            <div className="background-pattern-gradient"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-10 offset-1">
                                    <div className="feature-section-content">
                                        <SectionHeading
                                            icon='las la-cog'
                                            heading='app features'
                                            subHeading='Join a Thriving Language Learning Community'
                                        />
                                        <p className="c-grey">Connect with fellow learners from around the world in our vibrant language learning community. Ask questions, participate in Q&A sessions, join classes, make friends, and engage in friendly competitions. Share your experiences, learn from others, and stay motivated throughout your language learning journey.</p>
                                        <Button
                                            to="#contact"
                                            content="Get Started"
                                            type="button-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* feature section - end */}

            {/* pricing section - start */}
            <section id="pricing">
                <div className="pricing-section">
                    <div className="pricing-section-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                                    <SectionHeading
                                        icon='las la-tags'
                                        heading='our app rates'
                                        subHeading='Pricing plans for you.'
                                        additionalClasses='center c-white'
                                        mainHeadingClass='c-white'
                                        subHeadingClass='c-white'
                                    />
                                </div>
                            </div>
                            <PricingSlider />
                        </div>
                        <div className="background-pattern background-pattern-1">
                            <BackgroundAnimation />
                            <div className="background-pattern-gradient"></div>
                            <div className="background-pattern-bottom">
                                {/* <div className="image" style={{ backgroundImage: `url(${background_image_1})` }}></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* pricing section - end */}

            {/* testimonial testimonial - start */}
            <section id="testimonial">
                <div className="testimonial-section">
                    <div className="testimonial-section-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                                    <SectionHeading
                                        icon='las la-comments'
                                        heading='feedbacks'
                                        subHeading='What people are talking about.'
                                        additionalClasses='center width-55'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <TestimonialSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* testimonial section - end */}

            {/* faq section - start */}
            <section id="faq">
                <div className="faq-section">
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
                                                                    aria-expanded={key === 1 ? 'true' : 'false'}
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
            </section>
            {/* faq section - end */}

            {/* screen section - start */}
            <section id="screen">
                <div className="screen-section">
                    <div className="screen-section-wrapper">
                        <ScreenSlider />
                        {/* screen section bottom - start */}
                        <div className="screen-section-bottom">
                            <div className="screen-section-bottom-wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-0 col-10 offset-1">
                                            <h1 className="c-white">Download from both Android and iOS</h1>
                                            <h4 className="c-white">
                                                <i className="fas fa-smile" style={{ marginRight: '1rem' }}></i>
                                                Let's keep in touch
                                            </h4>
                                        </div>
                                        <div className="col-lg-4 offset-lg-0 col-10 offset-1">
                                            <DownloadButton groupType='download-button-1-group' buttonType='download-button-1' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* screen section bottom - end */}
                    </div>
                    <div className="background-pattern background-pattern-2">
                        <BackgroundAnimation />
                        <div className="background-pattern-gradient"></div>
                        <div className="background-pattern-bottom">
                            {/* <div className="image" style={{ backgroundImage: `url(${background_image_2})` }}></div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* screem section - end */}

            {/* blog section - start */}
            {/* <div className="blog-section">
                <div className="blog-section-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 offset-lg-0 col-10 offset-1">
                                <SectionHeading
                                    icon='las la-bullhorn'
                                    heading='recent news'
                                    subHeading='Read latest news from our blog.'
                                    additionalClasses='center width-55'
                                />
                            </div>
                        </div>
                        <div className="row gx-5">
                            {
                                blog.slice(0, 3).map((element, key) => {
                                    return (
                                        <div key={key} className="col-lg-4 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                                            <BlogSingle element={element} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div> */}
            {/* blog section - end */}

            {/* cta section - start */}
            <section id="subscribe">
                <div className="cta-section">
                    <div className="cta-section-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                                    <SectionHeading
                                        icon='las la-cloud-download-alt'
                                        heading='Download OLING'
                                        subHeading='Subscribe OLING and get 20% off on your selected plan.'
                                        additionalClasses='center width-71'
                                    />
                                    <DownloadButton color='c-white' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* cta section - end */}

            {/* contact form section - start */}
            <section id="contact">
                <div className="contact-form-section">
                    <div className="contact-form-section-wrapper">
                        <div className="container">
                            <div className="row gx-5 contact-form-section-row">
                                <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                                    {/* contact form - start */}
                                    <ContactForm1 />
                                    {/* contact form - end */}
                                </div>
                                <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                                    {/* newsletter form - start */}
                                    <ContactForm2 />
                                    {/* newsletter form - end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact form section - end */}

            {/* instagram - start */}
            {/* <div className="instagram">
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
            </div> */}
            {/* instagram - end */}
        </>
    );
};

export default Index;
