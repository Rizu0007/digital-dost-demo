import React from "react";
import Image from "next/image";

const Challenge = ({challenges}) => {


  const mainHeading = "The Challenge";
  const subHeading = "Messaging obstacles, navigation issues and conversion barriers prevented the brand from conveying their unique value proposition, offering and engaging user experience and driving B2B leads.";

  return (
    <section className="w-full xs:max-h-full lg:max-h-[809px] opacity-80 shadow-sm">
      <div className="mx-auto pb-4 pt-20 py-5">
        <div className="mb-10">
          {/* Mapping the main heading */}
          <h1 className="text-black font-bold text-5xl text-center mb-5">{mainHeading}</h1>
          <p className="text-black font-medium md:text-xl text-center md:mx-16 mx-3">
            {subHeading}
          </p>
        </div>
        <div className="w-full px-4 pt-3">
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
              <div className="w-2 h-96 bg-white">
                <div className="h-96 bg-[#00729f]"></div>
              </div>
              <div className="text-black">
                {challenges.map((item, index) => (
                  <div key={index} className="ml-8">
                    <h1 className="font-bold text-3xl md:mb-3">{item.title}</h1>
                    <p className="text-xl font-normal mb-1.5 mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;