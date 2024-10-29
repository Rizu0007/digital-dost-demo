import React from "react";
import Image from "next/image";
const Challenge = () => {
  return (
    <section className="w-full xs:max-h-full lg:max-h-[809px] bg-boxleft opacity-80">
    <div className=" mx-auto pb-4 pt-20 py-5">
      <div className="mb-10">
        <h1 className="text-[#FAF9F6] font-bold text-5xl text-center mb-5">The Challenge</h1>
        <p className=" text-white font-medium  md:text-xl text-center">
          Messaging obstacles, navigation issues and conversion barriers prevented
          the brand from conveying their unique value proposition, offering and
          engaging user experience and driving B2B leads.
        </p>
      </div>
      <div className="w-full px-4 pt-10">
        {/* Updated flex class for responsiveness */}
        <div className="flex justify-center items-center space-x-8 xs:flex-col sm:flex-col md:flex-row">
          <div>
            <Image
              src="/CaseStudy-Full/Challengeimg.webp"
              alt="challenge"
              height={469}
              width={528}
              className="hidden md:block"

            />
          </div>
          <div className="flex items-center lg:w-1/2 w-3/4">
            <div className="w-3 h-96 bg-white">
              <div className="h-36 bg-[#00729f]"></div>
            </div>
            <div className="text-white">
              <div className="ml-4">
                <h1 className="font-extrabold text-3xl ">
                  Managing Obstacles
                </h1>
                <p className="text-xl font-normal">
                  Keona Health’s unique value proposition was hindered by unclear
                  messaging, making it challenging for website visitors to
                  understand the benefits of the brand’s AI intelligent patient
                  self-scheduling software.
                </p>
              </div>
              <div className="ml-4">
                <h1 className="font-extrabold text-3xl">Navigation Issues</h1>
                <p className="text-xl  font-normal">
                  The website posed navigation challenges, which resulted in low
                  time on site and limited traffic, signifying a poor user
                  experience.
                </p>
              </div>
              <div className="ml-4">
                <h1 className="font-bold text-3xl ">Conversion Barriers</h1>
                <p className="  text-xl  font-normal">
                  The cluttered copy and confusing navigation elements presented
                  significant barriers to conversion, preventing the effective
                  capture of B2B leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  );
};

export default Challenge;
