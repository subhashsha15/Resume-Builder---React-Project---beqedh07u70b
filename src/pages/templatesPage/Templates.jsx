import React from 'react'
import Template1 from '../../components/templates/template1/Template1';
import Template2 from '../../components/templates/template2/Template2';
import Template3 from '../../components/templates/template3/Template3';
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import PDF from 'jspdf'

const Templates = () => {
    const storedItems = JSON.parse(localStorage.getItem('UserDetails'))
    const handleDownload = () => {
        const doc = new jsPDF('p', 'pt');
        doc.text(<Template1 />);
        doc.save("a4.pdf");
    }
    return (
        <>
            <PDF>
                <Template1 props={storedItems} />
            </PDF>
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
