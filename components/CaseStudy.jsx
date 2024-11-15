import React from "react";
import Image from "next/image";
import Link from "next/link";

const CaseStudy = () => {
  const caseStudy = [
    {
      imageSrc: "/CaseStudy/caseStudy1.webp",
      tag: "Pay10 | Saudi Arab",
      title: "All-inclusive Digital Wallet App for Middle East",
      category: [{ type: "Fintech" }, { type: "Finance" }, { type: "Banking" }]
    },
    {
      imageSrc: "/CaseStudy/caseStudy2.webp",
      tag: "Complibuddy | USA",
      title: "Full-suite Management Software For Property Compliance in NYC",
      category: [{ type: "Real Estate" }]
    },
    {
      imageSrc: "/CaseStudy/caseStudy3.webp",
      tag: "Toto | Canada",
      title: "AI-Powered Community Platform for Social Change",
      category: [{ type: "Government & public service" }]
    },
    {
      imageSrc: "/CaseStudy/caseStudy4.webp",
      tag: "Dexfolio | USA",
      title: "Decentralized Portfolio Tracking Application",
      category: [{ type: "Cryptocurrency" }, { type: "Finance" }, { type: "Banking" }]
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <section className="w-5/6  pb-[100px]">
        <div>
          <div className="w-full mb-24">
            <p className="text-[16px] font-medium">PORTFOLIO</p>
            <h6 className="font-bold text-[48px]">Explore Our Case Studies</h6>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-content-end">
            {caseStudy.map((study, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? "mt-20" : ""}`} // Conditional margin for odd indexes
              >
                 <Link  href='/case-study'>
                <div>

                  <Image
                    src={study.imageSrc}
                    alt={study.title}
                    width={507}
                    height={280} // Adjust height to maintain aspect ratio
                    className="rounded-lg"
                  />
               </div>

                <div className="inline-flex flex-col space-y-4 mt-5">
                  <div className="text-[18px] text-[#858c9f]">
                    <span>{study.tag}</span>
                  </div>

                  <div>
                    <h4 className="text-[28px] font-bold text-black">{study.title}</h4>
                  </div>

                  {study.category && (
                    <div className="flex flex-wrap gap-2">
                      {study.category.map((type, index1) => (
                        <button
                          key={index1}
                          className="font-semibold text-black text-[14px] bg-[#e8e9ed] py-[10px] px-[20px] rounded-[20px]"
                        >
                          {type.type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Link href='/casestudyall' >
            <button className="bg-[#00729f] xl:h-[45px] xl:w-40 lg:h-[45px] lg:w-[144px] rounded-lg text-white shadow-lg font-bold text-[16px] w-full h-11 ml-5">
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
    </div>
  );
};

export default CaseStudy;
