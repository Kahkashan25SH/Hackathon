import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsPersonExclamation } from 'react-icons/bs'
import { CiHeart, CiSearch } from 'react-icons/ci'

export default function Navbar() {
  return (
    <div>
      <nav className='flex bg-[#FBEBB5] justify-evenly p-5'>
           <ul className='lg:gap-20 md:flex'>
              <li className='menulink'><Link href='/'>Home</Link></li> {/* Use `/` for Home */}
              <li className='menulink'><Link href='/shop'>Shop</Link></li>
              <li className='menulink'><Link href='/about'>About</Link></li>
              <li className='menulink'><Link href='/contact'>Contact</Link></li>
          
           </ul>

      {/* Right Section: Icons */}
      <div className="flex items-center gap-6 text-black">
        <BsPersonExclamation className="text-[20px] cursor-pointer" />
        <CiSearch className="text-[20px] cursor-pointer" />
        <CiHeart className="text-[20px] cursor-pointer" />
        <AiOutlineShoppingCart className="text-[20px] cursor-pointer" />
      </div>
    </nav>
    </div>
  )
}
