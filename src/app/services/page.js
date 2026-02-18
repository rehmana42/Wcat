import HeroSection from '@/Ui/Services/HeroSection'
import IndustrySolutions from '@/Ui/Services/IndustrySolutions'
import QualityProcess from '@/Ui/Services/QualityProcess'
import React from 'react'

const page = () => {
  return (
      <div className="h-auto flex items-center justify-center">
  <div className=' flex flex-col border border-[#362F4F] rounded-3xl px-6 h-auto w-[90%] mb-4'>
    <HeroSection/>
    <IndustrySolutions/>
    <QualityProcess/>
  </div>
  </div>
  )
}

export default page
