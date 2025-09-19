import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Compponent/Navbar/Navbar'

import Footer from './Compponent/Footer/Footer'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeLayout from './Compponent/HomeLayout/HomeLayout'
import AboutUs from './Compponent/AboutUs/AboutUs'


function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeLayout/>}/>
        <Route  path='about' element={<AboutUs/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  )
}

export default App
