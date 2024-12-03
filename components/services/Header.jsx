import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ title, image }) => {
  return (
    <>
      <section className="bg-white min-w-full min-h-full bg-custom-image10 bg-no-repeat bg-left-top lg:pt-32 md:pb-32 pt-16 px-4 md:px-10">
        <div className="flex flex-col lg:flex-row">
          {/* Text Content */}
          <div className="flex flex-col space-y-6 lg:space-y-10 w-full lg:w-[550px] xl:w-[700px] lg:pl-20">
            <h1 className="text-black font-bold text-3xl sm:text-5xl xl:text-6xl leading-tight">
              {title}
            </h1>
            <p className="text-[#333333] text-lg sm:text-2xl font-extralight">
              Shopex specialists are among the most accomplished in the digital
              sector. They have a history of proven experiences expanding their
              clients businesses through high-quality work and outstanding
              customer service.
            </p>
            
            {/* Button for mobile view */}
            <div className="lg:hidden mt-8">
              <Link href="/calendly" className="block">
                <button className="w-full md:w-auto px-8 py-4 rounded-md font-extrabold text-base bg-[#00729f] text-white">
                  Contact us
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 lg:mt-0 lg:ml-28 lg:-mt-20">
            <Image
              src={image}
              alt="hero"
              width={600}
              height={600}
              className="mx-auto w-full max-w-[500px] lg:max-w-none xl:w-[500px] 2xl:w-[800px] 2xl:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Button for desktop view */}
      <div className="hidden lg:block -mt-24 ml-28">
        <Link href="/calendly">
          <button className="px-20 py-3 xl:px-20 xl:py-3 2xl:px-28 2xl:py-5 rounded-md font-extrabold xl:text-[18px] bg-[#00729f] text-white">
            Contact us
          </button>
        </Link>
      </div>
    </>
  );
};

export default Header;