import { Quote } from "lucide-react";
import React from "react";

const testimonials = [
  {
    name: "User 1",
    role: "Work-from-Home User",
    message:
      "I was genuinely impressed with Earn From Tasks. Their website is simple, well-structured, and easy to use. The service was quick, professional, and everything was delivered on time.",
  },
  {
    name: "User 2",
    role: "Housewife",
    message:
      "This job idea is perfect for those planning to work from home. It increases willpower and provides real opportunities. Very supportive and flexible for housewives.",
  },
  {
    name: "User 3",
    role: "Freelancer",
    message:
      "I appreciated the transparency and timely communication. The work opportunities provided were genuine, flexible, and suitable for part-time or work-from-home options.",
  },
  {
    name: "User 4",
    role: "Student",
    message:
      "It is very user-friendly. The experience was smooth, and the team members were very supportive and caring. Thank you for the wonderful support.",
  },
  {
    name: "User 5",
    role: "Immigration Client",
    message:
      "The team guided me through every step of my visa process with clarity and patience. They answered all my doubts and completed the process faster than I expected.",
  },
  {
    name: "User 6",
    role: "Professional User",
    message:
      "Provide excellent service with smooth and professional communication. The company was very supportive, responsive, and handled everything efficiently with good coordination.",
  },
  {
    name: "User 7",
    role: "Student",
    message:
      "The work is flexible and friendly. Payments are clear and timely, which gives confidence and trust. Perfect for students, housewives, or people seeking financial support without stress.",
  },
  {
    name: "User 8",
    role: "Freelancer",
    message:
      "The service was fast, professional, and consistently high quality. Everything was delivered ahead of schedule with zero unnecessary communication. Truly hassle-free and efficient.",
  },
  {
    name: "User 9",
    role: "Work-from-Home Enthusiast",
    message:
      "The process felt effortless from start to finish. I’ve already recommended them to friends who are equally impressed. Highly reliable and professional service.",
  },
  {
    name: "User 10",
    role: "Professional User",
    message:
      "While advanced tools could be added in the future, the service is excellent and dependable. Truly a hassle-free solution for anyone looking for flexible, reliable work.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-12">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#362F4F] text-center mb-4">
          What Our Users Say
        </h1>
        <p className="text-center text-gray-500 max-w-2xl mb-12 text-base sm:text-lg">
          Hear from real users who experienced smooth, professional, and flexible
          support from Earn From Tasks.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <Quote className="absolute -top-4 -left-4 text-purple-300 text-2xl sm:text-3xl" />

              {/* Message */}
              <p className="text-gray-700 text-base sm:text-lg font-medium mb-6">
                {t.message}
              </p>

              {/* User Info */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {t.name}
                </h3>
                <span className="text-gray-500 text-sm sm:text-base">{t.role}</span>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-3 right-6 w-10 sm:w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
