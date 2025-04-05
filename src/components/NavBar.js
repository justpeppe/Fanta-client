import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../materials/logo eni-joule.png';
import logo2 from '../materials/logo ey.png';
import logo3 from '../materials/logo startup geeks.png';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                {/* Aggiungi un container per tutti e 3 i loghi */}
                <Link to="/">
                    <div className="navbar-logos">
                        <img 
                            src={logo1} 
                            alt="Logo Eni Joule" 
                            className="navbar-logo" 
                            style={{ height: '40px', marginRight: '10px' }} 
                        />
                        <img 
                            src={logo2} 
                            alt="Logo EY" 
                            className="navbar-logo" 
                            style={{ height: '30px', marginRight: '10px' }} 
                        />
                        <img 
                            src={logo3} 
                            alt="Logo Startup Geeks" 
                            className="navbar-logo" 
                            style={{ height: '30px', marginRight: '10px' }} 
                        />
                    </div>
                </Link>
            </div>
            
            <div className="navbar-right">
                <button className="login-button">
                    <Link to="/login">Login</Link>
                </button>
                <button className="registrati-button">
                    <Link to="/RegisterPage">Registrati</Link>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;