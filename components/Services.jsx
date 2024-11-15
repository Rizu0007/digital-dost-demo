"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Service data array
const Service = [
  {
    imagesrc: "/Services/Services1.webp",
    title: "Product Design",
    description:
      "Give your product’s idea a shape. Plan and evaluate the essential features of your product to accomplish your business goals and eliminate possible mistakes.",
    cardimg: "/Services/Servicescardbefore1.svg",
  },
  {
    imagesrc: "/Services/Services2.png",
    title: "B2B Marketing",
    description:
      "Get your unique digital marketing strategy with clearly outlined goals. Work with professionals across diverse marketing channels to stand out in the market, find clients, expand opportunities, and more.",
    cardimg: "/Services/Servicescardbefore2.svg",
  },
  {
    imagesrc: "/Services/Services3.webp",
    title: "Custom Software Development",
    description:
      "Custom app development tailored exclusively for your business goals.",
    cardimg: "/Services/Servicescardbefore3.svg",
  },
  {
    imagesrc: "/Services/Services4.webp",
    title: "Product Management",
    description:
      "Experience the seamless evolution of your product from concept to MVP creation, launch, and ongoing maintenance. We provide a clear and hands-on end-to-end approach to product management solutions.",
    cardimg: "/Services/Servicescardbefore4.svg",
  },
];

export default function ServicesComponent() {
  // State to hold the currently selected service and card index
  const [selectedService, setSelectedService] = useState(Service[0]); // Initialize with the first service
  const [selectedCardIndex, setSelectedCardIndex] = useState(0); // Track the selected card index

  return (
    <div className=" md:px-[60px] lg:px-[100px] xl:px-[124.5px] pt-[274px] pb-[230px]">
      {/* Main Service Display */}
      <div className="w-full flex justify-between h-[500px]">
        {/* Main Image */}
        <div>
          <Image
            src={selectedService.imagesrc}
            alt={selectedService.title}
            height={517}
            width={625}
          />
        </div>

        {/* Main Service Info */}
        <div className="flex flex-col justify-center items-center w-[40%]">
          <div>
            <p className="text-[14px] text-[#171717CC] font-semibold">
              Our Services
            </p>
            <h2 className="text-[40px] font-bold">{selectedService.title}</h2>
            <p className="text-[#171717CC] xs:text-[14px]md:text-xl mt-5 mb-10">
              {selectedService.description}
            </p>
            <Link href='/services' >
              <button className="bg-[#00729f] xl:h-[45px] xl:w-40 lg:h-[45px] lg:w-[144px] rounded-lg text-white shadow-lg font-bold text-[16px] w-full h-11 ml-5">
                <div className="flex justify-center">
                  <div >
                    <p>VIEW MORE</p>
                  </div>
                  <Image
                    src="/Services/arrowup.svg"
                    alt="arrow"
                    width={16}
                    height={18}
                    className="ml-2"
                  />
                </div>
              </button>
            </Link>
            <Link href='/calendly' >
              <button className="bg-[#00729f] xl:h-[45px] xl:w-40 lg:h-[45px] lg:w-[144px] rounded-lg text-white shadow-lg font-bold text-[16px] w-full h-11 ml-5 mt-5">
                <div className="flex justify-center">
                  <div >
                    <p>CONTACT US</p>
                  </div>
                  <Image
                    src="/Services/arrowup.svg"
                    alt="arrow"
                    width={16}
                    height={18}
                    className="ml-2"
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="flex space-x-4 mt-10 justify-center">
        {Service.map((srvc, index) => (
          <div
            key={index}
            className={`pt-[38px] pr-[30px] pb-[24px] pl-[28px] w-72 h-52 rounded-xl shadow-xl group cursor-pointer transition-all duration-300 ${
              selectedCardIndex === index ? "bg-box grow h-60  text-white" : "bg-[#ffffff] "
              }`}
            onClick={() => {
              setSelectedService(srvc); // Update the selected service
              setSelectedCardIndex(index); // Update the selected card index
            }}
          >
            <a >
              <div className="flex flex-col item w-full h-full justify-between">
                <Image
                  className="group-hover:rotate-180 duration-300"
                  src={srvc.cardimg}
                  alt={srvc.title}
                  height={48}
                  width={48}
                />
                <p className="text-[16px] font-bold ">{srvc.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
