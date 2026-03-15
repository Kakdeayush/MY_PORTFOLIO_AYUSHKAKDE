import React from 'react';
import './Skills.css';

const skillsData = [
    { name: 'Java', icon: '☕', level: '90%' },
    { name: 'Spring Boot', icon: '🍃', level: '85%' },
    { name: 'React', icon: '⚛️', level: '80%' },
    { name: 'SQL', icon: '🗄️', level: '85%' },
    { name: 'Git & GitHub', icon: '🐙', level: '95%' },
    { name: 'HTML/CSS/JS', icon: '🌐', level: '90%' },
    { name: 'Docker', icon: '🐳', level: '70%' },
    { name: 'AWS', icon: '☁️', level: '65%' },
];

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <div className="section-header skills-header">
                    <div className="flex-center flex-column" style={{ width: '100%', alignItems: 'center' }}>
                        <div className="designer-banner">
                            <div className="anchor-tr"></div>
                            <div className="anchor-bl"></div>
                            <h2>My Toolkit.</h2>
                        </div>
                        <p className="section-subtitle" style={{ fontWeight: 700, fontSize: '1.25rem', marginTop: '1rem' }}>
                            What I build with
                        </p>
                    </div>
                </div>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div
                            className="skill-card flat-card"
                            key={index}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-name">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
