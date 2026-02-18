import React from "react";

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

  return (
    <section className="w-full py-16 sm:py-24 bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#362F4F] mb-3">
            Current Openings
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto sm:mx-0">
            Join our growing remote team. Explore roles designed for accuracy, reliability, and long-term growth.
          </p>
        </div>

        {/* Job Listings */}
        <div className="flex flex-col gap-6 sm:gap-10">

          {openings.map((job, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 border border-[#362F4F]/10"
            >

              {/* Left Accent */}
              <div className="absolute left-0 top-0 h-full w-1.5 sm:w-2 bg-[#362F4F] rounded-l-xl"></div>

              {/* Content */}
              <div className="pl-4 sm:pl-6">

                <h3 className="text-xl sm:text-2xl font-bold text-[#362F4F] mb-2 sm:mb-3">
                  {job.title}
                </h3>

                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  <span className="font-semibold text-[#362F4F]">Role:</span> {job.role}
                </p>

                <div className="bg-[#362F4F]/10 rounded-lg p-4 sm:p-5">
                  <ul className="space-y-2 sm:space-y-3">
                    {job.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="text-gray-700 text-xs sm:text-sm flex items-start gap-2 sm:gap-3"
                      >
                        <span className="mt-2 w-2 h-2 bg-[#362F4F] rounded-full flex-shrink-0"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CurrentOpenings;
