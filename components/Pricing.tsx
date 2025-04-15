'use client'

import { pricingData } from "@/constants";
import { useState } from "react";
import MyButton from "./ui/button";

const tabs = Object.keys(pricingData);

type PricingKey = keyof typeof pricingData;

const Pricing = () => {
    const [activeTab, setActiveTab] = useState<PricingKey>(tabs[1] as PricingKey);

    const current = pricingData[activeTab];

  return (
    
      <section id="pricing" className="px-4 py-12 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
            Pricing List
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center max-md:gap-4 space-x-2 md:space-x-4 mb-6 md:mb-8">
            {
                tabs.map(tab => (
                    <button 
                      key={tab} 
                      onClick={() => setActiveTab(tab as PricingKey)}
                      className={`px-4 py-2 text-sm md:text-base rounded-full border transition-all duration-300 ${activeTab === tab ?
                        "bg-[#a3704f] text-white"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                      >
                        {tab.toUpperCase()}
                    </button>
                ))}
        </div>

        {/* Pricing Details */}
        <div className="border rounded-lg p-4 md:p-6 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 mb-4 space-y-4 md:space-y-0">
               <p className="text-3xl md:text-4xl font-bold text-[#a3704f]">{current.price}</p>
               <MyButton size="sm">
                BOOK SCHEDULE
               </MyButton>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 text-[#7c5c41]">
                {current.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 text-sm md:text-base">
                        <span className="mt-1">•</span>
                        <p className="text-sm md:text-md font-semibold">{feature}</p>
                    </div>
                ))}
            </div>

        </div>

      </section>
    
  )
}

export default Pricing;
