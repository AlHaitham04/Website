import React, { useEffect } from "react";
import "./About.css";
import travelImage from "../travel.JPG";
import gradImage from "../grad.jpg";
import AOS from "aos";
import "aos/dist/aos.css";


function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="aboutsection">
            <header className="section" data-aos="fade-down">
                <h1 className="Title">About Me</h1>
            </header>

            <section className="section experience" data-aos="fade-up">
                <h2><i className="fas fa-briefcase"></i> Experience</h2>
                <p>
                    During my studies, I worked on several group projects, some of which I led as project manager.
                    One notable project was a budgeting website where users could input expenses and receive a categorized
                    breakdown, including monthly spending comparisons. I developed the backend using MySQL for data storage
                    and PHP for data retrieval.

                    <br /><br />
                    For my final year project, I created a stock market simulator game in GameMaker Studio using GML, a language
                    similar to Java. I integrated historical stock data from Kaggle to enhance the realism of the game.
                </p>
            </section>

            <section className="section education" data-aos="fade-up">
                <div className="Ed-container">
                    <img src={gradImage} alt="Graduation" className="Gimage" />

                    <div className="ed-text">
                        <h2><i className="fas fa-graduation-cap"></i> Education</h2>
                        <p>
                            I graduated from the University of Liverpool with a 2:1 (Second Upper Class), equivalent to a 3.4 GPA.
                            Living abroad pushed me outside of my comfort zone, developing my independence and adaptability.
                            University life helped me grow personally and professionally, teaching me key skills like time management,
                            problem-solving, teamwork, and effective communication.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section hobbies" data-aos="fade-up">
                <div className="Hob-container">
                    <div className="hob-text">
                        <h2><i className="fas fa-futbol"></i> Hobbies</h2>
                        <p>
                            Outside of my studies, I enjoy traveling, experiencing new cultures, meeting people, and broadening
                            my perspective. I'm passionate about football, both playing and watching, which feeds my competitive
                            spirit and love for teamwork. I'm also deeply interested in combat sports, which teach discipline,
                            resilience, and the importance of mental and physical fitness.
                        </p>
                    </div>
                    <img src={travelImage} alt="Travel" className="Timage" />
                </div>
            </section>
        </div>
    );
}

export default About;
