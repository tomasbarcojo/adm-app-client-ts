import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'App.css';

import Home from 'pages/Home';
import Login from 'pages/Login';
import NavBar from 'pages/NavBar';
import Cards from 'pages/Cards/Cards';

// const getRoutes = (allRoutes) =>
//   allRoutes.map((route) => {
//     if (route.collapse) {
//       return getRoutes(route.collapse);
//     }

//     if (route.route) {
//       return (
//         <Route path={route.route} element={route.component} key={route.key} />
//       );
//     }

//     return null;
//   });

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<NavBar />} />
      <Route path="/card" element={<Cards />} />
    </Routes>
  </BrowserRouter>
);

export default App;
