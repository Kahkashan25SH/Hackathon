import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsPersonExclamation } from 'react-icons/bs'
import { CiHeart, CiSearch } from 'react-icons/ci'

export default function Navbar() {
  return (
    <div>
      <nav className='flex justify-evenly p-5 bg-[#FBEBB5]'>
           <ul className='lg:gap-20 sm:flex sm:gap-10  md:flex'>
              <li className='menulink'><Link href='/'>Home</Link></li>  {/* Use `/` for Home */}
              <li className='menulink'><Link href='/Shop'>Shop</Link></li>
              <li className='menulink'><Link href='/About'>About</Link></li>
              <li className='menulink'><Link href='/Contact'>Contact</Link></li>
          
           </ul> 

      {/* Right Section: Icons */}
      <div className="flex items-center gap-6 text-black">
        <Link href="/About"><BsPersonExclamation className="text-[20px] cursor-pointer" /></Link>
        <CiSearch className="text-[20px] cursor-pointer" />
        <CiHeart className="text-[20px] cursor-pointer" />
        
        <Link href="/Shop/Cart-sidebar"><AiOutlineShoppingCart 
        className="text-[20px] cursor-pointer" /></Link>
      </div>
    </nav>
    </div>
  )
}
