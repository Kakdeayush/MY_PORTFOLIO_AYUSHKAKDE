import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Actual EmailJS IDs provided by the user
        const SERVICE_ID = 'service_xgyo7ks';
        const TEMPLATE_ID = 'template_lovdx39';
        const PUBLIC_KEY = 'ZTQb437GC7SoCVSFC';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(null), 5000); // Clear after 5 seconds
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error');
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="designer-banner">
                            <div className="anchor-tr"></div>
                            <div className="anchor-bl"></div>
                            <h2 className="section-title">Let's Connect.</h2>
                        </div>
                        <p className="contact-subtitle">
                            Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
                        </p>

                        <div className="contact-methods">
                            <a href="mailto:kakdeayush376@gmail.com" className="contact-method">
                                <span className="method-icon">✉️</span>
                                <div className="method-details">
                                    <span className="method-title">Email</span>
                                </div>
                            </a>

                            <a href="https://linkedin.com/in/ayushkakde" target="_blank" rel="noreferrer" className="contact-method">
                                <span className="method-icon">👔</span>
                                <div className="method-details">
                                    <span className="method-title">LinkedIn</span>
                                </div>
                            </a>

                            <a href="https://github.com/Kakdeayush" target="_blank" rel="noreferrer" className="contact-method">
                                <span className="method-icon">💻</span>
                                <div className="method-details">
                                    <span className="method-title">GitHub</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        {submitStatus === 'success' && (
                            <div className="status-message success-message">
                                ✅ Thanks for reaching out! I'll get back to you soon.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="status-message error-message">
                                ❌ Oops! Something went wrong. Please try again.
                            </div>
                        )}
                        <form ref={form} onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can I help you?"
                                    className="form-control"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
