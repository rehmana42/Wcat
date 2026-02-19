import ImageSection from '@/Ui/ImageSection'
import OurSolutions from '@/Ui/Solutions/OurSolutions'
import Solution2 from '@/Ui/Solutions/Solution2'
import React from 'react'

const page = () => {
  return (
    <div>
       <div className="h-auto flex items-center justify-center">
  <div className=' flex flex-col  rounded-3xl  h-auto w-full mb-4'>
    <ImageSection title={"Industry Workflow Solutions"}/>
<OurSolutions/>
<Solution2/>
  </div>
  </div>
    </div>
  )
}

export default page
