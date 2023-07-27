import React, { useEffect, useState } from 'react'
import './Template1.css';
import { MdAlternateEmail, MdCall } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { IoIosPerson } from 'react-icons/io';

import Download from '../../download/Download';

const Template1 = () => {
    const [storeditems, setStoredItems] = useState("");
    const templateElement1 = document.getElementById('printableContent');

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
        ProfilePhoto,
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
            <div id='printableContent' className="template1">
                <div className="template1-userName">{FirstName} {LastName}</div>
                <div className="template1-left">
                    <div className="template1-contact">
                        <div className="template1-profileImage">
                            {
                                ProfilePhoto ? <img src={ProfilePhoto} alt="" /> : <IoIosPerson fontSize={200} />
                            }
                        </div>
                        <div className="contact-items">
                            {Email && <>
                                <span className='icon'><MdAlternateEmail /></span>
                                <span>{Email}</span>
                            </>
                            }
                        </div>
                        <div className="contact-items">
                            {
                                Phone && <>
                                    <span className='icon'><MdCall /></span>
                                    <span>{Phone}</span>
                                </>
                            }
                        </div>
                        <div className="contact-items">
                            {
                                (City && PinCode && Country) && <>
                                    <span className='icon'><ImLocation /></span>
                                    <span>{City},{Country} {PinCode}</span>
                                </>
                            }
                        </div>
                    </div>
                    <hr />
                    <div className="template1-user-Skills">
                        <h3>Skills</h3>
                        <div className="template1-user-Skill-list">
                            <ul>
                                {
                                    Skills?.map((items) => (items ? <li key={items}>{items}</li> : ""))
                                }
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="template1-interest-details">
                        <h3>Interests</h3>
                        <ul>
                            {
                                Interests?.map((items) => (items ? <li key={items}>{items}</li> : ""))
                            }
                        </ul>
                    </div>
                </div>
                <div className="template1-right">
                    <div className="template1-education">
                        <h3>Education</h3>
                        {collegeName && <p>{collegeName}</p>}
                        {Degree && <p>{Degree}</p>}
                        {FieldOfStudy && <p>{FieldOfStudy}</p>}
                        {(collegeCity && collegeState) && <span>{collegeCity},{collegeState}</span>}
                        {(StartDate_college && EndDate_college) && <span>{StartDate_college} to {EndDate_college}</span>}
                    </div>
                    <hr />
                    <div className="template1-user-WorkHistory">
                        <h3>Work History</h3>
                        {Position && <p>{Position}</p>}
                        {CompanyName && <p>{CompanyName}</p>}
                        {Location && <p>{Location}</p>}
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
                    <hr />
                    <div className="template1-Projects">
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
                        </p>
                        }
                    </div>
                </div>
            </div>
            <Download templateElement1={templateElement1} />
        </>
    )
};
export default Template1;