"use client"
import React from "react";
import { motion } from "framer-motion";

const CurrentOpenings = () => {
  const openings = [
    {
      title: "Data Entry Specialist",
      role: "Maintain database integrity by entering data with high precision.",
      tasks: [
        "Online form filling — Entering consumer data into secure web forms.",
        "Excel data entry — Sorting, cleaning, and managing large datasets.",
        "Copy paste jobs — Accurate data migration between platforms.",
      ],
    },
    {
      title: "Document Digitization",
      role: "Convert physical or static documents into digital formats.",
      tasks: [
        "PDF to Word typing — Retyping scanned documents with 98%+ accuracy.",
        "Image to text — Extracting text from image files.",
        "Handwritten to digital — Deciphering handwritten notes into clear text.",
      ],
    },
    {
      title: "Specialized Support",
      role: "For candidates with niche skills.",
      tasks: [
        "Audio transcription — Converting speech to text.",
        "Medical data entry — Handling sensitive records (high accuracy required).",
        "Micro-task jobs — Managing verification and validation tasks.",
      ],
    },
  ];

  // Motion variants for staggered fade-in
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 text-center sm:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#362F4F] mb-3">
            Current Openings
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto sm:mx-0">
            Join our growing remote team. Explore roles designed for accuracy, reliability, and long-term growth.
          </p>
        </motion.div>

        {/* Job Listings */}
        <div className="flex flex-col gap-6 sm:gap-10">
          {openings.map((job, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="relative bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 p-6 sm:p-8 border border-[#362F4F]/10"
            >

              {/* Left Accent */}
              <div className="absolute left-0 top-0 h-full w-1.5 sm:w-2 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-l-xl"></div>

              {/* Content */}
              <div className="pl-4 sm:pl-6">

                <h3 className="text-xl sm:text-2xl font-bold text-[#362F4F] mb-2 sm:mb-3">
                  {job.title}
                </h3>

                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  <span className="font-semibold text-[#362F4F]">Role:</span> {job.role}
                </p>

                <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 sm:p-5 border border-[#362F4F]/10">
                  <ul className="space-y-2 sm:space-y-3">
                    {job.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="text-gray-700 text-xs sm:text-sm flex items-start gap-3 sm:gap-4"
                      >
                        <span className="mt-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex-shrink-0"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CurrentOpenings;
