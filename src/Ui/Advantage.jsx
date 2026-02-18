import { ChartBar, Globe, Shield } from 'lucide-react'
import Image from 'next/image'

import React from 'react'

const Advantage = () => {
    const card=[
        {
        icon:Shield,
        heading:'Data Security',
        paragraph:'We adhere to strict privacy protocols and offer NDA (Non-Disclosure Agreement) protection for sensitive projects.'
    },

     {
        icon:ChartBar,
        heading:'Scalability',
        paragraph:'Our flexible team size allows us to scale up instantly to meet your urgent deadlines without compromising quality'
    },

     {
        icon:Globe,
        heading:'24/7 Global Support',
        paragraph:'Our India-based team works across time zones to ensure your project is moving forward around the clock.'
    },

]
  return (

    <div className=' flex flex-col  gap-10'>

        <h1 className='text-5xl font-extrabold text-[#362F4F] text-center'>Why You Choose Us</h1>
    
    <div className='  flex flex-col sm:flex-row gap-8 mb-5 items-center justify-center'>

       {/* cards */}
        {
            
            card.map((item,index)=>{
                const Icon=item.icon
  return(     <div key={index} className=' transition-transform hover:scale-110 hover:shadow-2xl mt-5 flex flex-col items-center gap-5 w-[90%]  sm:w-[20vw] h-[40vh] sm:h-[45vh] rounded-3xl    border-l-4 border-l-blue-500'>
         {/* icon */}
         <div className='  mt-5 h-16 w-16 flex items-center justify-center bg-blue-100  text-blue-500 shadow-blue-400 shadow-2xl rounded-3xl '>
         <Icon/>
         </div>

          {/* heading  */}
        <h1 className=' text-xl font-bold'>{item.heading}</h1>

        {/* paragraph */}
        <p className=' w-[80%] text-sm font-medium text-slate-500 text-balance'>{item.paragraph}</p>
       </div>
)})}
     
      </div>
    </div>
  )
}

export default Advantage
