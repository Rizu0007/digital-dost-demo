import React from 'react'
import Image from 'next/image'
const Advantage = () => {
     
   const Advantage=[
        {
            image:"/advantages/computer.svg",
            title:"Product-Centric Approach ",
            text:"Experience seamless evolution from concept to ongoing maintenance with this service. Expert product managers guide every stage - discovery, PoC, MVP development, support - ensuring your solution aligns perfectly with market dynamics and user needs, fostering sustainable and well-planned growth."


        },
        {
            image:"/advantages/quality.svg",
            title:"Quality Management",
            text:"Our stringent quality management system upholds the highest standards of software engineering, encompassing key aspects like information security, secure development, and technical coordination. With our cutting-edge web applications, we optimize your web development experience, driving innovation and success in the digital realm."


        },
        {
            image:"/advantages/3.svg",
            title:"Seamless Design Integration",
            text:"Collaborative synchronization with our experienced programmers ensures successful and efficient integration of your designs into web products. By working closely together, we guarantee a smooth transition from design to development, resulting in a cohesive and visually appealing final product."




        },
        {
            image:"/advantages/4.svg",
            title:"Cost-Effective Solutions",
            text:"Our team is skilled at custom software application development in a cost-efficient manner without compromising on quality. With a focus on high return on investment (ROI), we strive to deliver digital products that not only meet your budget requirements but also generate value and drive business growth."




        },
        {
            image:"/advantages/5.svg",
            title:"Scalability",
            text:"Our team is committed to delivering scalable and adaptable custom software solutions that can grow and evolve with your business. We take a proactive approach to understand your current needs, as well as anticipate future challenges and opportunities."




        },
        {
            image:"/advantages/6.svg",
            title:"Support and Maintenance",
            text:"You can count on ongoing support and maintenance to address any issues or bugs promptly, ensuring that your software is always running smoothly."




        },

        


    ]

  return (
    <section  style={{ background: 'linear-gradient(115deg, #ffffff, #eeeeee, #ffffff)' }} className='md:px-32 py-40 xs:px-8 bg-[url("/services-main/services.jpg")] bg-cover bg-center relative  ' >
    <div className=' xl:flex xl:flex-col xl:items-center '>
        <div>
            
        <h1 className="text-black font-bold xs:text-4xl sm:text-5xl xl:text-[40px] 2xl:text-7xl leading-tight mb-16">
        The Benefits of Collaborating with Us
            </h1>
        </div>
 
  

        <div className='mt-5 flex  '>
          <div className=' grid lg:grid-cols-2 lg:gap-3 xl:grid-cols-3 xl:gap-4'>
                
         { Advantage.map((item, index) => (
            <>
            <div key={index}  className='bg-[#887d7d23] lg:p-10 xs:p-4 h-[400px] text-black border border-[#4b5966] flex items-center flex-col sm:space-y-5  md:justify-around '>
                
            <Image
            src={item.image}
            alt='computer'

            width={60}
            height={60}
            
            
            />
            <h1 className='text-[22px]  font-bold '>{item.title}
            </h1>
           
             
             <p className='leading-tight'>{item.text}</p>

            </div>
           
            </>
         ))}
               
        </div>
            
            
           
        </div>
    </div>
    </section>
  )
}

export default Advantage