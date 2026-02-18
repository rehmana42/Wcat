"use client"
import React from 'react'
import CountUp from 'react-countup'


const Count = () => {
  return (
    <div>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      
      <div>
        <h2 className="text-4xl font-bold">
          <CountUp end={18} duration={3} />+
        </h2>
        <p className=' text-xl font-bold'>Years of Experience</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">
          <CountUp end={13000} duration={3} separator="," />+
        </h2>
        <p  className=' text-xl font-bold'>Total Projects</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">
          <CountUp end={35} duration={3} />+
        </h2>
        <p  className=' text-xl font-bold'>Winning Awards</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">
          <CountUp end={10000} duration={3} separator="," />+
        </h2>
        <p  className=' text-xl font-bold'>Happy Clients</p>
      </div>

    </div>
    </div>
  )
}

export default Count
