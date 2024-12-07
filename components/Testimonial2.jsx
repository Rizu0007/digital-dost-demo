"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

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
      title:
        "Each team member was exceptional and always available",
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
  const scrollContainerRef = useRef(null);

  // State for controlling the black line width
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll functionality when clicking the arrow
  const handleScroll = (direction) => {
    const scrollAmount = window.innerWidth >= 768 ? 555 : 400; // Adjust scroll amount based on screen size

    if (direction === "left") {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (direction === "right") {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      setActiveIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
    }
  };

  return (
    <section className="xs:px-5 md:px-32 pt-[274px] pb-[230px] xs:pt-10 xs:pb-32 overflow-hidden -mt-3 md:-mt-0">
      {/* Inner container start */}

      {/* Heading container start */}
      <div className="w-full mb-12">
        <h6 className="font-bold xs:text-[36px] md:text-[48px]">Testimonial</h6>
        <p className="text-[16px] font-medium ml-2">
      
          Clients About Our Cooperation
        </p>
      </div>
      {/* Heading container end */}

      {/* Testimonial main */}
      <div
        className="flex xs:space-x-2 md:space-x-4 flex-shrink-0 overflow-x-hidden scrollbar-hide"
        ref={scrollContainerRef}
      >
        {testimonials.map((test, index) => (
          <div
            className="xs:h-[420px] xs:w-[385px] md:h-[390px] md:w-[540px] shrink-0 rounded-xl bg-white xs:p-10 md:p-10 flex flex-col"
            key={index}
          >
            {/* Testimonial title and feedback */}
            <div className="font-bold text-[20px] mb-5 ">
              <h1>{test.title}</h1>
            </div>
            <div className="font-light xs:text-[15px] md:text-[18px] text-[#757e8f] text-left">
              {test.feedback}
            </div>

            {/* Testimonial author */}
            <div className="flex justify-between mt-3 items-center">
              <div>
                <Image
                  src={test.img}
                  alt="pic"
                  width={96}
                  height={96}
                  className="w-16 h-16 rounded-full object-cover object-[60%_-3px] z-10"
                />
              </div>

              <div className="flex flex-col md:mr-44">
                <div className="text-[16px] font-bold">{test.authorName}</div>
                <div className="text-[14px] text-[#171717]">
                  {test.authorDesignation}
                </div>
              </div>

              <div>
                {/* <Image
                    src="/linkedin.svg"
                    alt="pic"
                    width={26}
                    height={26}
                  /> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Horizontal line with arrows */}
      <div className="flex w-full h-auto mt-12 justify-center items-center">
        {/* White line */}
        <div className="relative h-[2px] w-[80%] bg-[#dadce2]">
          {/* Black line */}
          <div
            className="absolute top-0 h-[2px] bg-[#00729f] transition-all duration-300 "
            style={{
              width: "20%", // The black line stays at a fixed length of 20%
              left: `${(activeIndex / (testimonials.length - 1)) * 100}%`,
            }}
          ></div>
        </div>

        <div className="ml-8 flex">
          {/* right arrow */}
          <button
            onClick={() => handleScroll("left")}
            className="bg-white rounded-full h-11 w-11 flex justify-center items-center mr-3"
          >
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVR4nO3ZvUoEQQwH8L+CVuoLWIjoU2jjR+FjaHWCIFyyp+1poZV2NuKRLIooopU+gVaCIBbqE4i94EflyQhnfblCkmV+MOVCNiSzM1kgy7Isc4llEywfYG13tUhv4AbLFFi+uw6e05J7uNBs9oPl1ha8tkHlLFxgXTIHz3oMF1b2hkD6Ysu8voHKUbjAum0vHS3gQnE4DpJPY/CPqO0PwAXSC3P2C5mDC4XO2BtXTuBm2yS5i9u4JMs9ZL8BF1aPRkDyagz+yVPj7vaQ/QW4QAeTYP0y1v4p3CC5Mmb/HUVrDC6wzttLR9fhBsmDrXTkGc2zQbhB0V+Ao5dQQnoZt4mTRjkRextNWHbifsiStdZw7KNEUpS1uIe5Shynk7pO9zAHcnKh6WA5j3ulrMSlPiHdijtWqcRgK6nLYtzR4q92X+zhbvjxegfphukHB+v137NZlmUZ/skPLLC2rxe/Qf0AAAAASUVORK5CYII="
              className="w-7 h-7"
              alt="arrow right"
              height={50}
              width={50}
            />
          </button>

          {/* left arrow */}
          <button
            onClick={() => handleScroll("right")}
            className="bg-white rounded-full h-11 w-11 flex justify-center items-center"
          >
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVR4nO3Zvy5EURAG8C+IEqVCKbyDRBQkvICWik52Z1y2PAoqXsCfnVmRCEvFI4iO7NJ4BVREIjSW8AI7tzGTnF9y+/vdc+eeM3OBLMuy7F+QXoO1090l7yDdgCssre4D/Ib4AssE3KjK5N9NWULoLVLqgRukx8YAHVRlEW4UOgzSF2OIR6wcDcANlsK8CqRbcCOlPrDe2wLIJ2h/FLELWs7hCumJvaDrM3BV0CyvxhBtzDd74QbpmnkVVhvLCF3QrM+o6BDcYJ02rwLLDlxhOTV/VisH43BjfW8ErG/Gze0SrpDUSuzQc3AjNftB8mB8le7gRvgAVOIVYplF2CJmvUDozygfjiHsRka6jcC9wRNqu4MIe5gjXULc47S0/BynyzQ0VJ9C2JaS9AyBe4APP009lxmryCZcKKIPtqjEaJEaC4hbuHLjZ7jL0cfrpFexf3BkWZZlP0/gG8bWtq4XR3x4AAAAAElFTkSuQmCC"
              className="w-7 h-7"
              alt="arrow left"
              height={50}
              width={50}
            />
          </button>
        </div>
      </div>

      {/* inner container end */}
    </section>
  );
};

export default Testimonial2;
