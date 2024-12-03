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
    imagesrc: "/Services/Digital Marketing 1.jpg",
    title: "Digital Marketing",
    description:
      "We drive massive ROI from a custom revenue-generating approach. More traffic means more leads. More Leads create more sales, and the result is ultimately driving more revenue. Shopex will help your business reach beyond the desired goals with a personalized digital marketing strategy.",
    cardimg: "/Services/DigitalMarketing1.png",
    selectedCardimg: "/Services/Digital Marketingiconwhite.png",
  },
  {
    imagesrc: "/Services/Ecommerce img1.png",
    title: "Ecommerce",
    description:
      "From E-commerce store creation to optimization to strong online presence and marketing, we are here to help your business. At Shopex, we have a team of intelligent business consultants and pro-coders to help our e-commerce clients with various business challenges.",
    cardimg: "/Services/Ecommerceicon.png",
    selectedCardimg: "/Services/Ecommerceiconwhite.png",

  },
  {
    imagesrc: "/Services/Email Marketing Page img.png",
    title: "Email Marketing",
    description:
      "If you want to connect your brand with the right audience at the right time and increase sales, look no further than e-mail marketing. Shopex result-driven email marketing strategies will help you to fit your business objectives perfectly. Let us set up an email campaign. ",
    cardimg: "/Services/EmailMarketingicon.png",
    selectedCardimg: "/Services/EmailMarketingiconwhite.png",

  },
  {
    imagesrc: "/Services/Web Development.png",
    title: "Web development",
    description:
      "When it comes to selling your brand, nothing beats your website. With ShopeX's help, your website may become an effective medium of professional communication, befitting the high caliber of your position. We use threat resistance, proven architectures, ongoing maintenance, and customized CMS solutions to increase efficiency.",
    cardimg: "/Services/WebDevelopmenticon.png",
    selectedCardimg: "/Services/WebDevelopmentwhiteicon.png",

  },
  {
    imagesrc: "/Services/UIUX.png",
    title: "UI/UX Design",
    description:
      "If you want to transform your vision into a seamless user experience, Shopex's exclusive UI/UX design services are the ultimate boosters that turn concepts into functional products. You need to share your idea, and we have it covered. ",
    cardimg: "/Services/Uiuxicon.png",
    selectedCardimg: "/Services/Uiuxiconwhite.png",

  },
  {
    imagesrc: "/Services/LandingPageimg.png",
    title: "Landing Pages",
    description:
      "Your marketing and advertising campaigns depend heavily on your landing pages. Increase the effect of these pages with expert landing page design. Shopex's bespoke landing page designs can help you increase sales, improve the quality of your leads, and increase your revenue.",
    cardimg: "/Services/LandingPagesicon.png",
    selectedCardimg: "/Services/LandingPagesiconwhite.png",

  },
  {
    imagesrc: "/Services/App Development img.png",
    title: "App Development",
    description:
      "We create reliable, scalable apps that can grow with your company. We can make a mobile application that will delight your users and propel your company to new heights. Shopex provides a comprehensive range of application design, integration, and management services.",
    cardimg: "/Services/AppDevelopmenticon.png",
    selectedCardimg: "/Services/AppDevelopmenticonwhite.png",

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
    infinite: true,
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
          initialSlide: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,

        }
      }

    ],

  }
  return (
    <div className="mt-20 md:px-[60px] lg:px-[100px] xl:px-[124.5px] xs:pt-[150px] pt-[274px] pb-[230px] xs:px-4">
      {/* Main Service Display */}
      <div className="w-full flex xs:flex-col-reverse lg:flex-row justify-between ">
        {/* Main Image */}
        {/* <div className="xs:flex xs:justify-center" >
          <Image
            src={selectedService.imagesrc}
            alt={selectedService.title}
            height={517}
            width={625}
            className=" xs:w-[500px] xs:h-[350px] md:h-[450px] md:w-[625px]"
          />
        </div> */}

        <div className="xs:flex xs:justify-center" >
          <Image
            src={selectedService.imagesrc}
            alt={selectedService.title}
            height={640}
            width={640}
            className=" "
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
                      className="group-hover:rotate-180 duration-300 "
                      src={
                        selectedCardIndex === index
                          ? srvc.selectedCardimg // Image when selected
                          : srvc.cardimg // Default image
                      }
                      alt={srvc.title}
                      height={70}
                      width={70}
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
