import React from 'react'
import Image from 'next/image'
const Advantage = ({advantages}) => {
     
   

  return (
    // <section  style={{ background: 'linear-gradient(115deg, #ffffff, #eeeeee, #ffffff)' }} className='md:px-32 py-40 xs:px-8 bg-[url("/services-main/services.jpg")] bg-cover bg-center relative  ' >
    // <div className=' xl:flex xl:flex-col xl:items-center '>
    //     <div>
            
    //     <h1 className="text-black font-bold xs:text-4xl sm:text-5xl xl:text-[40px] 2xl:text-7xl leading-tight mb-16">
    //     The Benefits of Collaborating with Us
    //         </h1>
    //     </div>
 
  

    //     <div className='mt-5 flex  '>
    //       <div className=' grid lg:grid-cols-2 lg:gap-3 xl:grid-cols-3 xl:gap-4'>
                
    //      { advantages.map((item, index) => (
    //         <>
    //         <div key={index}  className='bg-white lg:p-10 xs:p-4 h-[400px] text-black border border-[#4b5966] flex items-center flex-col sm:space-y-5  md:justify-around '>
                
    //         {/* <Image
    //         src={item.image}
    //         alt='computer'

    //         width={60}
    //         height={60}
            
            
    //         /> */}
    //         <h1 className='text-[22px]  font-bold '>{item.title}
    //         </h1>
           
             
    //          <p className='leading-tight'>{item.text}</p>

    //         </div>
           
    //         </>
    //      ))}
               
    //     </div>
            
            
           
    //     </div>
    // </div>
    // </section>

    <>
        <section className='lg:px-20  py-40 xs:px-8   relative ' >
        <div className=' xl:flex xl:flex-col xl:items-center '>
          <div>
            <h1 className="text-[black] font-bold xs:text-4xl sm:text-5xl xl:text-[40px] 2xl:text-7xl leading-tight mb-16">
              The Benefits Of Collaborating With Us            </h1>
          </div>


          <div className='mt-5 flex'>
            <div className='md:flex md:flex-wrap justify-center bg-white '>
              {advantages.slice(1,advantages.length).map((service, index) => (
                <div
                  key={index}
                  className="lg:p-10 xs:p-4 text-black sm:w-full sm:h-[200px] md:w-1/3 md:h-[450px] lg:h-[500px] xl:h-[400px] border flex flex-col sm:space-y-5 md:justify-around"
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