import React from "react";
import { Mail, CalendarCheck } from "lucide-react";

const EligibilitySection = () => {
  const requirements = [
    {
      title: "Accuracy is Key",
      desc: "We do not focus on speed alone. You must demonstrate a Typing Accuracy of 98% or higher.",
      icon: <CalendarCheck className="w-5 h-5 text-[#362F4F]" />,
    },
    {
      title: "Equipment",
      desc: "A dedicated Laptop/PC is required for most projects. (Mobile options limited to micro-tasks).",
      icon: <CalendarCheck className="w-5 h-5 text-[#362F4F]" />,
    },
    {
      title: "Commitment",
      desc: "Ability to meet strict deadlines and adhere to confidentiality guidelines.",
      icon: <CalendarCheck className="w-5 h-5 text-[#362F4F]" />,
    },
    {
      title: "Experience",
      desc: "We welcome student part-time jobs as well as experienced professionals.",
      icon: <CalendarCheck className="w-5 h-5 text-[#362F4F]" />,
    },
  ];

  return (
    <section className="w-full py-16 bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* Header */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#362F4F] mb-4">
            Eligibility Requirements
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto sm:mx-0">
            Quality is our top priority. We are seeking detail-oriented professionals who prioritize precision and accuracy.
          </p>
        </div>

        {/* Requirements List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {requirements.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 bg-white rounded-xl p-4 sm:p-6 shadow hover:shadow-md transition-shadow duration-200 border-l-4 border-[#362F4F]"
            >
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="font-bold text-[#362F4F] text-lg sm:text-xl mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Career Opportunities */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-12 items-center">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#362F4F] mb-2">
              Build Your Career with Hire in Global
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-0">
              Submit your CV if you prioritize precision and have a high typing accuracy percentage. Join our remote team for exciting opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:biosenix.in@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#362F4F] text-white rounded-xl shadow hover:bg-[#2a2438] transition-colors duration-200"
            >
              <Mail className="w-5 h-5" /> Submit CV via Email
            </a>
            <a
              href="/apply"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-[#362F4F] text-[#362F4F] rounded-xl shadow hover:bg-[#362F4F] hover:text-white transition-colors duration-200"
            >
              <CalendarCheck className="w-5 h-5" /> View Direct Openings
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EligibilitySection;
