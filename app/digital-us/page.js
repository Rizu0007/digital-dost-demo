import React from 'react'
import Aboutus from '@/components/aboutusc/DigitalAbout'
import Approach from '@/components/aboutusc/Approach'
import ServicesGrid from '@/components/aboutusc/Services'
import SHopexHero from '@/components/aboutusc/aboutHero'
import ModernFeatures from '@/components/aboutusc/feature'
import LogoSlider from '@/components/aboutusc/Parenter'
const page = () => {
  return (
    <div>
      <SHopexHero/>
      <LogoSlider/>
       <Approach/>
       <ServicesGrid/>
       <ModernFeatures/>
    </div>
  )
}

export default page