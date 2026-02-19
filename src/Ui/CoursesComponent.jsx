import React from "react";
import { Verified } from "lucide-react";
import Image from "next/image";

const CoursesComponent = () => {
  const cards = [
    {
      title: "Document Digitization",
      description:
        "Convert non-editable files into clean, formatted digital documents.",
      features: [
        "PDF to Word/Excel Conversion",
        "Image to Text Extraction",
        "Handwritten to Digital Typing",
      ],
      img: "/Learning-bro.png",
    },
    {
      title: "High-Volume Data Entry",
      description:
        "Scalable solutions for businesses with massive data needs.",
      features: [
        "Online & Offline Data Entry",
        "Excel Data Cleaning & Management",
        "Form Processing (Surveys/Claims)",
      ],
      img: "/Learning-amico.png",
    },
    {
      title: "Transcription Services",
      description:
        "Turn audio into actionable text with our human-verified transcription.",
      features: [
        "Audio/Video Transcription",
        "Meeting & Interview Notes",
        "Medical & Legal Records",
      ],
      img: "/Learning-rafiki.png",
    },
    {
      title: "E-Commerce Support",
      description:
        "Back-office support for online retailers and digital platforms.",
      features: [
        "Product Upload & Entry",
        "Copy Paste & Formatting",
        "Captcha & Verification Tasks",
      ],
      img: "/Team work-rafiki.png",
    },
  ];

  return (
    <div className="mt-[15vh] sm:mt-[10vw] w-full flex flex-col gap-10 items-center justify-center px-4 sm:px-6 lg:px-10">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#362F4F] leading-tight">
          Our Core Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-medium text-slate-400 mt-2">
          Specialized solutions tailored to your industry requirements.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 w-full">
        {cards.map((item, index) => (
          <div
            key={index}
            className="relative w-full rounded-2xl overflow-hidden border-t-4 border-t-blue-400 
                       shadow-lg hover:shadow-2xl hover:scale-105 active:scale-100 transition-transform duration-300
                       bg-white cursor-pointer group flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-64 sm:h-56 md:h-48 lg:h-56 overflow-hidden">
              <Image
                fill
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="relative z-20 px-5 sm:px-6 py-5 flex flex-col flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-base">
                {item.description}
              </p>

              {/* Features list */}
              <ul className="mt-4 flex flex-col gap-2 sm:gap-3 text-sm sm:text-base font-medium text-gray-900 flex-1">
                {item.features.map((feature, key) => (
                  <li key={key} className="flex items-center gap-2">
                    <Verified className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 drop-shadow-md flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesComponent;
