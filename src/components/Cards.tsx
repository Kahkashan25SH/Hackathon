import Image from 'next/image'
import React from 'react'

export default function Cards() {
    return (
        <div>
            <div className='w-full h-[600px] flex justify-center items-center mt-16'>
                <div className='w-[80%] h-full'>
                    {/* *top side */}

                    <div>
                        <span className='flex justify-center text-4xl pb-5 font-bold'>Top Picks For You</span>
                        <div className="flex justify-center">
                            <h3 className='mt-5 text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h3>
                        </div>
                    </div>
                    {/* {/Products Boxes/} */}

                    <div className='flex justify-between my-32'>
                        <div>
                            <div className='w-[220px] h-[200px] flex justify-center items-center'>
                                <Image src="/images/Trenton modular sofa_3 1.png"
                                    alt="dining table"
                                    width={200}
                                    height={200} />

                            </div>
                            {/**Title */}
                            <div className='flex flex-col'>
                                <span className='font-normal mt-4'>Trenton modular sofa_3</span>
                                <span className='font-medium'>Rs. 25,000.00</span>
                            </div>
                        </div>
                        <div>
                            <div className='w-[220px] h-[200px]  flex justify-center items-center'>
                                <Image src="/images/Granite dining table with dining chair 1.png"
                                    alt="dining table"
                                    width={200}
                                    height={200} />
                            </div>
                            {/**Title */}
                            <div className='flex flex-col'>
                                <span className='font-normal mt-4'>Granite dining table with <br />dining chair</span>
                                <span className='font-medium'>Rs. 25,000.00</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='w-[220px] h-[200px] flex justify-center items-center'>
                                    <Image src="/images/Outdoor bar table and stool 1.png"
                                        alt="CPU"
                                        width={200}
                                        height={200} />
                                </div>
                                {/**Title */}
                                <div className='flex flex-col'>
                                    <span className='font-normal mt-4'>Outdoor bar table and <br /> stool</span>
                                    <span className='font-medium'>Rs. 25,000.00</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='w-[220px] h-[200px]  flex justify-center items-center'>
                                <Image src="/images/Plain console with teak mirror 1.png"
                                    alt="Bookshelf"
                                    width={200}
                                    height={200} />
                            </div>
                            {/**Title */}
                            <div className='flex flex-col'>
                                <span className='font-normal mt-4'>Plain console with teak <br />mirror</span>
                                <span className='font-medium'>Rs. 25,000.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="inline-flex  text-black py-2 focus:outline-none text-lg ">
                            View More
                        </button>
                    </div>
                </div>
            </div>


            {/* launge area */}

            <div>
                <section className="text-slate-900  bg-yellow-100 my-32">
                    <div className="container  h-[360px] mx-auto flex px-5 lg:py-24 md:flex-row flex-col items-center ">
                        <div className="lg:max-w-lg md:w-1/2 ">
                            <Image src="/images/Asgaard sofa 1.png"
                                alt="Rocket single seater"
                                width={500}
                                height={500} />

                        </div>


                        {/* Right Content */}
                        <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8  md:items-start md:text-left md:mb-0 px-32">
                            <h5 className="font-medium">New Arrivals</h5>
                            <h1 className="title-font sm:text-5xl text-3xl mb-6 font-bold text-gray-900">
                                Asgaard sofa
                            </h1>
                            <div className="flex justify-center md:justify-start">
                                <button className="inline-flex text-black py-1 px-10 focus:outline-none text-lg border border-black transition-all duration-200 ">
                                    Other Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
