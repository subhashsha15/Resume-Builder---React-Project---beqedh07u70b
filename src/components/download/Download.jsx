import React, { useEffect, useRef, useState } from "react";
import "./Download.css"
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { useNavigate } from "react-router-dom";
let componentRef;
const Download = (props) => {
    console.log("props=",props)
    // const [componentRef,setComponentRef]=useState("");
    // let componentRef=props.TemplateRef2;
    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate(-1);
    }

    switch (props.Selectedtemplate) {
        case "template1": componentRef=props.TemplateRef1;
            return;
        case "template2": componentRef=props.TemplateRef2;
            return;
        case "template3": componentRef=props.TemplateRef3;
            return;
    }
//   console.log("component",componentRef);
//   console.log("sub-props=",props.selectedTemplate);
    const handleDownload = () => {
        html2canvas(componentRef.current).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'px', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            doc.save("Resume.pdf");
        })
    }
    return (
        <>
            <div className="download">
                <div className="download-container">
                    <button onClick={handleBackButton}>Back</button>
                    <button onClick={handleDownload}>Download</button>
                </div>
            </div>
        </>
    )
}
export default Download;