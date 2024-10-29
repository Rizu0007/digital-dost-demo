'use client';

import React from 'react';
import Image from 'next/image';
const Aboutus = () => {
  const categories = [
    { name: 'Airline', icon: '/imageAbout/E-Commerce.webp' },
    { name: 'Beauty & Spa', icon: '/imageAbout/E-Commerce.webp' },
    { name: 'E-Commerce', icon: '/imageAbout/E-Commerce.webp' },
    { name: 'Energy', icon: '/imageAbout/E-Commerce.webp' },
    { name: 'Entertainment', icon: '/imageAbout/Entertainment.webp' },
    { name: 'Event', icon: '/imageAbout/Finance.webp' },
    { name: 'Finance', icon: '/imageAbout/SaaS.webp' },
    { name: 'Healthcare', icon: '/imageAbout/Entertainment.webp' },
    { name: 'Medical', icon: '/imageAbout/Finance.webp' },
    { name: 'News App', icon: '/imageAbout/SaaS.webp' },
    { name: 'On-Demand', icon: '/imageAbout/Entertainment.webp' },
    { name: 'Real Estate', icon: '/imageAbout/Finance.webp' },
    { name: 'Restaurant', icon: '/imageAbout/SaaS.webp' },
    { name: 'SaaS', icon: '/imageAbout/Entertainment.webp' },
    { name: 'Social Networking', icon: '/imageAbout/Finance.webp' },
    { name: 'Sport', icon: '/imageAbout/SaaS.webp' },
    { name: 'Travel App', icon: '/imageAbout/Entertainment.webp' },
    { name: 'Wellness App', icon: '/imageAbout/Finance.webp' }
  ];
  
  
  return (
    <div>
      {/* Hero Section */}
      
      <section className="bg-cover bg-center h-96 " style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
        <div className="flex justify-center items-center h-full bg-box1">
          <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Company Mission Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At [Company Name], our mission is to deliver the best solutions to our clients by providing high-quality products 
            and services. We aim to create value and make a difference in the world with innovation and integrity.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Image
                src="/Testimonial3.jpg"
                alt="Team Member 1"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">John Doe</h3>
              <p className="text-gray-600 text-center">CEO & Founder</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Image
                src="/Testimonial3.jpg"
                alt="Team Member 1"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">John Doe</h3>
              <p className="text-gray-600 text-center">CEO & Founder</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Image
                src="/Testimonial3.jpg"
                alt="Team Member 1"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">John Doe</h3>
              <p className="text-gray-600 text-center">CEO & Founder</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Image
                src="/Testimonial3.jpg"
                alt="Team Member 1"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">John Doe</h3>
              <p className="text-gray-600 text-center">CEO & Founder</p>
            </div>


            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
            <Image
                src="/Testimonial3.jpg"
                alt="Team Member 2"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">Jane Smith</h3>
              <p className="text-gray-600 text-center">Chief Technology Officer</p>
              
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Image
                src="/Testimonial3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4"
                width={128}
                height={128}
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">Sam Wilson</h3>
              <p className="text-gray-600 text-center">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 bg-box1">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">Want to work with us?</h2>
          <p className="text-lg mb-6 text-white">
            We re always looking for talented individuals to join our team and help us shape the future.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[white] text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mt-20" >
        <h2 className="text-3xl font-extrabold text-center mb-12">Our Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <Image
                src={category.icon}
                alt={category.name}
                width={64}
                height={64}
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-lg font-medium text-gray-700">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Aboutus;