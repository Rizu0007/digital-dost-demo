import React from 'react'

const Service = ({ mainheading, services }) => {

  // const niche= [
   
  // {
  //   "title": "Performance Marketing",
  //   "description": "Keep sight of long-term business goals. Performance marketing is another marketing campaign method and is now the focal point of all brand media and content. Throughout the consumer decision cycle, we purchase media, produce content, and improve brand experiences to achieve business goals."
  // },
  // {
  //   "title": "Social Media Management",
  //   "description": "Rise above the rabble with our social media management (SMM) services. Shopex incorporates social media management services into your comprehensive marketing plan to optimize online visibility. The accurate Instagram or Facebook management service can draw in, develop, and turn followers into devoted clients. Our team has planned and managed the franchises, small businesses, and corporate clients through social media management campaigns."
  // },
  // {
  //   "title": "SEO (Search Engine Optimization)",
  //   "description": "Shopex exceeds the conventional SEO company model. We have collaborated with various brands to achieve impactful, data-driven SEO outcomes. Our focus extends beyond merely increasing your online visibility. Our competent team of SEO experts is dedicated to helping you acquire more customers, enhance search traffic, and boost conversions."
  // },
  // {
  //   "title": "Graphic Design & (UI/UX)",
  //   "description": "Our forte is branding and unique design to increase conversions. Our UI/UX, web design, and development experts will weave your data, extraordinary insights, competitive analysis, and industry research to build an exceptional digital experience—partner with us to create a unique website that increases user attention, retention, and conversions."
  // },
  // {
  //   "title": "Content Writing",
  //   "description": "Creating appealing content is essential to building your audience and expanding your company. Our marketing and SEO teams produce high-quality content that targets suitable keywords and key phrases to rank higher in search results. We can assist your team in researching subjects, keywords, and keyphrases that can increase your company's traffic and revenue."
  // },
  // {
  //   "title": "Affiliate Marketing",
  //   "description": "We optimize our client's return on investment (ROI) with each exceptional affiliate marketing strategy to guarantee profitability and visibility. Ultimately, our solutions will enable you to connect with more valuable online leads. We do much more than develop plans with our affiliate marketing. Team Shopex uses tailored strategies to build solid alliances, generate traffic, and increase conversions to ensure your brand reaches its most significant online potential."
  // },
  // {
  //   "title": "Influencer Marketing",
  //   "description": "Uncover new target customers who love your products. We pair brands with social media influencers for optimal reach and visibility to launch ingenious influencer campaigns. Our influencer marketing strategy strives to raise brand awareness through high-quality content and interaction, naturally building brand associations and advocates that stimulate sales."
  // },
  // {
  //   "title": "User-Generated Content",
  //   "description": "Our top-notch user-generated content service will help you generate product interest, trigger conversations, and boost revenue. Do you know why it's a marketing goldmine? Because UGC is more than obsolete advertising. Your audience prefers to hear from your customers regarding your brand's photos, videos, reviews, and blog posts. User-generated content is cost-effective, more authentic, and saves you time."
  // },
  // {
  //   "title": "Shopify Development",
  //   "description": "As a competent team, we acknowledge the value of developing customized solutions to meet our partners' demands. For this reason, we always provide every company with customized Shopify development services, which enables us to fulfill your expectations for the project's outcome. Each individual in our team is devoted to the outcomes we provide to our partners. We are more than a few designers and developers prepared to boost your company's performance."
  // },
  // {
  //   "title": "WordPress Development",
  //   "description": "When it comes to selling your brand, nothing beats your website. With Shopex's help, your website may become an effective medium of professional communication, befitting the high caliber of your position. We have expertise in custom WordPress development, WordPress SEO, and WordPress website design. The WordPress CMS is an excellent option for any eCommerce or content-based website because it simplifies managing your content. Our professionals will create a development plan, platform suggestions, project budget, and schedule. Building your website will enable you to expand and scale to meet future company needs."
  // }


  // ];
  // bg-[url("/services-main/services.jpg")] bg-cover bg-center
  return (
    <>
    <section className='lg:px-20  py-40 xs:px-8   relative ' >
      <div className=' xl:flex xl:flex-col xl:items-center '>
        <div>
          <h1 className="text-[black] font-bold xs:text-4xl sm:text-5xl xl:text-[40px] 2xl:text-7xl leading-tight mb-16">
            {/* Our Company’s Product Management Services ss*/}
            {mainheading}
          </h1>
        </div>


        <div className='mt-5 flex'>
          <div className='md:flex md:flex-wrap justify-center bg-white '>
            {services.map((service, index) => (
              <div
                key={index}
                
                className='lg:p-10 xs:p-4 text-black sm:w-full sm:h-[200px] md:w-1/3 md:h-[450px] lg:h-[500px] xl:h-[400px] border border-[black] flex flex-col sm:space-y-5 md:justify-around'
              >
                <h1 className='text-[22px] font-bold'>{service.title}</h1>
                <p className=' text-[15px] lg:text-[16px] leading-tight'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>



    {/* <section className='md:px-32 py-40 xs:px-8  bg-white relative ' >
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
    </section> */}





    
    {/* <section className='md:px-32 py-40 xs:px-8  relative ' style={{ background: 'linear-gradient(115deg, #ffffff, #eeeeee, #ffffff)' }}>
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
    </section> */}


    {/* <section className='md:px-32 py-40 xs:px-8  relative ' style={{ background: 'linear-gradient(115deg, #ffffff, #eeeeee, #ffffff)' }}>
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
    </section> */}

    </>
  )
}

export default Service