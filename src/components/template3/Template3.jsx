import React, { useRef ,useState,useEffect} from 'react'
import './Template3.css';
import { MdEmail, MdCall } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { AiFillLinkedin, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { useNavigate } from "react-router-dom";
const Template3 = () => {
    const [storeditems,setStoredItems]=useState("");
    useEffect(()=>{
        const storedItems = JSON.parse(localStorage.getItem('UserDetails'))
        setStoredItems(storedItems);
    },[])
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
    } = storeditems??{};

    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate(-1);
    }

    const handleDownload = () => {
        const downloadableElement = document.getElementById('printableContent');
        html2canvas(downloadableElement,{
            scale: 4
          }).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight,);
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
            <div id='printableContent' className='template3' >
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
                            <span>{Degree}</span>
                            <span>{FieldOfStudy}</span>
                            <span>{collegeCity},{collegeState}</span>
                            <span>{StartDate_college} to {EndDate_college}</span>
                        </div>
                        <div className="template3-Work-history">
                            <h3>Work History</h3>
                            <hr />
                            <span>{Position}</span>
                            <span>{CompanyName}</span>
                            <span>{Location}</span>
                            <span>{StartDate_Office} to {EndDate_Office}</span>
                            <p>
                                {WorkExperience}
                            </p>
                        </div>
                        <div className="template3-Projects">
                            <h3>Projects</h3>
                            <h4>{Project_title}</h4>
                            <span>Github:- {Project_GithubLink}</span>
                            <span>Netlify:- {Project_DeployedLink}</span>
                            <p>
                                {ProjectDescription}
                            </p>
                        </div>
                    </div>
                    <div className="template3-container-right">
                        <div className="template3-User-contact-details">
                            <div className="template3-user-contactItem">
                                <span className='template3-icon'><MdEmail /></span>
                                <span>{Email}</span>
                            </div>
                            <div className="template3-user-contactItem">
                                <span className='template3-icon'><MdCall /></span>
                                <span>{Phone}</span>
                            </div>
                            <div className="template3-user-contactItem">
                                <span className='template3-icon'><ImLocation /></span>
                                <span>{City},{Country} {PinCode}</span>
                            </div>
                        </div>
                        <div className="template3-social-details">
                            <h3>Social Links</h3>
                            <hr />
                            <ul>
                                <li><span><AiFillLinkedin /></span> {LinkedIn}</li>
                                <li><span><AiFillFacebook /></span>{Facebook}</li>
                                <li><span><AiFillInstagram /></span>{Instagram}</li>
                            </ul>
                        </div>
                        <div className="template3-skills-details">
                            <h3>Skills</h3>
                            <hr />
                            <ul>
                                {
                                    Skills?.map((items) =>  (items?<li key={items}>{items}</li>:""))
                                }
                            </ul>
                        </div>
                        <div className="template3-interest-details">
                            <h3>Interests</h3>
                            <hr />
                            <ul>
                                {
                                    Interests?.map((items) => (items?<li key={items}>{items}</li>:""))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* *************** */}
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
export default Template3;