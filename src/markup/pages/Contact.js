import React from 'react';

import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import ContactForm1 from '../components/ContactForm1';
import ContactForm2 from '../components/ContactForm2';
import ImageSlider from '../components/ImageSlider';
import Button from '../components/Button';

const Contact = () => {
    return (
        <>
            {/* page header - start */}
            <PageHeader
                title='Contact Us'
                pages={[
                    {
                        title: 'Home',
                        to: '/'
                    },
                    {
                        title: 'Contact',
                        to: '/contact'
                    }
                ]}
            />
            {/* page header - end */}

            {/* contact details - start */}
            <div className="contact-details">
                <div className="contact-details-wrapper">
                    <div className="container">
                        {/* contact details heading - start */}
                        <div className="row">
                            <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                                <SectionHeading
                                    subHeading='Many ways to reach us today.'
                                    heading='get in touch'
                                    icon='las la-handshake'
                                    additionalClasses='center width-55'
                                />
                            </div>
                        </div>
                        {/* contact details heading - end */}
                        {/* contact details row - start */}
                        <div className="row gx-5 details-row">
                            <div className="col-lg-4 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                                <div className="app-feature-single app-feature-single-1">
                                    <div className="app-feature-single-wrapper">
                                        <div className="icon">
                                            <i className="las la-phone-volume"></i>
                                        </div>
                                        <h3 className="c-dark">Call Us</h3>
                                        <p className="c-grey">
                                            Phone: 
                                            <a href="tel:+123456789" className="link-underline link-underline-1">
                                                <span>+123 456 789</span>
                                            </a>                                    
                                        </p>
                                        <p className="c-grey">
                                            Fax:
                                            <a href="tel:+123456789" className="link-underline link-underline-1">
                                                <span>+123 456 789</span>
                                            </a> 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                                <div className="app-feature-single app-feature-single-1">
                                    <div className="app-feature-single-wrapper">
                                        <div className="icon">
                                            <i className="las la-envelope-open"></i>
                                        </div>
                                        <h3 className="c-dark">Email Us</h3>
                                        <p className="c-grey">
                                            <a href="mailto:media@DOIA.com" className="link-underline link-underline-1">
                                                <span>media@DOIA.com</span>
                                            </a>
                                        </p>
                                        <p className="c-grey">
                                            <a href="mailto:support@DOIA.com" className="link-underline link-underline-1">
                                                <span>support@DOIA.com</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                                <div className="app-feature-single app-feature-single-1">
                                    <div className="app-feature-single-wrapper">
                                        <div className="icon">
                                            <i className="las la-map-marked-alt"></i>
                                        </div>
                                        <h3 className="c-dark">Find Us</h3>
                                        <p className="c-grey">DOIA, Inc.</p>
                                        <p className="c-grey">30 Aarhus, Denmark</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* contact details row - end */}
                    </div>
                </div>
            </div>
            {/* contact details - end */}

            {/* contact form section - start */}
            <div className="contact-form-section">
                <div className="contact-form-section-wrapper">
                    <div className="container">
                        <div className="row gx-5 contact-form-section-row">
                            <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                                {/* contact form - start */}
                                <ContactForm1/>
                                {/* contact form - end */}
                            </div>
                            <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                                {/* newsletter form - start */}
                                <ContactForm2/>
                                {/* newsletter form - end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact form section - end */}

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

export default Contact;
