import "./sidebar.css";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFileAlt } from "react-icons/fa";

export function SideBar() {
    return (
        <div className="nav-bar">
            <h1 className="title">Al Haitham's Website</h1>
            <nav>
                <ul>
                    <li className="nav-item">
                        <Link to="/Website" className="nav-link">
                            <FaHome className="nav-icon" />
                            <span className="nav-text">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Website/about" className="nav-link">
                            <FaUser className="nav-icon" />
                            <span className="nav-text">About</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Website/cv" className="nav-link">
                            <FaFileAlt className="nav-icon" />
                            <span className="nav-text">CV</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
