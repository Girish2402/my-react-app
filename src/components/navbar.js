import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div class="nav-wrapper">
                <div className="container">
                    <a href="/" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Users</Link></li>
                        <li><NavLink to="/todo">ToDo's</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;