import React from 'react';

import { Link } from 'react-router-dom';

// images
import logo from '../../assets/images/logo.svg';
// import background_image_1 from '../../assets/images/patterns/pattern-1.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                            <div className="footer-row">
                                <div className="footer-detail">
                                    <Link to="#">
                                        <img src={logo} alt="footer-logo" />
                                    </Link>
                                    <p className="c-grey-1">OLING is the Personalized Language Learning Platform for Fluent Communication. Master a new language with tailored courses, interactive content, and progress tracking.</p>
                                </div>
                                <div className="footer-list footer-social social-gradient">
                                    <h6>Follow</h6>
                                    <ul>
                                        <li className="twitter">
                                            <Link to="#" className="link-underline">
                                                <i className="fab fa-twitter"></i>
                                                <span>Twitter</span>
                                            </Link>
                                        </li>
                                        <li className="facebook">
                                            <Link to="#" className="link-underline">
                                                <i className="fab fa-facebook"></i>
                                                <span>Facebook</span>
                                            </Link>
                                        </li>
                                        <li className="linkedin">
                                            <Link to="#" className="link-underline">
                                                <i className="fab fa-linkedin-in"></i>
                                                <span>Linkedin</span>
                                            </Link>
                                        </li>
                                        <li className="youtube">
                                            <Link to="#" className="link-underline">
                                                <i className="fab fa-youtube"></i>
                                                <span>Youtube</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-list">
                                    <h6>Menu</h6>
                                    <ul>
                                        <li>
                                            <a href="#about" className="link-underline">
                                                <span>About</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#about" className="link-underline">
                                                <span>Our Team</span>
                                            </a>
                                        </li>
                                        {/* <li>
                                            <Link to="features-1" className="link-underline">
                                                <span>Features</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="blog-1" className="link-underline">
                                                <span>Blog</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="about" className="link-underline">
                                                <span>How It Works</span>
                                            </Link>
                                        </li> */}
                                        <li>
                                            <a href="#contact" className="link-underline">
                                                <span>Contact</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-list">
                                    <h6>Explore</h6>
                                    <ul>
                                        <li>
                                            <a href="#pricing" className="link-underline">
                                                <span>Pricing</span>
                                            </a>
                                        </li>
                                        {/* <li>
                                            <Link to="privacy-policy" className="link-underline">
                                                <span>Terms of Services</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="privacy-policy" className="link-underline">
                                                <span>Privacy Policy</span>
                                            </Link>
                                        </li> */}
                                        <li>
                                            <a href="#faq" className="link-underline">
                                                <span>FAQ</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                            <div className="footer-copyright c-grey-1">
                                <h6>&copy; OLING</h6>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="footer-pattern" style={{backgroundImage: `url(${background_image_1})`}}></div> */}
            </div>
        </footer>
    );
};

export default Footer;
