import React from 'react'
import './Template1.css';
import { MdAlternateEmail, MdCall } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { IoIosPerson } from 'react-icons/io';
const Template1 = (props) => {
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
        Achievements } = props.props;

    return (
        <>
            <div className="template1">
                <div className="template1-userName">{FirstName} {LastName}</div>
                <div className="template1-left">
                    <div className="template1-contact">
                        <div className="template1-profileImage">
                            {
                                ProfilePhoto ? <img src={ProfilePhoto} alt="" /> : <IoIosPerson fontSize={200} />
                            }
                        </div>
                        <div className="contact-items">
                            <sapn className='icon'><MdAlternateEmail /></sapn>
                            <span>{Email}</span>
                        </div>
                        <div className="contact-items">
                            <sapn className='icon'><MdCall /></sapn>
                            <span>{Phone}</span>
                        </div>
                        <div className="contact-items">
                            <sapn className='icon'><ImLocation /></sapn>
                            <span>{City},{Country} {PinCode}</span>
                        </div>
                    </div>
                    <hr />
                    <div className="template1-education">
                        <h3>EDUCATION</h3>
                        <p>{Degree}</p>
                        <p>{FieldOfStudy}</p>
                        <p>{collegeName}</p>
                        <p>{StartDate_college}</p>
                        <p>{EndDate_college}</p>
                    </div>
                </div>
                <div className="template1-right">
                    <div className="template1-user-summary">
                        <h3>Professional summary</h3>
                        {WorkExperience}
                    </div>
                    <hr />
                    <div className="template1-user-Skills">
                        <h3>Skills</h3>
                        <div className="template1-user-Skill-list">
                            <ul>
                                {
                                    Interests.map((items) => (<li>{items}</li>))
                                }
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="template1-user-WorkHistory">
                        <h3>Work History</h3>
                        <p>{Position}</p>
                        <p>{CompanyName}</p>
                        <p>{Certificate}</p>
                        <p>{Location}</p>
                        <p>{StartDate_Office}</p>
                        <p>{EndDate_Office}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Template1;