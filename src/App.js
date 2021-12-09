import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import UserProfile from './components/pages/UserProfile';

function App() {
  return (
  <BrowserRouter>
      <Navbar /> 
       <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/userprofile' element={<UserProfile/>} />
       </Routes>
 </BrowserRouter>
  );
}

export default App;
