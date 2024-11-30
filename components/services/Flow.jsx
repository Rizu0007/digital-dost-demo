"use client";

import Image from "next/image";
import React from "react";
import { useRef } from "react";

const Flow = () => {
  const stepsRef = useRef(null);
  // const steps = [
  //   {
  //     number: "01",
  //     title: "Initial Meeting",
  //     description: `First, our Linkup Studio product managers invite you to a free first meeting. This is where we start our journey together, diving into the specifics of your product, understanding your needs, and discussing your objectives.`,
  //   },
  //   {
  //     number: "02",
  //     title: "Discovery",
  //     description: `Then, our focus shifts to thoroughly grasping your business aims, identifying your target customers, and getting a grip on the competitive market environment. Through detailed research, trend analysis, and conversations with potential users, we aim to craft a distinct vision and strategy. This includes a roadmap pinpointing crucial steps ahead.`,
  //   },
  //   {
  //     number: "03",
  //     title: "Concept Validation (Proof of Concept)",
  //     description: `When necessary, Linkup Studio company’s product managers create a preliminary model to test the feasibility of your idea. This stage is all about evaluating critical components, soliciting user input, and confirming the technical practicality. Our aim is to shape a concept that not only resonates with your business objectives but is also viable in the real world.`,
  //   },
  //   {
  //     number: "04",
  //     title: "Development",
  //     description: `After that, our product management experts move on to developing a basic, functional version of your digital solution, focusing on the key features that meet immediate user requirements. Launching this MVP version allows you to collect feedback from actual users, verify market interest, and progressively refine the product based on these insights.`,
  //   },
  //   {
  //     number: "05",
  //     title: "Launch & Support",
  //     description: `Adopting an agile method, we ensure the continuous delivery of updates and improvements, driven by user feedback and analytical insights. Linkup Studio is committed to providing ongoing support in order to ensure the seamless operation of your digital platform or app and resolve any emerging issues.`,
  //   },
  // ];

  return (
    <div className="relative flex flex-col items-center bg-white py-12 " >
      <div className="flex xs:flex-col lg:flex-row w-full max-w-7xl mx-auto space-y-36 lg:space-y-0">
        {/* Left side: Sticky Button and Title */}
        <div className="relative w-full lg:w-[50%] ">
          <div className="w-full leading-3 h-[200px] flex flex-col justify-between px-2">
            <h2 className="xs:text-3xl sm:text-5xl font-semibold mb-8 leading-snug">
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
        <div ref={stepsRef} className="px-2 lg:px-0 lg:ml-12 w-full lg:w-2/3">
          <div className="flex flex-col">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start justify-center xs:space-x-4 lg:space-x-9"
              >
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className="xs:w-12 xs:h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center 
                rounded-full border-[4px] border-[#00729f] text-lg font-bold text-black"
                  >
                    {step.number}
                  </div>
                  {index !== steps.length - 1 && (
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
  );
};

export default Flow;
