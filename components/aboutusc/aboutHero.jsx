/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutUsHero = () => {
  return (
    <div className="relative bg-white overflow-hidden bg-custom-image11 bg-right-top bg-no-repeat">
      {/* Top Right SVG Decoration */}
      <div className="absolute top-0  right-0 ">
        <Image src="/About-US.png" width={400} height={100}  alt="About"/>
      </div>

      {/* Bottom Left SVG Decoration */}
      <div className="absolute bottom-0   z-10 left-0 ">
      <Image src="/About-US2.png" width={400} height={100}  alt="About"/>

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Rest of your existing component code remains the same */}
        <div className="py-20 lg:py-24">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-8 inline-flex items-center space-x-2 rounded-full bg-[#00729f] px-4 py-2 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="text-sm font-medium text-white tracking-wider">About Us</span>
            </div>

            <h1 className="relative z-10 max-w-4xl text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-8">
              <span className="block leading-tight">
                Transforming Digital Marketing & Social Media Solutions
              </span>
              <span className="mt-4 block text-[#00729f]">
                For Modern Businesses
              </span>
            </h1>

            <div className="mt-8 max-w-3xl">
              <p className="text-xl leading-relaxed text-gray-600 mb-6">
                We're a team of passionate marketers and social media experts dedicated to helping businesses thrive in the digital landscape. Our innovative strategies and creative solutions drive meaningful engagement and sustainable growth.
              </p>
              <p className="text-xl leading-relaxed text-gray-600">
                From startups to established enterprises, we provide tailored marketing solutions that align with your unique goals and vision, ensuring your brand stands out in today's competitive market.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 max-w-4xl">
              {[
                { number: "500+", label: "Clients Served" },
                { number: "95%", label: "Success Rate" },
                { number: "15+", label: "Years Experience" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#00729f]">{stat.number}</div>
                  <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#00729f] text-white text-lg font-medium rounded-full shadow-lg hover:bg-[#005d7f] transform hover:scale-105 transition-all duration-300">
                <Link href='/calendly'>              
                  Book Meeting
                </Link>
              </button>
              <button className="px-8 py-4 border-2 border-[#00729f] text-[#00729f] text-lg font-medium rounded-full hover:bg-[#00729f] hover:text-white transform hover:scale-105 transition-all duration-300">
                <Link href='/casestudyall'>  
                  View Our Work              
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;