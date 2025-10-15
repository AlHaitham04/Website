import "../App.css";
import "./CV.css";

function CV() {
    return (
        <div className="cv-container">
            <section className="cv-section">
                <h1 className="Title">My CV</h1>
                <p className="cv-text">
                    Below is a copy of my CV. You can view it directly below or download it to keep a copy.
                </p>

                <div className="cv-embed">
                    <embed
                        src="/cv.pdf"
                        type="application/pdf"
                        width="100%"
                        height="100%"
                        title="CV PDF Viewer"
                    />
                </div>
            </section>
        </div>
    );
}

export default CV;
