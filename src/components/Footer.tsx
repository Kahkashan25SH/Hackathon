import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="my-16 mx-10 text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <p className="mt-2 text-sm text-gray-600">400 University Drive Suite 200 Coral Gables, <br />
                            FL 33134 USA</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">Link</h2>
                            <nav className="list-none mb-10 ">
                                <li>
                                    <a className="text-gray-900 hover:text-blue-800">Home</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-blue-800">Shop</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-blue-800">About</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-blue-800">Contact</a>
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
                                    <a className="text-gray-600 hover:text-blue-800 border-black border-b ">Subscribe</a>
                                </li>
                            </nav>
                        </div>
                        {/* Bottom Section */}
                        <div className=" py-8 border-gray-200 border-t text-normal">
                            <p className="pt-4">2022 Meubel House. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
