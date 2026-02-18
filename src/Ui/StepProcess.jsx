import Image from 'next/image'
import React from 'react'

const StepProcess = () => {
  return (
    <div  className=' mt-24 flex flex-col gap-4 px-6'>
        <h1 className='text-5xl font-extrabold text-[#362F4F] text-center'>Simple Step Process</h1>
      
     <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16">
  {/* Step 1 */}
  <div className="flex flex-col sm:flex-row items-center gap-8">
    {/* Text */}
    <div className="w-full sm:w-1/3 flex flex-col items-center sm:items-start gap-4 p-6 rounded-xl shadow-2xl shadow-blue-200 bg-white transition-all hover:scale-110 duration-300">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
        1. Submit Your Project
      </h2>
      <p className="text-base sm:text-lg text-gray-600 font-medium w-full sm:w-[90%] text-center sm:text-left">
        Send us your raw files (PDFs, Images, Audio) and specific requirements via our secure portal.
      </p>
    </div>
    {/* Image */}
    <div className="relative w-full sm:w-[35vw] h-[40vh] sm:h-[50vh] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/step1.png"
        fill
        alt="Submit Project Illustration"
        className="object-contain"
      />
    </div>
  </div>

  {/* Separator */}
  <div className="border-t-2 border-gray-200 mx-auto w-3/4"></div>

  {/* Step 2 */}
  <div className="flex flex-col sm:flex-row-reverse items-center gap-8">
    <div className="w-full sm:w-1/3 flex flex-col items-center sm:items-start gap-4 p-6 rounded-xl shadow-2xl shadow-green-200 bg-white transition-all hover:scale-110 duration-300">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
        2. Review & Feedback
      </h2>
      <p className="text-base sm:text-lg text-gray-600 font-medium w-full sm:w-[90%] text-center sm:text-left">
        Our team reviews your project and provides detailed feedback to ensure quality and clarity.
      </p>
    </div>
    <div className="relative w-full sm:w-[35vw] h-[40vh] sm:h-[50vh] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/step2.svg"
        fill
        alt="Review Project Illustration"
        className="object-contain"
      />
    </div>
  </div>

  {/* Separator */}
  <div className="border-t-2 border-gray-200 mx-auto w-3/4"></div>

  {/* Step 3 */}
  <div className="flex flex-col sm:flex-row items-center gap-8">
    <div className="w-full sm:w-1/3 flex flex-col items-center sm:items-start gap-4 p-6 rounded-xl shadow-2xl shadow-yellow-200 bg-white transition-all hover:scale-110 duration-300">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
        3. Approval & Confirmation
      </h2>
      <p className="text-base sm:text-lg text-gray-600 font-medium w-full sm:w-[90%] text-center sm:text-left">
        Once feedback is addressed, you approve the final version for production or delivery.
      </p>
    </div>
    <div className="relative w-full sm:w-[35vw] h-[40vh] sm:h-[50vh] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/step5.svg"
        fill
        alt="Approval Illustration"
        className="object-contain"
      />
    </div>
  </div>
    </div>
    </div>
  )
}

export default StepProcess
