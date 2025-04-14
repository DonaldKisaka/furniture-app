"use client";

import { faqData } from "@/constants";
import { useState, useMemo, useCallback } from "react";
import React from "react";



const Faq = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  }, [openIndex]);

  const renderFAQ = useMemo(() => {
    return faqData.map((item, index) => (
      <div key={index} className="bg-gray-100 p-4 rounded-xl shadow-md cursor-pointer" onClick={() => toggleFAQ(index)}>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{item.question}</h3>
          <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
        </div>
        {openIndex === index && (
          <p className="text-[#a3704f] mt-2">{item.answer}</p>
        )}
      </div>
    ));
  }, [openIndex]);


   

  return (
    
      <section id="faq" className="py-12">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {renderFAQ}
            </div>
        </div>
      </section>
    
  )
}

export default Faq;
