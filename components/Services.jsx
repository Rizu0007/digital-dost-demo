"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="bg-[#fff3] border-solid border-2 border-[#00729F] rounded-full h-11 w-11 flex justify-center items-center absolute xs:left-1/3 xs:transform xs:-translate-x-1/2 xs:top-[110%] sm:left-[-35px] sm:top-[50%] sm:transform sm:-translate-y-1/2 z-10"
    onClick={onClick}
  >
    <Image
      src="/Podcast/whitearrowleft.svg"
      alt="arrow"
      height={25}
      width={24}
    />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
  className="bg-[#fff3] border-solid border-2 border-[#00729F] rounded-full h-11 w-11 flex justify-center items-center absolute xs:right-1/3 xs:transform xs:translate-x-1/2 xs:top-[110%] sm:right-[-35px] sm:top-[50%] sm:transform sm:-translate-y-1/2 z-10"
  onClick={onClick}
  >
    <Image
      src="/Podcast/whitearrow.svg"
      alt="arrow"
      height={25}
      width={24}
    />
  </div>
);


export default function ServicesComponent() {
  // State to hold the currently selected service and card index
  const [selectedService, setSelectedService] = useState(Service[0]); // Initialize with the first service
  const [selectedCardIndex, setSelectedCardIndex] = useState(0); // Track the selected card index



  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ],
   
  }
  return (
    <div className="mt-20 md:px-[60px] lg:px-[100px] xl:px-[124.5px] xs:pt-[150px] pt-[274px] pb-[230px] xs:px-4">
      {/* Main Service Display */}
      <div className="w-full flex xs:flex-col-reverse lg:flex-row justify-between h-[500px]">
        {/* Main Image */}
        <div className="xs:flex xs:justify-center" >
          <Image
            src={selectedService.imagesrc}
            alt={selectedService.title}
            height={517}
            width={625}
            className=" xs:w-[500px] xs:h-[350px] md:h-[517px] md:w-[625px]"
          />
        </div>

        {/* Main Service Info */}
        <div className="flex  justify-center items-center xs:w-full lg:w-[40%]">
          <div>
            <p className="text-[14px] text-[#171717CC] font-semibold">
              Our Services
            </p>
            <h2 className="text-[40px] font-bold">{selectedService.title}</h2>
            <p className="text-[#171717CC] xs:text-[14px]md:text-xl mt-5 mb-10">
              {selectedService.description}
            </p>


            <div className="flex justify-between">

            
            <Link href='/services' >
              <button className="bg-[#00729f]  xs:w-[150px] sm:w-[300px] h-14 xl:h-[45px] xl:w-40 lg:h-[45px] lg:w-[144px] rounded-lg text-white shadow-lg font-bold text-[16px] ">
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
              <button className="bg-[#00729f] xl:h-[45px] xl:w-40 lg:h-[45px] lg:w-[144px] rounded-lg text-white shadow-lg font-bold text-[16px] xs:w-[150px] sm:w-[300px] h-14 xs:ml-2">
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
      </div>

      {/* Service Cards */}
      <div className="flex mt-10 justify-center ">
        <Slider
          {...settings}
          className="w-[80vw] lg:min-w-[700px] xl:min-w-[1150px] 2xl:max-w-[1300px]  " // Fixed the class syntax
        >
          {Service.map((srvc, index) => (
            <div key={index} className="">
              <div
                className={`pt-[38px] pr-[30px] pb-[24px] pl-[28px]  w-11/12 h-52 xl:w-11/12 xl:h-52 2xl:w-72 2xl:h-52 rounded-xl shadow-xl group cursor-pointer transition-all duration-300 ${selectedCardIndex === index ? "bg-box grow h-60 text-white" : "bg-[#ffffff]"
                  }`}
                onClick={() => {
                  setSelectedService(srvc);
                  setSelectedCardIndex(index);
                }}
              >
                <a>
                  <div className="flex flex-col w-full h-full justify-between">
                    <Image
                      className="group-hover:rotate-180 duration-300"
                      src={srvc.cardimg}
                      alt={srvc.title}
                      height={48}
                      width={48}
                    />
                    <p className="text-[16px] font-bold">{srvc.title}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    

    </div>
  );
}
