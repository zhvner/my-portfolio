'use client'
import React from 'react'
import Image from 'next/image'
import logo from "../images/logo.png"
// import resume from "../images/Zhanerke_Zhumash_Resume_2024"

function Navbar() {
  return (
    <div className='py-9 mb-12 flex justify-between  '> 
    <div style={{ width: '200px', height: '100px', position: 'relative' }}>
      <Image src={logo} layout='fill' objectFit='contain' />
    </div>
    {/* <h1 className='text-slate-300 font-mono text-2xl'>
    Janner's Portfolio
    </h1> */}

    
    <ul className='flex items-center text-slate-300 font-mono'>


      <li>
        <a className =" bg-gradient-to-r from-cyan-700 to-fuchsia-600 px-4 py-2 rounded-md ml-8" href='/'> Home </a>
      </li>
      <li>
        <a className =" bg-gradient-to-r from-cyan-700 to-fuchsia-600 px-4 py-2 rounded-md ml-8" target="_blank" href='https://drive.google.com/file/d/1uOKwR8hkIBTOnTz7zEt-SysbwNZuTA2l/view?usp=sharing'
        rel=" noreferrer"> Resume </a>
      </li>
      <li>
        <a className =" bg-gradient-to-r from-cyan-700 to-fuchsia-600 px-4 py-2 rounded-md ml-8" href='/lab'> Lab </a>
      </li>
    </ul>
  </div>
  )
}

export default Navbar
