import React from 'react';
import './NavBar.css';
import arrow from './assets/Arrow.svg';
import logo from  './assets/GrabLogos/1_Master logo/RGB (for screen)/Grab_Final_Master_Logo_2019_RGB_(white).svg';

const NavBar: React.FC = () => {

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <nav className="navbar">
            <div className="arrow" onClick={handleGoBack}>
                <img src={arrow} alt="back" />
            </div>
            <div className="logo">
                <img src={logo} alt="Grab Logo" />
            </div>
        </nav>
    );
};

export default NavBar;