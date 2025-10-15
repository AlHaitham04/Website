import "../App.css";
import ContactMe from '../Pages/Contact';

function Home() {
    return (
        <div className="startp">
            <header className="section">
                <h1 className="Title">Welcome to My Portfolio</h1>
                <p>
                    I am a BSc Computer Science graduate from the University of Liverpool with hands-on experience
                    in website development and collaborative software projects. I have led teams and contributed
                    to full-stack web applications, developing strong skills in teamwork, leadership, and
                    problem-solving under tight deadlines.
                </p>
            </header>

            <section className="section">
                <h1>Projects</h1>
                <div className="Projects">
                    {/* Add project cards here later */}
                    <p style={{ textAlign: 'center' }}>Projects will be added soon.</p>
                </div>
            </section>

            <section className="section">
                <h1>Skills</h1>
                <div className="Skills">
                    <div className="skill-item">Software Engineering</div>
                    <div className="skill-item">Computer Forensics</div>
                    <div className="skill-item">Web Development: HTML, CSS, React, Node.js, PHP</div>
                    <div className="skill-item">Managing Databases: MySQL</div>
                </div>
            </section>

            <section className="section">
                <h1>Programming Languages</h1>
                <div className="Skills">
                    <div className="skill-item">Python</div>
                    <div className="skill-item">Java</div>
                    <div className="skill-item">JavaScript</div>
                    <div className="skill-item">PHP</div>
                    <div className="skill-item">R</div>
                </div>
            </section>

            <section className="section">
                <ContactMe />
            </section>
        </div>
    );
}

export default Home;
