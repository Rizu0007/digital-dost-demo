/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const AboutUsHero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -right-10 top-0 h-72 w-72 rounded-full bg-[#00729f]/5" />
        <div className="absolute -left-10 bottom-0 h-96 w-96 rounded-full bg-[#00729f]/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-24">
          <div className="flex flex-col items-center justify-center text-center">
            {/* About Us Badge */}
            <div className="mb-8 inline-flex items-center space-x-2 rounded-full bg-[#00729f] px-4 py-2 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="text-sm font-medium text-white tracking-wider">About Us</span>
            </div>

            {/* Main Heading */}
            <h1 className="relative z-10 max-w-4xl text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-8">
              <span className="block leading-tight">
                Transforming Digital Marketing & Social Media Solutions
              </span>
              <span className="mt-4 block text-[#00729f]">
                For Modern Businesses
              </span>
            </h1>

            {/* Mission Statement */}
            <div className="mt-8 max-w-3xl">
              <p className="text-xl leading-relaxed text-gray-600 mb-6">
                We're a team of passionate marketers and social media experts dedicated to helping businesses thrive in the digital landscape. Our innovative strategies and creative solutions drive meaningful engagement and sustainable growth.
              </p>
              <p className="text-xl leading-relaxed text-gray-600">
                From startups to established enterprises, we provide tailored marketing solutions that align with your unique goals and vision, ensuring your brand stands out in today's competitive market.
              </p>
            </div>

            {/* Stats Section */}
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

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#00729f] text-white text-lg font-medium rounded-full shadow-lg hover:bg-[#005d7f] transform hover:scale-105 transition-all duration-300">
                Book a Consultation
              </button>
              <button className="px-8 py-4 border-2 border-[#00729f] text-[#00729f] text-lg font-medium rounded-full hover:bg-[#00729f] hover:text-white transform hover:scale-105 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;