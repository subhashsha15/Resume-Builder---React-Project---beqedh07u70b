import React from 'react'
import './Template3.css';
import { MdEmail, MdCall } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';

const Template3 = () => {
    return (
        <>
            <div className='template3'>
                <div className="template3-container">
                    <div className="template3-container-left">
                        <div className="template3-user-name">
                            Subhash kumar
                        </div>
                        <hr />
                        <div className="template3-Professional-summary">
                            <h3>Professional-summary</h3>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates!
                            </p>
                        </div>
                        <div className="template3-Work-history">
                            <h3>Work History</h3>
                            <hr />
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
                        <div className="template3-education-details">
                            <h3>Education</h3>
                            <hr />
                            <span>Cochin university of science and technology</span>
                            <span>address</span>
                            <span>course</span>
                            <span>branch</span>
                            <span>date</span>
                        </div>
                    </div>
                    <div className="template3-container-right">
                        <div className="template3-User-contact-details">
                            <div className="template3-user-contactItem">
                                <sapn className='template3-icon'><MdEmail /></sapn>
                                <span>Email@gmail.com</span>
                            </div>
                            <div className="template3-user-contactItem">
                                <sapn className='template3-icon'><MdCall /></sapn>
                                <span>+919931525478</span>
                            </div>
                            <div className="template3-user-contactItem">
                                <sapn className='template3-icon'><ImLocation /></sapn>
                                <span>Delhi,India 110084</span>
                            </div>
                        </div>
                        <div className="template3-social-details">
                            <h3>Social Links</h3>
                            <hr />
                            <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                            </ul>
                        </div>
                        <div className="template3-skills-details">
                            <h3>Skills</h3>
                            <hr />
                            <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                            </ul>
                        </div>
                        <div className="template3-interest-details">
                            <h3>Interests</h3>
                            <hr />
                            <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Template3;