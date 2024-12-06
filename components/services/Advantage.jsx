import React from 'react'
const Advantage = ({advantages}) => {
  return (
 

    <>
        <section className='lg:px-20  md:py-40 xs:px-8  p  relative ' >
        <div className=' xl:flex xl:flex-col xl:items-center '>
          <div>
            <h1 className="text-[black] font-bold xs:text-3xl sm:text-5xl xl:text-[40px] 2xl:text-7xl leading-tight mb-16">

            {advantages[0].mainheading}
            </h1>
          </div>


          <div className='mt-5 flex'>
            <div className='md:flex md:flex-wrap justify-center bg-white '>
              {advantages.slice(1,advantages.length).map((service, index) => (
                <div
                  key={index}
                  className="lg:p-10 xs:p-4 text-black sm:w-full sm:h-[200px] md:w-1/3 md:h-[450px] lg:h-[500px] xl:h-[400px] border flex flex-col sm:space-y-5 md:justify-center"
                >
                  <h1 className="text-[22px] font-bold">{service.title}</h1>
                  <p className="text-[15px] lg:text-[16px] leading-tight">
                    {service.text}
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

export default Advantage