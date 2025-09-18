import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Compponent/Navbar/Navbar'
import Hero from './Compponent/Hero/Hero'
import Trustedpartners from './Compponent/trustedpartners/trustedpartners'
import AiDRs from './Compponent/AiDRs/AiDRs'


function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Trustedpartners/>
      <AiDRs/>
    </>
  )
}

export default App
