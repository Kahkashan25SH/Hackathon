import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <footer className="my-16 mx-10 text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-autotext-center md:text-left">
                        <p className="mt-2 text-sm text-gray-600">400 University Drive Suite 200 Coral Gables, <br />
                            FL 33134 USA</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center ">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                            <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">Link</h2>
                            <nav className="list-none mb-10 ">
                            <li>
                                    <Link href="/" className="text-gray-900 hover:text-blue-800">Home</Link>
                                </li>
                                <li>
                                    <Link href="/Shop" className="text-gray-900 hover:text-blue-800">Shop</Link>
                                </li>
                                <li>
                                    <Link href="/About" className="text-gray-900 hover:text-blue-800">About</Link>
                                </li>
                                <li>
                                    <Link href="/Contact" className="text-gray-900 hover:text-blue-800">Contact</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">Help</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-900 hover:text-blue-800">Payment Option</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-blue-800">Return</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-blue-800">Privacy Policy</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">Newsletter</h2>
                            <nav className="flex list-none mb-10">
                                <input type="email" placeholder="Enter Your Email Address" className=" text-gray-900 hover:text-blue-800 border-b border-gray-900" >
                                </input>
                                <li className='pl-2'>
                                    <a className="text-black hover:text-blue-800 border-black border-b ">Subscribe</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className=" w-full h-[59px] border-t border-[#D9D9D9]">
                    <p className=" w-[306px] h-6 font-normal text-base text-black">2022 Meubel House. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
