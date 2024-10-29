import React from 'react'
import Image from 'next/image'
const Approach = () => {
  return (
    <section className='mt-20'>

        <div className='flex flex-col justify-center items-center p-5'>
        <div>
            <h1 className='font-bold xs:text-4xl md:text-5xl lg:text-6xl '>Our Approach</h1>
        </div>
         
         <Image
         src="/ImageAbout/circle2.png"
         alt="Circle"
         width={1000}
         height={1000}
         className='hidden lg:block'
        />
            
            <Image
         src="/ImageAbout/circle2.png"
         alt="Circle"
         width={500}
         height={800}
         className='lg:hidden'


        />

        </div>

        
    </section>
  )
}

export default Approach