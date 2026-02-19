import CareerPart1 from '@/Ui/Careers/CareerPart1'
import CurrentOpenings from '@/Ui/Careers/CurrentOpenings'
import EligibilitySection from '@/Ui/Careers/EligibilitySection'
import RecruitmentProcess from '@/Ui/Careers/RecruitmentProcess'
import React from 'react'

const page = () => {
  return (
 <div className="h-auto flex items-center justify-center">
  <div className=' flex flex-col rounded-3xl px-6 h-auto w-full mb-4'>
<CareerPart1/>
<RecruitmentProcess/>
<CurrentOpenings/>
<EligibilitySection/>
  </div>
  </div>
  )
}

export default page
