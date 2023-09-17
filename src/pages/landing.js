import React from 'react'
import landingImg from '../img/landing.svg'
import "./landing.css"
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import Navbar from '../components/navbar';



export default function Landing() {

  return (
    <div>
      <BreakpointProvider>
    <Breakpoint medium up>
    <div>
        <div className="landing">
            <img src={landingImg} alt="logo" />
            <Navbar/>
            <Landing/>
        </div>
        <div className='landing-tile'>
            <p className='landing-header'>
            Are you ready to <span>REVOLUTIONIZE</span> your real estate management experience? 
            </p>
            <p className='landing-text'>
            Citrus is here to help you seamlessly monitor and maintain your IoT devices with cutting-edge AI algorithms.
            Citrus is the key to unlocking the future of real estate solutions.
            </p>

        </div>
    </div>
    </Breakpoint>
    
    <Breakpoint small down>
    
    </Breakpoint>
    </BreakpointProvider>
    </div>
  )
}
