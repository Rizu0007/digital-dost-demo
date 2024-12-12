"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial2 = () => {
  const testimonials = [
    {
      title: "Friendly, Fast, and Focused on Success",
      feedback:
        "SHOPEX Digital Marketing's services generate a substantial amount of revenue for the client. The team responds quickly to emails and calls, maintaining open and direct lines of communication. Customers can expect superior quality from a team that is both friendly and professional",
      authorName: "David Fraunberger",
      authorDesignation: "Shades Studio",
      img: "/Testimonial/david-fraunberger.png",
    },
    {
      title: "Thrilled with the Results and Exceptional Service",
      feedback:
        "Very pleased with the level of service and the results we've received to date. We did our homework researching different vendors for PPC before deciding on SHOPEX. They won us over first on knowledge and then on price. I highly recommend SHOPEX for PPC & SEO.",
      authorName: "Brian Dunham",
      authorDesignation: "ACA Reporting,A Sky Reporting",
      img: "/Testimonial/Dunham.png",
    },
    {
      title: "Effective Communication and Exponential Growth in Sales",
      feedback:
        "We've had an amazing year with SHOPEX managing our apparel brand. Their expertise has driven exponential growth on digital platforms, and our sales have exceeded expectations. The team is highly cooperative and maintains excellent communication throughout.",
      authorName: "Amna Hussain",
      authorDesignation: "Brand Manager at Vanya",
      img: "/Testimonial/hussain.png",
    },
    {
      title: "Trusted Support in Building Our Leading Online Brand",
      feedback:
        "We've built XOXO into a leading and favorite online lingerie brand, with SHOPEX supporting us every step of the way. Their expertise has been invaluable in our growth, helping us exceed expectations in both sales and customer satisfaction. We highly recommend their services for e-commerce success.",
      authorName: "Fatima Waheed",
      authorDesignation: "Founder & Brand Owner,XOXO",
      img: "/Testimonial/naheed.png",
    },
    {
      title: "Each team member was exceptional and always available",
      feedback:
        "I have truly enjoyed working with the SHOPEX team! They are incredibly professional, reliable, and always deliver top-notch service. With their expertise, we've seen great improvements in our online presence and overall business performance.",
      authorName: "Irum Changaiz",
      authorDesignation: "Marketing Head,Nureh",
      img: "/Testimonial/changaiz.png",
    },
    {
      title: "Professional, Effective, and a Pleasure to Work With",
      feedback:
        "SHOPEX helped to develop my website. They did a great job and I noticed the positive results almost immediately. They are very professional and very pleasant to work with. I am very happy with the services provided and I highly recommend SHOPEX to everyone.",
      authorName: "Maryana Kanda",
      authorDesignation: "NEW JERSY MEDIATION",
      img: "/Testimonial/kanda.png",
    },
  ];
      
  const CustomPrevArrow = ({ onClick }) => (
  <div
    className="bg-[#fff3] border-solid border-2 border-[#00729F] rounded-full h-11 w-11 flex justify-center items-center absolute xs:left-1/3 xs:transform xs:-translate-x-1/2 xs:top-[110%] lg:left-[-35px] lg:top-[50%] lg:transform lg:-translate-y-1/2 z-10"
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
    className="bg-[#fff3] border-solid border-2 border-[#00729F] rounded-full h-11 w-11 flex justify-center items-center absolute xs:right-1/3 xs:transform xs:translate-x-1/2 xs:top-[110%] lg:right-[-35px] lg:top-[50%] lg:transform lg:-translate-y-1/2 z-10"
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    centerPadding: '20px',
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dots: false,
    responsive: [
      {
        breakpoint: 1478,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 1179,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint:900,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          centerPadding: '10px',
        },
      },
      {
        breakpoint: 544,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          centerPadding: '10px',
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10px',
          infinite:true,
        },
      },
      {
        breakpoint: 0,
        settings: {
          infinite:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10px',
          infinite:true,

        },
      },
    ],
  };

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-32 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Heading container */}
      <div className="w-full mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          Testimonial
        </h2>
        <p className="text-sm sm:text-base font-medium text-gray-600">
          Clients About Our Cooperation
        </p>
      </div>

      {/* Testimonial slider */}
      <div className="testimonial-slider-container mb-20">
        <Slider {...settings}>
          {testimonials.map((test, index) => (
            <div key={index} className=""> 
              <div className="bg-white rounded-xl shadow-lg h-full flex flex-col xs:h-[350px] xs:w-[385px] sm:w-[400px] sm:h-[400px] md:h-[390px] md:w-[450px] lg::w-[480px] xl:w-[540px] shrink-0 xs:p-10 md:p-10">
                {/* Testimonial content */}
                <h3 className="text-lg sm:text-xl font-bold mb-4">
                  {test.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-6">
                  {test.feedback}
                </p>

                {/* Testimonial author */}
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="flex-shrink-0">
                    <Image
                      src={test.img}
                      alt={`${test.authorName} profile`}
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold">
                      {test.authorName}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {test.authorDesignation}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial2;