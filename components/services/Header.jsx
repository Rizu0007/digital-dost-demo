/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = ({title, image}) => {
  console.log({title,image})
  return (
    <>
      <section className=" lg:pt-32 pb-64 xs:pt-24 xs:px-10 bg-white min-w-full min-h-full  bg-custom-image10 bg-no-repeat bg-left-top    ">
        <div className="lg:flex lg:flex-row md:flex-col  ">
         
          <div className="flex pl-20 flex-col justify-evenly xs:w-[350px] sm:w-[500px] md:w-[500px] lg:w-[550px] xl:w-[700px]  z-10 xs:mx-auto xs:space-y-10">
            <h1 className="text-black font-bold xs:text-3xl sm:text-5xl xl:text-6xl 2xl:text-6xl leading-tight ">
            {title}
              </h1>
           
            <p className="h-1 text-[#333333] text-2xl font-extralight mr-7">

            Shopex specialists are among the most accomplished in the digital sector. They have a history of proven experiences expanding their clients' businesses through high-quality work and outstanding customer service.       

            </p>
          
            
          </div>

          <div className="md:ml-28 lg:-mt-20 ">
            <Image
              src={image}
              alt="hero"
              width={600}
              height={600}
              className="xs:mx-auto md:mx-0 xl:[700px] xl:[700px] 2xl:w-[800px] 2xl:h-[400px]"
            />
          </div>
        </div>


      </section>
      <div className="-mt-16 ml-28">
      <Link href="#" className="mt-32">
              <button className="xs:px-28 xs:py-4 sm:px-60 sm:py-4 xs:text-nowrap md:px-10 md:py-2  xl:px-20 xl:py-3 2xl:px-28 2xl:py-5 rounded-md font-extrabold xl:text-[18px] bg-[#00729f] text-white">
                Contact us
              </button>
            </Link>
            </div>
    </>
  );
};

export default Header;
