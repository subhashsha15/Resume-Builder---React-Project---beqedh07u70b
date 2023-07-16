import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Templates.css';
const Templates = (props) => {
    const [currentTemplateId, setCurrentTemplateId] = useState("");
    const [classname, setClassName] = useState({
        template1: false,
        template2: false,
        template3: false,
    });
    const { template1, template2, template3 } = classname;

    const handleImageClick = (event) => {
        const TemplateId = event.target.id;
        setCurrentTemplateId(TemplateId);
        switch (TemplateId) {
            case "template1": setClassName((prevState) => ({ ...prevState, template1: true, template2: false, template3: false }));
                return;
            case "template2": setClassName((prevState) => ({ ...prevState, template1: false, template2: true, template3: false }));
                return;
            case "template3": setClassName((prevState) => ({ ...prevState, template1: false, template2: false, template3: true }));
                return;
        }

    }
    const handleSelectedTemplate = () => {
        props.setSelectedTemplate(currentTemplateId);
        window.localStorage.setItem('SelectedTemplate', JSON.stringify(currentTemplateId));
    }
    return (
        <>
            <div className="templates">
                <div className={template1 ? "templates-image image-clicked" : "templates-image"} onClick={handleImageClick} >
                    <img src="../../assets/images/template1.png" id="template1" alt="template1-photo" />
                </div>
                <div className={template2 ? "templates-image image-clicked" : "templates-image"} onClick={handleImageClick}>
                    <img src="../../assets/images/template2.png" id="template2" alt="template2-photo" />
                </div>
                <div className={template3 ? "templates-image image-clicked" : "templates-image"} onClick={handleImageClick}>
                    <img src="../../assets/images/template3.png" id="template3" alt="template3-photo" />
                </div>
            </div>
            <Link className='links' to="/templates/form">
                <div className="select-button">
                    <button className='templateSelecting-button' onClick={handleSelectedTemplate}>{template1 || template2 || template3 ? "Ok" : "Select a Template"}</button>
                </div>
            </Link>
        </>
    )
}
export default Templates;
