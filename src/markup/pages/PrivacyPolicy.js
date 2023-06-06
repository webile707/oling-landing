import React from 'react';

import PageHeader from '../components/PageHeader';
import TabSection from '../components/TabSection';
import ImageSlider from '../components/ImageSlider';
import Button from '../components/Button';

import policy from '../data/policy';

const PrivacyPolicy = () => {
    return (
        <>
            {/* page header - start */}
            <PageHeader
                title='Privacy Policy.'
                pages={[
                    {
                        title: 'Home',
                        to: '/'
                    },
                    {
                        title: 'Privacy Policy',
                        to: '/privacy-policy'
                    }
                ]}
            />
            {/* page header - end */}

            {/* tab section - start */}
            <TabSection data={policy} subHeading='Explore' className='tab-section-1' />
            {/* tab section - end */}

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

export default PrivacyPolicy;
