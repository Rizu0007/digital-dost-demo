'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Podcast = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
        },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const Podcast = [
    {
      Videosrc: "https://www.youtube.com/embed/Byzi6dz3MMk?pp=ygUJbXVzYSByYXph",
      title: "How to become successful businesswoman in Pakistan ft. Tabinda Islam | Musa Raza Podcast | Ep. 16",
    },
    {
      Videosrc: "https://www.youtube.com/embed/XHasZBJ5Nw4?start=13&pp=ygUJbXVzYSByYXph",
      title: "Pakistani's Seeking Permit Visa, While Musa Raza Came Back to Pakistan To Earn | Why? How?",
    },
    {
      Videosrc: "https://www.youtube.com/embed/TUyBmrDK9TM",
      title: "The CxO Talk with Mr. Musa Raza, CEO, Digital Dost by Ayesha Malik",
    },
    {
      Videosrc: "https://www.youtube.com/embed/xh5rh_U4FXk?start=18",
      title: "Lead The Lancers | With | Musa Raza | CEO Digital Dost (Pvt.) Ltd.",
    },
    {
      Videosrc: "https://www.youtube.com/embed/E5fupH1SG4I",
      title: "Fast Nuces To Australia | E-commerce to Digital Marketing | Podcast with Musa Raza",
    },
    {
      Videosrc: "https://www.youtube.com/embed/b8khlkaMYpA",
      title: "Moving to Pakistan for Humanitarian cause ft. Todd Shea | Musa Raza Podcast | Ep. 17",
    },

  ];

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const valueOf = 2
  const calculatePosition = () => {
    const totalSlides = Podcast.length - settings.slidesToShow + valueOf;
    // Calculate the width that the blue line can move while staying within grey line
    const availableWidth = 90; // Since grey line is 85% wide
    const blueLineWidth = 0; // Width of blue line
    const maxPosition = availableWidth - blueLineWidth; // Maximum distance blue line can move

    let position = (currentSlide / totalSlides) * maxPosition;
    // Ensure the position doesn't exceed the maximum available space
    position = Math.min(position, maxPosition);
    return `${position}%`;
  };


  const getVideoSize = () => {
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 2500) {
        return { width: 410, height: 208 };
      } else if (windowWidth >= 1500 && windowWidth < 2500) {
        return { width: 410, height: 220 };
      } else if (windowWidth >= 1024 && windowWidth < 1500) {
        return { width: 368, height: 208 };
      } else if (windowWidth >= 600 && windowWidth < 1024) {
        return { width: 300, height: 260 };
      } else if (windowWidth < 600) {
        return { width: 445, height: 210 };
      } else if (windowWidth >= 400 && windowWidth < 500) {
        return { width: 200, height: 210 };
      } else {
        return { width: 410, height: 220 };
      }
    }
  };
  return (
    <section className="xs:px-[20px] md:px-[124.5px] py-[70px] mb-8 bg-white" ref={containerRef}>
      <div className="">
        <div className="w-full mb-24 flex justify-between">
          <h6 className="font-bold text-[40px] text-black">
            Our Podcast
          </h6>
          <Link href="" className='flex'>
            <div className='flex justify-center items-center space-x-3'>
              <p className='text-black text-[20px]'>View All</p>
              <button className="border-solid border-2 border-[#00729F] rounded-full h-10 w-10 flex justify-center items-center bg-[#FFFFFF1A]">
                <Image
                  src="/Podcast/whitearrow.svg"
                  alt="arrow"
                  height={25}
                  width={24}
                />
              </button>
            </div>
          </Link>
        </div>

        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {Podcast.map((Pod, index) => (
              <div key={index} className='px-2'>
                <div className="w-full rounded-xl bg-black flex flex-col">
                  <div className="w-full aspect-[calc(var(--aspect-ratio))]">
                    <iframe
                      src={Pod.Videosrc}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full rounded-xl"
                      // style={{ aspectRatio: `${getVideoSize(containerRef.current?.offsetWidth).aspectRatio}` }}
                    />
                  </div>
                </div>
                <div className="font-bold text-[16px] mt-4 text-black">
                  <h1>{Pod.title}</h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom Navigation with Progress Line */}
        <div className="flex w-full h-auto mt-12 items-center justify-between">
          <div className="relative h-[2px] w-[85%] bg-[#dadce2]">
            <div
              className="absolute top-0 h-[2px] bg-[#00729F] transition-all duration-300"
              style={{
                width: '10%',
                left: calculatePosition()
              }}
            />
          </div>

          <div className="flex mr-6">
            <button
              className="bg-[#fff3] border-solid border-2 border-[#00729F] rounded-full h-11 w-11 flex justify-center items-center mr-3"
              onClick={handlePrevious}
            >
              <Image
                src="/Podcast/whitearrowleft.svg"
                alt="arrow"
                height={25}
                width={24}
              />
            </button>
            <button
              className="bg-[#fff3] rounded-full border-solid border-2 border-[#00729F] h-11 w-11 flex justify-center items-center"
              onClick={handleNext}
            >
              <Image
                src="/Podcast/whitearrow.svg"
                alt="arrow"
                height={25}
                width={24}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Podcast;