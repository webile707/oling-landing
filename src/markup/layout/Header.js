import React, { useEffect } from 'react';

// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import BackgroundAnimation from '../components/BackgroundAnimation';

import logo from '../../assets/images/logo.svg';
import logo_white from '../../assets/images/logo-white.svg';

const navigation_responsive = () => {
    const width = window.innerWidth;
    const navigation = document.querySelector('.navigation');

    if (typeof(navigation) === 'undefined' || navigation === null) return;

    if (width < 992) {
        navigation.classList.add('responsive');
    } else {
        navigation.classList.remove('responsive');
    }
};

const Header = ({ type }) => {

    useEffect(() => {
        window.addEventListener('resize', navigation_responsive);
        window.addEventListener('load', navigation_responsive);

        return (() => {
            window.removeEventListener('resize', navigation_responsive);
            window.removeEventListener('load', navigation_responsive);
        });
    }, []);

    useEffect(() => {
        // display navigation on mobile
        const navigation = document.querySelector('.navigation-bar');

        if (typeof(navigation) !== 'undefined' && navigation !== null) {
            document.querySelector('.navigation-bar').addEventListener('click', (e) => {
                document.querySelector('.navigation').classList.add('shown');
            });
        }

        const getHeight = (el) => {
            var el_style      = window.getComputedStyle(el),
                el_display    = el_style.display,
                el_position   = el_style.position,
                el_visibility = el_style.visibility,
                el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

                wanted_height = 0;


            // if its not hidden we just return normal height
            if(el_display !== 'none' && el_max_height !== '0') {
                return el.offsetHeight;
            }

            // the element is hidden so:
            // making the el block so we can meassure its height but still be hidden
            el.style.position   = 'absolute';
            el.style.visibility = 'hidden';
            el.style.display    = 'block';

            wanted_height     = el.offsetHeight;

            // reverting to the original values
            el.style.display    = el_display;
            el.style.position   = el_position;
            el.style.visibility = el_visibility;

            return wanted_height;
        },


        toggleSlide = (el, display = 'block') => {
            var el_max_height = 0;

            if(el.getAttribute('data-max-height')) {
                // we've already used this before, so everything is setup
                if(el.style.maxHeight.replace('px', '').replace('%', '') === '0') {
                    el.style.maxHeight = el.getAttribute('data-max-height');
                } else {
                    el.style.maxHeight = '0';
                }
            } else {
                el_max_height                  = getHeight(el) + 'px';
                el.style['transition']         = 'max-height 0.5s ease-in-out';
                el.style.overflowY             = 'hidden';
                el.style.maxHeight             = '0';
                el.setAttribute('data-max-height', el_max_height);
                el.style.display               = display;

                // we use setTimeout to modify maxHeight later than display (to we have the transition effect)
                setTimeout(function() {
                    el.style.maxHeight = el_max_height;
                }, 10);
            }
        };

        Array.from(document.querySelectorAll('.has-child')).forEach((element, index) => {
            element.addEventListener('click', (e) => {

                if (window.innerWidth > 992) return;

                if (e.target.parentElement.parentElement.classList.contains('has-child') || e.target.parentElement.parentElement.classList.contains('parent')) {
                    e.preventDefault();
                }

                if (e.currentTarget.classList.contains('dropped')) {
                    toggleSlide(e.currentTarget.querySelector('.child'));
                    e.currentTarget.classList.remove('dropped');
                    return;
                }

                // hide dropdown for other list items
                Array.from(e.currentTarget.parentElement.querySelectorAll('.has-child.dropped')).forEach((e, i) => {
                    e.classList.remove('dropped');
                    toggleSlide(e.querySelector('.child'));

                });

                e.currentTarget.classList.add('dropped');

                toggleSlide(e.currentTarget.querySelector('.child'))
            
            });
        });

        // hide navigation on mobile
        const close_button = document.querySelector('.close-button');

        if (typeof(close_button) != 'undefined' && close_button != null) {
            close_button.addEventListener('click', (e) => {
                const dropped = document.querySelector('.dropped');
            
                if (typeof(dropped) == 'undefined' && dropped == null) {
                    toggleSlide(dropped.querySelector('.child'));
                    dropped.classList.remove('dropped');
                }
            
                document.querySelector('.navigation').classList.remove('shown');
            });
        }
    }, []);

    return (
        <div className={`navigation ${type}`}>
            <div className="navigation-wrapper">
                <div className="container">
                    <div className="navigation-inner">
                        <div className="navigation-logo">
                            {
                                type === 'navigation-1' ?
                                (
                                    <>
                                    <Link className="logo" to="/">
                                        <img src={logo} alt="oling-logo" />
                                    </Link>
                                    <Link className="logo-white" to="/">
                                        <img src={logo_white} alt="oling-logo" />
                                    </Link>
                                    </>
                                ):
                                (
                                    <Link to="/">
                                        <img src={logo} alt="oling-logo" />
                                    </Link>
                                )
                            }
                        </div>
                        <div className="navigation-menu">
                            <div className="mobile-header">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={logo_white} alt="logo" />
                                    </Link>
                                </div>
                                <ul>
                                    <li className="close-button">
                                        <i className="fas fa-times"></i>
                                    </li>
                                </ul>
                            </div>
                            <ul className="parent">
                                <li>
                                    <Link to="/" className="link-underline link-underline-1">
                                        <span>Home</span>
                                    </Link>
                                </li>
                                {/* <li className="has-child">
                                    <Link to="/about" className="link-underline link-underline-1">
                                        <span>About</span>
                                    </Link>
                                    <div className="child">
                                        <ul>
                                            <li>
                                                <Link to="/about" className="link-underline">
                                                    <span>About</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/privacy-policy" className="link-underline">
                                                    <span>Privacy Policy</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li> */}
                                <li className="has-child">
                                    <a href="#features" className="link-underline link-underline-1">
                                        <span>Features</span>
                                    </a>
                                    {/* <div className="child">
                                        <ul>
                                            <li>
                                                <Link to="/features-1" className="link-underline">
                                                    <span>Features Style 1</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/features-2" className="link-underline">
                                                    <span>Features Style 2</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/feature-detail-1" className="link-underline">
                                                    <span>Feature Detail 1</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/feature-detail-2" className="link-underline">
                                                    <span>Feature Detail 2</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div> */}
                                </li>
                                {/* <li className="has-child">
                                    <Link to="/blog-1" className="link-underline link-underline-1">
                                        <span>Blog</span>
                                    </Link>
                                    <div className="child">
                                        <ul>
                                            <li>
                                                <Link to="/blog-1" className="link-underline">
                                                    <span>Blog Style 1</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/blog-2" className="link-underline">
                                                    <span>Blog Style 2</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/blog-detail-1" className="link-underline">
                                                    <span>Blog Detail Style 1</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/blog-detail-2" className="link-underline">
                                                    <span>Blog Detail Style 2</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li> */}
                                <li>
                                    <a href="#pricing" className="link-underline link-underline-1">
                                        <span>Pricing</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="link-underline link-underline-1">
                                        <span>Contact</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="social">
                                <h6>Follow</h6>
                                <ul>
                                    <li>
                                        <Link to="#">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fab fa-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fab fa-linkedin"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fab fa-youtube"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="background-pattern">
                                <BackgroundAnimation/>
                                <div className="background-pattern-gradient"></div>
                            </div>
                        </div>
                        <div className="navigation-bar">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
