import React from 'react'

const Service = () => {

  const niche= [
    {
      title: "Brand Identity & Positioning",
      description: "Linkup Studio marketers will make your business stand out among your competitors. Our agency creates diverse brand concepts, including naming for your business, taglines for it, and design options for a brand logotype. Additionally, you get comprehensive brand positioning, its brand voice, key messages, and visual concepts in the form of an appealing brand style guide."
    },
    {
      title: "Digital Marketing Strategy",
      description: "In this B2B marketing service, our professional marketers first define your current pains and needs. We take into account your business's stage and provide the needed service. If you have an established operating business, we provide a comprehensive marketing strategy; if you have a new product, we can also help you plan and execute every stage of a soft launch. We select the digital marketing channels suitable for your purposes and also create a detailed and full-fledged media plan."
    },
    {
      title: "Search Engine Optimization",
      description: "This crucial internet marketing service from our agency will enhance your website's visibility on many search engines, resulting in more organic traffic and improved rankings. For this, our specialists will execute SEO and technical site audits and analyze its current metrics indicators. Then, we’ll profoundly analyze the demand for the product or services exactly in your niche, work out semantics, and offer tactics for building up the link mass. "
    }
    ,
    {
      title: "Social Media Marketing",
      description: "Social media is a necessary channel for creating brand or product awareness. However, businesses often lack the resources to manage this important channel fully and constantly. Our digital marketing agency can fully take care of this task — from creating the content plan and creating text with creatives to posting the prepared materials. Linkup Studio marketing specialists can create a targeted community around your services and increase customer’s loyalty to the brand."
    },
    {
      title: "Advertising Campaigns",
      description: "B2B advertising is the central point in internet marketing services. Our agency creates promotion strategies for each channel your business may benefit from. In practice, we create and launch your advertising campaigns from the initial idea and create creatives for them, up to launch and optimizing conversions—be it X(Twitter), Meta advertising, Google advertising, or Bing."
    },
    {
      title: "Video Production",
      description: "This digital marketing service combines our motion design creativity and robust product marketing knowledge with a profound design basis. Such a tandem of specialists makes sure that our team will create videos that will propel your brand's communication forward. Statistics reveal that a video on a landing page increases conversions by 80%, and 84% of customers are convinced to buy a product or service after watching a brand video."
    }
  ];
  // bg-[url("/services-main/services.jpg")] bg-cover bg-center
  return (
    <>
    <section className='md:px-32 py-40 xs:px-8   relative ' >
      <div className=' xl:flex xl:flex-col xl:items-center '>
        <div>
          <h1 className="text-[black] font-bold xs:text-4xl sm:text-5xl xl:text-[40px] 2xl:text-7xl leading-tight mb-16">
            Our Company’s Product Management Services
          </h1>
        </div>


        <div className='mt-5 flex'>
          <div className='md:flex md:flex-wrap justify-center bg-white '>
            {niche.map((service, index) => (
              <div
                key={index}
                
                className='lg:p-10 xs:p-4 text-black sm:w-full sm:h-[200px] md:w-1/3 md:h-[450px] lg:h-[450px] xl:h-[400px] border border-[black] flex flex-col sm:space-y-5 md:justify-around'
              >
                <h1 className='text-[22px] font-bold'>{service.title}</h1>
                <p className='leading-tight'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className='md:px-32 py-40 xs:px-8  bg-white relative ' >
      <div className=' xl:flex xl:flex-col xl:items-center '>
        <div>
          <h1 className="text-[black] font-bold xs:text-4xl sm:text-5xl xl:text-[40px] 2xl:text-7xl leading-tight mb-16">
            Our Company’s Product Management Services
          </h1>
        </div>


        <div className='mt-5 flex'>
          <div className='md:flex md:flex-wrap justify-center'>
            {niche.map((service, index) => (
              <div
                key={index}
                
                className='lg:p-10 xs:p-4 text-black sm:w-full sm:h-[200px] md:w-1/3 md:h-[450px] lg:h-[450px] xl:h-[400px] border border-[black] flex flex-col sm:space-y-5 md:justify-around'
              >
                <h1 className='text-[22px] font-bold'>{service.title}</h1>
                <p className='leading-tight'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>





    
    <section className='md:px-32 py-40 xs:px-8  relative ' style={{ background: 'linear-gradient(115deg, #ffffff, #eeeeee, #ffffff)' }}>
      <div className=' xl:flex xl:flex-col xl:items-center '>
        <div>
          <h1 className="text-[#00729f] font-bold xs:text-4xl sm:text-5xl xl:text-[40px] 2xl:text-7xl leading-tight mb-16">
            Our Company’s Product Management Services
          </h1>
        </div>


        <div className='mt-5 flex'>
          <div className='md:flex md:flex-wrap justify-center'>
            {niche.map((service, index) => (
              <div
                key={index}
                
                className='lg:p-10 xs:p-4 text-black sm:w-full sm:h-[200px] md:w-1/3 md:h-[450px] lg:h-[450px] xl:h-[400px] border border-[#00729f] flex flex-col sm:space-y-5 md:justify-around'
              >
                <h1 className='text-[22px] font-bold'>{service.title}</h1>
                <p className='leading-tight'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


    <section className='md:px-32 py-40 xs:px-8  relative ' style={{ background: 'linear-gradient(115deg, #ffffff, #eeeeee, #ffffff)' }}>
      <div className=' xl:flex xl:flex-col xl:items-center '>
        <div>
          <h1 className="text-black font-bold xs:text-4xl sm:text-5xl xl:text-[40px] 2xl:text-7xl leading-tight mb-16">
            Our Company’s Product Management Services
          </h1>
        </div>


        <div className='mt-5 flex'>
          <div className='md:flex md:flex-wrap justify-center'>
            {niche.map((service, index) => (
              <div
                key={index}
                
                className='lg:p-10 xs:p-4 text-black sm:w-full sm:h-[200px] md:w-1/3 md:h-[450px] lg:h-[450px] xl:h-[400px] border border-[black] flex flex-col sm:space-y-5 md:justify-around'
              >
                <h1 className='text-[22px] font-bold'>{service.title}</h1>
                <p className='leading-tight'>{service.description}</p>
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