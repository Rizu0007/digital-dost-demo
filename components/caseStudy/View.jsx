"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudiesData } from "@/servicedata/caseStudy";

const industries = [
  "Fashion",
  "RealState",
  "Apparel",
  "Sports",
  "Skin Care",
  "Environmental Services",
  "Eco-friendly Services",
  "Health Care",
  "Ecommerce",
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
const countries = ["UK", "USA", "Australia"];

const View = ({ limitItems = false }) => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedServices, setSelectedServices] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const handleIndustryChange = (e) => {
    setSelectedIndustry(e.target.value);
  };
  const handleServicesChange = (e) => {
    setSelectedServices(e.target.value);
  };
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  let filteredCaseStudies = caseStudiesData.filter((study) => {
    const industryMatch =
      !selectedIndustry ||
      study.category.some((cat) => cat.type === selectedIndustry);
    const serviceMatch =
      !selectedServices || study.service === selectedServices;
    const countryMatch =
      !selectedCountry || study.tag.split(" | ")[1] === selectedCountry;
    return industryMatch && serviceMatch && countryMatch;
  });

  // If limitItems is true, only show first 4 items
  if (limitItems) {
    filteredCaseStudies = filteredCaseStudies.slice(0, 4);
  }

  return (
    <div className="flex justify-center items-center">
      <section className="w-5/6 md:pt-[95px] pt-20 pb-[30px]">
        <div>
          <div className="w-full md:mb-24 mb-7">
            <h1 className="font-bold text-[38px] lg:text-[70px]">
              Explore Our Craft
            </h1>
          </div>

          {/* Only show filters on the full case studies page */}
          {!limitItems && (
            <div className="flex justify-end mb-10 space-x-4">
              {/* ... (rest of your filter buttons and dropdowns code) */}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredCaseStudies.map((study, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "mt-0 md:mt-20" : ""
                }`}
              >
                <Link href={`/case-study/${study.slug}`}>
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