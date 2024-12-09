
import React from 'react'

const Service = ({services}) => {

  
  

  return (
    <>
      <section className='lg:px-20  md:pt-40 py-20 xs:px-8   relative ' >
        <div className=' xl:flex xl:flex-col xl:items-center '>
          <div>
            <h1 className="text-[black] font-bold xs:text-4xl sm:text-5xl xl:text-[40px] 2xl:text-7xl leading-tight mb-16">
              {services[0].mainheading}
            </h1>
            
          </div>


          <div className='mt-5 flex'>
            <div className='md:flex md:flex-wrap justify-center bg-white '>
              {services.slice(1,services.length).map((service, index) => (
                <div
                  key={index}
                  className="lg:px-10 xs:p-4 text-black sm:w-full sm:h-[200px] md:w-1/3 md:h-[450px] lg:h-[500px] xl:h-[400px] border flex flex-col  md:justify-center"
                >
                  <h1 className="text-[22px] font-bold">{service.title}</h1>
                {/* <p className='text-gray-500 font-thin text-[14px]'>Top-Notch ROI Driving SEO Services Revolutionizing the Code of SEO</p> */}
                  <p className="text-[15px] lg:text-[16px] leading-tight mt-3">
                    {service.description}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>

        
      </section>
     

    </>
  )
}

export default Service