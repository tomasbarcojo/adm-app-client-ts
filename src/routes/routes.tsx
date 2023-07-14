import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Admin from 'pages/Admin/Admin';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import PrivateRoutes from 'auth/PrivateRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: (
      <PrivateRoutes>
        <Admin />
      </PrivateRoutes>
    ),
    children: [
      {
        path: 'test',
        element: <h1>Test</h1>
      }
    ]
  }
]);
