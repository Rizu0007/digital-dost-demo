'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Services1 = [
  { name: 'Performance Marketing', image: '/megamenu/performance.png', alt: 'performance', link: '#' },
  { name: 'Social Media Management', image: '/megamenu/socialmedia.png', alt: 'socialmedia', link: '#' },
  { id:'3',name: 'SEO', image: '/megamenu/mega3.svg', alt: 'seo', height: 20, width: 20, link: '#' },
  { name: 'Lead Generation', image: '/megamenu/mega10.svg', alt: 'leadgen', link: '#', extraClass: 'w-6 h-6' },
  { name: 'Content Creation', image: '/megamenu/mega11.svg', alt: 'content', link: '#' },
  { name: 'Web Development', image: '/megamenu/mega7.svg', alt: 'performance', height: 25, width: 25, extraClass: 'w-6 h-6', link: '#' },
  { name: 'App Development', image: '/megamenu/mega11.png', alt: 'performance', height: 25, width: 25, extraClass: 'w-5 h-5', link: '#' },
  { name: 'Email Marketing', image: '/megamenu/mega5.svg', alt: 'seo', height: 20, width: 20, link: '#' }
];

const industries = [
  { name: 'Fashion', image: '/megamenu/Fashion.png', alt: 'fashion', link: '#' },
  { name: 'RealState', image: '/megamenu/realstate.png', alt: 'realstate', link: '#' },
  { name: 'Skin Care', image: '/megamenu/scrub.png', alt: 'skincare', link: '#' },
  { name: 'Health care', image: '/megamenu/healthcare.png', alt: 'healthcare', link: '#' },
  { name: 'Ecommerce', image: '/megamenu/Fashion.png', alt: 'ecommerce', link: '#' },
  { name: 'Sport & Fitness', image: '/megamenu/sports.png', alt: 'sports', link: '#' },
  { name: 'BlockChain & Crypto', image: '/megamenu/bitcoin.png', alt: 'crypto', link: '#' },
  { name: 'Local Business & Services', image: '/megamenu/business.png', alt: 'business', link: '#' }
];


const digitalMarketing = [

  { sub: 'Branding', link: '/services/Branding' },
  { sub: 'Performance Marketing', link: '/services/Performance-Marketing' },
  { sub: 'Social Media Management', link: '/services/Social-Media-Management' },
  { sub: 'SEO', link: '/services/SEO' },
  { sub: 'Graphic Design & UI/UX', link: '/services/UI-UXdesign' },
  { sub: 'Content Writing', link: 'Content-Writing' },
  { sub: 'Affiliate Marketing', link: '/services/Affiliate-Marketing' },
  { sub: 'Influencer Marketing', link: '/services/Influencer-Marketing' },
  { sub: 'User-Generated Content ', link: '/services/User-Generated-Content' },
  { sub: 'Shopify Development', link: '/services/Shopify-Development' },
  { sub: 'WordPress Development', link: '/services/Wordpress-Development' }
];

const webDevelopment = [
  { sub: 'Frontend Development', link: '/services/Frontend-Development' },
  { sub: 'Backend Development', link: '/services/Backend-Development' },
  { sub: 'WordPress Development', link: '/services/Wordpress-Development' },
  { sub: 'Shopify Development', link: '/services/Shopify-Development' },
  { sub: 'Wix Development', link: '/services/Wix-Development' },
];

const appDevelopment = [
  { sub: 'Flutter Development', link: '/services/Flutter-Development' },
  { sub: 'React Native Development', link: '/services/React-Native-Development' }
];
const ecommerce = [
  { sub: 'Shopify', link: '/services/Shopify-Development' },
  { sub: 'Ecommerce marketing', link: '/services/Ecommerce-Marketing' },
  { sub: 'Branding ', link: '/services/Branding' }
];


const uiuxDesign = [
  { sub: 'Mobile App UI/UX Design', link: '/services/Mobile-App-UI-UX' },
  { sub: 'Web Design & User Experience', link: '/services/WebDesign-UserExperience' }
];


const emailMarketing = [
  { sub: 'Campaign Strategy & Design', link: '/services/CampaignStrategy-Design' },
  { sub: 'Email Automation', link: '/services/Email-Automation' },
];

const landingPages = [
  { sub: 'Web Design', link: '/services/Web-design' },
  { sub: 'Conversion Rate Optimization ', link: '/services/Conversion-Rate-Optimization' },
];



function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMegaMenuService, setIsMegaMenuService] = useState(false);

  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const [isArrowRotated2, setIsArrowRotated2] = useState(false);
  // newly made neeed to handle


  const [isMobile, setIsMobile] = useState(false);

  const [dropMenuState, setDropMenuState] = useState({
    digitalMarketing: { visible: false, rotated: false },
    webDevelopment: { visible: false, rotated: false },
    appDevelopment: { visible: false, rotated: false },
    blockchainDevelopment: { visible: false, rotated: false },
    uiuxDesign: { visible: false, rotated: false },
    crmSolutions: { visible: false, rotated: false },
    emailMarketing: { visible: false, rotated: false },
    landingPages: { visible: false, rotated: false },
    industries: { visible: false, rotated: false },
    ecommerce: { visible: false, rotated: false },
    services1: { visible: false, rotated: false },
  });

  const dropDownMenu = (e, section) => {
    if (isMobile) {
      e.preventDefault();
      setDropMenuState((prev) => ({
        ...prev,
        [section]: {
          visible: !prev[section].visible,
          rotated: !prev[section].rotated,
        },
      }));
    }
  };


  // Check if screen is mobile/tablet on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMegaMenuOpen) setIsMegaMenuOpen(false);
  };




  // Toggle mega menu
  const toggleMegaMenu = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsMegaMenuOpen(!isMegaMenuOpen);
      setIsArrowRotated2(!isArrowRotated2);

    }
  };
  const toggleMegaService = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsMegaMenuService(!isMegaMenuService);
      setIsArrowRotated(!isArrowRotated);

    }
  };


  // Close menu on larger screens
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
        setIsMegaMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);


  return (
    <>
      <header className="bg-white relative z-50 inset-0">
        {/* navbar start */}
        <div className="flex justify-between pt-4 pb-2 border-b border-[#00729f]">
          <div className=" flex ">
            <Link href="/" className="inline-flex items-center ">
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClElEQVR4nO2ZS2hTURCG//gG0Y1SXyiIK61LEZciulO68QEKIqjdSOOdc1vBVZbFnXVlNZm5SVcWivVZlC60UIS60Aq+UFAEV9YERUVUuNKTYik27T035GYC+WCWgXzMOTNn5gJNmtQRj9tAMgaSrzDyGCS70FC09y6GkcswEs4MLoGCDWgIurIrQHz3f4l/cQfq6cquB8nzOSTKQcFxqCV9dQ2IX88rYUW4CK9vHdSR6V8CktFIEtMyN6AO4vNOEtNxDKogeR9PhCfQKWuhBuJvMTMSgmQAajDyJrZIOTNHoAKSgepE5BVU4AftVWbkB1TgF1pg+E8VIo+gBuLh+BdeU6f3uC2myFNkMgughzAF4vEYx2of1OEFhx1FbkInYQpGRhya4UmoxQtaYeRXNBEuojPYArUQX3C4I0/gF5ZDJR09S+0fjHzEeNj+RiV+bhuMfHeQuY5MZhFUQnLasRRfsQVDJWa2bcqclewiFK+GHjhmpkdnZtJ2MfHW+Zgd6l8IdaTzm0DywbHzDyIjy6AOP7sdRj47ZuberH1mMltGTkytYn+D+KV9IiUGBTundsEOBYDHZ7wAfN5TsU+R3LKLwkTwcnth5KejTNG+zYhvR8jiBIiPJjm/uMm4x2AyG01fdjsfM+fgkt0p1BwvuwMkn2qcmRCGh2B4Y41lglaQfExApmSLTU3xC5vdm2aMIBmrrUhZpsVpwoyXlS9I7hMF99YwI6NIFMOnnOYZEzVy+5E4Z/NbnSZNM182+BLqxuQITNwdeaFhKt6NIR0TqC3R/DCmyDN09K2EHsIU/NxBt+PGL+w8pJMwBY8PgOS+fcKbiiIjML2r0RCcya+yr2LD1+wHI/sZkN/ByDk7ZjdpgrrwF77gtZTLPc/2AAAAAElFTkSuQmCC"
                width={15}
                height={15}
                alt="phone"
                className="xs:ml-3 md:ml-5"
              />
              <p className="ml-1 font-bold text-[18px] text-[#00729f]">+1-551-205-0240</p>
            </Link>
          </div>



          <Link href='/calendly' className="lg:hidden xs:flex"  >
            <button className="bg-[#00729f] xl:h-[45px] xl:w-40 lg:h-[45px] xs:h-[41px] xs:w-[130px] lg:w-[144px] rounded-lg text-white shadow-lg font-bold text-[14px] w-full h-11 mx-5">
              <div className="flex justify-center">
                <div >
                  <p>Book Meeting</p>
                </div>
                {/* <div >
                  <p>Get A Quote!</p>
                </div> */}
                <Image
                  src="/Services/arrowup.svg"
                  alt="arrow"
                  width={14}
                  height={16}
                  className="ml-2"
                />
              </div>
            </button>
          </Link>

          <div className=" hidden lg:flex mr-5 space-x-2 ">
            <div className="mr-5">
              <p className="font-semibold text-[14px]">Generated Revenue <br />
                <span className="tracking-wide "> For Clients</span></p>
              <p className="text-[#00729f] font-bold text-[20px]">$100,000,000+</p>


            </div>

            <div>
              <p className="font-semibold text-[14px]">Generated Leads <br />For Clients</p>
              <p className="text-[#00729f] font-bold  text-[20px] ">50,000+</p>

            </div>
          </div>
        </div>


        <nav className="flex justify-center items-center w-full h-full shadow-lg xs:py-2 lg:mt-0">
          {/* logo */}
          <div className="lg:1/6 flex justify-start">
            <Link href="/">
              <Image
                src="/Shopex logo blue.png"
                width={200}
                height={70}
                alt="Logo"
                className=" xs:ml-3 md:ml-5"
              />
            </Link>
          </div>

          {/* menu */}
          <div className={`pb-3 pt-3 lg:flex justify-center items-center w-3/4 flex-row  ${isMenuOpen ? "  translateX(-100%) transition-transform duration-1000 ease-in-out fixed top-0 left-0 h-full w-full bg-white mt-0 z-50 overflow-y-auto whitespace-nowrap xs:overflow-x-hidden lg:overflow-y-hidden lg:whitespace-normal " : "hidden"}`}>
            <div className="xs:1/6 lg:hidden flex justify-start ml-5">
              <Image
                src="/Shopex logo blue.png"
                width={200}
                height={70}
                alt="Logo"
              />
              <div className="lg:hidden flex items-center w-1/2 justify-end mr-3 ">
                <button
                  className="text-[#fff] focus:outline-none"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? (
                    <FaTimes className="h-6 w-6 text-[#00729F]" />
                  ) : (
                    <FaBars className="h-6 w-6 text-[#00729F]" />
                  )}
                </button>
              </div>
            </div>

            <ul className={`font-semibold text-[#171717d7] flex lg:space-x-16 xl:space-x-20 2xl:space-x-28 xs:text-[20px]  lg:text-[14px] text-nowrap ${isMenuOpen ? " w-3/4 flex-col  justify-center flex mx-24 xs:mx-10  bg-white relative" : ""}`}>
              <li className="relative group ">

                <Link
                  href="#"
                  className="w-full  xs:pt-6 lg:pt-4 pb-4 border-b-[1px] border-[#00729f] lg:border-b-2 lg:border-[#ffffff] lg:hover:border-b-2 lg:hover:border-b-[#00729f] flex justify-between"
                  onClick={(e) => {
                    if (isMobile) {
                      e.preventDefault();
                      toggleMegaService(e); // Call toggleMegaMenu here
                    } else {
                      setIsMegaMenuService(false);
                    }
                  }}

                >
                  SERVICES
                  <Image
                    src='/down-arrow.png'
                    alt='arrowdown'
                    width={18}
                    height={10}
                    className={`ml-1 xs:h-3  xs:w-3 lg:h-[10px] lg:w-[10px] xs:mt-4 lg:mt-[6px]  transition-transform duration-300 ${isArrowRotated ? 'rotate-180' : ''
                      }`}
                  />
                </Link>

                <div id="mega-menu-full-dropdown"
                  className={`lg:absolute xs:-ml-9 lg:-ml-[230px] min-[1199px]:-ml-[280px] xl:-ml-[260px] min-[1339px]:-ml-[300px] min-[1424px]:-ml-[400px] 2xl:-ml-[350px] ${isMobile
                    ? isMegaMenuService ? 'block' : 'hidden'
                    : 'hidden group-hover:flex'
                    }  mb-6  px-3`}
                >
                  <div className="grid xs:w-[83vw] sm:w-[82vw] md:w-[90vw]  2xl:w-[90vw]  px-4 lg:py-5 mx-auto bg-white lg:rounded-xl text-gray-900 dark:text-black xs:grid-cols-1 lg:grid-cols-4 lg:shadow-md ">
                    <ul className="flex flex-col lg:space-y-4 md:w-3/4 lg:pl-4">

                      <Link
                        href="/services/digital-marketing"
                        className="flex xs:justify-between lg:justify-start items-center text-[#444444] mt-0 lg:mt-2 xs:font-medium lg:font-semibold xs:text-[16px] lg:text-[14px] xs:p-4 lg:p-0 2xl:text-[20px]"
                        onClick={(e) => {
                          if (isMobile) {
                            e.preventDefault(); // Prevent navigation on mobile
                            dropDownMenu(e, "digitalMarketing"); // Toggle dropdown state
                          }
                        }}
                      >
                        Digital Marketing
                        <Image
                          src="/down-arrow.png"
                          alt="arrowdown"
                          width={18}
                          height={10}
                          className={`ml-1 xs:h-3 xs:w-3 h-[10px] w-[10px] mt-[6px] transition-transform duration-300 lg:hidden ${dropMenuState.digitalMarketing.rotated ? "rotate-180" : ""
                            }`}
                        />
                      </Link>

                      <div
                        className={`${isMobile
                            ? dropMenuState.digitalMarketing.visible
                              ? "block text-[15px] mb-2 "
                              : "hidden"
                            : "lg:flex" // Always visible on larger screens
                          } flex flex-col space-y-4`}
                      >
                        {digitalMarketing.map((item, index) => (
                          <li key={index}>
                            <Link href={item.link} className="text-gray-500  xs:p-4 lg:p-0 font-medium">
                              {item.sub}
                            </Link>
                          </li>
                        ))}
                      </div>

                    </ul>

                    <ul className="flex flex-col lg:space-y-4 md:w-3/4">
                     
                    <Link
                        href="/services/Ecommerce"
                        className="flex xs:justify-between lg:justify-start items-center  text-[#444444] mt-0 lg:mt-2 xs:font-medium lg:font-semibold xs:text-[16px] lg:text-[14px] xs:p-4 lg:p-0 2xl:text-[20px]"
                        onClick={(e) => {
                          if (isMobile) {
                            e.preventDefault(); // Prevent navigation on mobile
                            dropDownMenu(e, "ecommerce"); // Toggle dropdown state
                          }
                        }}
                      >
                        Ecommerce 
                        <Image
                          src="/down-arrow.png"
                          alt="arrowdown"
                          width={18}
                          height={10}
                          className={`ml-1  xs:h-3  xs:w-3 h-[10px] w-[10px] mt-[6px] transition-transform duration-300 lg:hidden ${dropMenuState.ecommerce.rotated ? "rotate-180" : ""
                            }`}
                        />
                      </Link> 

                       <div
                        className={`${isMobile
                          ? dropMenuState.ecommerce.visible
                            ? "block  text-[15px] mb-2"
                            : "hidden"
                          : "lg:flex" // Always visible on larger screens
                          } flex flex-col space-y-4`}
                      >
                        {ecommerce.map((item, index) => (
                          <li key={index}>
                            <Link href={item.link} className="text-gray-500 xs:p-4 lg:p-0 font-medium">
                              {item.sub}
                            </Link>
                          </li>
                        ))}
                      </div> 

                      <Link
                        href="/services/Email-Marketing"
                        className="flex xs:justify-between lg:justify-start items-center text-[#444444] mt-0 lg:mt-2 xs:font-medium lg:font-semibold xs:text-[16px] lg:text-[14px] xs:p-4 lg:p-0 2xl:text-[20px]"
                        onClick={(e) => {
                          if (isMobile) {
                            e.preventDefault(); // Prevent navigation on mobile
                            dropDownMenu(e, "emailMarketing"); // Toggle dropdown state
                          }
                        }}
                      >
                        Email Marketing
                        <Image
                          src="/down-arrow.png"
                          alt="arrowdown"
                          width={18}
                          height={10}
                          className={`ml-1 xs:h-3  xs:w-3 h-[10px] w-[10px] mt-[6px] transition-transform duration-300 lg:hidden ${dropMenuState.emailMarketing.rotated ? "rotate-180" : ""
                            }`}
                        />
                      </Link>

                      <div
                        className={`${isMobile
                          ? dropMenuState.emailMarketing.visible
                            ? "block text-[15px] mb-2"
                            : "hidden"
                          : "lg:flex" // Always visible on larger screens
                          } flex flex-col space-y-4`}
                      >
                        {emailMarketing.map((item, index) => (
                          <li key={index}>
                            <Link href={item.link} className="text-gray-500 xs:p-4 lg:p-0 font-medium">
                              {item.sub}
                            </Link>
                          </li>
                        ))}
                      </div>

                    </ul>
                    <ul className="flex flex-col lg:space-y-4 md:w-3/4">
                      <Link
                        href="/services/Web-Development"
                        className="flex xs:justify-between lg:justify-start items-center  text-[#444444] mt-0 lg:mt-2 xs:font-medium lg:font-semibold xs:text-[16px] lg:text-[14px] xs:p-4 lg:p-0 2xl:text-[20px]"
                        onClick={(e) => {
                          if (isMobile) {
                            e.preventDefault(); // Prevent navigation on mobile
                            dropDownMenu(e, "webDevelopment"); // Toggle dropdown state
                          }
                        }}
                      >
                        Web Development
                        <Image
                          src="/down-arrow.png"
                          alt="arrowdown"
                          width={18}
                          height={10}
                          className={`ml-1 xs:h-3  xs:w-3 h-[10px] w-[10px] mt-[6px] transition-transform duration-300 lg:hidden ${dropMenuState.webDevelopment.rotated ? "rotate-180" : ""
                            }`}
                        />
                      </Link>

                      <div
                        className={`${isMobile
                          ? dropMenuState.webDevelopment.visible
                            ? "block text-[15px] mb-2"
                            : "hidden"
                          : "lg:flex" // Always visible on larger screens
                          } flex flex-col space-y-4`}
                      >
                        {webDevelopment.map((item, index) => (
                          <li key={index}>
                            <Link href={item.link} className="text-gray-500 xs:p-4 lg:p-0 font-medium">
                              {item.sub}
                            </Link>
                          </li>
                        ))}
                      </div>
                      <Link
                        href="/services/UI-UXdesign"
                        className="flex xs:justify-between lg:justify-start items-center  text-[#444444] mt-0 lg:mt-2 xs:font-medium lg:font-semibold xs:text-[16px] lg:text-[14px] xs:p-4 lg:p-0 2xl:text-[20px]"
                        onClick={(e) => {
                          if (isMobile) {
                            e.preventDefault(); // Prevent navigation on mobile
                            dropDownMenu(e, "uiuxDesign"); // Toggle dropdown state
                          }
                        }}
                      >
                        UI/UX Design
                        <Image
                          src="/down-arrow.png"
                          alt="arrowdown"
                          width={18}
                          height={10}
                          className={`ml-1 xs:h-3  xs:w-3 h-[10px] w-[10px] mt-[6px] transition-transform duration-300 lg:hidden ${dropMenuState.uiuxDesign.rotated ? "rotate-180" : ""
                            }`}
                        />
                      </Link>

                      <div
                        className={`${isMobile
                          ? dropMenuState.uiuxDesign.visible
                            ? "block  text-[15px] mb-2"
                            : "hidden"
                          : "lg:flex" // Always visible on larger screens
                          } flex flex-col space-y-4`}
                      >
                        {uiuxDesign.map((item, index) => (
                          <li key={index}>
                            <Link href={item.link} className="text-gray-500 xs:p-4 lg:p-0 font-medium">
                              {item.sub}
                            </Link>
                          </li>
                        ))}
                      </div>

                    </ul>

                    <ul className="flex flex-col  lg:space-y-4 md:w-3/4 lg:ml-4">

                      <Link
                        href="/services/landing-pages"
                        className="flex xs:justify-between lg:justify-start items-center  text-[#444444] mt-0 lg:mt-2 xs:font-medium lg:font-semibold xs:text-[16px] lg:text-[14px] xs:p-4 lg:p-0 2xl:text-[20px]"
                        onClick={(e) => {
                          if (isMobile) {
                            e.preventDefault(); // Prevent navigation on mobile
                            dropDownMenu(e, "landingPages"); // Toggle dropdown state
                          }
                        }}
                      >
                        Landing Pages
                        <Image
                          src="/down-arrow.png"
                          alt="arrowdown"
                          width={18}
                          height={10}
                          className={`ml-1 xs:h-3  xs:w-3 h-[10px] w-[10px] mt-[6px] transition-transform duration-300 lg:hidden ${dropMenuState.landingPages.rotated ? "rotate-180" : ""
                            }`}
                        />
                      </Link>

                      <div
                        className={`${isMobile
                          ? dropMenuState.landingPages.visible
                            ? "block text-[15px] mb-2"
                            : "hidden"
                          : "lg:flex" // Always visible on larger screens
                          } flex flex-col space-y-4`}
                      >
                        {landingPages.map((item, index) => (
                          <li key={index}>
                            <Link href={item.link} className="text-gray-500 xs:p-4 lg:p-0 font-medium">
                              {item.sub}
                            </Link>
                          </li>
                        ))}
                      </div>




                      <div className="flex flex-col  lg:space-y-4">
                        <Link
                          href="/services/App-Development"
                          className="flex xs:justify-between lg:justify-start items-center  text-[#444444] mt-0 lg:mt-2 xs:font-medium lg:font-semibold xs:text-[16px] lg:text-[14px] xs:p-4 lg:p-0 2xl:text-[20px]"
                          onClick={(e) => {
                            if (isMobile) {
                              e.preventDefault(); // Prevent navigation on mobile
                              dropDownMenu(e, "appDevelopment"); // Toggle dropdown state
                            }
                          }}
                        >
                          App Development
                          <Image
                            src="/down-arrow.png"
                            alt="arrowdown"
                            width={18}
                            height={10}
                            className={`ml-1  xs:h-3  xs:w-3 h-[10px] w-[10px] mt-[6px] transition-transform duration-300 lg:hidden ${dropMenuState.appDevelopment.rotated ? "rotate-180" : ""
                              }`}
                          />
                        </Link>

                        <div
                          className={`${isMobile
                            ? dropMenuState.appDevelopment.visible
                              ? "block  text-[15px] mb-2"
                              : "hidden"
                            : "lg:flex" // Always visible on larger screens
                            } flex flex-col space-y-4`}
                        >
                          {appDevelopment.map((item, index) => (
                            <li key={index}>
                              <Link href={item.link} className="text-gray-500 xs:p-4 lg:p-0 font-medium">
                                {item.sub}
                              </Link>
                            </li>
                          ))}
                        </div>

                      </div>


                  
                    </ul>



                  </div>
                </div>


              </li>

              <li className="relative group ">
                <Link
                  href="/casestudyall"
                  className="w-full py-4 border-b-[1px] border-[#00729f] lg:border-0 lg:hover:border-b-2 lg:hover:border-b-[#00729f] flex justify-between"
                  
                  onClick={(e) => {
                    if (isMobile) {
                      e.preventDefault();
                      toggleMegaMenu(e); // Call toggleMegaMenu here
                    } else {
                      setIsMenuOpen(false);
                    }
                     
                  }}
                >
                  CASE STUDIES
                  {/* <Image
                    src='/down-arrow.png'
                    alt='arrowdown'
                    width={18}
                    height={10}
                    className={`ml-1 xs:h-3  xs:w-3  lg:h-[10px] lg:w-[10px] xs:mt-4 lg:mt-[6px] transition-transform duration-300 ${isArrowRotated2 ? 'rotate-180' : ''
                      }`}
                  /> */}
                </Link>
                {/* Mega menu hover */}

                {/* <div
                  id="mega-menu-full-dropdown"
                  className={`lg:absolute xs:-ml[240px]  lg:-ml-[220px]  ${isMobile ? (isMegaMenuOpen ? 'block' : 'hidden') : 'hidden group-hover:flex'
                    }  lg:mb-6 `}
                >
                  <div className="grid xs:w-[72vw] sm:w-[76vw] lg:w-[550px] lg:px-5 lg:py-3 mx-auto bg-white  lg:shadow-md rounded-xl text-gray-900 dark:text-black xs:grid-cols-1 lg:grid-cols-2 ">

                
                    <ul className="flex flex-col space-y-0 lg:w-1/2">
                     
                      <Link
                        href="/"
                        className="flex xs:justify-between lg:justify-start items-center  text-[#444444] mt-0 lg:mt-2 xs:font-medium lg:font-semibold xs:text-[16px] lg:text-[14px] xs:p-3 lg:p-0 2xl:text-[20px]"
                        onClick={(e) => {
                          if (isMobile) {
                            e.preventDefault(); 
                            dropDownMenu(e, "industries");
                          }
                        }}
                      >
                        <div className="flex lg:justify-center text-[16px] font-medium lg:ml-4 lg:font-semibold lg:text-[30px]">
                          Industries
                        </div>
                        <Image
                          src="/down-arrow.png"
                          alt="arrowdown"
                          width={18}
                          height={10}
                          className={`ml-1  xs:h-3  xs:w-3 h-[10px] w-[10px] mt-[6px] transition-transform duration-300 lg:hidden ${dropMenuState.industries.rotated ? "rotate-180" : ""
                            }`}
                        />
                      </Link>

                      <div
                        className={`${isMobile
                          ? dropMenuState.industries.visible
                            ? "block text-[#6B7280]"
                            : "hidden"
                          : "lg:flex text-[#6B7280]" 
                          } flex flex-col `}
                      >
                        {industries.map((industry, index) => (
                          <li key={index}>
                            <Link href={industry.link} className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                              <div className="font-medium  flex xs:text-[15px] lg:text-[14px]">
                                <Image src={industry.image} alt={industry.alt} height={25} width={25} className="mr-4" />
                                {industry.name}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </div>

                    </ul>

                   
                    <ul className="flex flex-col space-y-0 lgcommi:w-1/2">
                 
                      <Link
                        href="/"
                        className="flex xs:justify-between lg:justify-start items-center  text-[#444444] mt-0 lg:mt-2 xs:font-medium lg:font-semibold xs:text-[16px] lg:text-[14px] xs:p-3 lg:p-0 2xl:text-[20px] "
                        onClick={(e) => {
                          if (isMobile) {
                            e.preventDefault();
                            dropDownMenu(e, "services1"); 
                          }
                        }}
                      >
                        <div className="flex lg:justify-center text-[16px] font-medium lg:ml-4 lg:font-semibold lg:text-[30px]">
                          Services
                        </div>
                        <Image
                          src="/down-arrow.png"
                          alt="arrowdown"
                          width={18}
                          height={10}
                          className={`ml-1 xs:h-3  xs:w-3 h-[10px] w-[10px] mt-[6px] transition-transform duration-300 lg:hidden ${dropMenuState.services1.rotated ? "rotate-180" : ""
                            }`}
                        />
                      </Link>

               

                      <div
                        className={`${isMobile
                          ? dropMenuState.services1.visible
                            ? "block text-[#6B7280] "
                            : "hidden"
                          : "lg:flex text-[#6B7280]" 
                          } flex flex-col `}
                      >
                        {Services1.map((service, index) => (
                          <li key={index}>
                            <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                              <div className="font-medium flex xs:text-[15px] lg:text-[14px]">
                                <Image
                                  src={service.image}
                                  alt={service.alt}
                                  height={service.height || 25}
                                  width={service.width || 25}
                                  className={`mr-4 ${service.extraClass || ''}`}
                                />
                                {service.name}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </div>
                    </ul>
                  </div>
                </div> */}



              </li>


              <Link href="/calendly" className="w-full py-4 border-b-[1px] border-[#00729f] lg:border-0 lg:hover:border-b-2 lg:hover:border-b-[#00729f]" onClick={() => setIsMenuOpen(false)}>BOOK MEETING</Link>
              <Link href="/digital-us" className="w-full py-4 border-b-[1px] border-[#00729f] lg:border-0 lg:hover:border-b-2 lg:hover:border-b-[#00729f]" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>

              {/* Adjusted button */}
              <li className="w-full lg:border-none flex justify-center mt-1.5">
                <button className="bg-[#00729f] xl:h-[45px] xl:w-40 lg:h-[45px] lg:w-[144px] rounded-lg text-white shadow-lg font-bold text-[16px] w-full h-11 lg:mt-0 md:mt-4 sm:mt-4 xs:mt-4">
                  <Link href="/calendly">Book Meeting</Link>
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:hidden flex items-center w-1/2 justify-end mr-3">
            <button
              className="text-[#fff] focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6 text-[#00729F]" />
              ) : (
                <FaBars className="h-6 w-6 text-[#00729F]" />
              )}
            </button>
          </div>
        </nav>

      </header>

    </>
  );
}

export default Navbar;
