import React from "react";
import { Mail, Smartphone, MapPin, Clock } from "lucide-react";

const page = () => {
  return (
    <section className="w-full py-24 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#362F4F] mb-4">
            Get in Touch with Wcat
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether you have a high-volume data project or a simple digitization query, our team is ready to assist you.
          </p>
        </div>

        {/* Business & Clients */}
        <div className="bg-white rounded-2xl border border-[#362F4F]/20 p-8 shadow-lg flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#362F4F] mb-2">For Business & Clients</h2>
            <p className="text-gray-600">
              Looking to outsource data entry, transcription, or digitization projects? Connect with our project management team.
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#362F4F]" />
                <span className="text-gray-700">Email Us: Contact@hireinglobal.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#362F4F]" />
                <span className="text-gray-700">Response Time: Within 4 hours during business days</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#362F4F]" />
                <span className="text-gray-700">Priority Support: Dedicated project managers for Enterprise clients</span>
              </div>
            </div>
          </div>

          {/* Job Seekers & Freelancers */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#362F4F] mb-2">For Job Seekers & Freelancers</h2>
            <p className="text-gray-600">
              Questions about your application, exam, or joining process? Please use the appropriate channels below.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-2 text-sm">
              <li>Recruitment Policy: All recruitment handled via our Careers Page. Avoid calling directly.</li>
              <li>Existing Freelancers: Use dedicated WhatsApp support from your joining kit.</li>
              <li>Resume/CV Submission: <span className="font-semibold">join@hireinglobal.com</span></li>
              <li>Exam Support: <span className="font-semibold">exam@hireinglobal.com</span></li>
            </ul>
          </div>
        </div>

        {/* Headquarters */}
        <div className="bg-white rounded-2xl border border-[#362F4F]/20 p-8 shadow-lg flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#362F4F]">Our Headquarters</h2>
            <div className="flex items-start gap-2 mt-2">
              <MapPin className="w-5 h-5 text-[#362F4F]" />
              <p className="text-gray-700">
                Hire in Global, Near Gitanjali chokdi, Pij Road, Nadiad, Gujarat - 387002, India
              </p>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <Clock className="w-5 h-5 text-[#362F4F]" />
              <p className="text-gray-700">
                Operational Hours: Monday – Saturday: 10:00 AM – 6:00 PM (IST), Sunday: Closed
              </p>
            </div>
          </div>

          {/* Direct Support */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#362F4F]">Direct Support Channels</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-2 text-sm">
              <li>General Inquiries: <span className="font-semibold">Contact@hireinglobal.com</span></li>
              <li>WhatsApp Support: <span className="font-semibold">+91 9974710001</span></li>
            </ul>
            <p className="text-gray-600 mt-2 text-sm">
              Note: The phone line is primarily for active clients and registered freelancers. New job seekers are advised to apply online first.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default page;
