import React from 'react'
import { Button } from "@/components/ui/button";
import { ShieldCheck } from 'lucide-react';
const HeroSection = () => {
  return (
    <div  className="  w-full h-[70vh] flex flex-col sm:flex-row   justify-between  pt-10 sm:pt-[12vh] px-6">
       {/* left side  */}
      <div className=" sm:ml-4 flex flex-col  gap-8 w-[95%]  sm:w-[20%] ">
<div className="flex flex-row items-center justify-center gap-2 relative px-5 py-2 rounded-full 
                bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700
                text-white text-sm font-bold uppercase tracking-wide
                shadow-lg shadow-blue-500/50
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-300 before:via-blue-400 before:to-blue-600 before:opacity-30
                hover:scale-105 hover:shadow-2xl transition-transform duration-300">
 <ShieldCheck/> <p>Your Trusted Partner</p>
</div>

        <h2 className=" text-3xl sm:text-5xl text-[#362F4F] font-extrabold text-balance sm:w-[50vw]">
          Genuine Online Typing Jobs & Data Entry Solutions
        </h2>
        <p className=" text-sm w-full text-balance text-[#577BC1] sm:w-[48vw]">Your Trusted Source for Genuine Online Typing Jobs and Remote Work.
Are you looking for genuine online typing jobs? Hire in Global connects you with legitimate, scam-free projects. We transform data into valuable digital assets, offering flexible data entry work for freelancers worldwide.</p>


    <div className=" flex flex-row gap-4 sm:gap-6">
      <Button className={' rounded-full h-12  w-36 text-base sm:text-lg font-bold  transition-all hover:scale-110 text-gray-200 hover:shadow-blue-700 shadow-2xl duration-150 bg-[#4635B1]'}>Apply Now</Button>

        <Button className={' rounded-full h-12    w-[40vw] sm:w-44 text-sm sm:text-lg font-bold  transition-all  hover:scale-110 text-gray-200 hover:shadow-blue-700 shadow-2xl duration-150 bg-[#00CAFF]'}>View All Services</Button>
    </div>
      </div>

      {/* right side  */}
      <div className='sm:w-[45%] relative w-full h-[50vh] sm:h-[55vh] '>
      <video
      className=" w-full h-full object-cover "
      src='./heroBgvideo.mp4'
      autoPlay
      muted
      loop
      
      />
      </div>
    </div>
  )
}

export default HeroSection
