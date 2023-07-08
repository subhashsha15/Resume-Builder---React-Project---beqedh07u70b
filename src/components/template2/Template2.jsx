import React, { useState, forwardRef } from 'react'
import './Template2.css';
import { MdEmail, MdCall } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';

const Template2 = forwardRef((props, ref) => {
    const {
        FirstName,
        LastName,
        City,
        Country,
        PinCode,
        Phone,
        Email,
        ProfilePhoto,
        Github_Link,
        LinkedIn,
        Instagram,
        Position,
        CompanyName,
        Certificate,
        Location,
        StartDate_Office,
        EndDate_Office,
        WorkExperience,
        Project_title,
        Project_GithubLink,
        Project_DeployedLink,
        ProjectDescription,
        Degree,
        FieldOfStudy,
        collegeName,
        StartDate_college,
        EndDate_college,
        Interests,
        Achievements,
    } = props.storedItems;
    return (
        <>
            <div className='template2' ref={ref}>
                <div className="template2-container">
                    <div className="template2-container-top">
                        <span>{FirstName.charAt(0).toUpperCase()}{LastName.charAt(0).toUpperCase()}</span>
                        <span>{FirstName} {LastName}</span>
                    </div>
                    <div className="template2-container-bottom">
                        <div className="template2-bottom-left">
                            <div className="education-details">
                                <h3>Education</h3>
                                <span>{collegeName}</span>
                                <span>address</span>
                                <span>{Degree}</span>
                                <span>{FieldOfStudy}</span>
                                <span>{StartDate_college}-{EndDate_college}</span>
                            </div>
                            <hr />
                            <div className="template2-Work-history">
                                <h3>Work History</h3>
                                <span>{CompanyName}</span>
                                <span>{Location}</span>
                                <span>{StartDate_Office}-{EndDate_Office}</span>
                                <p>
                                    {WorkExperience}
                                </p>
                            </div>
                            <hr />
                            <div className="template2-Professional-summary">
                                <h3>Projects</h3>
                                <h4>{Project_title}</h4>
                                <span>{Project_GithubLink}</span>
                                <span>{Project_DeployedLink}</span>
                                <p>
                                    {ProjectDescription}
                                </p>
                            </div>
                        </div>
                        <div className="template2-bottom-right">
                            <div className="template2-User-contact-details">
                                <div className="template2-user-contactItem">
                                    <sapn className='icon'><MdEmail /></sapn>
                                    <span>{Email}</span>
                                </div>
                                <div className="template2-user-contactItem">
                                    <sapn className='icon'><MdCall /></sapn>
                                    <span>{Phone}</span>
                                </div>
                                <div className="template2-user-contactItem">
                                    <sapn className='icon'><ImLocation /></sapn>
                                    <span>{City},{Country} {PinCode}</span>
                                </div>
                            </div>
                            <hr />
                            <div className="social-details">
                                <h3>Social Links</h3>
                                <ul>
                                    <li>{LinkedIn}</li>
                                    <li>{Github_Link}</li>
                                    <li>{Instagram}</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="skills-details">
                                <h3>Skills</h3>
                                <ul>
                                    {
                                        Achievements.map((items) => (<li key={items}>{items}</li>))
                                    }
                                </ul>
                            </div>
                            <hr />
                            <div className="skills-details">
                                <h3>Interests</h3>
                                <ul>
                                    {
                                        Interests.map((items) => (<li key={items}>{items}</li>))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});
export default Template2;