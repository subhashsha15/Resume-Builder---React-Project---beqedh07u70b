import React, { useState } from 'react'
import { TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { IconAt } from '@tabler/icons-react';
import { Textarea } from '@mantine/core';
import { Link } from "react-router-dom";
import './Form.css';
const Form = () => {
    const [userDetails, setUserDetails] = useState({
        FirstName:"",
        LastName: "kumar",
        City: "Gaya",
        Country: "india",
        PinCode: "823004",
        Phone: "23136164644",
        Email: "adf1345@gmail.com",
        ProfilePhoto: "",
        Github_Link: "github link",
        LinkedIn: "Linked link",
        Instagram: "instagream link",
        Position: "software developer",
        CompanyName: "Google",
        Certificate: "",
        Location: "USA",
        StartDate_Office: "",
        EndDate_Office: "",
        WorkExperience: "asjhdf sdafjhsgaf  sd fad sahf fsdashadf",
        Project_title: "project tiltle",
        Project_GithubLink: "project githublink",
        Project_DeployedLink: "project deployed",
        ProjectDescription: "project description",
        Degree: "B.tech",
        FieldOfStudy: "cicil engineer",
        collegeName: "cochin colllege",
        StartDate_college: "",
        EndDate_college: "",
        Interests: ["1","2","3","4"],
        Achievements: ["1","2","3","4"],
    })
    const handleFormInputs = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        
        if (field === "interest1" || field === "interest2" || field === "interest3" || field === "interest4") {
            // console.log("interest")
            // console.log(field)
            setUserDetails((prevState) => ({
                ...prevState,
                Interests: prevState.Interests.map((interest, index) => {
                    // console.log(index);
                    if (field == `interest${index + 1}`) {
                        console.log("value==",value);
                        return value;
                    }
                    return interest;
                })
            }));
        }
        else if (field === "achievement1" || field === "achievement2" || field === "achievement3" || field === "achievement4") {
            setUserDetails((prevState) => ({
                ...prevState,
                Achievements: prevState.Achievements.map((achievement, index) => {
                    if (field === `achievement${index + 1}`) {
                        return value;
                    }
                    return achievement;
                })
            }));
        }
        else if (field == "ProfilePhoto") {
            const { files } = event.target;
            if (files) {
                setUserDetails((prevState) => ({
                    ...prevState,
                    ProfilePhoto: URL.createObjectURL(files[0])
                }));
            }
        }
        else {
            setUserDetails((prevState) => ({
                ...prevState,
                [field]: value
            }));
        }
    };
    const handleClick = () => {
        window.localStorage.setItem('UserDetails', JSON.stringify(userDetails));
    }
    return (
        <>
            <div className="form">
                <div className="form-container">
                    <div className="user-contact-information">
                        <div className="user-contact-information-heading">
                            <h3>Contact Information</h3>
                        </div>
                        <div className="user-contact-information-items">
                            <div className="user-contact-information-item">
                                <TextInput
                                    placeholder="e.g. Saanvi"
                                    label="FIRST NAME"
                                    radius="xs"
                                    name="FirstName"
                                    value={userDetails.FirstName}
                                    onChange={handleFormInputs}
                                />
                                <TextInput
                                    placeholder="e.g. Patel"
                                    label="LAST NAME"
                                    radius="xs"
                                    name="LastName"
                                    value={userDetails.LastName}
                                    onChange={handleFormInputs}
                                />
                                <TextInput
                                    placeholder="e.g. New Delhi"
                                    label="CITY"
                                    radius="xs"
                                    name="City"
                                    value={userDetails.City}
                                    onChange={handleFormInputs}
                                />
                                <TextInput
                                    placeholder="e.g. India"
                                    label="COUNTRY"
                                    radius="xs"
                                    name="Country"
                                    value={userDetails.Country}
                                    onChange={handleFormInputs}
                                />
                            </div>
                            <div className="user-contact-information-item">
                                <TextInput
                                    placeholder="e.g. 110034"
                                    label="PIN CODE"
                                    radius="xs"
                                    type='number'
                                    name="PinCode"
                                    value={userDetails.PinCode}
                                    onChange={handleFormInputs}
                                />
                                <TextInput
                                    placeholder="e.g. +919933254487"
                                    label="PHONE"
                                    radius="xs"
                                    hidecontrols="true"
                                    type='number'
                                    name="Phone"
                                    value={userDetails.Phone}
                                    onChange={handleFormInputs}
                                />
                                <TextInput
                                    icon={<IconAt />}
                                    label="EMAIL"
                                    placeholder="Your email"
                                    radius="xs"
                                    name="Email"
                                    value={userDetails.Email}
                                    onChange={handleFormInputs}
                                />
                                <TextInput
                                    label="Upload Photo"
                                    radius="xs"
                                    type="file"
                                    name="ProfilePhoto"
                                    accept=".jpg, .jpeg, .png"
                                    onChange={handleFormInputs}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="social-media-links">
                        <h3>Social Media Links</h3>
                        <TextInput
                            placeholder="Github Link"
                            label="GITHUB LINK"
                            radius="xs"
                            name="Github_Link"
                            value={userDetails.Github_Link}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="LinkedIn"
                            label="LINKEDIN "
                            radius="xs"
                            hidecontrols="true"
                            name="LinkedIn"
                            value={userDetails.LinkedIn}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="Instagram"
                            label="INSTAGRAM"
                            radius="xs"
                            name="Instagram"
                            value={userDetails.Instagram}
                            onChange={handleFormInputs}
                        />
                    </div>
                    <div className="user-work-experience">
                        <h3>Work Experience</h3>
                        <TextInput
                            label="TITLE"
                            placeholder="e.g. Software Developer"
                            radius="xs"
                            name="Position"
                            value={userDetails.Position}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            label="COMPANY NAME"
                            placeholder="e.g. Amazon"
                            radius="xs"
                            name="CompanyName"
                            value={userDetails.CompanyName}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            label="CERTIFICATE"
                            radius="xs"
                            type="file"
                            name="Certificate"
                            accept=".pdf"
                            value={userDetails.Certificate}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            label="LOCATION"
                            placeholder="e.g. Remote"
                            radius="xs"
                            name="Location"
                            value={userDetails.Location}
                            onChange={handleFormInputs}
                        />
                        <div className="work-experience-dates">
                            <DateInput
                                label="START DATE"
                                placeholder='mm/dd/yyyy'
                                type="date"
                                name="StartDate_Office"
                                maw={400}
                                value={userDetails.StartDate_Office}
                                onChange={handleFormInputs}
                            />
                            <DateInput
                                label="END DATE"
                                placeholder='mm/dd/yyyy'
                                type="date"
                                name="EndDate_Office"
                                maw={400}
                                value={userDetails.EndDate_Office}
                                onChange={handleFormInputs}
                            />
                        </div>
                        <Textarea
                            placeholder="e.g. lorem ipsum lo ipsum lo ipsum lo"
                            label="Enter Work Description"
                            name="WorkExperience"
                            value={userDetails.WorkExperience}
                            onChange={handleFormInputs}
                        />
                    </div>
                    <div className="user-projects">
                        <h3>Projects</h3>
                        <TextInput
                            placeholder="e.g. Twitter Clone"
                            label="PROJECT TITLE"
                            radius="xs"
                            name="Project_title"
                            value={userDetails.Project_title}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="Project Github Link"
                            label="GITHUB LINK"
                            radius="xs"
                            name="Project_GithubLink"
                            value={userDetails.Project_GithubLink}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="Deployed Link"
                            label="DEPLOYED LINK"
                            radius="xs"
                            name="Project_DeployedLink"
                            value={userDetails.Project_DeployedLink}
                            onChange={handleFormInputs}
                        />
                        <Textarea
                            placeholder="e.g. lorem ipsum lo ipsum lo ipsum lo"
                            label="PROJECT DESCRIPTION"
                            name="ProjectDescription"
                            value={userDetails.ProjectDescription}
                            onChange={handleFormInputs}
                        />
                    </div>
                    <div className="user-education">
                        <h3>Education</h3>
                        <TextInput
                            label="DEGREE"
                            placeholder="e.g. B.tech"
                            radius="xs"
                            name="Degree"
                            value={userDetails.Degree}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            label="FIELD OF STUDY"
                            placeholder="e.g. Civil Engineer"
                            radius="xs"
                            name="FieldOfStudy"
                            value={userDetails.FieldOfStudy}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            label="SCHOOL/COLLEGE NAME"
                            placeholder="e.g. Indian Institute of Technology,Roorkee"
                            radius="xs"
                            name="collegeName"
                            value={userDetails.collegeName}
                            onChange={handleFormInputs}
                        />
                        <div className="education-dates">
                            <DateInput
                                label="START DATE"
                                placeholder='mm/dd/yyyy'
                                type="date"
                                name="StartDate_college"
                                maw={400}
                                value={userDetails.StartDate_college}
                                onChange={handleFormInputs}
                            />
                            <DateInput
                                label="END DATE"
                                placeholder='mm/dd/yyyy'
                                type="date"
                                name="EndDate_collegee"
                                maw={400}
                                value={userDetails.EndDate_college}
                                onChange={handleFormInputs}
                            />
                        </div>
                    </div>
                    <div className="user-interest">
                        <h3>Interests</h3>
                        <TextInput
                            placeholder="interest1"
                            radius="xs"
                            name="interest1"
                            value={userDetails.Interests[0]}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="interest2"
                            radius="xs"
                            name="interest2"
                            value={userDetails.Interests[1]}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="interest3"
                            radius="xs"
                            name="interest3"
                            value={userDetails.Interests[2]}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="interest4"
                            radius="xs"
                            name="interest4"
                            value={userDetails.Interests[3]}
                            onChange={handleFormInputs}
                        />
                    </div>
                    <div className="user-achievements">
                        <h3>Achievements</h3>
                        <TextInput
                            placeholder="achievement1"
                            radius="xs"
                            name="achievement1"
                            value={userDetails.achievement1}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="achievement2"
                            radius="xs"
                            name="achievement2"
                            value={userDetails.achievement2}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="achievement3"
                            radius="xs"
                            name="achievement3"
                            value={userDetails.achievement3}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="achievement4"
                            radius="xs"
                            name="achievement4"
                            value={userDetails.achievement4}
                            onChange={handleFormInputs}
                        />
                    </div>
                    <div className="form-controll-buttons" onClick={handleClick}>
                        <button id='SaveButton'>Save</button>
                        <Link to="/templates">
                            <button id='PreviewButton'>Preview</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Form;