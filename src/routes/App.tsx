import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'App.css';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Admin from 'pages/Admin/Admin';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default App;
