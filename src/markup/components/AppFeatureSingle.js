import React from 'react';

import { Link } from 'react-router-dom';

const AppFeatureSingle = ({ icon, heading, excerpt, link = '/', containerClass }) => {
    return (
        <div className={`app-feature-single ${containerClass}`}>
            <div className="app-feature-single-wrapper">
                <a href={link} className="icon">
                    <i className={icon}></i>
                </a>
                <a href={link}>
                    <h3 className="c-dark">{heading}</h3>
                </a>
                <p className="c-grey">{excerpt}</p>
            </div>
            <a href={link} className="circle">
                <i className="las la-plus"></i>
                <i className="las la-angle-right hover"></i>
            </a>
        </div>
    );
};

export default AppFeatureSingle;
