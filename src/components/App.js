import React from 'react'
import '../styles/App.css';
import Home from '../pages/home/Home';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Form from './form/Form';
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import Templates from '../pages/templatesPage/Templates';

const App=()=>{

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
          element: <Templates />
        },
        {
          path: "/form",
          element: <Form />
        },
        {
          path: "/templates/form",
          element: <Form />
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
