
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Header() {
  return (
    <div className='flex xs:flex-col md:flex-row bg-white bg-custom-image1 bg-no-repeat bg-right-top pt-5 pb-40'>

      <div className='md:w-[60%] xs:pb-20 xs:pt-10 sm:py-20 xs:pl-5 md:pl-20 space-y-16 py-10 mt-10 mx-5'>
        <div className='flex items-center justify-between'>
          <p className="text-black font-bold leading-[80px] xs:w-[350px] sm:w-full xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Digital Product Development Company
          </p>

          {/* Rotating Image for Mobile */}
          <Link href='/calendly'>
          <div className="relative flex justify-center items-center w-[100px] h-[100px] hover-pop-out mr-5 md:hidden">
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
            <div className="bg-[#00729f] h-[30px] w-[30px] rounded-full flex justify-center items-center shadow-lg z-10 pop-out-fast">
              <Image
                src="/Header/arrowup.svg"
                alt="Arrow Up"
                className="w-3 h-3" // Adjusted size for the arrow icon
                width={50}
                height={50}
              />
            </div>
          </div>
          </Link>
        </div>

        <p className='h-1 text-[#333333] text-2xl font-extralight'>
          We handle each stage of your digital product’s journey, from initial discovery, growth design and development to AI implementation, coupled with post-launch support and maintenance.
        </p>
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
  )
}

export default Header