import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <NavLink to="/" className="brand-logo">Home</NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/users">Users</Link></li>
                        <li><NavLink to="/todo">ToDo's</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;