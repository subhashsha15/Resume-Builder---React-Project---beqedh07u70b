import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"
import { MdArrowDropDown } from "react-icons/md"
import { useNavigate } from 'react-router-dom';
import { auth, provider } from "../../components/firebase";
import { signOut } from "firebase/auth";
const Navbar = () => {
    const navRef = useRef();
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isVisible, setisVisible] = useState(true);
    const [userName, setUserName] = useState(localStorage.getItem('username'));
    const email=localStorage.getItem('email');
    const navigate = useNavigate();
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
    const handleLogout = () => {
        setIsDropDownOpen(false);
        localStorage.clear();
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("User signed out successfully.");
                navigate("/");
            })
            .catch((error) => {
                // An error happened.
                console.error("Error signing out:", error);
            });
    }
    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-items-left">
                        <Link to="/home" className='links'>
                            <span className='logo-title'>Portfolio Builder</span>
                        </Link>
                    </div>
                    <div className="navbar-items-right" ref={navRef}>
                        <NavLink to="/home" style={navLinkStyles}>
                            <span onClick={showNavbar}>Home</span>
                        </NavLink>
                        <NavLink to="/templates" style={navLinkStyles}>
                            <span onClick={showNavbar}>Templates</span>
                        </NavLink>
                        <NavLink to="/contactus" style={navLinkStyles}>
                            <span onClick={showNavbar}>Contact Us</span>
                        </NavLink>
                    </div>
                    <div className='profile-details' onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                        <div className='profile-username'>{userName?userName?.charAt(0).toUpperCase():email?.charAt(0).toUpperCase()}</div>
                        <div><MdArrowDropDown /></div>
                    </div>
                </div>
                {
                    isDropDownOpen && (
                        <>
                            <div className='profile-dropdown'>
                                <span id="logout-btn" onClick={handleLogout}>Logout</span>
                            </div>
                        </>
                    )
                }
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