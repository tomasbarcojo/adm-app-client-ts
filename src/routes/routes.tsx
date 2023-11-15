import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Admin from 'pages/Admin/Admin';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import PrivateRoutes from 'auth/PrivateRoutes';
import PasswordReset from 'pages/PasswordReset/PasswordReset';
import { CreateProductForm } from 'components/Product/CreateProductForm/CreateProductForm';
import { CreateCategoryForm } from 'components/Category/CreateCategoryForm';

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
    path: '/password/reset',
    element: <PasswordReset />
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
      },
      {
        path: 'product',
        element: <CreateProductForm />
      },
      {
        path: 'category',
        element: <CreateCategoryForm />
      },
      {
        path: 'inputtext',
        element: <h1>InputText</h1>
      },
      {
        path: 'inputselect',
        element: <h1>InputSelect</h1>
      }
    ]
  }
]);
