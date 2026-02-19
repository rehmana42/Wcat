import Image from "next/image";
import React from "react";

const steps = [
  {
    title: "1. Submit Your Project",
    description:
      "Send us your raw files (PDFs, Images, Audio) and specific requirements via our secure portal.",
    img: "/step1.png",
    color: "blue",
  },
  {
    title: "2. Review & Feedback",
    description:
      "Our team reviews your project and provides detailed feedback to ensure quality and clarity.",
    img: "/step2.svg",
    color: "green",
    reverse: true,
  },
  {
    title: "3. Approval & Confirmation",
    description:
      "Once feedback is addressed, you approve the final version for production or delivery.",
    img: "/step5.svg",
    color: "yellow",
  },
];

const StepProcess = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#362F4F] leading-tight">
          Simple Step Process
        </h2>
        <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg">
          Follow our easy 3-step process to submit, review, and approve your project.
        </p>
      </div>

      <div className="flex flex-col gap-20 max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${
              step.reverse ? "sm:flex-row-reverse" : "sm:flex-row"
            } items-center gap-8`}
          >
            {/* Text Card */}
            <div
              className={`w-full sm:w-1/3 flex flex-col items-center sm:items-start gap-4 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 bg-white border-l-4 ${
                step.color === "blue"
                  ? "border-blue-500"
                  : step.color === "green"
                  ? "border-green-400"
                  : "border-yellow-400"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center sm:text-left">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                {step.description}
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full sm:w-2/3 h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={step.img}
                alt={step.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepProcess;
