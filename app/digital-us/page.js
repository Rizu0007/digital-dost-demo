import React from 'react'
import Aboutus from '@/components/aboutusc/DigitalAbout'
import Approach from '@/components/aboutusc/Approach'
import ServicesGrid from '@/components/aboutusc/Services'
const page = () => {
  return (
    <div>
        <Aboutus/>
       <Approach/>
       <ServicesGrid/>
    </div>
  )
}

export default page