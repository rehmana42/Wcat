import BFR from '@/Ui/BFR'
import HeroSection from '@/Ui/WhyUs/HeroSection'
import TrustedSection from '@/Ui/WhyUs/TrustedSection'
import React from 'react'

const WhyUs = () => {
  return (
   <div className="h-auto flex items-center justify-center">
  <div className=' flex flex-col rounded-3xl px-6 h-auto w-full mb-4'>
  <HeroSection/>
  <hr className='w-[95%] text-center'/>
  <BFR/>
    <hr className='w-[95%] text-center'/>
  <TrustedSection/>
  </div>
</div>

  )
}

export default WhyUs
