import React from 'react';
import ecommerceImg from "../assets/ecommerce-web.png";
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Fraud Detection',
        description: 'A machine learning and Java Spring Boot application that detects fraudulent transactions in real-time, preventing financial losses using random forest algorithms.',
        image:ecommerceImg,
        tags: ['Java', 'Spring Boot', 'MySQL', 'Machine Learning'],
        github: 'https://github.com/Kakdeayush/E-COMMERCE-FRAUD-DETECTION-WEB'
    },
    {
        id: 2,
        title: 'Cartoon Portfolio Website',
        description: 'A responsive, animated portfolio website built with React and custom CSS to showcase my projects and skills with a playful awwwards-style aesthetic.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['React', 'CSS', 'Vite', 'Animations'],
        github: 'https://github.com'
    },
    {
        id: 3,
        title: 'Java Backend API Microservices',
        description: 'Scalable backend architecture using Spring Cloud to manage user authentication, product catalogs, and order processing across multiple microservices.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
