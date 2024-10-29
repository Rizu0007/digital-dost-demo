"use client";

import Image from "next/image";
import React from "react";
import { useRef } from "react";

const Flow = () => {
  const stepsRef = useRef(null);

  return (
    <div className="relative flex flex-col items-center bg-white py-12 " >
    <div className="flex flex-row w-full max-w-7xl mx-auto">
      {/* Left side: Sticky Button and Title */}
      <div className="relative w-[50%] ">
        <div className="w-full leading-3 h-[200px] flex flex-col justify-between ">
          <h2 className="text-5xl font-semibold mb-8 leading-snug">
            The Steps of Product Management as a Service
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
          </div>
        </div>
      </div>

      {/* Right side: Steps Content */}
      <div ref={stepsRef} className="ml-12 w-2/3">
        {/* Steps List */}
        <div className="flex flex-col ">
          {/* Step 1 */}
          <div className="flex items-start justify-center space-x-9 s">
            {/* Container for circular number and line */}
            <div className="flex-shrink-0 flex flex-col items-center">
              {/* Circular Number */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-[4px] border-[#00729f] text-lg font-bold text-black">
                01
              </div>
              {/* Vertical Line */}
              <div className="w-1 h-32 bg-slate-300"></div>
            </div>

            {/* Step Description */}
            <div className="space-y-5">
              <h3 className="text-xl font-bold">Initial Meeting</h3>
              <p className="text-gray-600">
              First, our Linkup Studio product managers invite you to a free first meeting. This is where we start our journey together, diving into the specifics of your product, understanding your needs, and discussing your objectives.
              First, our Linkup Studio product managers invite you to a free first meeting. our journey together, diving into the specifics of your product, understanding your needs, and discussing your objectives.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start justify-center space-x-9">
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-[4px] border-[#00729f]
 text-lg font-bold text-black">
                02
              </div>
              <div className="w-1 h-32 bg-slate-300"></div>
            </div>
            <div className="space-y-5">
              <h3 className="text-xl font-bold">Discovery</h3>
              <p className="text-gray-600">
              Then, our focus shifts to thoroughly grasping your business aims, identifying your target customers, and getting a grip on the competitive market environment. Through detailed research, trend analysis, and conversations with potential users, we aim to craft a distinct vision and strategy. This includes a roadmap pinpointing crucial steps ahead.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start justify-center space-x-9 ">
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-[4px] border-[#00729f]
 text-lg font-bold text-black">
                03
              </div>
              <div className="w-1 h-32 bg-slate-300"></div>
            </div>
            <div className="space-y-5">
              <h3 className="text-xl font-bold">
                Concept Validation (Proof of Concept)
              </h3>
              <p className="text-gray-600">
              When necessary, Linkup Studio company’s product managers create a preliminary model to test the feasibility of your idea. This stage is all about evaluating critical components, soliciting user input, and confirming the technical practicality. Our aim is to shape a concept that not only resonates with your business objectives but is also viable in the real world.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start justify-center space-x-9 ">
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-[4px] border-[#00729f]
 text-lg font-bold text-black">
                04
              </div>
              <div className="w-1 h-32 bg-slate-300"></div>
            </div>
            <div className="space-y-5">
              <h3 className="text-xl font-bold">Development</h3>
              <p className="text-gray-600">
              After that, our product management experts move on to developing a basic, functional version of your digital solution, focusing on the key features that meet immediate user requirements. Launching this MVP version allows you to collect feedback from actual users, verify market interest, and progressively refine the product based on these insights.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex items-start justify-center space-x-9 ">
            <div className="flex-shrink-0 ">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-[4px] border-[#00729f]
 text-lg font-bold text-black">
                05
              </div>
             
            </div>
            <div className="space-y-5">
              <h3 className="text-xl font-bold">Launch & Support</h3>
              <p className="text-gray-600">
              Adopting an agile method, we ensure the continuous delivery of updates and improvements, driven by user feedback and analytical insights. Linkup Studio is committed to providing ongoing support in order to ensure the seamless operation of your digital platform or app and resolve any emerging issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Flow;
