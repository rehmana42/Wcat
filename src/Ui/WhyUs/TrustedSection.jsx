"use client"
import React from "react";
import { motion } from "framer-motion";
const TrustedSection = () => {
  const reviews = [
    {
      platform: "Google",
      rating: 4.5,
      count: "7,700+ Reviews",
    },
    {
      platform: "Justdial",
      rating: 4.6,
      count: "5,000+ Reviews",
    },
    {
      platform: "Trustpilot",
      rating: 4.3,
      count: "2,200+ Reviews",
    },
  ];

  return (
    <section className="w-full  py-16 flex flex-col items-center gap-10">
      {/* Heading */}
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#362F4F]">
          Trusted by Thousands
        </h2>
        <p className="text-[#362F4F] text-sm md:text-base">
          We value transparency and user satisfaction.
        </p>
      </div>

      {/* Review Cards */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        {reviews.map((review, idx) => (
          <motion.div
           initial={{opacity:0, x:-30}}
           whileInView={{opacity:1, x:3}}
           transition={{delay:idx*0.15, duration:0.50}}
            key={idx}
            className="bg-white border ring-0 hover:ring-1 hover:ring-blue-400 border-[#362F4F] rounded-2xl shadow-sm p-6 flex flex-col items-center gap-2 w-48 hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="font-bold text-lg text-[#362F4F]">{review.platform}</h3>
            <motion.div 
              whileTap={{ y:-20, scale:1.2}}
            className="flex items-center gap-1">
              <span className="font-bold text-[#362F4F]">{review.rating}</span>
              <div className="flex"
             
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-400 ${
                      i < Math.round(review.rating) ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
            <p className="text-[#362F4F] text-sm">{review.count}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustedSection;
