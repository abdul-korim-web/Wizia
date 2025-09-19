import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Compponent/Navbar/Navbar'
import Hero from './Compponent/Hero/Hero'
import Trustedpartners from './Compponent/trustedpartners/trustedpartners'
import AiDRs from './Compponent/AiDRs/AiDRs'
import TrainAi from './Compponent/TrainAi/TrainAi'
import Slider from './Compponent/Slider/Slider'
import Allocate from './Compponent/Allocate/Allocate'
import Embrace from './Compponent/Embrace/Embrace'
import Footer from './Compponent/Footer/Footer'


function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Trustedpartners/>
      <AiDRs/>
      <TrainAi/>
      <Slider/>
      <Allocate/>
      <Embrace/>
      <Footer/>
    </>
  )
}

export default App
