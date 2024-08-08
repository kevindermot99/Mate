import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='w-full h-[60px] flex items-center justify-center'>
        <img src={logo} alt="" />
        <h1 className=''>Money<span>Mate</span></h1>
    </div>
  )
}

export default Navbar