import React, {useState} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import UserProfile from './components/pages/UserProfile';
import ProductDetail from './components/pages/ProductDetail';
import Payment from './components/pages/Payment';
import {LoginContext} from './context/LoginContext';


function App(props) {
  const [userLogin, setUserLogin] = useState(false);

  return (
  <BrowserRouter>
      <LoginContext.Provider 
        value={{
          userLoginContext: userLogin,
          setUserLoginContext: setUserLogin,
      }}>
        {props.children}
      </LoginContext.Provider>
      <Navbar /> 
       <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/signup' element={<SignUp/>} />
        {/* <Route path='/login' element={!userLogin ? <Login/> : <Home/>} /> */}
        <Route path='/login' element={<Login/>} />
        {/* <Route path='/userprofile' element={!userLogin ? <Login/> : <UserProfile/>} /> */}
        <Route path='/userprofile' element={<UserProfile/>} />
        <Route path='/productdetail' element={<ProductDetail/>} />
        {/* <Route path='/payment' element={!userLogin ? <Login/> : <Payment/>} /> */}
        <Route path='/payment' element={<Payment/>} />
       </Routes>
 </BrowserRouter>
  );
}

export default App;
