import React, { useState, useRef, useEffect } from 'react'
import '../styles/App.css';
import Home from '../pages/home/Home';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Form from './form/Form';
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import Templates from '../pages/templatesPage/Templates';
import Template1 from './template1/Template1';
import Template2 from './template2/Template2';
import Template3 from './template3/Template3';
import Download from './download/Download';
let Selectedtemplate;
const App = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const TemplateRef1 = useRef(null);
  const TemplateRef2 = useRef(null);
  const TemplateRef3 = useRef(null);
  const storedItems = JSON.parse(localStorage.getItem('UserDetails'))
  const handlePreview=()=>{
    Selectedtemplate = JSON.parse(localStorage.getItem('SelectedTemplate'))
    console.log(Selectedtemplate);
}
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/templates",
          element: <Templates selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
        },
        {
          path: "/templates/form/template1",
          element: (<>
            <Template1 storedItems={storedItems} ref={TemplateRef1} />
            <Download
              Selectedtemplate={Selectedtemplate}
              TemplateRef1={TemplateRef1}
            />
          </>)
        },
        {
          path: "/templates/form/template2",
          element: (<>
            <Template2 storedItems={storedItems} ref={TemplateRef2} />
            <Download
              Selectedtemplate={Selectedtemplate}
              TemplateRef2={TemplateRef2}
            />
          </>)
        },
        {
          path: "/templates/form/template3",
          element: (<>
            <Template3 storedItems={storedItems} ref={TemplateRef3} />
            <Download
              Selectedtemplate={Selectedtemplate}
              TemplateRef3={TemplateRef3}
            />
          </>)
        },
        {
          path: "/form",
          element: <Form />
        },
        {
          path: "/templates/form",
          element: <Form  Selectedtemplate={Selectedtemplate} handlePreview={handlePreview} selectedTemplate={selectedTemplate} />
        },
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
