import React, { useEffect } from "react";
import "../App.css";
import ContactMe from '../Pages/Contact';
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="startp">
            <header data-aos="fade-down">
                <h1 className="Title">Hello, I'm Al Haitham</h1>
            </header>

            <section data-aos="fade-up">
                <p className="homeP">
                    A BSc Computer Science graduate from the University of Liverpool with hands-on experience
                    in website development and collaborative software projects. I have led teams and contributed
                    to full-stack web applications, developing strong skills in teamwork, leadership, and
                    problem-solving under tight deadlines.
                </p>
            </section>

            <section data-aos="fade-up">
                <h1>Projects</h1>
                <div className="Projects">
                    <p className="homeP">Projects will be added soon.</p>
                </div>
            </section>

            <section data-aos="fade-up">
                <h1>Skills</h1>
                <div className="Skills">
                    <div className="skill-item">Software Engineering</div>
                    <div className="skill-item">Computer Forensics</div>
                    <div className="skill-item">Web Development: HTML, CSS, React, Node.js, PHP</div>
                    <div className="skill-item">Managing Databases: MySQL</div>
                </div>
            </section>

            <section data-aos="fade-up">
                <h1>Programming Languages</h1>
                <div className="Skills">
                    <div className="skill-item">Python</div>
                    <div className="skill-item">Java</div>
                    <div className="skill-item">JavaScript</div>
                    <div className="skill-item">PHP</div>
                    <div className="skill-item">R</div>
                </div>
            </section>

            <section data-aos="fade-up">
                <ContactMe />
            </section>
        </div>
    );
}

export default Home;
