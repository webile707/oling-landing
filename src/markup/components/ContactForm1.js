import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import db from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

const ContactForm1 = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess(false);

        // Full name validation (at least 2 characters)
        if (name.length < 2) {
            setError('Please enter a valid full name');
            return;
        }

        // Email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email format');
            return;
        }

        // Message validation (at least 10 characters)
        if (message.length < 10) {
            setError('Please enter a message with at least 10 characters');
            return;
        }


        try {
            const docRef = await addDoc(collection(db, 'messages'), {
                full_name: name,
                email: email,
                message: message
            });
            console.log('Document written with ID:', docRef.id);
            // Clear the form fields
            setName('');
            setEmail('');
            setMessage('');
            setError('');
            setSuccess(true);
        } catch (error) {
            console.error('Error adding document:', error);
        }
    };

    return (
        <div className="contact-form drop-shadow-2">
            <div className="contact-form-wrapper">
                <SectionHeading
                    icon='las la-envelope'
                    heading='contact'
                    subHeading='Write message'
                    additionalClasses='section-heading-2 center'
                />
                <form onSubmit={handleSubmit}>
                    <div className="form-floating">
                        <input
                            className="input form-control"
                            id="name-field"
                            type="text"
                            placeholder="Full name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <label htmlFor="name-field">Full name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="input form-control"
                            id="email-field"
                            type="text"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <label htmlFor="email-field">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="input form-control"
                            id="message-field"
                            type="text"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => { setMessage(e.target.value) }}
                        />
                        <label htmlFor="message-field">Message</label>
                    </div>
                    <button type="submit" className="button button-3">
                        <span className="button-inner">
                            <span className="button-content">
                                <span className="text">Submit Reply</span>
                            </span>
                        </span>
                    </button>
                    {error && <div className="error-message">{error}</div>}
                    {success && <div className="success-message">Message sent successfully!</div>}
                </form>
            </div>
        </div>
    );
};

export default ContactForm1;
