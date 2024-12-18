import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Asgaardsofa() {
  return (
    <div>
      <div className='mx-16'>
      <div className='max-w-screen-xl mx-auto py-6 h-[100px] border-[#9F9F9F]'>
        <nav className=" flex items-center space-x-6 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-black">Home</Link>
          <IoIosArrowForward />
          <Link href="/Shop" className="hover:text-black">Shop</Link>
          <IoIosArrowForward />
          <div className='border-l-2 border-[#9F9F9F] pl-6'>
            <span className="text-gray-900">Asgaard Sofa</span>
          </div>
        </nav>
      </div >

      <div className='flex-wrap sm: flex-row flex-1 m w-full h-[820px] border-b'>
        <div className="c w-full h-[730.87px]">
          <div className='h flex w-[553px] h-[500px] space-x-8'>
            <div className="s w-[76px] h-[416px] space-y-6">
              <div className='w-[76px] h-[80px] bg-[#FFF9E5] '>
                <Image
                  src={`/shop img/Outdoor sofa 16.png`}
                  alt={`Thumbnail`}
                  width={83}
                  height={55} />
              </div>

              <div className='w-[76px] h-[80px] bg-[#FFF9E5]'>
                <Image
                  src={`/shop img/Outdoor sofa set_17.png`}
                  alt={`Thumbnail`}
                  width={99}
                  height={66} />
              </div>

              <div className='w-[76px] h-[80px] bg-[#FFF9E5]'>
                <Image
                  src={`/shop img/Stuart sofa 18.png`}
                  alt={`Thumbnail`}
                  width={77}
                  height={115}
                />
              </div>
              <div className='w-[76px] h-[80px] bg-[#FFF9E5]'>
                <Image
                  src={`/shop img/sofa 19.png`}
                  alt={`Thumbnail`}
                  width={74}
                  height={44}
                />
              </div>
            </div>

            <div className='flex items-center justify-center w-[481px] h-[500px] bg-[#FFF9E5]'>
              <Image
                src="/images/Asgaard sofa 1.png"
                alt="Asgaard Sofa"
                width={481}
                height={391}
              />
            </div>
          </div>



          {/* Product Details */}
          <div className='lg:absolute md:sticky sm:sticky  right-2 top-1/4 py-2 w-[606px] h-[730px]'>
            <h1 className="text-[42px] font-normal text-black">Asgaard Sofa</h1>
            <p className="text-2xl text-[#9F9F9F] mt-2">Rs. 250,000.00</p>

            {/* Ratings */}
            <div className="flex items-center space-x-1 mt-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.392 2.47a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.392-2.47a1 1 0 00-1.176 0l-3.392 2.47c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.243 9.393c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69l1.286-3.966z" />
                </svg>
              ))}
              <span className="text-gray-500 text-sm">(5 Customer Review)</span>
            </div>

            {/* Description */}
            <p className="text-black font-normal text-sm mt-4">
              Setting the bar as one of the loudest speakers in its class, the <br /> Kilburn is a compact, stout-hearted hero with a well-balanced <br /> audio which boasts a clear midrange and extended highs for <br /> a sound.
            </p>

            {/* Sizes */}
            <div className="mt-6">
              <p className="font-normal text-[#9F9F9F]">Size</p>
              <div className="flex space-x-2 mt-2">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border border-gray-200 bg-[#FFF9E5] rounded hover:border-black"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mt-6">
              <p className="font-normal text-[#9F9F9F]">Color</p>
              <div className="flex space-x-3 mt-2">
                {["bg-[#816DFA]", "bg-[#000000]", "bg-[#CDBA7B]"].map((color, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full ${color} cursor-pointer border border-gray-300 hover:border-black`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center bg-[#FFFFFF] border border-[#9F9F9F] rounded-[10px] py-2">
                <button className="px-4 py-2">-</button>
                <span className="px-4 py-2">1</span>
                <button className="px-4 py-2">+</button>
              </div>
              <button className="px-10 py-4 rounded-[15px] border border-black hover:bg-[#FFF9E5] font-normal text-xl">
                <Link href="/About/Cart">Add to Cart</Link>
              </button>
            </div>

            {/* Product Info */}
            <div className="mt-8 py-8 space-y-4 border-t border-[#D9D9D9] text-[#9F9F9F]">
              <p className="text-normal">SKU
                <strong className='ml-24'>:</strong> SS001
              </p>
              <p className="text-normal">Category
                <strong className='ml-16'>:</strong> Sofas
              </p>
              <p className="text-normal ">Tags
                <strong className='ml-24'>:</strong> Sofa, Chair, Home, Shop
              </p>

              <p className="flex space-x-4 text-normal">Share
                <strong className='ml-24'>:</strong>
                <FaFacebook className='text-black w-5 h-5' />
                <FaLinkedin className='text-black w-5 h-5' />
                <AiFillTwitterCircle className='text-black w-6 h-6 '
                />
                <Image src="/shop img/Vector (4).png" alt="Vector"
                  width={25}
                  height={31.21} className='absolute left-96
                '/></p>
            </div>
          </div>
        </div>
      </div>
      </div>


      {/* section 2 */}

      <div className=' w-full h-[700px] mx-auto  sm:mt-96 border-b border-[#D9D9D9]'>
        <div className='flex items-center justify-center gap-8 w-full h-9 mt-8'>
          <h5>Description</h5>
          <h5 className='text-[#9F9F9F]'>Additional Information</h5>
          <h5 className='text-[#9F9F9F]'>Reviews [5]</h5>
        </div>



        <div className='mx-auto mt-6 w-[1026px] h-[174px] text-[#9F9F9F] font-normal text-base'>
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br />sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p className='mt-4'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br />speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br />and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>


        <div className=' lg:flex sm:flex-wrap   w-[1239px] h-[348px] gap-6 mt-8'>
          <div className='w-[605px] h-[348px] bg-[#FFF9E5]'>
            <Image
              src="/shop img/cloud sofa 20.png"
              alt="Asgaard Sofa"
              width={828}
              height={551}
            />
          </div>
          <div className='w-[605px] h-[348px] bg-[#FFF9E5]'>
            <Image
              src="/shop img/cloud sofa 21.png"
              alt="Asgaard Sofa"
              width={657}
              height={436}
            />

          </div>
        </div>
      </div>


      {/* section 3 */}

      {/* Row 1 */}
      <div className='w-full h-[400px] flex justify-center items-center lg:mt-8 sm:mt-96  '>
        <div className='w-[80%] h-full'>
          <span className='flex justify-center text-4xl pb-5 font-medium'>Related products</span>

          {/* {/Products Boxes/} */}

          <div className='lg:flex md:grid-cols-2 sm:grid-cols-2 justify-between my-8'>
            <div className=''>
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
          <div className="flex items-center justify-center">
            <button className="inline-flex  text-black py-2 focus:outline-none text-lg border-b-2 border-black ">
              View More
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

