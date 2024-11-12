'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const digitalMarketing = [
  { sub: 'Performance Marketing', link: '#' },
  { sub: 'Social Media Management', link: '#' },
  { sub: 'SEO', link: '#' },
  { sub: 'Graphic Design & UI/UX', link: '#' },
  { sub: 'Content Writing', link: '#' },
  { sub: 'Affiliate Marketing', link: '#' },
  { sub: 'Influencer Marketing', link: '#' },
  { sub: 'User-Generated Content ', link: '#' },
  { sub: 'Shopify Development', link: '#' },
  { sub: 'WordPress Development', link: '#' }
];

const webDevelopment = [
  { sub: 'React Development', link: '#' },
  { sub: 'Next.js Development', link: '#' },
  { sub: 'Node.js Development', link: '#' },
  { sub: 'Django Development', link: '#' },
  { sub: 'WordPress Development', link: '#' },
  { sub: 'Shopify Development', link: '#' },
  { sub: 'Wix Development', link: '#' },
  { sub: 'Bubble.io Development', link: '#' }
];

const appDevelopment = [
  { sub: 'Flutter Development', link: '#' },
  { sub: 'React Native Development', link: '#' }
];

const blockchainDevelopment = [
  { sub: 'Smart Contract Development', link: '#' },
  { sub: 'Decentralized Apps (dApps)', link: '#' },
  { sub: 'Crypto Wallet Integration', link: '#' },
  { sub: 'Token Creation & ICO Services', link: '#' },
  { sub: 'Blockchain Consulting', link: '#' }
];

const uiuxDesign = [
  { sub: 'UI/UX Research', link: '#' },
  { sub: 'Wireframing & Prototyping', link: '#' },
  { sub: 'Mobile App UI/UX Design', link: '#' },
  { sub: 'Web Design & User Experience', link: '#' }
];

const crmSolutions = [
  { sub: 'Odoo CRM', link: '#' },
  { sub: 'Salesforce CRM', link: '#' },
  { sub: 'Zoho CRM', link: '#' }
];

const emailMarketing = [
  { sub: 'Campaign Strategy & Design', link: '#' },
  { sub: 'Email Automation', link: '#' },
  { sub: 'A/B Testing & Analytics', link: '#' }
];

const landingPages = [
  { sub: 'Custom Landing Page Design', link: '#' },
  { sub: 'Conversion Rate Optimization ', link: '#' },
  { sub: 'A/B Testing & Split Testing', link: '#' }
];



function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMegaMenuService, setIsMegaMenuService] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const [isArrowRotated2, setIsArrowRotated2] = useState(false);

  const [isMobile, setIsMobile] = useState(false);



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


          
          <Link href='/'className="lg:hidden xs:flex"  >
            <button className="bg-[#00729f] xl:h-[45px] xl:w-40 lg:h-[45px] xs:h-[41px] xs:w-[130px] lg:w-[144px] rounded-lg text-white shadow-lg font-bold text-[14px] w-full h-11 mx-5">
                <div className="flex justify-center">
                <div >
                  <p>Get A Quote</p>
                </div>
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

          <div className=" hidden lg:flex mr-3 space-x-2 ">
            <div className="">
              <p className="font-semibold">Generated Revenue For Clients</p>

              <p className="text-[#00729f] font-bold text-[18px]">$100,000,000+</p>


            </div>

            <div>
              <p className="font-semibold">Generated Leads For Clients</p>
              <p className="text-[#00729f] font-bold text-[18px] ">50,000+</p>

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
            
            <ul className={`font-semibold text-[#171717d7] flex lg:space-x-16 xl:space-x-20 2xl:space-x-28 xs:text-[18px]  lg:text-[14px] text-nowrap ${isMenuOpen ? " w-3/4 flex-col  justify-center flex mx-24 xs:mx-10  bg-white relative" : ""}`}>
              <li className="relative group ">

                <Link
                  href="/services"
                  className="w-full pt-4 pb-2 md:hover:border-b-2 md:hover:border-b-[#00729f] flex"
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
                    className={`ml-1 h-[10px] w-[10px] mt-[6px] transition-transform duration-300 ${isArrowRotated ? 'rotate-180' : ''
                      }`}
                  />
                </Link>

                <div id="mega-menu-full-dropdown"
                  className={`lg:absolute xs:-ml-9 lg:-ml-[230px] min-[1199px]:-ml-[280px] xl:-ml-[260px] min-[1339px]:-ml-[300px] min-[1424px]:-ml-[400px] 2xl:-ml-[350px] ${isMobile
                    ? isMegaMenuService ? 'block' : 'hidden'
                    : 'hidden group-hover:flex'
                    } lg:mt-3 mb-6  px-3`}
                >
                  <div className="grid xs:w-[100vw] md:w-[90vw]  2xl:w-[90vw]  px-4 lg:py-5 mx-auto bg-white lg:rounded-xl text-gray-900 dark:text-black xs:grid-cols-1 md:grid-cols-4 lg:shadow-md ">
                    <ul className="flex flex-col space-y-4 md:w-3/4 lg:pl-4">
                      <div className="flex justify-start items-center mt-2 text-[#444444] font-semibold text-[14px] 2xl:text-[20px]">
                        <h3>Digital Marketing</h3>

                        {/* <Image src='/megamenu/performance.png' alt='mega1' height={25} width={25} className="ml-3" /> */}
                        {/* <Link href="#" className="block p-3 rounded-lg bg-blue-500 hover:bg-gray-50 w-48 dark:hover:bg-gray-100"> */}
                      </div>

                      {digitalMarketing.map((item, index) => (
                        <li key={index}>
                          <Link href={item.link} className="">
                            <span className="xs:text-[12px]  lg:text-[16px] font-medium text-gray-500">
                              {item.sub}
                            </span>
                          </Link>
                        </li>
                      ))}

                      <div className="flex flex-col  space-y-4">
                        <div className="flex justify-start items-center mt-2 text-[#444444] font-semibold text-[14px] 2xl:text-[20px]">
                          <h3>App Development</h3>
                          {/* <Image src='/megamenu/mega3.svg' alt='mega2' height={25} width={25} className="ml-3" /> */}

                        </div>

                        {appDevelopment.map((item, index) => (
                          <li key={index}>
                            <Link href={item.link} className="">
                              <span className="xs:text-[12px] text-left lg:text-[16px] font-medium text-gray-500">
                                {item.sub}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </div>
                    </ul>

                    <ul className="flex flex-col space-y-4 md:w-3/4">
                      <div className="flex justify-start items-center mt-2 text-[#444444] font-semibold text-[14px] 2xl:text-[20px]">
                        <h3>UI/UX Design</h3>

                        {/* <Image src='/megamenu/mega4.svg' alt='mega' height={25} width={25} className="ml-3" /> */}
                        {/* <Link href="#" className="block p-3 rounded-lg bg-blue-500 hover:bg-gray-50 w-48 dark:hover:bg-gray-100"> */}
                      </div>

                      {uiuxDesign.map((item, index) => (
                        <li key={index}>
                          <Link href={item.link} className="">
                            <span className="xs:text-[12px] lg:text-[16px] font-medium text-gray-500">
                              {item.sub}
                            </span>
                          </Link>
                        </li>
                      ))}
                      <div className="flex justify-start items-center mt-2 text-[#444444] font-semibold text-[14px] 2xl:text-[20px]">
                        <h3>CRM Solutions</h3>

                        {/* <Image src='/megamenu/mega5.svg' alt='mega1' height={25} width={25} className="ml-3" /> */}
                        {/* <Link href="#" className="block p-3 rounded-lg bg-blue-500 hover:bg-gray-50 w-48 dark:hover:bg-gray-100"> */}
                      </div>

                      {crmSolutions.map((item, index) => (
                        <li key={index}>
                          <Link href={item.link} className="">
                            <span className="xs:text-[12px] lg:text-[16px] font-medium text-gray-500">
                              {item.sub}
                            </span>
                          </Link>
                        </li>
                      ))}

                    </ul>
                    <ul className="flex flex-col space-y-4 md:w-3/4">
                      <div className="flex justify-start items-center mt-2 text-[#444444] font-semibold text-[14px] 2xl:text-[20px]">
                        <h3>Email Marketing</h3>

                        {/* <Image src='/megamenu/mega6.svg' alt='mega1' height={25} width={25} className="ml-3" /> */}
                        {/* <Link href="#" className="block p-3 rounded-lg bg-blue-500 hover:bg-gray-50 w-48 dark:hover:bg-gray-100"> */}
                      </div>

                      {emailMarketing.map((item, index) => (
                        <li key={index}>
                          <Link href={item.link} className="">
                            <span className="xs:text-[12px] lg:text-[16px] font-medium text-gray-500">
                              {item.sub}
                            </span>
                          </Link>
                        </li>
                      ))}
                      <div className="flex justify-start items-center mt-2 text-[#444444] font-semibold text-[14px] 2xl:text-[20px]">
                        <h3>Blockchain Development</h3>

                        {/* <Image src='/megamenu/mega7.svg' alt='mega1' height={25} width={25} className="ml-3" /> */}
                        {/* <Link href="#" className="block p-3 rounded-lg bg-blue-500 hover:bg-gray-50 w-48 dark:hover:bg-gray-100"> */}
                      </div>

                      {blockchainDevelopment.map((item, index) => (
                        <li key={index}>
                          <Link href={item.link} className="">
                            <span className="xs:text-[12px] lg:text-[16px] font-medium text-gray-500">
                              {item.sub}
                            </span>
                          </Link>
                        </li>
                      ))}

                    </ul>

                    <ul className="flex flex-col   space-y-4 md:w-3/4 lg:ml-4">
                      <div className="flex flex-col  space-y-4">
                        <div className="flex mt-2 text-[#444444] font-semibold text-[14px] 2xl:text-[20px]">
                          <h3>Web Development</h3>
                          {/* <Image src='/megamenu/mega8.svg' alt='mega1' height={25} width={25} className="ml-3" /> */}

                        </div>

                        {webDevelopment.map((item, index) => (
                          <li key={index}>
                            <Link href={item.link} className="">
                              <span className="xs:text-[12px] text-left lg:text-[16px] font-medium text-gray-500">
                                {item.sub}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </div>
                      <div className="flex justify-start items-center mt-2 text-[#444444] font-semibold text-[14px] 2xl:text-[20px]">
                        <h3>Landing Pages</h3>

                        {/* <Image src='/megamenu/mega9.svg' alt='mega1' height={25} width={25} className="ml-3" /> */}
                        {/* <Link href="#" className="block p-3 rounded-lg bg-blue-500 hover:bg-gray-50 w-48 dark:hover:bg-gray-100"> */}
                      </div>

                      {landingPages.map((item, index) => (
                        <li key={index}>
                          <Link href={item.link} className="">
                            <span className="xs:text-[12px] lg:text-[16px] font-medium text-gray-500">
                              {item.sub}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>



                  </div>
                </div>









              </li>

              <li className="relative group ">
                <Link
                  href="/casestudyall"
                  className="w-full pt-4 pb-2 md:hover:border-b-2 md:hover:border-b-[#00729f] flex"
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
                  <Image
                    src='/down-arrow.png'
                    alt='arrowdown'
                    width={18}
                    height={10}
                    className={`ml-1 h-[10px] w-[10px] mt-[6px] transition-transform duration-300 ${isArrowRotated2 ? 'rotate-180' : ''
                      }`}
                  />
                </Link>
                {/* Mega menu hover */}

                <div
                  id="mega-menu-full-dropdown"
                  className={`lg:absolute xs:-ml[240px] md:-ml-[200px] lg:-ml-[220px]  ${isMobile ? (isMegaMenuOpen ? 'block' : 'hidden') : 'hidden group-hover:flex'
                    } mt-3 mb-6 `}
                >
                  <div className="grid w-[550px] px-5 py-3 mx-auto bg-white rounded-xl text-gray-900 dark:text-black xs:grid-cols-1 md:grid-cols-2 ">

                    {/* Left Column: Industry */}
                    <ul className="flex flex-col space-y-0 lg:w-1/2">
                      {/* Heading */}
                      <div className="flex lg:justify-center  font-bold text-[30px]">
                        <h3 className="lg:ml-4">Industries</h3>
                      </div>

                      {/* Industry List */}
                      <li>
                        <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/Fashion.png' alt='fintech' height={25} width={25} className="mr-4" />
                            Fashion
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/realstate.png' alt='banking' height={25} width={25} className="mr-4" />
                            RealState
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/scrub.png' alt='realestate' height={25} width={25} className="mr-4" />
                            Skin Care
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/healthcare.png' alt='government' height={25} width={25} className="mr-4" />
                            Health care
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/Fashion.png' alt='crypto' height={25} width={25} className="mr-4" />
                            Ecommerce
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/sports.png' alt='finance' height={25} width={25} className="mr-4" />
                            Sport & Fitness
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/bitcoin.png' alt='crypto' height={25} width={25} className="mr-4 w-[25px] h-[25px]" />
                            BlockChain & Crypto
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/business.png' alt='crypto' height={25} width={25} className="mr-4" />
                            Local Business & Services
                          </div>
                        </Link>
                      </li>
                    </ul>

                    {/* Right Column: Services */}
                    <ul className="flex flex-col space-y-0 md:w-1/2">
                      {/* Heading */}
                      <div className="flex lg:justify-end font-bold text-[30px]">
                        <h3>Services</h3>
                      </div>

                      {/* Services List */}
                      <li>
                        <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/performance.png' alt='performance' height={25} width={25} className="mr-4 " />
                            Performance Marketing
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/socialmedia.png' alt='socialmedia' height={25} width={25} className="mr-4" />
                            Social Media Management
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block p-[14px] rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/mega3.svg' alt='seo' height={20} width={20} className="mr-4" />
                            SEO
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/mega10.svg' alt='leadgen' height={25} width={25} className="mr-4" />
                            Lead Generation
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/mega11.svg' alt='content' height={25} width={25} className="mr-4" />
                            Content Creation
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block p-3 rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/mega7.svg' alt='performance' height={25} width={25} className="mr-4 w-6 h-6" />
                            Web Development
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block p-[14px] rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/mega11.png' alt='performance' height={25} width={25} className="mr-4 w-5 h-5" />
                            App Development
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block p-[14px] rounded-lg hover:bg-gray-50 w-48 dark:hover:bg-gray-100">
                          <div className="font-medium flex xs:text-[12px] lg:text-[14px] ">
                            <Image src='/megamenu/mega5.svg' alt='seo' height={20} width={20} className="mr-4" />
                            Email Marketing
                          </div>
                        </Link>
                      </li>


                    </ul>
                  </div>
                </div>



              </li>


              <Link href="/calendly" className="w-full py-4 md:hover:border-b-2 md:hover:border-b-[#00729f]" onClick={() => setIsMenuOpen(false)}>BOOK MEETING</Link>
              <Link href="/digital-us" className="w-full py-4 md:hover:border-b-2 md:hover:border-b-[#00729f]" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>

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
