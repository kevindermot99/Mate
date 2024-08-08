import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <div className='w-full h-[60px] flex items-baseline justify-center p-5 gap-1 absolute top-0 left-0 bg-light-body dark:bg-dark-body-color'>
            <div className='min-w-[30px]'><img src={logo} className="h-5" /></div>
            <h1 className='font-medium text-xl'>Money<span>Mate</span></h1>
        </div>
    )
}

export default Navbar