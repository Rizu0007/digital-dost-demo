import React from "react";
import Image from "next/image";

const Solution = ({ solutions }) => {
    const base64Image =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVR4nO3Zvy5EURAG8C+IEqVCKbyDRBQkvICWik52Z1y2PAoqXsCfnVmRCEvFI4iO7NJ4BVREIjSW8AI7tzGTnF9y+/vdc+eeM3OBLMuy7F+QXoO1090l7yDdgCssre4D/Ib4AssE3KjK5N9NWULoLVLqgRukx8YAHVRlEW4UOgzSF2OIR6wcDcANlsK8CqRbcCOlPrDe2wLIJ2h/FLELWs7hCumJvaDrM3BV0CyvxhBtzDd74QbpmnkVVhvLCF3QrM+o6BDcYJ02rwLLDlxhOTV/VisH43BjfW8ErG/Gze0SrpDUSuzQc3AjNftB8mB8le7gRvgAVOIVYplF2CJmvUDozygfjiHsRka6jcC9wRNqu4MIe5gjXULc47S0/BynyzQ0VJ9C2JaS9AyBe4APP009lxmryCZcKKIPtqjEaJEaC4hbuHLjZ7jL0cfrpFexf3BkWZZlP0/gG8bWtq4XR3x4AAAAAElFTkSuQmCC";


  return (
    <section className="relative inset-0  flex flex-col items-center pb-10 ">
      {/* Header Section */}
      <div className="mb-10 invert-0 flex flex-col items-center">
        <h1 className="text-black font-bold xs:text-4xl md:text-5xl text-center mb-5 pt-10">
          THE SOLUTION
        </h1>
        <p className="font-medium text-black text-xl text-center ">
          <span className="text-black">Digital Silk</span> revamped messaging,
          navigation, and <span className="text-black">Web Design</span> to
          overcome challenges and grow traffic.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative flex md:flex-row-reverse xs:flex-col-reverse justify-center items-center h-full max-w-7xl md:px-4">
        {/* Image Column */}
        <div className="w-3/4 flex xs:justify-center md:justify-end">
          <Image
            src="/CaseStudy-Full/websiteimg2.webp"
            alt="Solution Visual"
            width={625}
            height={525}
            className="xs:w-[400px] xs:h-[280px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[350px] lg:h-[500px] lg:w-[600px] xl:h-[525px] xl:w-[625px]"
          />
        </div>

        {/* Text Column */}
        <div className="md:w-3/4 text-black xs:px-4 sm:px-8 h-full flex flex-col justify-center xs:space-y-4 md:space-y-4 lg:space-y-10 xs:py-5  mx-12 md:-mt-24">
          <h2 className="text-xl font-light italic">
            Some of our deliverables included:
          </h2>

          {/* Dynamically Rendered Solution Points */}
          <div className="space-y-3">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-start md:font-semibold md:text-lg"
              >
                <span className="mr-3 mt-1">
                  <Image
                    src={base64Image}
                    alt="Bullet icon"
                    width={60}
                    height={60}
                  />
                </span>
                <div>
                  <p className="block">{solution.title}</p>
                  <p className="font-normal">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
