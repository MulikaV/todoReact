import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <NavLink className="nav-link" activeClassName="active" to="/" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;