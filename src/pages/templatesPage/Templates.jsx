import React, { useRef, useState } from 'react'
import Template1 from '../../components/template1/Template1';
import Template2 from '../../components/template2/Template2';
import Template3 from '../../components/template3/Template3';
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import './Templates.css';
const Templates = (props) => {
    const [classname, setClassName] = useState({
        template1: false,
        template2: false,
        template3: false,
    });
    const { template1, template2, template3 } = classname;
    // const componentRef = useRef(null);
    // const storedItems = JSON.parse(localStorage.getItem('UserDetails'))
    // const handleDownload = () => {
    //     html2canvas(componentRef.current).then((canvas) => {
    //         const imgData = canvas.toDataURL('img/png');
    //         const doc = new jsPDF('p', 'px', 'a4');
    //         const componentWidth = doc.internal.pageSize.getWidth();
    //         const componentHeight = doc.internal.pageSize.getHeight();
    //         doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
    //         doc.save("Resume.pdf");
    //     })
    // }
    const handleImageClick = (event) => {
        const TemplateId = event.target.id;
        props.setSelectedTemplate(TemplateId);
        switch (TemplateId) {
            case "template1": setClassName((prevState) => ({ ...prevState, template1: true }));
                return;
            case "template2": setClassName((prevState) => ({ ...prevState, template2: true }));
                return;
            case "template3": setClassName((prevState) => ({ ...prevState, template3: true }));
                return;
        }

    }
    const handleSelectedTemplate=()=>{
        window.localStorage.setItem('SelectedTemplate', JSON.stringify(props.selectedTemplate));
    } 
    return (
        <>
            <div className="templates">
                <div className={classname.template1 ? "templates-image image-clicked" : "templates-image"} >
                    <img src="../../assets/images/template1.png" id="template1" alt="template1-photo" onClick={handleImageClick} />
                </div>
                <div className={classname.template2 ? "templates-image image-clicked" : "templates-image"} onClick={handleImageClick}>
                    <img src="../../assets/images/template2.png" id="template2" alt="template2-photo" />
                </div>
                <div className={classname.template3 ? "templates-image image-clicked" : "templates-image"} onClick={handleImageClick}>
                    <img src="../../assets/images/template3.png" id="template3" alt="template3-photo" />
                </div>
            </div>
            <Link className='links' to="/templates/form">
                <div className="select-button">
                    <button className='templateSelecting-button' onClick={handleSelectedTemplate}>{template1 || template2 || template3 ? "Ok" : "Select a Template"}</button>
                </div>
            </Link>
            {/* <Template1 componentRef={componentRef} props={storedItems} />
            <Template2 />
            <Template3 />
            <Link to="/form">
                <h3>Select Template</h3>
            </Link>
            <button onClick={handleDownload}>Download</button> */}
        </>
    )
}
export default Templates;
