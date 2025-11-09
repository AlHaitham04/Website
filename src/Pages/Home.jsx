import React, { useEffect } from "react";
import "../App.css";
import ContactMe from '../Pages/Contact';
import AOS from "aos";
import "aos/dist/aos.css";
import Project1 from "../PortfolioImage.png";
import Project2 from "../eCommerceImage.png";
import commingSoon from "../commingSoon.JPG";

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
                <div className="ProjectsGrid">
                    <div className="project-item">
                        <h3>Investment Portfolio Tracker</h3>
                        <a href="https://alhaitham04.github.io/Portfolio" target="_blank" rel="noopener noreferrer">
                            <img src={Project1} alt="Project 1" />
                        </a>
                        <div className="project-overlay">
                            <p>A personal portfolio tracker built with React, Node.js, and MySQL.
                                Users can sign up, log transactions, view portfolio breakdown, track average
                                costs, and visualize profit/loss and investment distribution.</p>
                        </div>
                    </div>
                    <div className="project-item">
                        <h3>Project 2 Coming Soon!</h3>
                        <a href="https://alhaitham04.github.io/IndulgeWebsite/#/" target="_blank" rel="noopener noreferrer">
                            <img src={Project2} alt="Project 2" />
                        </a>
                        <div className="project-overlay">
                            <p>An e-commerce website built with React and MySQL. Users can browse products,
                                add items to their cart, complete purchases, and receive real-time updates.
                                Integrated with a WhatsApp API to send orders to the business.</p>

                        </div>
                    </div>
                    <div className="project-item">
                        <h3>Project 3 Coming Soon!</h3>
                        <img src={commingSoon} alt="commingSoon" />
                        <div className="project-overlay">
                        </div>
                    </div>
                    {/* Add more project-items here */}
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
