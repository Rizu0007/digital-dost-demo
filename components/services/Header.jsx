import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = (title, image) => {
  return (
    <>
      <section className=" lg:pt-32 xs:pt-24 xs:px-10 bg-white min-w-full min-h-full  bg-custom-image2 bg-no-repeat bg-left-bottom    ">
        <div className="lg:flex lg:flex-row md:flex-col  ">
          <div className=" h-[400px] w-[400px] xs:leading-tight opacity-60 mt-32 hidden lg:block">
            
          </div>
          <div className="flex flex-col justify-evenly xs:w-[350px] sm:w-[500px] md:w-[500px] lg:w-[550px] xl:w-[700px] lg:-ml-32 z-10 xs:mx-auto xs:space-y-10">
            <h1 className="text-black font-bold xs:text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl leading-tight ">
            {title}
              </h1>

            <Link href="#">
              <button className="xs:px-28 xs:py-4 sm:px-60 sm:py-4 xs:text-nowrap md:px-10 md:py-2  xl:px-20 xl:py-3 2xl:px-28 2xl:py-5 rounded-md font-extrabold xl:text-[18px] bg-[#00729f] text-white">
                Contact us
              </button>
            </Link>
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
    </>
  );
};

export default Header;
