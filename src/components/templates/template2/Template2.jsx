import React from 'react'
import './Template2.css';
import {MdEmail, MdCall } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';

const Template2 = () => {
    return (
        <>
            <div className='template2'>
                <div className="template2-container">
                    <div className="template2-container-top">
                        <span>SK</span>
                        <span>Subhash Kumar</span>
                    </div>
                    <div className="template2-container-bottom">
                        <div className="template2-bottom-left">
                            <div className="template2-Professional-summary">
                                <h3>Professional-summary</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates!
                                </p>
                            </div>
                            <hr />
                            <div className="template2-Work-history">
                                <h3>Work History</h3>
                                <span>Company Name</span>
                                <span>Address</span>
                                <span>Date</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit officia
                                    ullam reiciendis hic sit error cupiditate numquam, alias accusamus mollitia!
                                    ullam reiciendis hic sit error cupiditate numquam, alias accusamus mollitia!
                                    ullam reiciendis hic sit error cupiditate numquam, alias accusamus mollitia!
                                    ullam reiciendis hic sit error cupiditate numquam, alias accusamus mollitia!
                                </p>
                            </div>
                        </div>
                        <div className="template2-bottom-right">
                            <div className="template2-User-contact-details">
                                <div className="template2-user-contactItem">
                                    <sapn className='icon'><MdEmail /></sapn>
                                    <span>Email@gmail.com</span>
                                </div>
                                <div className="template2-user-contactItem">
                                    <sapn className='icon'><MdCall /></sapn>
                                    <span>+919931525478</span>
                                </div>
                                <div className="template2-user-contactItem">
                                    <sapn className='icon'><ImLocation /></sapn>
                                    <span>Delhi,India 110084</span>
                                </div>
                            </div>
                            <hr />
                            <div className="social-details">
                                <h3>Social Links</h3>
                                <ul>
                                    <li>lorem</li>
                                    <li>lorem</li>
                                    <li>lorem</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="skills-details">
                                <h3>Skills</h3>
                                <ul>
                                    <li>lorem</li>
                                    <li>lorem</li>
                                    <li>lorem</li>
                                    <li>lorem</li>
                                    <li>lorem</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="education-details">
                                <h3>Education</h3>
                                <span>Cochin university of science and technology</span>
                                <span>address</span>
                                <span>course</span>
                                <span>branch</span>
                                <span>date</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Template2;