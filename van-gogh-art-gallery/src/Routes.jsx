/* eslint-disable no-unused-vars */
import React from "react"
import { Navigate, useRoutes } from "react-router-dom";
import Home from '../src/pages/Home';
import Browse from '../src/pages/Browse';
import About from '../src/pages/About';



const Routes = () => {
  return useRoutes([
    {
      path: "/home",
      element: <Home />,
    },
  

    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/about",
      element: <About />
    }

  ]
    
  )
}

export default Routes
