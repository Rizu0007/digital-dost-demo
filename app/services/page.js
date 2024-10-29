import Header from '@/components/services/Header'
import React from 'react'
import Service from '@/components/services/Service'
import Advantage from '@/components/services/Advantage'
import Flow from '@/components/services/Flow'
function page() {
  return (
    <div className='min-w-full overflow-hidden'> <Header/>
    <Service/>
    <Advantage/>
    <Flow/>
    </div>
  
   
  )
}

export default page