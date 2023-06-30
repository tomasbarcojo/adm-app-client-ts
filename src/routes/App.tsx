/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import 'App.css';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Admin from 'pages/Admin/Admin';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="test" element={<h1>hola</h1>} />
        <Route path="test2" element={<h1>hola</h1>} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
