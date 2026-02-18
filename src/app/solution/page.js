import OurSolutions from '@/Ui/Solutions/OurSolutions'
import Solution2 from '@/Ui/Solutions/Solution2'
import React from 'react'

const page = () => {
  return (
    <div>
       <div className="h-auto flex items-center justify-center">
  <div className=' flex flex-col border border-[#362F4F] rounded-3xl px-6 h-auto w-[90%] mb-4'>
<OurSolutions/>
<Solution2/>
  </div>
  </div>
    </div>
  )
}

export default page
