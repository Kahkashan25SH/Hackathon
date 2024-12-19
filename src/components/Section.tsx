import Image from 'next/image'
import React from 'react'

export default function Section() {
  return (
    <div>
       <section className="text-slate-900 body-font bg-[#FBEBB5] ">
        <div className="container mx-auto flex gap-20 px-5 py-5 lg:py-24 md:flex-row sm:flex-row flex-col items-center">
          {/* Left Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-3xl  md:text-3xl text-5xl mb-6 font-semibold text-gray-900">
              Rocket Single <br /> Seater
            </h1>
            <div className="flex justify-center md:justify-start">
              <button className="inline-flex font-semibold text-xl text-black py-2 focus:outline-none  border-b border-black transition-all duration-200">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:max-w-lg sm:w-1/2 md:w-1/2 w-full">
          <Image src="/images/Rocket single seater 1.png" 
          alt="seater" 
          width={500} 
          height={400} />

        
            
          </div>
        </div>
      </section>


      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto bg-[#FAFAFA] p-5 md:p-10 gap-8">
        {/* Text Section with Image */}
        <div className="relative flex flex-col justify-center items-center">
          <Image
            src="/images/Granite square side table 1.png"
            alt="Granite Square Side Table"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg"
            width={400}
            height={300}
          />
          <p className="absolute bottom-16 text-3xl md:text-4xl font-medium text-black">
            Side table
          </p>
          <button className="absolute bottom-4 text-black text-lg border-b border-black hover:text-gray-600 transition-all">
            View More
          </button>
        </div>

        {/* Image Section with Text */}
        <div className="relative flex flex-col justify-center items-center">
          <Image
            src="/images/Cloud sofa three seater + ottoman_3 1.png"
            alt="Cloud Sofa Three Seater"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg"
            width={400}
            height={300}
          />
          <p className="absolute bottom-16 text-3xl md:text-4xl font-medium text-black">
            Side table
          </p>
          <button className="absolute bottom-4 text-black text-lg border-b border-black hover:text-gray-600 transition-all">
            View More
          </button>
        </div>
      </div>
    </div>
  )
}
