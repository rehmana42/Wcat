import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react"; // optional icon library

const Faq = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 px-4">
        <h1 className="text-5xl font-extrabold text-[#362F4F] text-center">
        Frequently Asked Questions
        </h1>

        <Accordion type="single" collapsible defaultValue="item-1" className="flex flex-col gap-6 w-full">
          <AccordionItem
            value="item-1"
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <AccordionTrigger className="flex justify-between items-center w-full p-6 text-2xl font-bold text-[#000957] rounded-2xl cursor-pointer hover:bg-blue-50 transition-colors duration-200">
              What is your typical turnaround time?
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-gray-600 text-lg font-medium">
              Our typical turnaround time depends on project complexity. Simple tasks can take 24–48 hours, while larger projects are scheduled accordingly with clear deadlines.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <AccordionTrigger className="flex justify-between items-center w-full p-6 text-2xl font-bold text-[#000957] rounded-2xl cursor-pointer hover:bg-green-50 transition-colors duration-200">
              Do you use software or manual typing?
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-gray-600 text-lg font-medium">
              We believe in "Human-in-the-Loop." While we use tools for efficiency, all data is manually typed or verified by human experts to ensure context and handwriting are interpreted correctly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <AccordionTrigger className="flex justify-between items-center w-full p-6 text-2xl font-bold text-[#000957] rounded-2xl cursor-pointer hover:bg-pink-50 transition-colors duration-200">
              Can you handle confidential legal or medical data?
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-gray-600 text-lg font-medium">
              Yes. We specialize in sensitive data. We are happy to sign NDAs and utilize encrypted file transfer methods to ensure your client data remains 100% secure.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
