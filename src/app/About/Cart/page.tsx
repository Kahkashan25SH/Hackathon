import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
    return (
        <div>
            <div className="relative w-full h-[316px] bg-cover bg-center" style={{ backgroundImage: "url('/shop img/Rectangle 1.png')" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/shop img/Meubel House_Logos-05.png"
                            alt="logo"
                            width={77}
                            height={77}
                            className="mb-2"
                        />
                        <span className="text-4xl font-bold">Cart</span>
                    </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                    <Link href="#">Home
                    </Link>
                    <IoIosArrowForward />
                    <Link href="#">Cart</Link>
                </div>
            </div>

            {/* section 2 */}

            <div className='w-full h-[525px]'>
                <div className='lg:flex md:flex sm:flex-col w-full h-[390px] py-12 '>
                    <div className=' w-[700px] h-[216px] mx-8'>
                        <div className='flex justify-center items-center gap-20 p-[12px] bg-[#FFF9E5]'>
                            <span>Product Name</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Total</span>
                        </div>
                        
                    </div>
                    <div className='flex'>
                    <div className='flex  items-center my-10 space-x-8 w-full h-[150px]'>
                            <Image src="/images/Asgaard sofa 1.png"
                                alt="sofa"
                                width={112.99}
                                height={106} className='bg-[#FFF9E5]' />


                            <span className='text-gray-400'>Asgaard sofa</span>
                            <span className='text-[#9F9F9F]'>Rs. 250,000.00</span>
                            <span className='border border-[#9F9F9F] px-2 rounded-[5px]'>1</span>
                            <span>Rs. 250,000.00</span>
                            <Image src="/Shop img/Vector (5).png" alt="dustbin" width={21} height={21.88} />
                        </div>
                    <div className='w-[463px] h-[320px] sm:text-center sm:ml-20 sm:mt-8 px-12 bg-[#FFF9E5]'>
                        <h2 className="text-center mt-8 text-2xl font-bold">Cart Total</h2>
                        <div className="flex justify-between text-base font-normal my-8">
                            <span>Subtotal</span>
                            <span className='text-[#9F9F9F]'>Rs. 250,000.00</span>
                        </div>
                        <div className="flex justify-between text-base font-normal mb-8 pb-6">
                            <span>Total</span>
                            <span className="text-[#B88E2F] font-bold ">Rs. 250,000.00</span>
                        </div>
                        <button className="w-[222px] h-[58.95px] mx-16 border border-black py-3 sm:mb-5 rounded-[14px] hover:bg-gray-100 transition">
                            <Link href="/About/Checkout">Check Out</Link>
                        </button>
                    </div>
                    </div>
                </div>
            </div>


            {/* section 3 */}

            <div className=' flex lg:flex  sm:grid sm:gap-8 sm:mt-24  items-center justify-center w-full h-[400px] space-x-3 bg-[#FAF4F4]'>
                <div className='w-[376px] h-[108px]'>
                    <h5 className='w-[205px] h-[48px] font-medium text-3xl'>Free Delivery</h5>
                    <p className='font-normal text-xl text-[#9F9F9F]'>For all orders over $50, consectetur <br /> adipim scing elit.</p>
                </div>
                <div className='w-[376px] h-[108px]'>
                    <h5 className='w-[244px] h-[48px] font-medium text-3xl '>90 Days Return</h5>
                    <p className='font-normal text-xl text-[#9F9F9F]'>If goods have problems, consectetur adipim scing elit..</p>
                </div>
                <div className='w-[376px] h-[108px]'>
                    <h5 className='w-[265px] h-[48px] font-medium text-3xl'>Secure Payment</h5>
                    <p className='font-normal text-xl text-[#9F9F9F]'>100% secure payment, consectetur adipim scing elit..</p>
                </div>
            </div>
        </div>
    )
}

