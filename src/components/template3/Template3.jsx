import React, { forwardRef } from 'react'
import './Template3.css';
import { MdEmail, MdCall } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';

const Template3 = forwardRef((props, ref) => {
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
            <div className='template3' ref={ref}>
                <div className="template3-container">
                    <div className="template3-container-left">
                        <div className="template3-user-name">
                            {FirstName} {LastName}
                        </div>
                        <hr />
                        <div className="template3-education-details">
                            <h3>Education</h3>
                            <hr />
                            <span>{collegeName}</span>
                            <span>address</span>
                            <span>{Degree}</span>
                            <span>{FieldOfStudy}</span>
                            <span>{StartDate_college}-{EndDate_college}</span>
                        </div>
                        <div className="template3-Work-history">
                            <h3>Work History</h3>
                            <hr />
                            <span>{CompanyName}</span>
                            <span>{Location}</span>
                            <span>{StartDate_Office}-{EndDate_Office}</span>
                            <p>
                                {WorkExperience}
                            </p>
                        </div>
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
                    <div className="template3-container-right">
                        <div className="template3-User-contact-details">
                            <div className="template3-user-contactItem">
                                <sapn className='template3-icon'><MdEmail /></sapn>
                                <span>{Email}</span>
                            </div>
                            <div className="template3-user-contactItem">
                                <sapn className='template3-icon'><MdCall /></sapn>
                                <span>{Phone}</span>
                            </div>
                            <div className="template3-user-contactItem">
                                <sapn className='template3-icon'><ImLocation /></sapn>
                                <span>{City},{Country} {PinCode}</span>
                            </div>
                        </div>
                        <div className="template3-social-details">
                            <h3>Social Links</h3>
                            <hr />
                            <ul>
                                <li>{LinkedIn}</li>
                                <li>{Github_Link}</li>
                                <li>{Instagram}</li>
                            </ul>
                        </div>
                        <div className="template3-skills-details">
                            <h3>Skills</h3>
                            <hr />
                            <ul>
                                {
                                    Achievements.map((items) => (<li key={items}>{items}</li>))
                                }
                            </ul>
                        </div>
                        <div className="template3-interest-details">
                            <h3>Interests</h3>
                            <hr />
                            <ul>
                                {
                                    Interests.map((items) => (<li key={items}>{items}</li>))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});
export default Template3;