
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Compponent/Navbar/Navbar'
import { useState, useEffect } from 'react';

import Footer from './Compponent/Footer/Footer'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeLayout from './Compponent/HomeLayout/HomeLayout'
import AboutUs from './Compponent/AboutUs/AboutUs'
import Pricing from './Compponent/Pricing/Pricing';


function App() {
  
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);



  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' key={window.location.pathname} element={<HomeLayout/>}/>
        <Route  path='/about' key={window.location.pathname} element={<AboutUs/>}/>
        <Route  path='/Pricing' key={window.location.pathname} element={<Pricing/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  )
}

export default App
