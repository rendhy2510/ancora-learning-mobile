"use client";

import React, { useState } from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import { Input, Button, ScrollShadow } from "@heroui/react";

const KnowledgeFilters = () => {
  const categories = [
    "Interesting",
    "AI Engineer",
    "Data Scientist",
    "Front-End Web",
    "Back-End Development",
    "UI/UX Design",
    "Mobile App Development",
  ];

  const [activeTab, setActiveTab] = useState("Interesting");

  return (
    <div className="space-y-4 mb-3">
      {/* Search Input */}
      <Input
        placeholder="Search your answer..."
        variant="bordered"
        classNames={{
          inputWrapper:
            "h-14 px-6 bg-white dark:bg-dark-surface border-gray-100 dark:border-dark-border rounded-xl group-data-[focus=true]:border-[#2848A5] transition-all shadow-sm",
          input: "text-[16px] font-medium placeholder:text-gray-400 font-geist",
        }}
        startContent={
          <SvgIcon name="search" className="w-5 h-5 text-gray-400 mr-2" />
        }
      />

      {/* Category Pills */}
      <div className="bg-[#FAFAFA] dark:bg-dark-navy/20 p-2 rounded-xl border border-gray-50 dark:border-dark-border/50">
        <ScrollShadow
          orientation="horizontal"
          className="flex items-center gap-2 no-scrollbar"
          hideScrollBar
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-lg text-[13px] font-medium transition-all whitespace-nowrap ${
                activeTab === cat
                  ? "bg-[#2848A5] text-white shadow-md shadow-blue-900/20"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-white dark:hover:bg-dark-surface"
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollShadow>
      </div>

      {/* Share Idea Button */}
      <Button
        className="w-full bg-[#2848A5] text-white font-medium h-12 rounded-xl transition-all shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2"
        startContent={<span className="text-xl">+</span>}
      >
        Share Your Idea
      </Button>
    </div>
  );
};

export default KnowledgeFilters;
