import React, { useState } from "react";
import "./Download.css"
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { useNavigate } from "react-router-dom";
const Download = (props) => {
    const { templateElement1, templateElement2, templateElement3 } = props;
    const navigate = useNavigate();
    const Selectedtemplate = JSON.parse(localStorage.getItem('SelectedTemplate'))
    const handleBackButton = () => {
        navigate("/form");
    }
    const handleDownload = () => {
        html2canvas(Selectedtemplate == "template1" ? templateElement1 : (Selectedtemplate == "template2" ? templateElement2 : templateElement3), {
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
        window.print();
    }
 
    return (
        <>
            <div className="download">
                <div className="download-container">
                    <button onClick={handleBackButton}>Back</button>
                    <div className="btn">
                        <button onClick={handleDownload}>Download</button>
                        <button onClick={handlePrint}>Print</button>
                
                    </div>
                </div>
            </div>
        </>
    )
}

export default Download;