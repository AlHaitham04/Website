import "./sidebar.css";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="nav-bar">
            <h1 className="title">Al Haitham's Website</h1>
            <button className="menu-toggle" onClick={toggleMenu}>
                <FaBars />
            </button>
            <nav className={isOpen ? "active" : ""}>
                <ul>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
                            <FaHome className="nav-icon" />
                            <span className="nav-text">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
                            <FaUser className="nav-icon" />
                            <span className="nav-text">About</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cv" className="nav-link" onClick={() => setIsOpen(false)}>
                            <FaFileAlt className="nav-icon" />
                            <span className="nav-text">CV</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
