'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from "react";

const Podcast = () => {

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
      title:"Lead The Lancers | With | Musa Raza | CEO Digital Dost (Pvt.) Ltd.",

    },
    {
      Videosrc: "https://www.youtube.com/embed/E5fupH1SG4I",
      title: "Fast Nuces To Australia | E-commerce to Digital Marketing | Podcast with Musa Raza",
    },
    {
      Videosrc: "https://www.youtube.com/embed/b8khlkaMYpA",
      title: "Moving to Pakistan for Humanitarian cause ft. Todd Shea | Musa Raza Podcast | Ep. 17",
    },
    {
      Videosrc: "https://www.youtube.com/embed/q__gRX_4ZpI?start=1495",
      title: "Exploring the dynamics of investing in Stock Market PSX ft. Jawad Hafeez | Musa Raza Podcast | Ep 15",
    },
    {
      Videosrc: "https://www.youtube.com/embed/MSDgezhhpWA?start=813",
      title: "From a common man to a Billionare ft. Tahir Javed | Musa Raza Podcast | Episode 13",
    },
    {
      Videosrc: "https://www.youtube.com/embed/LwQaPPMNWwQ",
      title: "Mastering Digital Marketing - From Lahore to Global Success in E-Commerce | ft. Musa Raza",
    },
    {
      Videosrc: "https://www.youtube.com/embed/LwQaPPMNWwQ",
      title: "Mastering Digital Marketing - From Lahore to Global Success in E-Commerce | ft. Musa Raza",
    },

  ];

  const scrollContainerRef = useRef(null);

  // State for controlling the black line width
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction) => {
    const scrollAmount = window.innerWidth >= 768 ? 100 : 400; // Adjust scroll amount based on screen size

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
      setActiveIndex((prev) => Math.min(prev + 1,Podcast.length - 1));
    }
  };
  return (

    <section className="   xs:px-[20px] md:px-[124.5px] py-[70px] mb-8  bg-white overflow-hidden" >
        {/* inner container start */}
        <div className="">
          {/* heading container start  */}
          <div className="w-full mb-24 flex justify-between">
            <h6 className="font-bold text-[40px] text-black ">
              Our Podcast
            </h6>
            <Link href="" className='flex'>



              <div className='flex justify-center items-center space-x-3'>

                <p className='text-black text-[20px]'>View All</p>
                <button className="border-solid border-2 border-[#00729F] rounded-full h-10 w-10  flex justify-center items-center bg-[#FFFFFF1A]">
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
          {/* heading container end  */}

          {/* Podcast main */}
          <div className="flex xs:space-x-2 md:space-x-7 flex-shrink-0 overflow-x-hidden scrollbar-hide"
           ref={scrollContainerRef}>
            {Podcast.map((Pod, index) => (

              <div key={index} className='flex flex-col items-center'>
                <div
                  className="h-[208px] w-[368px] rounded-xl bg-black  flex flex-col "
                >


                  {/* youtube video author */}
                  <div className="flex justify-between items-center">

                    <iframe width="368" height="208" src={Pod.Videosrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-xl'></iframe>

                  </div>
                </div>

                <div className="font-bold text-[16px] mt-4 text-black">
                  <h1>{Pod.title}</h1>
                </div>
              </div>




            ))}


          </div>

          <div className="flex w-full h-auto mt-12  items-center justify-between">
            <div className=" relative h-[2px] w-[85%] bg-[#dadce2]">

              <div className=" absolute top-0 h-[2px] w-[30%] bg-[#00729F] transition-all duration-300" 
                 style={{
                  width: "20%", // The black line stays at a fixed length of 20%
                  left: `${(activeIndex / (Podcast.length - 1)) * 80}%`,
                }}>

              </div>
            </div>

            <div className=" flex mr-6">
              <button className="bg-[#fff3] border-solid border-2 border-[#00729F]  rounded-full  h-11 w-11 flex justify-center items-center mr-3" onClick={() => handleScroll("left")}
              >   <Image
                src="/Podcast/whitearrowleft.svg"
                alt="arrow"

                height={25}
                width={24}




              /></button>
              <button className="bg-[#fff3] rounded-full border-solid border-2 border-[#00729F]  h-11 w-11 flex justify-center items-center" onClick={() => handleScroll("right")}              >
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
        {/* inner container end */}
      </section>
     


      
   
  )
}

export default Podcast