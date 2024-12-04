'use client'
import React from 'react'
import CountUp from 'react-countup';

const Result = ({results}) => {
  const formatMetric = (metric) => {
    // Remove the % sign if present
    const numericValue = parseFloat(metric.replace('%', ''));
    // Check if it's a percentage
    const isPercentage = metric.includes('%');
    return { value: numericValue, isPercentage };
  };

  return (
    <section className='w-full lg:max-h-[px] inset-0 flex justify-center items-center'>
      <div className='my-10 pt-[58px] pb-[55px] bg-[#ffff] h-full lg:max-h-[672px] w-5/6 shadow-sm rounded-xl'>
        <div>
          <div className='mb-10 flex flex-col items-center'>
            <h1 className='font-bold xs:text-4xl md:text-5xl text-center mb-5 pt-10'>
            Our Outcomes
            </h1>
            <p className='font-medium text-xl text-center'>
              {results[0].title}
            </p>
          </div>
          <div className='w-full flex flex-wrap justify-center gap-6 md:gap-10 shadow-black'>
            {results?.map((item, index) => {
              const { value, isPercentage } = formatMetric(item.metric);
              return (
                <div
                  key={index}
                  className='text-black flex flex-col justify-start items-center space-y-4 xs:w-full sm:w-[45%] md:w-[30%] lg:w-[20%] h-auto shadow-black'
                >
                  <p className='font-bold text-black text-xl text-center'>
                    {item.heading}
                  </p>
                  <p className='text-5xl xs:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-[#00729f]'>
                    <CountUp 
                      start={0} 
                      end={value} 
                      duration={3}
                      separator=","
                    />
                    {isPercentage && <span className='text-4xl'>%</span>}
                  </p>
                  <p className='font-medium text-black text-xl text-center'>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;