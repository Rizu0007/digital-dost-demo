import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  
  return (
    <footer className="relative mt-52">
      <div className="flex justify-center">
        <div className="bg-box1 absolute h-80 p-10 flex items-center w-11/12 lg:w-5/6 rounded-3xl -top-44 mb-36">
          <div className="text-center flex flex-col lg:flex-row justify-between items-center w-full">
            <h2 className="font-semibold mb-4 lg:mb-0 text-white text-3xl sm:text-4xl lg:text-5xl">
              Ready to get started?
              <br />
              <span className="text-white ">Talk to us today</span>
            </h2>

            <Link href='/calendly'>
              <button className="bg-white text-[#00729F] rounded-lg h-12 sm:h-14 px-8 sm:px-12 lg:h-16 lg:px-16 text-lg sm:text-xl lg:text-2xl mt-4 lg:mt-0">
                Book Meeting
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-10 h-auto lg:h-[600px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between mt-72 px-6 md:mx-auto">
          
          <div>
            <Link href='/'>
              <div className="flex justify-center lg:flex">
                <Image
                  src="/Shopex logo final white.png"
                  width={200}
                  height={70}
                  alt="Logo"
                  className="h-18 w-48 "
                />
              </div>
            </Link>



            <div className="mt-4 flex  lg:flex lg:flex-col lg:justify-center  ">

              <p className=" lg:text-center flex text-white space">Reviewed on
                <span className='flex ml-3 items-end'>
                <Image
                  src="/footer/star.png" // Replace with the actual path of the image
                  width={20}
                  height={20}
                  alt="Clutch Reviews"
                  className='w-4 h-5'
                />
                <Image
                  src="/footer/star.png" // Replace with the actual path of the image
                  width={20}
                  height={20}
                  alt="Clutch Reviews"
                  className='w-4 h-5'


                />
                <Image
                  src="/footer/star.png" // Replace with the actual path of the image
                  width={20}
                  height={20}
                  alt="Clutch Reviews"
                  className='w-4 h-5'

                />
                <Image
                  src="/footer/star.png" // Replace with the actual path of the image
                  width={20}
                  height={20}
                  alt="Clutch Reviews"
                  className='w-4 h-5'

                />
                <Image
                  src="/footer/star.png" // Replace with the actual path of the image
                  width={20}
                  height={20}
                  alt="Clutch Reviews"
                  className='w-4 h-5'

                />
                </span>
              </p>

            </div>
            <div className='flex lg:justify-between lg:items-end'>
            <Image
              src="/footer/clutch.svg" // Replace with the actual path of the image
              width={82}
              height={23}
              alt="Clutch Reviews"
              className='mt-1 mb-[5px]'
            />

            <p className="xs:ml-4 xs:flex xs:justify-center xs:items-end lg:text-center text-white lg:mr-2">1 Reviews</p>
            </div>

            <div className='flex mt-5 space-x-0'>
            <Image
                  src="/footer/facebook.png" 
                  width={60}
                  height={40}
                  alt="facebook"
                  className='w-7 h-7'

                />
            <Image
                  src="/footer/insta.png" 
                  width={60}
                  height={40}
                  alt="insta"
                  className='w-7 h-7'

                />
            <Image
                  src="/footer/linkin.png" 
                  width={60}
                  height={40}
                  alt="linkedin"
                  className='w-7 h-7 '

                />
            </div>
          </div>



          <div className="mt-10 lg:mt-0">
            <h3 className="mb-7 font-semibold text-lg lg:text-xl tracking-wider">Services</h3>
            <ul className="space-y-4 lg:space-y-4 text-sm lg:text-base">
              <li><a href="#">Performance marketing</a></li>
              <li><a href="#">Email Marketing</a></li>
              <li><a href="#">Graphic Designing</a></li>
              <li><a href="#">SEO</a></li>
            </ul>
          </div>

          <div className="mt-10 lg:mt-0">
            <h3 className="mb-7 font-semibold text-lg lg:text-xl tracking-widest">Product</h3>
            <ul className="space-y-4 lg:space-y-4 text-sm lg:text-base">
              <li><a href="#">Lead Generation</a></li>
              <li><a href="#">Web development</a></li>
              <li><a href="#">UI/UX Design</a></li>
            </ul>
          </div>

          <div className="mt-10 lg:mt-0 text-sm  lg:text-xl">
            <h3 className="mb-7 font-semibold">Not quite ready for Shopex?</h3>
            <p>Join our online no-code community for free. No spam. Ever.</p>
            <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 rounded-l-lg focus:outline-none w-full sm:w-auto"
              />
              <button className="bg-[#00729F] text-white py-2 px-6 rounded-r-lg w-full sm:w-auto mt-2 sm:mt-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
