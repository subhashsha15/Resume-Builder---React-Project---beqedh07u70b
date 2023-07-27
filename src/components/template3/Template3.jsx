import React, { useState, useEffect } from 'react'
import './Template3.css';
import { MdEmail, MdCall } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { AiFillLinkedin, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import Download from '../../download/Download';

const Template3 = () => {
    const [storeditems, setStoredItems] = useState("");
    const templateElement3 = document.getElementById('printableContent');
    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('UserDetails'))
        setStoredItems(storedItems);
    }, [])
    const {
        FirstName,
        LastName,
        City,
        Country,
        PinCode,
        Phone,
        Email,
        Facebook,
        LinkedIn,
        Instagram,
        Position,
        CompanyName,
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
        collegeCity,
        collegeState,
        StartDate_college,
        EndDate_college,
        Interests,
        Skills,
    } = storeditems ?? {};

    return (
        <>
            <div id='printableContent' className='template3'>
                <div className="template3-container">
                    <div className="template3-container-left">
                        <div className="template3-user-name">
                            {FirstName} {LastName}
                        </div>
                        <hr />
                        <div className="template3-education-details">
                            <h3>Education</h3>
                            <hr />
                            {collegeName && <span>{collegeName}</span>}
                            {Degree && <span>{Degree}</span>}
                            {FieldOfStudy && <span>{FieldOfStudy}</span>}
                            {(collegeCity && collegeState) && <span>{collegeCity},{collegeState}</span>}
                            {(StartDate_college && EndDate_college) && <span>{StartDate_college} to {EndDate_college}</span>}
                        </div>
                        <div className="template3-Work-history">
                            <h3>Work History</h3>
                            <hr />
                            {Position && <span>{Position}</span>}
                            {CompanyName && <span>{CompanyName}</span>}
                            {Location && <span>{Location}</span>}
                            {(StartDate_Office && EndDate_Office) && <span>{StartDate_Office} to {EndDate_Office}</span>}
                            {WorkExperience &&
                                <p>
                                    <ul type="square">
                                        {
                                            WorkExperience?.split(".\n").map((x) => <li>{x}</li>)
                                        }
                                    </ul>
                                </p>
                            }
                        </div>
                        <div className="template3-Projects">
                            <h3>Projects</h3>
                            {Project_title && <h4>{Project_title}</h4>}
                            {Project_GithubLink && <span>Github:- {Project_GithubLink}</span>}
                            {Project_DeployedLink && <span>Netlify:- {Project_DeployedLink}</span>}
                            {ProjectDescription && <p>
                                <ul type="square">
                                    {
                                        ProjectDescription?.split(".\n").map((x) => <li>{x}</li>)
                                    }
                                </ul>
                            </p>}
                        </div>
                    </div>
                    <div className="template3-container-right">
                        <div className="template3-User-contact-details">
                            <div className="template3-user-contactItem">
                                {Email && <>
                                    <span className='icon'><MdEmail /></span>
                                    <span>{Email}</span>
                                </>
                                }
                            </div>
                            <div className="template3-user-contactItem">
                                {
                                    Phone && <>
                                        <span className='icon'><MdCall /></span>
                                        <span>{Phone}</span>
                                    </>
                                }
                            </div>
                            <div className="template3-user-contactItem">
                                {
                                    (City && PinCode && Country) && <>
                                        <span className='icon'><ImLocation /></span>
                                        <span>{City},{Country} {PinCode}</span>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="template3-social-details">
                            <h3>Social Links</h3>
                            <hr />
                            <ul>
                                {LinkedIn && <li><span><AiFillLinkedin /></span> {LinkedIn}</li>}
                                {Facebook && <li><span><AiFillFacebook /></span>{Facebook}</li>}
                                {Instagram && <li><span><AiFillInstagram /></span>{Instagram}</li>}
                            </ul>
                        </div>
                        <div className="template3-skills-details">
                            <h3>Skills</h3>
                            <hr />
                            <ul>
                                {
                                    Skills?.map((items) => (items ? <li key={items}>{items}</li> : ""))
                                }
                            </ul>
                        </div>
                        <div className="template3-interest-details">
                            <h3>Interests</h3>
                            <hr />
                            <ul>
                                {
                                    Interests?.map((items) => (items ? <li key={items}>{items}</li> : ""))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Download templateElement3={templateElement3} />
        </>
    )
};
export default Template3;