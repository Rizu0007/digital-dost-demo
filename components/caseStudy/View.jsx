"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Data for industries, case studies, and countries
const industries = [
  "Fashion",
  "RealState",
  "Skin Care",
  "Health Care",
  "Ecommerce",
  "Sport & Fitness ",
  "BlockChain & Crypto",
  "Local Business & Services",
];
const services = [
  "Performance Marketing",
  "Social Media Management",
  "SEO",
  "Lead Generation",
  "Content Creation ",
  "Web Development ",
  "App Development",
  "Email Marketing ",
];
const countries = ["Saudi Arabia", "USA", "Canada"];

const caseStudies = [
  {
    id: 1, // Added unique id
    imageSrc: "/CaseStudy/caseStudy1.webp",
    tag: "Pay10 | Saudi Arab",
    title: "All-inclusive Digital Wallet App for Middle East",
    category: [{ type: "Fashion" }, { type: "Finance" }, { type: "Banking" }],
    service: "Performance Marketing",
  },
  {
    id: 2,
    imageSrc: "/CaseStudy/caseStudy2.webp",
    tag: "Complibuddy | USA",
    title: "Full-suite Management Software For Property Compliance in NYC",
    category: [{ type: "RealState" }, { type: "Health Care" }],
    service: "Social Media Management",
  },
  {
    id: 3,
    imageSrc: "/CaseStudy/caseStudy3.webp",
    tag: "Toto | Canada",
    title: "AI-Powered Community Platform for Social Change",
    category: [{ type: "Ecommerce" }],
    service: "SEO",
  },
  {
    id: 4,
    imageSrc: "/CaseStudy/caseStudy4.webp",
    tag: "Dexfolio | USA",
    title: "Decentralized Portfolio Tracking Application",
    category: [
      { type: "Cryptocurrency" },
      { type: "Finance" },
      { type: "BlockChain & Crypto" },
    ],
    service: "Lead Generation",
  },
  {
    id: 5, // Added unique id
    imageSrc: "/CaseStudy/caseStudy1.webp",
    tag: "Pay10 | Saudi Arab",
    title: "All-inclusive Digital Wallet App for Middle East",
    category: [
      { type: "Fintech" },
      { type: "Finance" },
      { type: "BlockChain & Crypto" },
    ],
    service: "Content Creation ",
  },
  {
    id: 6,
    imageSrc: "/CaseStudy/caseStudy2.webp",
    tag: "Complibuddy | USA",
    title: "Full-suite Management Software For Property Compliance in NYC",
    category: [{ type: "Real Estate" }],
    service: "Web Development",
  },
  {
    id: 7,
    imageSrc: "/CaseStudy/caseStudy3.webp",
    tag: "Toto | Canada",
    title: "AI-Powered Community Platform for Social Change",
    category: [{ type: "Sport & Fitness" }],
    service: "App Development",
  },
  {
    id: 8,
    imageSrc: "/CaseStudy/caseStudy4.webp",
    tag: "Dexfolio | USA",
    title: "Decentralized Portfolio Tracking Application",
    category: [
      { type: "Cryptocurrency" },
      { type: "Finance" },
      { type: "Sport & Fitness" },
    ],
    service: "Email Marketing ",
  },
];

const View = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedServices, setSelectedServices] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const handleClickOutside = () => {
    setIsIndustryOpen(false);
    setIsServiceOpen(false);
    setIsCountryOpen(false);
  };

  // Handlers for industry and country filters
  const handleIndustryChange = (e) => {
    setSelectedIndustry(e.target.value);
  };
  const handleServicesChange = (e) => {
    setSelectedServices(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  // Filter case studies based on selected industry and country
  const filteredCaseStudies = caseStudies.filter((study) => {
    const industryMatch =
      !selectedIndustry ||
      study.category.some((cat) => cat.type === selectedIndustry);
    const serviceMatch =
      !selectedServices || study.service === selectedServices;

    const countryMatch =
      !selectedCountry || study.tag.split(" | ")[1] === selectedCountry;
    return industryMatch && serviceMatch && countryMatch;
  });

  return (
    <div className="flex justify-center items-center">
      <section className="w-5/6 pt-[185px] pb-[230px]">
        <div>
          {/* Heading */}
          <div className="w-full mb-24">
            <h1 className="font-bold text-[48px] lg:text-[70px]">
              Explore Our Craft
            </h1>
          </div>

          {/* Filters */}
          <div className="flex justify-end mb-10 space-x-4">
            {/* Industries Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsIndustryOpen(!isIndustryOpen);
                  setIsServiceOpen(false);
                  setIsCountryOpen(false);
                }}
                className="mb-1 text-[18px] rounded-full h-10 w-40 font-semibold border-2 flex justify-center items-center border-gray-500 text-center"
              >
                <span>
                  <Image
                    src="/CaseStudy/gear.png"
                    alt="gear"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                </span>
                Industries
                <span>
                  <Image
                    src="/CaseStudy/down-arrow.png"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="ml-2 w-[10px] h-[10px] mt-2"
                  />
                </span>
              </button>

              {isIndustryOpen && (
                <ul className="absolute z-10 w-40 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleIndustryChange({ target: { value: "" } });
                      setIsIndustryOpen(false);
                    }}
                  >
                    All
                  </li>
                  {industries.map((industry) => (
                    <li
                      key={industry}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        handleIndustryChange({ target: { value: industry } });
                        setIsIndustryOpen(false);
                      }}
                    >
                      {industry}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServiceOpen(!isServiceOpen);
                  setIsIndustryOpen(false);
                  setIsCountryOpen(false);
                }}
                className="mb-1 text-[18px] rounded-full h-10 w-36 font-semibold border-2 flex justify-center items-center border-gray-500 text-center"
              >
                <span>
                  <Image
                    src="/CaseStudy/serviceicon.png"
                    alt="service"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                </span>
                Services
                <span>
                  <Image
                    src="/CaseStudy/down-arrow.png"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="ml-2 w-[10px] h-[10px] mt-2"
                  />
                </span>
              </button>

              {isServiceOpen && (
                <ul className="absolute z-10 w-36 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleServicesChange({ target: { value: "" } });
                      setIsServiceOpen(false);
                    }}
                  >
                    All
                  </li>
                  {services.map((service) => (
                    <li
                      key={service}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        handleServicesChange({ target: { value: service } });
                        setIsServiceOpen(false);
                      }}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Country Dropdown */}
            <div className="relative md:block xs:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCountryOpen(!isCountryOpen);
                  setIsIndustryOpen(false);
                  setIsServiceOpen(false);
                }}
                className="mb-1 text-[18px] rounded-full h-10 w-36 font-semibold border-2 flex justify-center items-center border-gray-500 text-center"
              >
                <span>
                  <Image
                    src="/CaseStudy/country.png"
                    alt="country"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                </span>
                Country
                <span>
                  <Image
                    src="/CaseStudy/down-arrow.png"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="ml-2 w-[10px] h-[10px] mt-2"
                  />
                </span>
              </button>

              {isCountryOpen && (
                <ul className="absolute z-10 w-36 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleCountryChange({ target: { value: "" } });
                      setIsCountryOpen(false);
                    }}
                  >
                    All
                  </li>
                  {countries.map((country) => (
                    <li
                      key={country}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        handleCountryChange({ target: { value: country } });
                        setIsCountryOpen(false);
                      }}
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Case Study Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredCaseStudies.map((study, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "mt-20" : ""}`}
              >
                <Link href="/case-study">
                  <div>
                    <Image
                      src={study.imageSrc}
                      alt={study.title}
                      width={507}
                      height={280}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="inline-flex flex-col space-y-4 mt-5">
                    <span className="text-[18px] text-[#858c9f]">
                      {study.tag}
                    </span>
                    <h4 className="text-[28px] font-bold text-black">
                      {study.title}
                    </h4>
                    {study.category && (
                      <div className="flex flex-wrap gap-2">
                        {study.category.map((type) => (
                          <button
                            key={type.type}
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
    </div>
  );
};

export default View;
