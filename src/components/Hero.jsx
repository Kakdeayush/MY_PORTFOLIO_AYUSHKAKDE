import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="section hero-section">
            <div className="container grid-2">
                <div className="hero-content flex-column">
                    <p className="greeting cursive-text">Welcome to my</p>

                    <div className="designer-banner title-banner">
                        <div className="anchor-tr"></div>
                        <div className="anchor-bl"></div>
                        <h1 className="hero-title">PORTFOLIO</h1>
                    </div>

                    <div className="name-ribbon">
                        <h3>Ayush Kakde</h3>
                    </div>

                    <p className="hero-desc">
                        Java Full Stack Developer in Progress.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact</a>
                    </div>
                </div>

                <div className="hero-image-container flex-center">
                    <div className="avatar-wrapper popup-animation">
                        {/* The cartoon character peering over like the reference */}
                        <div className="cartoon-peeker">
                            <div className="peeker-head">
                                <div className="hair"></div>
                                <div className="eyes">
                                    <div className="eye"></div>
                                    <div className="eye"></div>
                                </div>
                            </div>
                            <div className="hands">
                                <div className="hand"></div>
                                <div className="hand"></div>
                            </div>
                        </div>

                        {/* Graphic designer UI tool stickers floating around */}
                        <div className="floating-badge badge-1 sticker">🎨 Java</div>
                        <div className="floating-badge badge-2 sticker" style={{ transform: "rotate(10deg)" }}>✨ React</div>
                        <div className="floating-badge badge-3 sticker" style={{ transform: "rotate(-15deg)" }}>💡 Spring</div>
                        <div className="floating-badge badge-4 sticker" style={{ transform: "rotate(5deg)" }}>🐙 Git</div>
                        <div className="floating-badge badge-5 sticker" style={{ transform: "rotate(-5deg)" }}>🗄️ SQL</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
