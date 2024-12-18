import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa";

export default function Blog() {
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
            <span className="text-4xl font-bold">Blog</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <Link href="#">Home
          </Link>
          <IoIosArrowForward />
          <Link href="#">Blog</Link>
        </div>
      </div>

      {/* section 2 */}

      <div className="w-full flex flex-wrap gap-12 mt-8">

        {/* Card 1 */}
        <div className='px-14 py-12 w-[750px] h-[800px] '>
          <div className="bg-opacity-75">
            <Image src="/images/Blog-1.png" alt="laptop"
              width={817} height={500} className='rounded-[10px]' />
            <div className="icon leading-none flex bottom-0 left-0 w-[349px] h-[24px] gap-8 mt-4">
              <span className="text-[#9F9F9F] inline-flex items-center leading-none text-base">
                <IoIosPerson /> Admin
              </span>
              <span className="text-[#9F9F9F] inline-flex items-center leading-none text-base">
                <FaCalendar /> 14 Oct 2022
              </span>
              <span className="text-[#9F9F9F] inline-flex items-center leading-none text-base">
                <FaTag /> Wood
              </span>
            </div>
            <h2 className="leading-relaxed mb-3 text-black font-medium text-[30px]">Going all-in with millennial design</h2>
            <p className='font-normal text-[#9F9F9F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <a className="text-black inline-flex items-center border-b-2 border-black font-normal text-base mt-10">Read More
            </a>
          </div>
        </div>

        {/* Card 2 */}

        <div className='content px-14 py-12 w-[750px] h-[800px]  '>
          <div className="bg-opacity-75">
            <Image src="/images/Blog-2.png" alt="laptop"
              width={817} height={500} className='rounded-[10px]' />
            <div className="icon leading-none flex bottom-0 left-0 w-[349px] h-[24px] gap-8 mt-4">
              <span className="text-[#9F9F9F] inline-flex items-center leading-none text-base">
                <IoIosPerson /> Admin
              </span>
              <span className="text-[#9F9F9F] inline-flex items-center leading-none text-base">
                <FaCalendar /> 14 Oct 2022
              </span>
              <span className="text-[#9F9F9F] inline-flex items-center leading-none text-base">
                <FaTag /> Handmade
              </span>
            </div>
            <h2 className="leading-relaxed mb-3 text-black font-medium text-[30px]">Exploring new ways of decorating</h2>
            <p className='font-normal text-[#9F9F9F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <a className="text-black inline-flex items-center border-b-2 border-black font-normal text-base mt-10">Read More
            </a>
          </div>
        </div>

        {/* Card 3 */}

        <div className='content px-14 py-12 w-[750px] h-[800px]  '>
          <div className="bg-opacity-75">
            <Image src="/images/Blog-3.png" alt="laptop"
              width={817} height={500} className='rounded-[10px]' />
            <div className="icon leading-none flex bottom-0 left-0 w-[349px] h-[24px] gap-8 mt-4">
              <span className="text-[#9F9F9F] inline-flex items-center leading-none text-base">
                <IoIosPerson /> Admin
              </span>
              <span className="text-[#9F9F9F] inline-flex items-center leading-none text-base">
                <FaCalendar /> 14 Oct 2022
              </span>
              <span className="text-[#9F9F9F] inline-flex items-center leading-none text-base">
                <FaTag /> Wood
              </span>
            </div>
            <h2 className="leading-relaxed mb-3 text-black font-medium text-[30px]">Handmade pieces that took time to make</h2>
            <p className='font-normal text-[#9F9F9F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <a className="text-black inline-flex items-center border-b-2 border-black font-normal text-base mt-10">Read More
            </a>
          </div>
        </div>



        {/* Right Sidebar */}
        <div className="absolute right-2 mr-36 ">
          {/* Search Bar */}
          <div className=" my-12">
            <div className="flex items-center border border-[#9F9F9F] rounded-lg p-4">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow outline-none px-2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1111 5a6 6 0 016 6z"
                />
              </svg>
            </div>
          </div>

          {/* Category Title */}
          <h2 className="text-lg font-semibold mb-6 ">Category</h2>

          {/* Content Items */}
          <div className="text-[#9F9F9F] space-y-14">

            <div className="flex items-center justify-between">
              <span>Craft</span>
              <span>2</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Design</span>
              <span>8</span>
            </div>
            <div className="flex items-center justify-between">

              <span>Handmade</span>
              <span>7</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Interior</span>
              <span>1</span>
            </div>

            <div className="flex items-center justify-between pb-2">
              <span>Wood</span>
              <span>6</span>
            </div>
          </div>

          {/* Recent Post */}
          <div className="flex-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <h2 className="text-lg font-semibold mt-48 mb-8 ">Recent Post</h2>
            <div className="flex rounded-md gap-6">
              <Image src="/images/Blog-4.png" alt="" width={80} height={80} className="text-4xl" />
              <h3 className="font-normal text-base">Going all-in with <br /> millennial design
                <p className="text-[#9F9F9F] text-sm">03 Aug 2022
                </p>
              </h3>
            </div>


            <div className="flex rounded-md gap-6 mt-10">
              <Image src="/images/Blog-5.png" alt="" width={80} height={80} className="text-4xl" />
              <h3 className="font-normal text-base">Exploring new ways <br />of decorating
                <p className="text-[#9F9F9F] text-sm">03 Aug 2022
                </p>
              </h3>
            </div>

            {/* */}
            <div className="flex rounded-md gap-6 mt-10">
              <Image src="/images/Blog-6.png" alt="" width={80} height={80} className="text-4xl" />
              <h3 className="font-normal text-base">Handmade pieces <br /> that took time to make
                <p className="text-[#9F9F9F] text-sm">03 Aug 2022
                </p>
              </h3>
            </div>


            <div className="flex rounded-md gap-6 mt-10">
              <Image src="/images/Blog-7.png" alt="" width={80} height={80} className="text-4xl" />
              <h3 className="font-normal text-base">Modern home in <br />Milan
                <p className="text-[#9F9F9F] text-sm">03 Aug 2022
                </p>
              </h3>
            </div>





            <div className="flex rounded-md gap-6 mt-10">
              <Image src="/images/Blog-8.png" alt="" width={80} height={80} className="text-4xl" />
              <h3 className="font-normal text-base">Colorful office <br />redesign
                <p className="text-[#9F9F9F] text-sm">03 Aug 2022
                </p>
              </h3>
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







      </div>



      <div className=' flex items-center justify-center w-full h-[300px] space-x-3 bg-[#FAF4F4] mt-12'>
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

