import "./About.css";
import travelImage from "../travel.JPG";
import gradImage from "../grad.jpg";

function About() {
    return (
        <div className="aboutsection">
            <header className="section">
                <h1 className="Title">About Me</h1>
            </header>

            <section className="section experience">
                <h2>Experience</h2>
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

            <section className="section education">
                <div className="Ed-container">
                    <img src={gradImage} alt="Graduation" className="Gimage" />
                    <div className="ed-text">
                        <h2>Education</h2>
                        <p>
                            I graduated from the University of Liverpool with a 2:1 (Second Upper Class), equivalent to a 3.4 GPA.
                            Living abroad pushed me outside of my comfort zone, developing my independence and adaptability.
                            University life helped me grow personally and professionally, teaching me key skills like time management,
                            problem-solving, teamwork, and effective communication.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section hobbies">
                <div className="Hob-container">
                    <div className="hob-text">
                        <h2>Hobbies</h2>
                        <p>
                            Outside of my studies, I enjoy traveling experiencing new cultures, meeting people, and broadening
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
