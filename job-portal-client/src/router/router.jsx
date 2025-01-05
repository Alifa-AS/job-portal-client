import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home/Home';
import MainLayout from '../Pages/Layout/MainLayout';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import JobDetails from '../Pages/JobDetail/JobDetails';
import PrivateRoute from './PrivateRoute';
import JobApply from '../Pages/JobApply/JobApply';
import MyApplications from '../Pages/MyApplication/MyApplications';


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
          path: '/jobs/:id',
          element: <PrivateRoute><JobDetails /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: '/jobApply/:id',
          element:<PrivateRoute><JobApply /></PrivateRoute>,
        },
        {
          path: '/myApplications',
          element: <PrivateRoute><MyApplications /></PrivateRoute>,
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