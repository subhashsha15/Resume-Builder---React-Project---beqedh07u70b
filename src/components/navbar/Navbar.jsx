import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"
import { MdArrowDropDown } from "react-icons/md"
import { useNavigate } from 'react-router-dom';
import { auth, provider } from "../../components/firebase";
import { signOut } from "firebase/auth";
const Navbar = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isVisible, setisVisible] = useState(false);
    const [userName, setUserName] = useState(localStorage.getItem('username'));
    const email = localStorage.getItem('email');
    const navigate = useNavigate();
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "none",
            color: isActive ? "#f56600" : "black"
        };
    };
    const showNavbar = () => {
        setisVisible(prev => !prev);
    }
    const handleLogout = () => {
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

    const handleProfile = () => {
        setIsDropDownOpen(prev => !prev);
        setisVisible(false);
    }
    useEffect(() => {
        const handleClick = () => {
            if (isDropDownOpen) {
                setIsDropDownOpen(false);
            }
            if (isVisible) {
                setisVisible(false);
                // showNavbar();
            }
        };

        // Add event listener when the component mounts
        if (isDropDownOpen || isVisible) {
            window.addEventListener('click', handleClick);
        }

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [isDropDownOpen, isVisible]);
    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-items-left">
                        <Link to="/home" className='links'>
                            <span className='logo-title'>Portfolio Builder</span>
                        </Link>
                    </div>
                    <div className='navbar-items-right-container'>
                        <div className={!isVisible?"navbar-items-right responsive_nav":"navbar-items-right"}>
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
                        <div className='profile-details' onClick={handleProfile}>
                            <div className='profile-username'>{userName ? userName?.charAt(0).toUpperCase() : email?.charAt(0).toUpperCase()}</div>
                            <div><MdArrowDropDown /></div>
                        </div>
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
                    isVisible ? <button className="nav-btn " onClick={showNavbar}>
                        <FaTimes />
                    </button>
                        :
                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <FaBars />
                        </button>
                }
            </div>
        </>
    )
}


export default Navbar;