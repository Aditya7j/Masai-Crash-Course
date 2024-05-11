// Navbar.js
import React  from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const tmdbLogo = "https://files.readme.io/29c6fee-blue_short.svg";
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <Link to="/">
                    <img className="tmdb-logo" src={tmdbLogo} alt="TMDB Logo" />
                </Link>
            </div>
            <div className="navbar-right">
                <div className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? <FaRegMoon /> : <FaRegSun />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
