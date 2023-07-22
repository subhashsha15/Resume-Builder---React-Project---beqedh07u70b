import React from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ?"none":"none" ,
            color:isActive?"orange":"black"
        };
    };

    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-items-left">
                        <span className='logo-title'>Portfolio Builder</span>
                    </div>
                    <div className="navbar-items-right" >
                        <NavLink to="/" style={navLinkStyles}>
                            <span>Home</span>
                        </NavLink>
                        <NavLink to="/templates" style={navLinkStyles}>
                            <span>Templates</span>
                        </NavLink>
                        <NavLink to="contactUs" style={navLinkStyles}>
                            <span>Contact Us</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar;