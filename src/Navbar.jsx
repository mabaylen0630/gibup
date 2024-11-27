import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"; 

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                HOME
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About Me
            </NavLink>
            <NavLink to="/random" className={({ isActive }) => (isActive ? "active" : "")}>
                Random Photos
            </NavLink>
            <NavLink to="/top" className={({ isActive }) => (isActive ? "active" : "")}>
                Tercespot
            </NavLink>
        </nav>
    );
};

export default Navbar;
