import React from 'react';
import ecommerceImg from "../assets/ecommerce-web.png";
import banner2 from "../assets/banner2.png";
import './Projects.css';
import solarphoto from "../assets/solar energy harvesating system.png"

const projectsData = [
  
    {
        id: 1,
        title: 'Community Civic Issue Reporting Website ',
        description: 'Developed a civic issue reporting website using Java, Spring Boot, React.js, and MySQL to streamline complaint registration and resolution tracking.',
        image:banner2,
        tags: ['Java', 'Springboot', 'Vite', 'React'],
        github: 'https://github.com/Kakdeayush/CIVICRESOLVER'
    },
    
    {
        id: 2,
        title: 'E-Commerce Fraud Detection',
        description: 'A machine learning and Java Spring Boot application that detects fraudulent transactions in real-time, preventing financial losses using random forest algorithms.',
        image:ecommerceImg,
        tags: ['Java', 'Spring Boot', 'MySQL', 'Machine Learning'],
        github: 'https://github.com/Kakdeayush/E-COMMERCE-FRAUD-DETECTION-WEB'
    },
    {
        id: 3,
        title: ' SOLAR-ENERGY-HARVESTING-SYSTEM-IOT',
        description: 'Developed an IoT-driven solar energy harvesting solution that enables real-time monitoring, energy optimization, and sustainable power management through connected sensors and cloud integration.',
        image: solarphoto,
        tags: ['Java', 'Spring Cloud', 'Docker', 'PostgreSQL'],
        github: 'https://github.com'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="flex-center flex-column">
                    <div className="designer-banner">
                        <div className="anchor-tr"></div>
                        <div className="anchor-bl"></div>
                        <h2>Selected Works.</h2>
                    </div>
                    <p style={{ textAlign: 'center', maxWidth: '600px', marginTop: '1rem', fontWeight: 700 }}>
                        Check out some of my recent Full Stack and Frontend projects.
                    </p>
                </div>

                <div className="projects-grid">
                    {projectsData.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                                        GitHub Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
