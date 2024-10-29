import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Header = () => {
    const base64Image ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVR4nO3Zvy5EURAG8C+IEqVCKbyDRBQkvICWik52Z1y2PAoqXsCfnVmRCEvFI4iO7NJ4BVREIjSW8AI7tzGTnF9y+/vdc+eeM3OBLMuy7F+QXoO1090l7yDdgCssre4D/Ib4AssE3KjK5N9NWULoLVLqgRukx8YAHVRlEW4UOgzSF2OIR6wcDcANlsK8CqRbcCOlPrDe2wLIJ2h/FLELWs7hCumJvaDrM3BV0CyvxhBtzDd74QbpmnkVVhvLCF3QrM+o6BDcYJ02rwLLDlxhOTV/VisH43BjfW8ErG/Gze0SrpDUSuzQc3AjNftB8mB8le7gRvgAVOIVYplF2CJmvUDozygfjiHsRka6jcC9wRNqu4MIe5gjXULc47S0/BynyzQ0VJ9C2JaS9AyBe4APP009lxmryCZcKKIPtqjEaJEaC4hbuHLjZ7jL0cfrpFexf3BkWZZlP0/gG8bWtq4XR3x4AAAAAElFTkSuQmCC";

  return (
  
        <section className="relative md:bg-custom-image bg-cover bg-center ">
          {/* Dark gradient overlay to match the style in the example */}
          <div className="absolute inset-0 bg-boxright opacity-80"></div>
    
          <div className="relative flex md:flex-row-reverse justify-center items-center xs:flex-col-reverse  h-full max-w-6xl mx-auto md:px-4  ">
            {/* Image Column */}
            <div className="w-3/4 flex xs:justify-center md:justify-end ">
           {/* <div className="bg-white bg-opacity-35 rounded-full w-24 h-24 flex justify-center items-center">
    <Image
      src="/CaseStudy-Full/logo-1.svg" 
      alt="Description"
      width={100}
      height={100}
      className="w-44 h-44" 
    />
  </div> */}

           
              <Image
                src="/CaseStudy-Full/websiteimg1.webp" 
                alt="Description"
                width={500}
                height={500}
                className='xs:w-[300px] xs:h-[300px] sm:w-[400px] sm:h-[400px] lg:h-[500px] lg:w-[500px]'
              />
            

              
            </div>
    
            {/* Text Column */}
            <div className="md:w-3/ text-white xs:px-4 sm:px-8  h-full flex flex-col justify-center xs:space-y-4 md:space-y-4 lg:space-y-10 xs:py-5 ">
              <h2 className="text-xl font-bold ">Keona Health Website Redesign </h2>
              <h1 className=" xs:text-3xl md:text-3xl lg:text-4xl lg: font-bold">Growing Organic Traffic <br />By 42% Through Strategic Optimization </h1>
             
              <div className='space-y-3'>

             
              <p className="md:text-lg flex font-semibold">
                <span className='mr-3 mt-1'>

                <Image
                src={base64Image}
                alt="Description"
                width={40}
                height={40}
                className=''
              />
                </span>
                Keona Health faced messaging, navigation, and conversion challenges with B2B leads.
              </p>
              <p className="text-lg flex font-semibold">
                <span className='mr-3 mt-1'>

                <Image
                src={base64Image}
                alt="Description"
                width={40}
                height={40}
                className=''
              />
                </span>
                We optimized messaging, improved navigation, and enhanced design for a better user experience.              </p>
              <p className="text-lg flex font-semibold">
                <span className='mr-3 mt-1'>

                <Image
                src={base64Image}
                alt="Description"
                width={40}
                height={40}
                className=''
              />
                </span>
                Keona Health faced messaging, navigation, and conversion challenges with B2B leads.
              </p>
              
              </div>
            </div>
          </div>
        </section>
      
    
   )
}

export default Header