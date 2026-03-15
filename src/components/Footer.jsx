import React from 'react';
import './Footer.css';

const Footer = () => {
    const displayYear = 2026;

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <p>© {displayYear} Ayush Kakde | Built with <span className="heart pulse">❤️</span> using React</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
