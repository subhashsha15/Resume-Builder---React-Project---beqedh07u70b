import React, { useState } from 'react'
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
import Contact from '../pages/contactUs/ContactUs';


const App = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("");

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
          element: <Templates setSelectedTemplate={setSelectedTemplate} />
        },
        {
          path: "/templates/form/template1",
          element: <Template1 />

        },
        {
          path:"/form/template1",
          element: <Template1 />

        },
        {
          path: "/templates/form/template2",
          element: <Template2 />
        },
        {
          path:"/form/template2",
          element: <Template2 />
        },
        {
          path: "/templates/form/template3",
          element: <Template3 />
        },
        {
          path:"/form/template3",
          element: <Template3 />
        },
        {
          path: "/form",
          element: <Form />
        },
        {
          path: "/templates/form",
          element: <Form />
        },
        {
          path: "/contactUs",
          element: <Contact />
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
