import React from 'react'
import { CiLock } from "react-icons/ci";
import Image from 'next/image';
import { AiTwotoneCloseCircle } from "react-icons/ai";


export default function Cartsidebar() {
  return (
    <main>
     
            <div className='absolute justify-between bg-slate-100 rounded-xl px-5  py-5'>
      <div className=' mb-80  '>
        <div className='flex justify-between gap-32 text-2xl   text-black font-bold px-5  '>
        <h1>Shopping Cart  </h1> 
      <CiLock />
      </div>
      <div className='bg-gray-400 h-0.5 w-64 my-4  opacity-50'></div>
     <div className='flex justify-between '>
     <div className='bg-yellow-200 rounded-xl  '>
     <Image     src={`/images/Asgaard sofa 1.png`}
                  alt={`Thumbnail`}
                  width={100}
                  height={66}
                  className='relative' >
     </Image>
   
     </div>
     <div className='text-xl'>
     <h1> Asgaard Sofa </h1>
     <span className='flex gap-5 '> 1 x<h3 className='text-yellow-500'>Rs.250.000.00</h3>
     <AiTwotoneCloseCircle  className='text-2xl'/></span>

     </div>
     </div>
      </div>
      {/* bottom side */}
<div className='flex justify-between text-2xl font-bold my-9'>
  <h1>Subtotal</h1>
  <h1 className='text-yellow-600'>250.000.00</h1>
</div>
<div className='bg-gray-400 h-0.5 w-full my-4  opacity-50'></div>
<div className='flex justify-between'>
  <button className='border border-black px-5 py-1 rounded-3xl'>View Cart</button>
  <button className='border border-black px-5 py-1 rounded-3xl'>checkout</button>
</div>
</div>
    </main>
  )
}
