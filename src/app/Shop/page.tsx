import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export default function Shop() {
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
            <span className="text-4xl font-bold">Shop</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          {/* <h5 className="text-lg font-medium">Home</h5> */}
          <Link href="/">Home
          </Link>
          <IoIosArrowForward />
        <Link href="/Shop/Asgaard-sofa">Shop</Link>
          {/* <h5 className="text-lg font-medium">Shop</h5> */}
        </div>
      </div>

      {/* section 2 */}

      <div className="w-full sm:space-x-5 justify-between mt-6 bg-[#FAF4F4]">
        <div className="max-w-screen-xl mx-auto flex items-center justify-evenly p-6">
          {/* Filter Section */}
          <div className='sm:flex sm:gap-14'>
          <div className="flex sm:flex sm:justify-between items-center space-x-2">
            <Image
              src="/shop img/Vector (1).png"
              alt="adjustment"
              width={25}
              height={25}
            />
            <h3 className="font-normal text-xl text-black">Filter</h3>
          </div>

          {/* Icons Section */}
          <div className="flex items-center sm: -mx-10 space-x-4">
            <div className="w-7 h-7 mt-3">
              <Image
                src="/shop img/Vector (2).png"
                alt="vector"
                width={16.36}
                height={16.36}
              />
            </div>
            <div className="w-7 h-7 mt-2">
              <Image
                src="/shop img/Vector (3).png"
                alt="vector"
                width={21}
                height={19.5}
              />
            </div>
          </div></div>

          {/* Showing Results Section */}
          <div className='sm:flex sm:gap-10'>
          <div className="border-l-2 sm:ml-14 border-[#9F9F9F] pl-6">
            <p className="font-normal sm:text-balance text-base">Showing 1-16 of 32 results</p>
          </div>

          {/* Show Items Section */}
          <div className="flex sm:flex-wrap sm:ml-20 items-center ml-40 space-x-4">
            <h5 className="font-normal text-xl sm:text-center text-black">Show</h5>
            <p className="font-normal text-xl text-[#9F9F9F] bg-white px-4 py-3 ">
              16
            </p>
          </div>

          {/* Sort By Section */}
          <div className="flex sm:flex-wrap items-center space-x-2 mr-6">
            <span className="font-normal text-xl text-black">Short by</span>
            <div className="w-[150px]">
              <p className="font-normal text-xl text-[#9F9F9F] bg-white px-4 py-3 ">
                Default
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* section 3 */}

      {/* Row 1 */}
      <div className='w-full h-[400px] flex sm:grid-cols-2  justify-center items-center '>
        <div className='w-[80%] h-full'>

          {/* {/Products Boxes/} */}

          <div className='flex justify-between  max-sm:grid    my-8'>
            <div>
              <div className='w-[220px] h-[200px] flex justify-center items-center'>
                <Image src="/images/Trenton modular sofa_3 1.png"
                  alt="sofa"
                  width={200}
                  height={200} />

              </div>
              {/**Title */}
              <div className='flex flex-col'>
                <span className='font-normal mt-4'>Trenton modular sofa_3</span>
                <span className='font-semibold'>Rs. 25,000.00</span>
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
                <span className='font-semibold'>Rs. 25,000.00</span>
              </div>
            </div>
            <div>
              <div>
                <div className='w-[220px] h-[200px] flex justify-center items-center'>
                  <Image src="/images/Outdoor bar table and stool 1.png"
                    alt="stool"
                    width={200}
                    height={200} />
                </div>
                {/**Title */}
                <div className='flex flex-col'>
                  <span className='font-normal mt-4'>Outdoor bar table and <br /> stool</span>
                  <span className='font-semibold'>Rs. 25,000.00</span>
                </div>
              </div>
            </div>
            <div>
              <div className='w-[220px] h-[200px]  flex justify-center items-center'>
                <Image src="/images/Plain console with teak mirror 1.png"
                  alt="mirror"
                  width={200}
                  height={200} />
              </div>
              {/**Title */}
              <div className='flex flex-col'>
                <span className='font-normal mt-4'>Plain console with teak <br />mirror</span>
                <span className='font-semibold'>Rs. 25,000.00</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Row 2 */}
      <div className='w-full h-[400px] md:flex max-sm:grid-cols-2 justify-center items-center '>
        <div className='w-[80%] h-full'>

          {/* {/Products Boxes/} */}

          <div className='flex justify-between my-8'>
            <div>
              <div className='w-[220px] h-[200px] flex justify-center items-center'>
                <Image src="/shop img/office table 5.png"
                  alt=" table"
                  width={200}
                  height={200} />

              </div>
              {/**Title */}
              <div className='flex flex-col'>
                <span className='font-normal mt-4'>Grain coffee table</span>
                <span className='font-semibold'>Rs. 15,000.00</span>
              </div>
            </div>
            <div>
              <div className='w-[220px] h-[200px]  flex justify-center items-center'>
                <Image src="/shop img/cofee table 6.png"
                  alt="cofee table"
                  width={200}
                  height={200} />
              </div>
              {/**Title */}
              <div className='flex flex-col'>
                <span className='font-normal mt-4'>Kent coffee table</span>
                <span className='font-semibold'>Rs. 225,000.00</span>
              </div>
            </div>
            <div>
              <div>
                <div className='w-[220px] h-[200px] flex justify-center items-center'>
                  <Image src="/shop img/round table 7.png"
                    alt="round table"
                    width={200}
                    height={200} />
                </div>
                {/**Title */}
                <div className='flex flex-col'>
                  <span className='font-normal mt-4'>Round coffee table_color <br /> 2</span>
                  <span className='font-semibold'>Rs. 251,000.00</span>
                </div>
              </div>
            </div>
            <div>
              <div className='w-[220px] h-[200px]  flex justify-center items-center'>
                <Image src="/shop img/Reclaimed table 8.png"
                  alt="table"
                  width={200}
                  height={200} />
              </div>
              {/**Title */}
              <div className='flex flex-col'>
                <span className='font-normal mt-4'>Reclaimed teak coffee <br />table</span>
                <span className='font-semibold'>Rs. 25,200.00</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Row 3 */}
      <div className='w-full h-[400px] md:flex sm:grid-cols-2 justify-center items-center '>
        <div className='w-[80%] h-full'>

          {/* {/Products Boxes/} */}

          <div className='flex justify-between my-8'>
            <div>
              <div className='w-[220px] h-[200px] flex justify-center items-center'>
                <Image src="/shop img/Plain console 9.png"
                  alt="plain"
                  width={200}
                  height={200} />

              </div>
              {/**Title */}
              <div className='flex flex-col'>
                <span className='font-normal mt-4'>Plain console_</span>
                <span className='font-semibold'>Rs. 258,200.00</span>
              </div>
            </div>
            <div>
              <div className='w-[220px] h-[200px]  flex justify-center items-center'>
                <Image src="/shop img/Sideboard 10.png"
                  alt="sideboard"
                  width={200}
                  height={200} />
              </div>
              {/**Title */}
              <div className='flex flex-col'>
                <span className='font-normal mt-4'>Reclaimed teak Sideboard</span>
                <span className='font-semibold'>Rs. 20,000.00</span>
              </div>
            </div>
            <div>
              <div>
                <div className='w-[220px] h-[200px] flex justify-center items-center'>
                  <Image src="/shop img/four chair 11.png"
                    alt="chair"
                    width={200}
                    height={200} />
                </div>
                {/**Title */}
                <div className='flex flex-col'>
                  <span className='font-normal mt-4'>SJP_0825 </span>
                  <span className='font-semibold'>Rs. 200,000.00</span>
                </div>
              </div>
            </div>
            <div>
              <div className='w-[220px] h-[200px]  flex justify-center items-center'>
                <Image src="/shop img/Bella chair 12.png"
                  alt="chair"
                  width={200}
                  height={200} />
              </div>
              {/**Title */}
              <div className='flex flex-col'>
                <span className='font-normal mt-4'>Bella chair and table</span>
                <span className='font-semibold'>Rs. 100,000.00</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Row 4 */}
      <div className='w-full h-[400px] md:flex sm:grid-cols-2 justify-center items-center '>
        <div className='w-[80%] h-full'>

          {/* {/Products Boxes/} */}

          <div className='flex justify-between my-8'>
            <div>
              <div className='w-[220px] h-[200px] flex justify-center items-center'>
                <Image src="/images/Granite square side table 1.png"
                  alt="side table"
                  width={200}
                  height={200} />

              </div>
              {/**Title */}
              <div className='flex flex-col'>
                <span className='font-normal mt-4'>Granite square side table</span>
                <span className='font-semibold'>Rs. 258,800.00</span>
              </div>
            </div>
            <div>
              <div className='w-[220px] h-[200px]  flex justify-center items-center'>
                <Image src="/images/Asgaard sofa 1.png"
                  alt="sofa"
                  width={200}
                  height={200} />
              </div>
              {/**Title */}
              <div className='flex flex-col mt-4'>
              <Link href="/Shop/Asgaard-sofa">Asgaard sofa</Link>
                <span className='font-semibold'>Rs. 250,000.00</span>
              </div>
            </div>
            <div>
              <div>
                <div className='w-[220px] h-[200px] flex justify-center items-center'>
                  <Image src="/shop img/Maya sofa 15.png"
                    alt="sofa"
                    width={200}
                    height={200} />
                </div>
                {/**Title */}
                <div className='flex flex-col'>
                  <span className='font-normal mt-4'>Maya sofa three seater</span>
                  <span className='font-semibold'>Rs. 115,000.00</span>
                </div>
              </div>
            </div>
            <div>
              <div className='w-[220px] h-[200px]  flex justify-center items-center'>
                <Image src="/shop img/Outdoor sofa 16.png"
                  alt="sofa"
                  width={200}
                  height={200} />
              </div>
              {/**Title */}
              <div className='flex flex-col'>
                <span className='font-normal mt-4'>Outdoor sofa set</span>
                <span className='font-semibold'>Rs. 244,000.00</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='w-full h-[62px] rounded-[10px] flex items-center justify-center gap-4 text-center'>
        <div className='w-[60px] h-[60px] rounded-[10px]'>
          <p className="font-normal text-xl text-black bg-[#FBEBB5] px-4 py-3 ">
            1
          </p>

        </div>
        <div className='w-[60px] h-[60px] rounded-[10px]'>
          <p className="font-normal text-xl text-black bg-[#FFF9E5] px-4 py-3 ">
            2
          </p>
        </div>
        <div className='w-[60px] h-[60px] rounded-[10px]'>
          <p className="font-normal text-xl text-black bg-[#FFF9E5] px-4 py-3 ">
            3
          </p>
        </div>
        <div className='w-[98px] h-[60px] rounded-[10px]'>
          <p className="font-normal text-xl text-black bg-[#FFF9E5] px-4 py-3 ">
            Next
          </p>
        </div>
      </div>

      {/* section 4 */}

      <div className=' flex lg:flex  sm:grid sm:gap-8 items-center justify-center w-full h-[400px] space-x-3 bg-[#FAF4F4] mt-12'>
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
