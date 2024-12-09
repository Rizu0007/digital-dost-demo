import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

  return (
    <footer className="relative mt-20">
    

      <div className="bg-black text-white py-10 h-auto lg:h-[400px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between mt-12 px-6 md:mx-auto">

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
              <Link href="https://www.facebook.com/shopex.agency">
              <Image
                src="/footer/facebook.png"
                width={60}
                height={40}
                alt="facebook"
                className='w-7 h-7'

              />
              </Link>
              <Link href="https://www.instagram.com/agency.shopex/profilecard/?igsh=MWRjc21vbWNoZWFldA==">
              <Image
                src="/footer/insta.png"
                width={60}
                height={40}
                alt="insta"
                className='w-7 h-7'

              />
              </Link>
              <Link href="https://www.linkedin.com/company/shopexagency">
              <Image
                src="/footer/linkin.png"
                width={60}
                height={40}
                alt="linkedin"
                className='w-7 h-7 '

              />
              </Link>
            </div>
          </div>



          <div className="mt-10 lg:mt-0">
            <h3 className="mb-7 font-semibold text-lg lg:text-xl tracking-wider">Services</h3>
            <ul className="space-y-4 lg:space-y-4 text-sm lg:text-base">
              <li><Link href="/services/digital-marketing">Digital Marketing</Link></li>
              <li><Link href="/services/Ecommerce">Ecommerce</Link></li>
              <li><Link href="/services/Email-Marketing">Email Marketing</Link></li>
              <li><Link href="/services/Web-Development">Web Development</Link></li>

            </ul>
          </div>

          <div className="mt-10 lg:mt-0">
            <h3 className="mb-7 font-semibold text-lg lg:text-xl tracking-widest">We Offer</h3>
            <ul className="space-y-4 lg:space-y-4 text-sm lg:text-base">
              <li><Link href="/services/Performance-Marketing">Performance Marketing</Link></li>
              <li><Link href="/services/landing-pages">Landing Pages Development</Link></li>
              <li><Link href="/services/App-Development">App Development</Link></li>
              <li><Link href="/services/SEO">SEO</Link></li>
            </ul>
          </div>

          <div className="mt-10 lg:mt-0 text-sm  lg:text-xl">
            {/* <h3 className="mb-7 font-semibold">Not quite ready for Shopex?</h3> */}
            {/* <p>Join our online no-code community for free. No spam. Ever.</p> */}
            <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 rounded-l-lg focus:outline-none w-full sm:w-auto text-black"
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
