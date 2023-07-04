import React, { useRef } from 'react'
import Template1 from '../../components/templates/template1/Template1';
import Template2 from '../../components/templates/template2/Template2';
import Template3 from '../../components/templates/template3/Template3';
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import { renderToString } from 'react-dom/server';
import html2canvas from 'html2canvas';
const Templates = () => {
    const componentRef=useRef(null);
    const storedItems = JSON.parse(localStorage.getItem('UserDetails'))
    const handleDownload = () => {
        html2canvas(componentRef.current).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'px', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            doc.save("Resume.pdf");
        })
        console.log("current==",componentRef);
    }
    return (
        <>
            <Template1 componentRef={componentRef} props={storedItems} />
            <Template2 />
            <Template3 />
            <Link to="/form">
                <h3>Select Template</h3>
            </Link>
            <button onClick={handleDownload}>Download</button>
        </>
    )
}
export default Templates;
