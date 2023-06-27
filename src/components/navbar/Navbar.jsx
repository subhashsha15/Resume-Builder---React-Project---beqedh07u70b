import React from 'react'
import './Navbar.css';
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-items-left">
                        <span className='logo-title'>Profolio Builder</span>
                    </div>
                    <div className="navbar-items-right">
                        <span>Resumes</span>
                        <span>Cover Letters</span>
                        <span>CV</span>
                        <span>Resources</span>
                        <span>About</span>
                        <span>SignIn</span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar;