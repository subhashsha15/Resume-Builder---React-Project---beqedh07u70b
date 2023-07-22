import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Templates.css';
import template1Img from "../../../public/images/template1.png"
import template2Img from "../../../public/images/template2.png"
import template3Img from "../../../public/images/template3.png"
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
                    <img src={template1Img} id="template1" alt="template1-photo" />
                </div>
                <div className={template2 ? "templates-image image-clicked" : "templates-image"} onClick={handleImageClick}>
                    <img src={template2Img} id="template2" alt="template2-photo" />
                </div>
                <div className={template3 ? "templates-image image-clicked" : "templates-image"} onClick={handleImageClick}>
                    <img src={template3Img} id="template3" alt="template3-photo" />
                </div>
            </div>

            <div className="select-button">
                {/* <button className='templateSelecting-button ' onClick={handleSelectedTemplate}> */}
                {template1 || template2 || template3 ?

                    <Link className='links' to="/templates/form">
                        <button className='templateSelecting-button btn' onClick={handleSelectedTemplate}>Ok</button>
                    </Link>

                    : <button className='templateSelecting-button '>Select a Template</button>
                }
                {/* </button> */}
            </div >

        </>
    )
}
export default Templates;
