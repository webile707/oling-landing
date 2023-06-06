import React from 'react';

const DownloadButton = ({ groupType, buttonType, color }) => {
    return (
        <div className={`download-button-group ${groupType}`}>
            <a href="#contact" className={`download-button download-button-google ${buttonType}`}>
                <div className={`download-button-inner ${color}`}>
                    <div className={`download-button-icon c-orange ${color}`}>
                        <i className="fab fa-google-play"></i>
                    </div>
                    <div className="download-button-content">
                        <h5 className={`c-grey upper ls-1 ${color}`}>get it on</h5>
                        <h3 className={`c-dark ls-2 ${color}`}>Google Play</h3>
                    </div>
                </div>
            </a>
            <a href="#contact" className={`download-button download-button-apple ${buttonType}`}>
                <div className={`download-button-inner ${color}`}>
                    <div className={`download-button-icon c-red ${color}`}>
                        <i className="fab fa-apple"></i>
                    </div>
                    <div className="download-button-content">
                        <h5 className={`c-grey upper ls-1 ${color}`}>get it on</h5>
                        <h3 className={`c-dark ls-2 ${color}`}>Apple Store</h3>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default DownloadButton;
