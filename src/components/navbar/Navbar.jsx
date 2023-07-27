import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"
const Navbar = () => {
    const navRef = useRef();
    const [isVisible, setisVisible] = useState(true);
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "none",
            color: isActive ? "#f56600" : "black"
        };
    };
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setisVisible(!isVisible);
    }
    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-items-left">
                        <Link to="/" className='links'>
                            <span className='logo-title'>Portfolio Builder</span>
                        </Link>
                    </div>
                    <div className="navbar-items-right" ref={navRef}>
                        <NavLink to="/" style={navLinkStyles}>
                            <span onClick={showNavbar}>Home</span>
                        </NavLink>
                        <NavLink to="/templates" style={navLinkStyles}>
                            <span onClick={showNavbar}>Templates</span>
                        </NavLink>
                        <NavLink to="contactUs" style={navLinkStyles}>
                            <span onClick={showNavbar}>Contact Us</span>
                        </NavLink>
                    </div>

                </div>
                {
                    isVisible ? <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                                   <FaTimes />
                                </button>
                        :
                                <button className="nav-btn" onClick={showNavbar}>
                                   <FaBars />
                                </button>
                }
            </div>
        </>
    )
}


export default Navbar;