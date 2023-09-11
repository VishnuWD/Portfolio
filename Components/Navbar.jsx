import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around h-[100px] items-center absolute top-0 left-0 right-0 z-50 text-white'>
        <h1 className='font-semibold text-[2rem] '>{"<Vishnu/>"}</h1>
        <ul className='flex gap-[8vw] cursor-pointer'>
            <a href="/#about"><li className='navlist relative'>About Me</li></a>
           <a href="/#projects"><li className='navlist relative'>Projects</li></a> 
            <li className='navlist relative'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar