import { UserCog, Workflow, Users } from "lucide-react";
import React from "react";

const Solution2 = () => {
  const features = [
    {
      title: "Dedicated Project Managers",
      description: "Single point of contact for seamless communication.",
      icon: <UserCog className="w-6 h-6" />,
    },
    {
      title: "Custom Workflows",
      description:
        "We adapt our software and entry methods to match your internal systems.",
      icon: <Workflow className="w-6 h-6" />,
    },
    {
      title: "Scalable Staffing",
      description:
        "We can ramp up our team size within 48 hours to meet seasonal spikes.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-16">

        {/* LEFT SIDE — BIG STATEMENT */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="w-16 h-1 bg-[#362F4F]"></div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#362F4F] leading-tight">
            Enterprise Solutions <br /> (Custom Built)
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-md">
            Processing over 10,000+ documents per month? We provide fully
            dedicated teams structured specifically for enterprise-scale
            operations.
          </p>
        </div>

        {/* RIGHT SIDE — FEATURE STACK */}
        <div className="lg:w-1/2 flex flex-col gap-10 border-l-2 border-[#362F4F]/20 pl-6">

          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4 group">

              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#362F4F] flex items-center justify-center text-[#362F4F] group-hover:bg-[#362F4F] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-bold text-[#362F4F] mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 max-w-sm">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Solution2;
