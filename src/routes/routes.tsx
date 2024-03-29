import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Admin from 'pages/Admin/Admin';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import PrivateRoutes from 'auth/PrivateRoutes';
import PasswordReset from 'pages/PasswordReset/PasswordReset';
import { CreateProductForm } from 'components/Product/CreateProductForm/CreateProductForm';
import { CreateCategoryForm } from 'components/Category/CreateCategoryForm';
import { CreateClientForm } from 'components/Clients/CreateClientsForm';
import Dashboard from 'pages/Dashboard/Dashboard';
import { CreateSupplierForm } from 'components/Supplier/CreateSupplierForm';
import ListTest from 'components/ListTest/ListTest';

// : Array<{
//   name: string;
//   key: string;
//   path: string;
//   element: JSX.Element;
//   icon?: string;
//   children?: Array<{
//     type: string;
//     name: string;
//     key: string;
//     path: string;
//     icon: string;
//     element: JSX.Element;
//   }>;
// }>

export const sideBarRoutes = {
  type: 'sideBar',
  name: 'Admin',
  key: 'admin',
  icon: 'bx bx-grid-alt',
  path: '/admin',
  element: (
    <PrivateRoutes>
      <Admin />
    </PrivateRoutes>
  ),
  children: [
    {
      type: 'title',
      name: 'Dashboard',
      key: 'dashboard',
      path: 'dashboard',
      icon: 'bx bx-home',
      element: <Dashboard />
    },
    {
      type: 'collapse',
      name: 'Product',
      key: 'product',
      path: 'product',
      defaultPath: 'product/list',
      icon: 'bx bx-package',
      children: [
        {
          type: 'title',
          name: 'Add new',
          key: 'add-new-product',
          path: 'new',
          icon: 'bx bx-plus',
          element: <CreateProductForm />
        },
        {
          type: 'title',
          name: 'List',
          key: 'list-products',
          path: 'list',
          icon: 'bx bx-plus',
          element: <CreateProductForm />
        }
      ]
    },
    {
      type: 'collapse',
      name: 'Category',
      key: 'category',
      path: 'category',
      defaultPath: 'category/list',
      icon: 'bx bx-category',
      children: [
        {
          type: 'title',
          name: 'New category',
          key: 'new-category',
          path: 'new',
          icon: 'bx bx-plus',
          element: <CreateCategoryForm />
        },
        {
          type: 'title',
          name: 'List',
          key: 'list-category',
          path: 'list',
          icon: 'bx bx-plus',
          element: <ListTest />
        }
      ]
    },
    {
      type: 'collapse',
      name: 'Client',
      key: 'client',
      path: 'client',
      defaultPath: 'client/list',
      icon: 'bx bx-user',
      children: [
        {
          type: 'title',
          name: 'New client',
          key: 'new-client',
          path: 'new',
          icon: 'bx bx-plus',
          element: <CreateClientForm />
        },
        {
          type: 'title',
          name: 'List',
          key: 'list-client',
          path: 'list',
          icon: 'bx bx-plus',
          element: <CreateClientForm />
        }
      ]
    },
    {
      type: 'collapse',
      name: 'Supplier',
      key: 'supplier',
      path: 'supplier',
      defaultPath: 'supplier/list',
      icon: 'bx bx-basket',
      children: [
        {
          type: 'title',
          name: 'New supplier',
          key: 'new-supplier',
          path: 'new',
          icon: 'bx bx-plus',
          element: <CreateSupplierForm />
        },
        {
          type: 'title',
          name: 'List',
          key: 'list-supplier',
          path: 'list',
          icon: 'bx bx-plus',
          element: <CreateSupplierForm />
        }
      ]
    }
  ]
};

export const routes = [
  {
    name: 'home',
    key: 'home',
    path: '',
    element: <Home />,
    children: undefined
  },
  {
    name: 'login',
    key: 'login',
    path: 'login',
    element: <Login />,
    children: undefined
  },
  {
    name: 'password-reset',
    key: 'password-reset',
    path: 'password/reset',
    element: <PasswordReset />,
    children: undefined
  },
  sideBarRoutes
];

export const router = createBrowserRouter(
  routes.map((route) => {
    return {
      path: route.path,
      element: route.element,
      children: route.children
    };
  })
);
