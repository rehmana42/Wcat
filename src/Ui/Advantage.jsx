import { ChartBar, Globe, Shield } from "lucide-react";
import React from "react";

const Advantage = () => {
  const cards = [
    {
      icon: Shield,
      heading: "Data Security",
      paragraph:
        "We adhere to strict privacy protocols and offer NDA (Non-Disclosure Agreement) protection for sensitive projects.",
    },
    {
      icon: ChartBar,
      heading: "Scalability",
      paragraph:
        "Our flexible team size allows us to scale up instantly to meet your urgent deadlines without compromising quality",
    },
    {
      icon: Globe,
      heading: "24/7 Global Support",
      paragraph:
        "Our India-based team works across time zones to ensure your project is moving forward around the clock.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-10 bg-slate-50">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#362F4F] leading-tight">
          Why You Choose Us
        </h2>
        <p className="mt-3 text-gray-500 text-sm sm:text-base md:text-lg">
          We combine security, scalability, and 24/7 support to deliver top-notch results for your projects.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {cards.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-4 sm:gap-5 p-6 sm:p-8 bg-white rounded-3xl border-l-4 border-blue-500 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center min-h-[300px] sm:min-h-[350px]"
            >
              {/* Icon */}
              <div className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-3xl bg-blue-100 text-blue-500 shadow-md">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>

              {/* Heading */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{item.heading}</h3>

              {/* Paragraph */}
              <p className="text-gray-500 text-sm sm:text-base md:text-base">
                {item.paragraph}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Advantage;
