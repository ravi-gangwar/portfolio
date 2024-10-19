import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  return (
    <nav className='flex items-center justify-between'>
      <h2 className='text-zinc-50'>Ravi <br /> Gangwar</h2>
      <GiHamburgerMenu size={30} className='text-zinc-50 md:hidden' />
      <ul className='hidden md:flex gap-10 text-zinc-50'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav
