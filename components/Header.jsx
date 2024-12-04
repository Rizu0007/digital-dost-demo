/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Header() {
  return (
    <>
      <div className='flex xs:flex-col md:flex-row bg-white  bg-no-repeat bg-right-top pt-5 pb-60'>
      <div className="absolute md:top-48 top-32 right-9  md:right-16 ">
        <Image src="/Header/final-arrow.png" width={350} height={300}  alt="About"
        
        className='md:w-[350px] md:h-[400px]  w-[200px] h-[200px]'/>
      </div>


        <div className='xs:w-full md:w-[60%] xs:pb-20 xs:pt-10 sm:py-20 xs:pl-0 md:pl-20 md:space-y-16 space-y-4 py-10 mt-3 mx-5'>
          <div className='flex items-center justify-between'>

            <p className="text-black font-bold leading-[80px]  w-full xs:text-2xl sm:text-4xl md:text-5xl lg:text-5xl ">
            Unlock Business Growth Through ROI-Focused Digital Marketing

            </p>
            

            {/* Rotating Image for Mobile */}
            <Link href='/calendly'>
              <div className="relative flex justify-center items-center w-[170px] h-[170px] hover-pop-out mr-5 md:hidden">
                {/* Outer Circular Text Image with Spinning Animation */}
                <div className="absolute inset-0 flex justify-center items-center animate-spin-slow pop-out">
                  <Image
                    src="/Header/rotte.svg"
                    alt="Circular Text"
                    className="w-full h-full object-contain hidden lg:block"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/Header/rotatesmall.svg"
                    alt="Circular Text"
                    className="w-full h-full object-contain lg:hidden"
                    width={50}
                    height={50}
                  />
                </div>

                {/* Blue Circle with Arrow */}
                <div className="bg-[#00729f] h-[75px] w-[75px] rounded-full flex justify-center items-center shadow-lg z-10 pop-out-fast">
                  <Image
                    src="/Header/arrowup.svg"
                    alt="Arrow Up"
                    className="w-5 h-5" // Adjusted size for the arrow icon
                    width={70}
                    height={70}
                  />
                </div>
              </div>
            </Link>
          </div>

          <p className='h-1 text-[#333333] md:text-2xl text-xl font-extralight mr-7'>
          Shopex specialists are among the most accomplished in the digital sector. They have a history of proven experiences expanding their clients' businesses through high-quality work and outstanding customer service.           </p>

        </div>



        <div className="hidden md:flex justify-end items-end md:w-[40%]">
          <Link href='/calendly'>
            <div className="relative flex justify-center items-center w-[200px] h-[200px] hover-pop-out mr-10 ">
              {/* Outer Circular Text Image with Spinning Animation */}
              <div className="absolute inset-0 flex justify-center items-center animate-spin-slow pop-out">
                <Image
                  src="/Header/rotte.svg"
                  alt="Circular Text"
                  className="w-full h-full object-contain hidden lg:block"
                  width={50}
                  height={50}
                />
                <Image
                  src="/Header/rotatesmall.svg"
                  alt="Circular Text"
                  className="w-full h-full object-contain lg:hidden"
                  width={50}
                  height={50}
                />
              </div>

              {/* Blue Circle with Arrow */}
              <div className="bg-[#00729f] h-[120px] w-[120px] rounded-full flex justify-center items-center shadow-lg z-10 pop-out-fast sm:h-[100px] sm:w-[100px] xs:h-[80px] xs:w-[80px]">
                <Image
                  src="/Header/arrowup.svg"
                  alt="Arrow Up"
                  className="w-8 h-8"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </Link>

        </div>


      </div>


      <div className="xs:-mt-44 sm:-mt-28 lg:-mt-40 text-white p-4 w-full flex justify-start md:ml-20 ">
      <div className="">
              <Link href="/calendly" className="block">
                <button className="w-full md:w-auto px-8 py-4 rounded-md font-extrabold text-base bg-[#00729f] text-white">
                  Contact us
                </button>
              </Link>
            </div>
      </div>
    </>

  )
}

export default Header