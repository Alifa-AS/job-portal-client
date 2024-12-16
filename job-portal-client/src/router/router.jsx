import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home/Home';
import MainLayout from '../Pages/Layout/MainLayout';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <h2>Route not found: 404</h2>,
      children:[
        {
            path: '/',
            element:<Home />,
        },
        {
            path: '/register',
            element:<Register />,
        },
        {
            path: '/login',
            element:<Login />,
        },
      ]
    },
  ]);


export default router;