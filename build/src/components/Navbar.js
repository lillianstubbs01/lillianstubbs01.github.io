import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css';

function Navbar() {
    return (
        <div className= "navbar-wrapper">
            <div className="navbar-link">
                <Link to="/Home" style={{textDecoration: 'none'}} >
                    <label className="navbar-link">Home</label>
                </Link>
            </div>
            <div className="navbar-link">
                <Link to="/Home" style={{textDecoration: 'none'}}>
                    <label className="navbar-link">Home2</label>
                </Link>
            </div>
            <div className="navbar-link">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <label className="navbar-link">
                        <FontAwesomeIcon icon={faBars} style={{color: 'black'}}/>
                    </label>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;