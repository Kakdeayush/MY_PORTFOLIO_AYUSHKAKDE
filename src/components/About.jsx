import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container grid-2">

                <div className="flex-column" style={{ width: '100%', alignItems: 'center', gap: '1rem' }}>
                    <div className="about-image-container">
                        <div className="about-image-wrapper">
                            <div className="about-illustration-code">
                                <pre><code>{`class AyushKakde {
  constructor() {
    this.role = "Full Stack Developer";
    this.education = "BTech CS";
    this.passion = "Building Cool Stuff";
  }
}`}</code></pre>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Arrow pointing to the highlight card */}
                    <img
                        src="/doodles/doodle-arrow.svg"
                        alt=""
                        className="about-arrow"
                        style={{
                            width: '80px',
                            transform: 'rotate(-10deg)',
                            marginTop: '0.5rem',
                            opacity: 0.8
                        }}
                    />

                    <div className="highlight-card sticker" style={{ width: '100%', maxWidth: '400px', transform: 'rotate(2deg)' }}>
                        <ul className="highlight-list">
                            <li>🎓 BTech Computer Science Student</li>
                            <li>💻 Learning Java Full Stack Development</li>
                            <li>🚀 Passionate about building projects</li>
                        </ul>
                    </div>
                </div>

                <div className="flex-column about-text-content">
                    <div className="designer-banner">
                        <div className="anchor-tr"></div>
                        <div className="anchor-bl"></div>
                        <h2>About Me.</h2>
                    </div>
                    <span className="about-highlight">Developer & Designer</span>
                    <div className="about-text flat-card" style={{ padding: '2rem' }}>
                        <p>
                            I am Ayush Kakde, a dedicated Computer Science BTech student with a strong focus on <strong>Java Full Stack Development</strong>.
                            My journey in tech is driven by a curiosity to understand how things work under the hood and a passion for creating seamless user experiences.
                        </p>
                        <p>
                            Currently, I'm mastering the art of backend development with <strong>Java, Spring Boot, and SQL</strong>, while building intuitive
                            and dynamic frontends with <strong>React.js</strong>. I leverage <strong>Git and GitHub</strong> for version control and collaborative projects.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new technologies, participating in hackathons, or continuously learning to sharpen my skills.
                        </p>
                        <a href="#skills" className="btn btn-primary mt-4">Explore My Skills</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
