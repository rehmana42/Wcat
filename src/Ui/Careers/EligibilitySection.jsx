"use client"
import React from "react";
import { Mail, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

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

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="w-full py-16 bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="text-center sm:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#362F4F] mb-4">
            Eligibility Requirements
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto sm:mx-0">
            Quality is our top priority. We are seeking detail-oriented professionals who prioritize precision and accuracy.
          </p>
        </motion.div>

        {/* Requirements List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {requirements.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="flex gap-4 bg-white rounded-xl p-4 sm:p-6 shadow hover:shadow-md transition-shadow duration-200 border-l-4 border-[#362F4F]"
            >
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="font-bold text-[#362F4F] text-lg sm:text-xl mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-12 items-center"
        >
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#362F4F] mb-2">
              Build Your Career with Hire in Global
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-0">
              Submit your CV if you prioritize precision and have a high typing accuracy percentage. Join our remote team for exciting opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:biosenix.in@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#362F4F] text-white rounded-xl shadow hover:bg-[#2a2438] transition-colors duration-200"
            >
              <Mail className="w-5 h-5" /> Submit CV via Email
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/apply"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-[#362F4F] text-[#362F4F] rounded-xl shadow hover:bg-[#362F4F] hover:text-white transition-colors duration-200"
            >
              <CalendarCheck className="w-5 h-5" /> View Direct Openings
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EligibilitySection;
