
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Compponent/Navbar/Navbar'
import { useState, useEffect } from 'react';

import Footer from './Compponent/Footer/Footer'
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import HomeLayout from './Compponent/HomeLayout/HomeLayout'
import AboutUs from './Compponent/AboutUs/AboutUs'
import Pricing from './Compponent/Pricing/Pricing';
import Customers from './Compponent/Customers/Customers';
import Solutions from "./Compponent/Solutions/Solutions"
import { ScaleLoader } from 'react-spinners';
import ContactUs from './Compponent/ContactUs/ContactUs';

function App() {
  let [pageLoad,setpageLoad] = useState(true)
  
  useEffect(() => {
    
    let handelChange = ()=>{
      setpageLoad(false)
    }
    window.addEventListener(`load`,handelChange)
    return () => {
      window.removeEventListener(`load`,handelChange)
      
    };
  }, []);

  if (pageLoad){
    return(
      <div className='flex flex-col h-screen justify-center items-center'>
        <ScaleLoader color='#36D7B7' />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' key={window.location.pathname} element={<HomeLayout/>}/>
        <Route  path='/about' key={window.location.pathname} element={<AboutUs/>}/>
        <Route  path='/Pricing' key={window.location.pathname} element={<Pricing/>}/>
        <Route  path='/Customers' key={window.location.pathname} element={<Customers/>}/>
        <Route  path='/solutions' key={window.location.pathname} element={<Solutions/>}/>
        <Route  path='/contact' key={window.location.pathname} element={<ContactUs/>}/>
      </Routes>
      
      
      <Footer/>
    </BrowserRouter>
  )
}

export default App
