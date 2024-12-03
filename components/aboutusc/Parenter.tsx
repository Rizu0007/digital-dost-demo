"use client"
import React from 'react';
import { useEffect, useState } from 'react';

const LogoSlider = () => {
  const [position, setPosition] = useState(0);
  
  const logos = [
    {
      name: 'Logo 1',
      src: '/api/placeholder/120/60'
    },
    {
      name: 'Logo 2', 
      src: '/api/placeholder/120/60'
    },
    {
      name: 'Logo 3',
      src: '/api/placeholder/120/60'
    },
    {
      name: 'Logo 4',
      src: '/api/placeholder/120/60'
    },
    {
      name: 'Logo 5',
      src: '/api/placeholder/120/60'
    },
    {
      name: 'Logo 6',
      src: '/api/placeholder/120/60'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % (logos.length * 200));
    }, 50);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 overflow-hidden bg-gray-50">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">
          Strategic <span className="text-blue-500">Partnerships</span>
        </h2>
        <p className="text-xl text-gray-600">Elevate your Business Ecosystem</p>
      </div>
      
      <div className="relative">
        <div 
          className="flex items-center gap-16 transition-transform duration-1000"
          style={{
            transform: `translateX(${position}px)`,
            width: `${logos.length * 200}px`
          }}
        >
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center min-w-[150px] h-20 bg-white p-4 rounded-lg shadow-sm"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-[120px] max-h-[60px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;