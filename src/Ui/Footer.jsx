import React from "react";
import { Mail, Smartphone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-lg font-bold text-[#362F4F] mb-4">About Wcat Private limited</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Wcat Private Limited is India’s most trusted recruitment and freelance platform, connecting job seekers with legit data entry and online typing jobs. Based in Nadiad, Gujarat, we provide genuine work-from-home opportunities for students, housewives, and professionals. Flexible, zero-investment career paths with daily and weekly payouts.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-bold text-[#362F4F] mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Document Conversion</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Data Entry & Management</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Transcription Services</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Specialized Solutions</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Handwritten Digitization</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Quality Assurance</li>
          </ul>
        </div>

       <div>
  <h3 className="text-lg font-bold text-[#362F4F] mb-4">Useful Links</h3>
  <ul className="space-y-2 text-gray-600">
    <li>
      <Link href="/why-us" className="hover:text-blue-600 transition-colors">
        Why Us
      </Link>
    </li>
    <li>
      <Link href="/solution" className="hover:text-blue-600 transition-colors">
        Solutions
      </Link>
    </li>
    <li>
      <Link href="/careers" className="hover:text-blue-600 transition-colors">
        Job/Careers
      </Link>
    </li>
    <li>
      <Link href="/contact" className="hover:text-blue-600 transition-colors">
        Contact Us
      </Link>
    </li>
    <li>
      <Link href="/login" className="hover:text-blue-600 transition-colors">
        Login Now
      </Link>
    </li>
  </ul>
</div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-[#362F4F] mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#362F4F]" /> Contact@hireinglobal.com
            </li>
            <li className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-[#362F4F]" /> +91 9974710001
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-[#362F4F]" /> Hire in Global, Near Gitanjali Chokdi, Pij Road, Nadiad, Gujarat - 387002
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-6 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Hire in Global. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
