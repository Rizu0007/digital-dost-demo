"use client";

import Image from "next/image";
import React from "react";
import { useRef } from "react";

const Flow = ({ flow }) => {
  const stepsRef = useRef(null);

  return (
    <>
      <div className="relative flex flex-col items-center bg-white py-12 mx-3">
        <div className="flex xs:flex-col lg:flex-row w-full max-w-7xl mx-auto space-y-36 lg:space-y-0">
          {/* Left side: Sticky Button and Title */}
          <div className="relative w-full lg:w-[50%]">
            <div className="w-full leading-3 h-[200px] flex flex-col justify-between px-4">
              <h2 className="xs:text-3xl sm:text-5xl font-semibold mb-8 leading-snug">
                {flow[0].mainheading}
              </h2>
              <div className="sticky top-16">
                <button className="bg-[#00729f] xl:h-[45px] xl:w-40 lg:h-[45px] lg:w-[144px] rounded-lg text-white shadow-lg font-bold text-[16px] w-full h-11">
                  <a className="flex justify-center">
                    <div>
                      <p>CONTACT US</p>
                    </div>
                    <Image
                      src="/Services/arrowup.svg"
                      alt="arrow"
                      width={16}
                      height={18}
                      className="ml-2"
                    />
                  </a>
                </button>
                {/* Modified video container with increased height */}
                <div className="relative rounded-2xl overflow-hidden md:mt-32 mt-10">
                  <video
                    preload="metadata"
                    playsInline
                    controls
                    loop
                    muted
                    className="w-full md:h-[700px] h-[360px]  rounded-2xl object-cover"
                  >
                    <source src="/service.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Steps Content */}
          <div className="px-2 lg:px-0 lg:ml-12 w-full lg:w-2/3 ">
            <div className="flex flex-col mt-52 md:mt-1">
              {flow.slice(1, flow.length).map((step, index) => (
                <div
                  key={index}
                  className="flex items-start justify-center xs:space-x-4 lg:space-x-9"
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="xs:w-12 xs:h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full border-[4px] border-[#00729f] text-lg font-bold text-black">
                      {step.number}
                    </div>
                    {index !== flow.length - 1 && (
                      <div className="w-1 xs:h-48 sm:h-32 bg-slate-300"></div>
                    )}
                  </div>
                  <div className="space-y-5">
                    <h3 className="text-xl font-bold my-2">{step.title}</h3>
                    <p className="text-gray-600 xs:text-[15px] lg:text-[16px] xs:leading-7 lg:leading-6">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center xs:my-12 lg:mt-12 lg:mb-0">
        <div className="bg-box1 h-40 p-10 flex items-center w-11/12 lg:w-5/6 rounded-3xl -top-44">
          <div className="text-center flex flex-col lg:flex-row justify-center items-center w-full">
            <h2 className="font-semibold mb-4 lg:mb-0 text-white text-3xl sm:text-4xl lg:text-5xl ">
              Ready to get started?
              <br />
              <span className="text-white ">Talk to us today</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flow;
