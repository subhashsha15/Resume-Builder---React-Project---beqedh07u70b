// import React from "react";
// import "./Download.css"
// import { jsPDF } from "jspdf";
// import html2canvas from 'html2canvas';
// import { useNavigate } from "react-router-dom";
// const Download = ({downloadableElement1}) => {

//     const navigate = useNavigate();
//     const handleBackButton = () => {
//         navigate(-1);
//     }
//     const handleDownload = () => {
//         // const downloadableElement = document.getElementById('printableContent');
//         html2canvas(downloadableElement1, {
//             scale: 2
//         }).then((canvas) => {
//             const imgData = canvas.toDataURL('img/png');
//             const doc = new jsPDF('p', 'px', 'a4');
//             const componentWidth = doc.internal.pageSize.getWidth();
//             const componentHeight = doc.internal.pageSize.getHeight();
//             doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
//             doc.save("Resume.pdf");
//         })
//     }
//     const handlePrint = () => {
//         console.log("print")
//         const printableComponent =localStorage.getItem('printableComponent')
//         // const printableElement = document.getElementById('printableContent');
//         if (printableComponent) {
//             const printContents = printableComponent.innerHTML;
//             const originalContents = document.body.innerHTML;
//             document.body.innerHTML = printContents;
//             window.print();
//             document.body.innerHTML = originalContents;
//         }
//     }
//     return (
//         <>
//             <div className="download">
//                 <div className="download-container">
//                     <button onClick={handleBackButton}>Back</button>
//                     <div>
//                         <button onClick={handleDownload}>Download</button>
//                         <button onClick={handlePrint}>Print</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Download;