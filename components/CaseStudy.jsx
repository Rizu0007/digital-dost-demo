import React from "react";
import Image from "next/image";
import Link from "next/link";
import View from "./caseStudy/View";

const CaseStudy = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:-mt-48 -mt-36">
        <View limitItems={true} />

        <Link href="/casestudyall">
          <button className="bg-[#00729f] xl:h-[45px] xl:w-40 lg:h-[45px] lg:w-[144px] rounded-lg text-white shadow-lg font-bold text-[16px] w-full h-11 ml-5">
            <div className="flex justify-center">
              <div>
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
      </div>
      <div className="flex justify-center xs:my-12 lg:mt-12 lg:mb-0">
        <div className="bg-box1 h-40 p-10 flex items-center w-11/12 lg:w-5/6 rounded-3xl -top-44">
          <div className="text-center flex flex-col lg:flex-row justify-center items-center w-full">
            <h2 className="font-semibold mb-4 lg:mb-0 text-white text-3xl sm:text-4xl lg:text-5xl">
              Ready to get started?
              <br />
              <span className="text-white">Talk to us today</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;