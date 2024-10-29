'use client'
import React from 'react'
import CountUp from 'react-countup';


const Result = () => {
    return (
        <section className='w-full  max-h-[786px] relative inset-0  flex justify-center items-center bg-boxright opacity-80'>
            <div className='my-10 pt-[58px] pb-[55px] bg-[#ffff] max-h-[672px] w-5/6 shadow-2xl shadow-black rounded-xl'>
                <div className=''>

                    <div className="mb-10  flex flex-col items-center">
                        <h1 className=" font-bold xs:text-4xl md:text-5xl text-center mb-5 pt-10">The Result        </h1>
                        <p className="font-medium text-xl text-center ">
                            After one year, our strategies resulted in:


                        </p>
                    </div>
                    <div>


                        <div className='w-full h-[371px] space-x-10 flex justify-center '>
                            <div className="text-white h-64 w-64 flex flex-col justify-center items-center space-y-5">
                                <p className="font-bold text-[#1b2c5c] text-2xl text-center mb-4">
                                    Organic search increase by
                                </p>
                                <p className="text-7xl font-bold bg-clip-text text-transparent bg-[#00729f]">
                                    <CountUp start={0} end={45} duration={3} /><span className='text-4xl'>%</span>
                                </p>
                                <p className="font-medium text-[#1b2c5c] text-2xl text-center mb-4">
                                    offering Keona long-term sustainability.
                                </p>
                            </div>
                            <div className="text-white h-64 w-64 flex flex-col justify-center items-center space-y-5">
                                <p className="font-bold text-[#1b2c5c] text-2xl text-center mb-4">
                                Session duration
                                increase by
                                </p>
                                <p className="text-7xl font-bold bg-clip-text text-transparent bg-[#00729f]">
                                    <CountUp start={0} end={104} duration={3} /><span className='text-4xl'>%</span>
                                </p>
                                <p className="font-medium text-[#1b2c5c] text-2xl text-center mb-4">
                                through more engaging content.
                                </p>
                            </div>
                            <div className="text-white h-64 w-64 flex flex-col justify-center items-center space-y-5">
                                <p className="font-bold text-[#1b2c5c] text-2xl text-center mb-4">
                                Time On Page
                                increase by
                                </p>
                                <p className="text-7xl font-bold bg-clip-text text-transparent bg-[#00729f]">
                                    <CountUp start={0} end={43} duration={3} /><span className='text-4xl'>%</span>
                                </p>
                                <p className="font-medium text-[#1b2c5c] text-2xl text-center mb-4">
                                improving the 
                                of conversions.
                                </p>
                            </div>
                        </div>
                        <div>


                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Result