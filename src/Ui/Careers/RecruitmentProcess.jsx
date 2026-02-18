import React from "react";

const RecruitmentProcess = () => {
  const steps = [
    {
      title: "CV Submission & Review",
      description:
        "Submit your resume by emailing join@hireinglobal.com. Our HR team carefully reviews every application to assess experience and background.",
    },
    {
      title: "Candidate Evaluation",
      description:
        "Based on your profile strength, you will follow one of two paths: Direct Interview (for highly qualified candidates) or Skill Assessment (accuracy and competency evaluation).",
    },
    {
      title: "Verification & Onboarding",
      description:
        "Once your identity and skills are verified, you gain access to our secure worker portal and begin receiving legitimate data entry projects.",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#f9fafc]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#362F4F] mb-4">
            Our Recruitment Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We maintain high standards for our clients. Our structured
            selection process verifies both your identity and your ability
            to deliver accurate, error-free work.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Vertical Line (Desktop Only) */}
          <div className=" hidden sm:flex place-self-start sm:place-self-center absolute left-1/2 top-0 h-full w-[2px] bg-[#362F4F]/20 transform -translate-x-1/2"></div>
<div className="  sm:hidden absolute left-1 top-0 h-full w-[2px] bg-[#362F4F]/20 transform -translate-x-1/2"></div>
          <div className="flex flex-col gap-20">

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >

                {/* Step Content */}
                <div className=" ml-5 sm:ml-0 md:w-5/12 text-center md:text-left">
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-[#362F4F]/60">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#362F4F] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#362F4F]"></div>
                 {/* for mobile */}
                  <div className="sm:hidden  absolute left-1 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#362F4F]"></div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default RecruitmentProcess;
