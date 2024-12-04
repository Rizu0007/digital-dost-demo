"use client"
import React, { useEffect, useState } from 'react';

const LogoSlider = () => {
  const logos = [
    {
      name: 'Logo 1',
      src: '/Partners/Google Partner.jpg'
    },
    {
      name: 'Logo 2', 
      src: '/Partners/meta.jpg'
    },
    {
      name: 'Logo 3',
      src: '/Partners/shopify.jpg'
    },
    {
      name: 'Logo 4',
      src: '/Partners/tiktok.jpg'
    },
    {
      name: 'Logo 5',
      src: '/Partners/mailchip.jpg'
    },
    {
      name: 'Logo 6',
      src: '/Partners/Pushowl.jpg'
    },
    {
      name: 'Logo 7',
      src: '/Partners/woocommerce.jpg'
    },
    {
      name: 'Logo 8',
      src: '/Partners/marketing partner.jpg'
    }
  ];

  // Duplicate the logos array to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  const [position, setPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setPosition((prev) => {
          // Reset position when it reaches halfway point to create infinite loop
          if (prev <= -(logos.length * 300)) {
            return 0;
          }
          return prev - 1;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isHovered, logos.length]);

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Strategic <span className="text-blue-600">Partnerships</span>
          </h2>
          <p className="text-xl text-gray-600">
            Elevate your Business Ecosystem
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient Overlay - Left */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          
          {/* Gradient Overlay - Right */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
          
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="flex items-center transition-transform duration-1000 ease-linear"
              style={{
                transform: `translateX(${position}px)`,
                width: `${duplicatedLogos.length * 200}px`
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center min-w-[200px] h-24 px-"
                >
                  <div className="hover:scale-110 transition-transform duration-300 p-4">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-w-[140px] max-h-[70px] object-contain  hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;