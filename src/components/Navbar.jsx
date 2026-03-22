import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo">
                    <a href="#hero" className="gradient-text">AyushKcodes</a>
                </div>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <a href="#hero" onClick={toggleMenu}>Home</a>
                    <a href="#about" onClick={toggleMenu}>About</a>
                    <a href="#skills" onClick={toggleMenu}>Skills</a>
                    <a href="#projects" onClick={toggleMenu}>Projects</a>
                    <a href="#contact" onClick={toggleMenu} className="btn-nav">Let's Talk</a>
                </div>

                <div className="mobile-toggle" onClick={toggleMenu}>
                    <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
