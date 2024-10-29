'use client';
import React, { useEffect } from 'react';

const Booking = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (

    <div className="flex-col justify-center items-center h-screen bg-gradient-to-r from-slate-300 to-slate-200">
        <div className="absolute top-30 left-3 w-32 h-32 bg-black opacity-20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-black opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>

        
    <div
      className="calendly-inline-widget"
      data-url={"https://calendly.com/shopex-agency/marketing?_gdpr_banner=1"}
      style={{ minWidth: '320px', height: '100%' }} // Full height adjustment
    ></div>
  </div>



  );
};

export default Booking;
