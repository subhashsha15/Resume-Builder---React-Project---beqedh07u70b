import React, { useState } from 'react'
import { TextInput } from '@mantine/core';
import { MdEmail } from 'react-icons/md';
import { Textarea } from '@mantine/core';
import { Link, useNavigate } from "react-router-dom";
import './Form.css';
const Form = (props) => {
    const storedItems = JSON.parse(localStorage.getItem('UserDetails'))
    const initializeState = (condition) => {
        if (condition == 0) {
            return useState({
                FirstName: "",
                LastName: "",
                City: "",
                Country: "",
                PinCode: "",
                Phone: "",
                Email: "",
                ProfilePhoto: "",
                Facebook: "",
                LinkedIn: "",
                Instagram: "",
                Position: "",
                CompanyName: "",
                Location: "",
                StartDate_Office: "",
                EndDate_Office: "",
                WorkExperience: "",
                Project_title: "",
                Project_GithubLink: "",
                Project_DeployedLink: "",
                ProjectDescription: "",
                Degree: "",
                FieldOfStudy: "",
                collegeName: "",
                collegeCity: "",
                collegeState: "",
                StartDate_college: "",
                EndDate_college: "",
                Interests: ["", "", "", "", ""],
                Skills: ["", "", "", "", ""],
            });
            //    return useState({
            //             FirstName: "Jhon",
            //             LastName: "Doe",
            //             City: "Saint-Etienne",
            //             Country: "France",
            //             PinCode: "82456",
            //             Phone: "9065484654",
            //             Email: "JhoneDoe44343@gmail.com",
            //             ProfilePhoto: "",
            //             Facebook: "https://github.com/sJhoneDoe44343",
            //             LinkedIn: "https://github.com/sJhoneDoe44343",
            //             Instagram: "https://github.com/sJhoneDoe44343",
            //             Position: "Software Developer",
            //             CompanyName: "Google",
            //             Location: "Green Oaks Apartment Complex, San Antonio, Texas",
            //             StartDate_Office: "2022-07-15",
            //             EndDate_Office: "2023-06-30",
            //             WorkExperience: `My role involves coordinating all sales representatives, developing sales strategies and making sure the organization meets its quarterly and annual sales goals.
            //                 Increased sales by an average of 12% each year by continually developing ways of reaching new potential customers
            //                 Reduced employee turnover by 23% by implementing new training techniques and creating a motivating bonus structure`,
            //             Project_title: "Online Medical Consultation Website",
            //             Project_GithubLink: "https://github.com/JhoneDoe44343/Wellness-Wizard",
            //             Project_DeployedLink: "https://heroic-JhoneDoe44343-467a9c.netlify.app/",
            //             ProjectDescription: `Convenient way to connect with a Doctor and get medical advice, 
            //                 Provide facilities like schedule an appointment with a doctor, access medical records and test results,
            //                 User information is safe, secure and private
            //                 Tech Stack used Html, Css, Bootstrap.`,
            //             Degree: "Bachelor of Technology",
            //             FieldOfStudy: "Computer Engineering",
            //             collegeName: "Jean Monnet University,Saint-Etienne Cedex 2, France.",
            //             collegeCity: "Saint-Etienne",
            //             collegeState: "France",
            //             StartDate_college: "2020-06-15",
            //             EndDate_college: "2022-06-15",
            //             Interests: ["Robotics", "Cyber Security", "Artificial Intelligence", "Web Development", "Android Development"],
            //             Skills: ["HTML", "CSS", "Reactjs", "Nodejs", "Expressjs"],
            //         });
        } else if (condition == 1) {
            console.log(props.flag)
            return useState({
                FirstName: storedItems?.FirstName,
                LastName: storedItems?.LastName,
                City: storedItems?.City,
                Country: storedItems?.Country,
                PinCode: storedItems?.PinCode,
                Phone: storedItems?.Phone,
                Email: storedItems?.Email,
                ProfilePhoto: storedItems?.ProfilePhoto,
                Facebook: storedItems?.Facebook,
                LinkedIn: storedItems?.LinkedIn,
                Instagram: storedItems?.Instagram,
                Position: storedItems?.Position,
                CompanyName: storedItems?.CompanyName,
                Location: storedItems?.Location,
                StartDate_Office: storedItems?.StartDate_Office,
                EndDate_Office: storedItems?.EndDate_Office,
                WorkExperience: storedItems?.WorkExperience,
                Project_title: storedItems?.Project_title,
                Project_GithubLink: storedItems?.Project_GithubLink,
                Project_DeployedLink: storedItems?.Project_DeployedLink,
                ProjectDescription: storedItems?.ProjectDescription,
                Degree: storedItems?.Degree,
                FieldOfStudy: storedItems?.FieldOfStudy,
                collegeName: storedItems?.collegeName,
                collegeCity: storedItems?.collegeCity,
                collegeState: storedItems?.collegeState,
                StartDate_college: storedItems?.StartDate_college,
                EndDate_college: storedItems?.EndDate_college,
                Interests: storedItems?.Interests,
                Skills: storedItems?.Skills,
            });
        }
        //     else if (condition == 0 && cleardata==true) {
        //         return useState({
        //             FirstName: "",
        //             LastName: "",
        //             City: "",
        //             Country: "",
        //             PinCode: "",
        //             Phone: "",
        //             Email: "",
        //             ProfilePhoto: "",
        //             Facebook: "",
        //             LinkedIn: "",
        //             Instagram: "",
        //             Position: "",
        //             CompanyName: "",
        //             Location: "",
        //             StartDate_Office: "",
        //             EndDate_Office: "",
        //             WorkExperience: "",
        //             Project_title: "",
        //             Project_GithubLink: "",
        //             Project_DeployedLink: "",
        //             ProjectDescription: "",
        //             Degree: "",
        //             FieldOfStudy: "",
        //             collegeName: "",
        //             collegeCity: "",
        //             collegeState: "",
        //             StartDate_college: "",
        //             EndDate_college: "",
        //             Interests: ["", "", "", "", ""],
        //             Skills: ["", "", "", "", ""],
        //         });
        // };
    }
    const [userDetails, setUserDetails] = initializeState(props.flag);

    const [error, setError] = useState({
        FirstName: "", LastName: "", Phone: "", Email: "", LinkedIn: "", Degree: "", FieldOfStudy: "", collegeName: "", collegeCity: "", collegeState: "",
    })

    const navigate = useNavigate();
    const Selectedtemplate = JSON.parse(localStorage.getItem('SelectedTemplate'))
    window.localStorage.setItem('UserDetails', JSON.stringify(userDetails));

    const handleErase = () => {
        setUserDetails({
            FirstName: "",
            LastName: "",
            City: "",
            Country: "",
            PinCode: "",
            Phone: "",
            Email: "",
            ProfilePhoto: "",
            Facebook: "",
            LinkedIn: "",
            Instagram: "",
            Position: "",
            CompanyName: "",
            Location: "",
            StartDate_Office: "",
            EndDate_Office: "",
            WorkExperience: "",
            Project_title: "",
            Project_GithubLink: "",
            Project_DeployedLink: "",
            ProjectDescription: "",
            Degree: "",
            FieldOfStudy: "",
            collegeName: "",
            collegeCity: "",
            collegeState: "",
            StartDate_college: "",
            EndDate_college: "",
            Interests: ["", "", "", "", ""],
            Skills: ["", "", "", "", ""],
        });
    }
    //validate()-contains conditions for form validation and display errors. 
    const validate = (values) => {
        const { FirstName, LastName, Phone, Email, LinkedIn, Degree, FieldOfStudy, collegeName, collegeCity, collegeState } = values;
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!FirstName) {
            errors.FirstName = "First Name is required !"
        }
        if (!LastName) {
            errors.LastName = "Last Name is required !"
        }
        if (!Phone) {
            errors.Phone = "Phone Number is required !"
        } else if (Phone.length != 10) {
            errors.Phone = "PhoneNumber should be 10digits long!"
        }
        if (!Email) {
            errors.Email = "Email is required!"
        }
        else if (!regex.test(values.Email)) {
            errors.Email = "Email is not valid"
        }
        if (!LinkedIn) {
            errors.LinkedIn = "LinkedIn ID is required!"
        } if (!Degree) {
            errors.Degree = "Enter the Graduation Degree!"
        } if (!FieldOfStudy) {
            errors.FieldOfStudy = "Enter the Branch!"
        } if (!collegeName) {
            errors.collegeName = "Enter the College Name!"
        } if (!collegeCity) {
            errors.collegeCity = "Enter the College City!"
        }
        if (!collegeState) {
            errors.collegeState = "Enter the College State!"
        }
        return errors;
    }

    const handlePreview = (e) => {
        if (Object.keys(error).length == 0) {
            navigate(Selectedtemplate);
        }
        else {
            e.preventDefault();
        }
    }
    //handleSave()-saves the userdetails in local storage and set "Error" state
    const handleSave = () => {
        setError(validate(userDetails))
        window.localStorage.setItem('UserDetails', JSON.stringify(userDetails));
    }

    //hnadleFormInputs()-it handles all the inputs fields or user information
    const handleFormInputs = (event) => {
        const value = event.target.value;
        const field = event.target.name;

        if (field === "interest1" || field === "interest2" || field === "interest3" || field === "interest4" || field === "interest5") {
            setUserDetails((prevState) => ({
                ...prevState,
                Interests: prevState.Interests.map((interest, index) => {
                    if (field === `interest${index + 1}`) {
                        interest = value;
                    }
                    return interest;
                })
            }));
        }
        if (field === "Skills1" || field === "Skills2" || field === "Skills3" || field === "Skills4" || field === "Skills5") {
            setUserDetails((prevState) => ({
                ...prevState,
                Skills: prevState.Skills.map((skill, index) => {
                    if (field === `Skills${index + 1}`) {
                        skill = value;
                    }
                    return skill;
                })
            }));
        }
        if (field == "ProfilePhoto") {
            const { files } = event.target;
            const file = files[0];

            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                setUserDetails((prevState) => ({
                    ...prevState,
                    ProfilePhoto: reader.result,
                }));
            };
            console.log("files2=", files[0]);
        }

        setUserDetails((prevState) => ({
            ...prevState,
            [field]: value
        }));
    };

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
                                    required
                                    error={error.FirstName}
                                    value={userDetails.FirstName}
                                    onChange={handleFormInputs}
                                />
                                <TextInput
                                    placeholder="e.g. Patel"
                                    label="LAST NAME"
                                    radius="xs"
                                    name="LastName"
                                    required
                                    error={error.LastName}
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
                                    placeholder="e.g. 9933254487"
                                    label="PHONE"
                                    radius="xs"
                                    hidecontrols="true"
                                    type='number'
                                    name="Phone"
                                    required
                                    error={error.Phone}
                                    value={userDetails.Phone}
                                    onChange={handleFormInputs}
                                />
                                <TextInput
                                    icon={<MdEmail />}
                                    label="EMAIL"
                                    placeholder="saanvipatel123@gmail.com"
                                    radius="xs"
                                    name="Email"
                                    required
                                    error={error.Email}
                                    value={userDetails.Email}
                                    onChange={handleFormInputs}
                                />
                                <TextInput
                                    label="Upload Photo"
                                    radius="xs"
                                    disabled={(Selectedtemplate == "template2" || Selectedtemplate == "template3") ? true : false}
                                    type="file"
                                    name="ProfilePhoto"
                                    onChange={handleFormInputs}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="social-media-links">
                        <h3>Social Media Links</h3>
                        <TextInput
                            placeholder="Facebook Link"
                            label="Facebook"
                            radius="xs"
                            name="Facebook"
                            value={userDetails.Facebook}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="LinkedIn Link"
                            label="LINKEDIN "
                            radius="xs"
                            hidecontrols="true"
                            name="LinkedIn"
                            required
                            error={error.LinkedIn}
                            value={userDetails.LinkedIn}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="Instagram Link"
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
                            label="LOCATION"
                            placeholder="e.g. Remote"
                            radius="xs"
                            name="Location"
                            value={userDetails.Location}
                            onChange={handleFormInputs}
                        />
                        <div className="work-experience-dates">
                            <TextInput
                                label="START DATE"
                                type="date"
                                placeholder='MM/DD/YYYY'
                                name="StartDate_Office"
                                maw={400}
                                value={userDetails.StartDate_Office}
                                onChange={handleFormInputs}
                            />
                            <TextInput
                                label="END DATE"
                                placeholder='MM/DD/YYYY'
                                type="date"
                                name="EndDate_Office"
                                maw={400}
                                value={userDetails.EndDate_Office}
                                onChange={handleFormInputs}
                            />
                        </div>
                        <Textarea
                            rows={5}
                            cols={7}
                            placeholder="e.g. lorem ipsum lo ipsum lo ipsum lo"
                            label="Enter Work Description"
                            name="WorkExperience"
                            value={userDetails.WorkExperience}
                            onInput={handleFormInputs}
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
                            placeholder="https://github.com/jhondoe123"
                            label="GITHUB LINK"
                            radius="xs"
                            name="Project_GithubLink"
                            value={userDetails.Project_GithubLink}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="https://twitter_clone.netlify.app"
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
                            required
                            error={error.Degree}
                            value={userDetails.Degree}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            label="FIELD OF STUDY"
                            placeholder="e.g. computer science"
                            radius="xs"
                            name="FieldOfStudy"
                            required
                            error={error.FieldOfStudy}
                            value={userDetails.FieldOfStudy}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            label="SCHOOL/COLLEGE NAME"
                            placeholder="e.g. Indian Institute of Technology,Roorkee"
                            radius="xs"
                            name="collegeName"
                            required
                            error={error.collegeName}
                            value={userDetails.collegeName}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            label="City"
                            placeholder="e.g. Roorkee"
                            radius="xs"
                            name="collegeCity"
                            required
                            error={error.collegeCity}
                            value={userDetails.collegeCity}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            label="State"
                            placeholder="e.g. Uttarakhand"
                            radius="xs"
                            name="collegeState"
                            required
                            error={error.collegeState}
                            value={userDetails.collegeState}
                            onChange={handleFormInputs}
                        />
                        <div className="education-dates">
                            <TextInput
                                label="START DATE"
                                placeholder='MM/DD/YYYY'
                                type="date"
                                name="StartDate_college"
                                maw={400}
                                value={userDetails.StartDate_college}
                                onChange={handleFormInputs}
                            />
                            <TextInput
                                label="END DATE"
                                placeholder='MM/DD/YYYY'
                                type="date"
                                name="EndDate_college"
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
                            value={userDetails?.Interests?.[0] ?? ""}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="interest2"
                            radius="xs"
                            name="interest2"
                            value={userDetails?.Interests?.[1]??""}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="interest3"
                            radius="xs"
                            name="interest3"
                            value={userDetails?.Interests?.[2]??""}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="interest4"
                            radius="xs"
                            name="interest4"
                            value={userDetails?.Interests?.[3]??""}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="interest5"
                            radius="xs"
                            name="interest5"
                            value={userDetails?.Interests?.[4]??""}
                            onChange={handleFormInputs}
                        />
                    </div>
                    <div className="user-Skills">
                        <h3>Skills</h3>
                        <TextInput
                            placeholder="Skills1"
                            radius="xs"
                            name="Skills1"
                            value={userDetails?.Skills?.[0]??""}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="Skills2"
                            radius="xs"
                            name="Skills2"
                            value={userDetails?.Skills?.[1]??""}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="Skills3"
                            radius="xs"
                            name="Skills3"
                            value={userDetails?.Skills?.[2]??""}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="Skills4"
                            radius="xs"
                            name="Skills4"
                            value={userDetails?.Skills?.[3]??""}
                            onChange={handleFormInputs}
                        />
                        <TextInput
                            placeholder="Skills5"
                            radius="xs"
                            name="Skills5"
                            value={userDetails?.Skills?.[4]??""}
                            onChange={handleFormInputs}
                        />
                    </div>
                    <div className="form-controll-buttons">
                        <button id='SaveButton' onClick={handleSave}>Save</button>
                        <button id='PreviewButton' onClick={handlePreview}>Preview</button>
                        <button id='EraseButton' onClick={handleErase}>Erase</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Form;

