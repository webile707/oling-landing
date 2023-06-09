import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import db from '../../firebase';
import { collection, addDoc } from "firebase/firestore";

const ContactForm1 = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email format');
            setSuccess(false);
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "newsletter"), {
                email: email
            });
            console.log("Dcument written with ID: ", docRef.id);
            // Clear the form field
            setEmail('');
            setError('');
            setSuccess(true);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }


    return (
        <div className="contact-form contact-form-1 drop-shadow-2">
            <div className="contact-form-wrapper">
                <SectionHeading
                    icon='las la-envelope'
                    heading='subscribe'
                    subHeading='Our newsletter'
                    additionalClasses='section-heading-2 center'
                />
                <div className="contact-form-icon">
                    <i className="las la-envelope-open-text"></i>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating">
                        <input
                            className="input form-control"
                            id="email-field-1"
                            type="text"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <label htmlFor="email-field-1">Email address</label>
                    </div>
                    <button type="submit" className="button button-2">
                        <span className="button-inner">
                            <span className="button-content">
                                <span className="text">Subscribe</span>
                            </span>
                        </span>
                    </button>
                    {error && <div className="error-message">{error}</div>}
                    {success && <div className="success-message">Thank you for subscribing!</div>}
                </form>
            </div>
        </div>
    );
};

export default ContactForm1;
