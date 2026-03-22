import React from 'react';
import './Certificates.css';

const certificatesData = [
    {
        id: 1,
        title: 'Basic App Devlopment Course With Java in Hindi',
        issuer: 'Udemy',
        date: '2025',
        icon: '☕',
        file: '/certificates/udemy-java.pdf'
    },
    {
        id: 2,
        title: 'SQL and Relational Databases 101',
        issuer: 'IBM',
        date: '2026',
        icon: '🗄️',
        file: '/certificates/IBM-SQL-CERTIFICATE.pdf'
    },
    {
        id: 3,
        title: 'SQL (Basic)',
        issuer: 'HackerRank',
        date: '2026',
        icon: '🗄️',
        file: '/certificates/sql_basic-certificate.pdf'
    },
     {
        id: 4,
        title: 'Computer Hardware Basics',
        issuer: 'Cisco',
        date: '2025',
        icon: '🛠️',
        file: '/certificates/comuter-hardware-basics-cisco.pdf'
    },
    {
        id: 5,
        title: 'Introduction to Prompt Engineering with GitHub Copilot',
        issuer: 'SimpleLearn',
        date: '2026',
        icon: '🤖',
        file: '/certificates/microsoft-certficate.pdf'
    },
    {
        id: 6,
        title: 'Nestlé E-learning Program',
        issuer: 'Nestle',
        date: '2026',
        icon: '🎓',
        file: '/certificates/nestle.pdf'
    },
    {
        id: 7,
        title: 'GenAI Powered Data Analytics Job Simulation',
        issuer: 'Tata',
        date: '2025',
        icon: '📊',
        file: '/certificates/data-anyaltics-simulation.pdf'
    },
    {
        id: 8,
        title: 'HTML 5,Python,Flask Framework All In One Complete Course',
        issuer: 'Udemy',
        date: '2025',
        icon: '🧪',
        file: '/certificates/udemy-python.pdf'
    },
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

                            {/* ✅ Download Button */}
                            <a 
                                href={cert.file} 
                                download 
                                className="download-btn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                ⬇️
                            </a>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;