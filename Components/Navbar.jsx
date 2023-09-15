import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around h-[15vh] w-full items-center absolute top-0 left-0 right-0 z-50 text-white'>
        <h1 className='font-semibold text-[5vmin] '>{"<Vishnu/>"}</h1>
        <ul className='flex gap-[15vmin] cursor-none'>
            <a href="/#about"><li className='navlist text-[2.5vmin] relative  cursor-none'>About Me</li></a>
           <a href="/#projects"><li className='navlist text-[2.5vmin] relative cursor-none' >Projects</li></a> 
            <li className='navlist text-[2.5vmin] relative cursor-none'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar