import React, { useEffect, useRef, useState } from 'react'
import './Template1.css';
import { MdAlternateEmail, MdCall } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { IoIosPerson } from 'react-icons/io';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { useNavigate } from "react-router-dom";
import Download from '../../download/Download';

const Template1 = () => {
    const [storeditems, setStoredItems] = useState("");
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

    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate(-1);
    }
    const handleDownload = () => {
        const downloadableElement = document.getElementById('printableContent');
        html2canvas(downloadableElement, {
            scale: 2
        }).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'px', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            doc.save("Resume.pdf");
        })
    }
    const handlePrint = () => {
        const printableElement = document.getElementById('printableContent');
        if (printableElement) {
            const printContents = printableElement.innerHTML;
            const originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        }
    }
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
                            <span className='icon'><MdAlternateEmail /></span>
                            <span>{Email}</span>
                        </div>
                        <div className="contact-items">
                            <span className='icon'><MdCall /></span>
                            <span>{Phone}</span>
                        </div>
                        <div className="contact-items">
                            <span className='icon'><ImLocation /></span>
                            <span>{City},{Country} {PinCode}</span>
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
                        <p>{collegeName}</p>
                        <p>{Degree}</p>
                        <p>{FieldOfStudy}</p>
                        <span>{collegeCity},{collegeState}</span>
                        <span>{StartDate_college} to {EndDate_college}</span>
                    </div>
                    <hr />
                    <div className="template1-user-WorkHistory">
                        <h3>Work History</h3>
                        <p>{Position}</p>
                        <p>{CompanyName}</p>
                        <p>{Location}</p>
                        <span>{StartDate_Office} to {EndDate_Office}</span>
                        <p>
                            {WorkExperience}
                        </p>
                    </div>
                    <hr />
                    <div className="template1-Projects">
                        <h3>Projects</h3>
                        <h4>{Project_title}</h4>
                        <span>Github:- {Project_GithubLink}</span>
                        <span>Netlify:- {Project_DeployedLink}</span>
                        <p>
                            {ProjectDescription}
                        </p>
                    </div>
                </div>
            </div>
            {/* ****************************************** */}
            <div className="download">
                <div className="download-container">
                    <button onClick={handleBackButton}>Back</button>
                    <div>
                        <button onClick={handleDownload}>Download</button>
                        <button onClick={handlePrint}>Print</button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Template1;