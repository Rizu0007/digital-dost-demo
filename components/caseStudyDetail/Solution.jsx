import React from 'react'
import Image from 'next/image'
const Solution = () => {
    const base64Image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVR4nO3Zvy5EURAG8C+IEqVCKbyDRBQkvICWik52Z1y2PAoqXsCfnVmRCEvFI4iO7NJ4BVREIjSW8AI7tzGTnF9y+/vdc+eeM3OBLMuy7F+QXoO1090l7yDdgCssre4D/Ib4AssE3KjK5N9NWULoLVLqgRukx8YAHVRlEW4UOgzSF2OIR6wcDcANlsK8CqRbcCOlPrDe2wLIJ2h/FLELWs7hCumJvaDrM3BV0CyvxhBtzDd74QbpmnkVVhvLCF3QrM+o6BDcYJ02rwLLDlxhOTV/VisH43BjfW8ErG/Gze0SrpDUSuzQc3AjNftB8mB8le7gRvgAVOIVYplF2CJmvUDozygfjiHsRka6jcC9wRNqu4MIe5gjXULc47S0/BynyzQ0VJ9C2JaS9AyBe4APP009lxmryCZcKKIPtqjEaJEaC4hbuHLjZ7jL0cfrpFexf3BkWZZlP0/gG8bWtq4XR3x4AAAAAElFTkSuQmCC";

    return (
        <section className="relative inset-0 bg-box1 flex flex-col items-center pb-10 ">
           
            <div className="mb-10 invert-0 flex flex-col items-center">
                <h1 className="text-[#FAF9F6] font-bold xs:text-4xl md:text-5xl text-center mb-5 pt-10">THE SOLUTION        </h1>
                <p className="font-medium text-[#FAF9F6] text-xl text-center ">
                    <span className='text-white'>Digital Silk</span>  revamped messaging, navigation and  <span className='text-white'>Web Design </span>
                    to overcome challenges and grow traffic.
                </p>
            </div>
            <div className="relative flex md:flex-row-reverse xs:flex-col-reverse justify-center items-center h-full max-w-7xl md:px-4  ">


                {/* Image Column */}
                <div className="w-3/4 flex xs:justify-center md:justify-end  ">
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
                        src="/CaseStudy-Full/websiteimg2.webp"
                        alt="Description"
                        width={625}
                        height={525}
                        className='xs:w-[400px] xs:h-[280px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[350px] lg:h-[500px] lg:w-[600px] xl:h-[525px] xl:w-[625px] '
                    />



                </div>

                {/* Text Column */}
                <div className="md:w-3/4 text-white xs:px-4 sm:px-8  h-full flex flex-col justify-center xs:space-y-4 md:space-y-4 lg:space-y-10 xs:py-5 ">
                    <h2 className="text-xl font-light italic">Some of our deliverables included:
                    </h2>


                    <div className='space-y-3'>


                        <div className="flex items-start md:font-semibold md:text-lg">
                            <span className='mr-3 mt-1'>
                                <Image
                                    src={base64Image}
                                    alt="Bullet icon"
                                    width={90}
                                    height={90}
                                    className=''
                                />
                            </span>
                            <div>
                                <p className='block'>Optimized Messaging for Clarity</p>
                                <p className='font-normal'>
                                    To address the issues of unclear messaging and cluttered copy, we refined Keona Health’s value proposition and created compelling messaging that resonated with the target audience.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start font-semibold md:text-lg">
                            <span className='mr-3 mt-1'>
                                <Image
                                    src={base64Image}
                                    alt="Bullet icon"
                                    width={70}
                                    height={70}
                                    className=''
                                />
                            </span>
                            <div>
                                <p className='block'>Improved Navigation for User Experience                                </p>
                                <p className='font-normal'>
                                We redesigned the navigation system to make it more user-friendly, ensuring that prospective users could easily find the information they needed.
                                </p>
                            </div>
                        </div>


                        <div className="flex items-start font-semibold md:text-lg">
                            <span className='mr-3 mt-1'>
                                <Image
                                    src={base64Image}
                                    alt="Bullet icon"
                                    width={60}
                                    height={60}
                                    className=''
                                />
                            </span>
                            <div>
                                <p className='block'>Keyword Messaging & Planning                                </p>
                                <p className='font-normal'>
                                Our team conducted comprehensive keyword research and optimized the site for search to improve search engine visibility.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Solution