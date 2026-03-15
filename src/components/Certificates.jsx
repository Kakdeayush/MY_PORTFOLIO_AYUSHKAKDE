import React from 'react';
import './Certificates.css';

const certificatesData = [
    {
        id: 1,
        title: 'Java Full Stack Developer Certification',
        issuer: 'Coursera / IBM',
        date: '2025',
        icon: '🎓'
    },
    {
        id: 2,
        title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
        issuer: 'Udemy',
        date: '2024',
        icon: '⚛️'
    },
    {
        id: 3,
        title: 'Spring Boot 3, Spring 6 & Hibernate for Beginners',
        issuer: 'Udemy',
        date: '2025',
        icon: '🍃'
    },
    {
        id: 4,
        title: 'SQL and Relational Databases 101',
        issuer: 'Coursera',
        date: '2023',
        icon: '🗄️'
    }
];

const Certificates = () => {
    const scrollRef = React.useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    };

    const scrollRight = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    };

    return (
        <section id="certificates" className="section certificates-section">
            <div className="container">
                <div className="section-header skills-header">
                    <div>
                        <div className="designer-banner">
                            <div className="anchor-tr"></div>
                            <div className="anchor-bl"></div>
                            <h2>Achievements.</h2>
                        </div>
                        <p className="section-subtitle">Continuous learning</p>
                    </div>
                    <div className="skills-nav desktop-only">
                        <button className="nav-btn" onClick={scrollLeft}>←</button>
                        <button className="nav-btn" onClick={scrollRight}>→</button>
                    </div>
                </div>

                <div className="certificates-container-horizontal" ref={scrollRef}>
                    {certificatesData.map(cert => (
                        <div className="certificate-card" key={cert.id}>
                            <div className="cert-icon-wrapper">
                                <span className="cert-icon">{cert.icon}</span>
                            </div>
                            <div className="cert-content">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <span className="cert-date">{cert.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
