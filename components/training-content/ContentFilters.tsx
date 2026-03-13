"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";

const categories = [
  { label: "AI Engineer", count: 1000 },
  { label: "Data Scientist", count: 1000 },
  { label: "Front-End Web", count: 1000 },
  { label: "Back-End Development", count: 800 },
  { label: "UI/UX Design", count: 950 },
  { label: "Mobile App Development", count: 780 },
];

const ContentFilters = () => {
  const [activeTab, setActiveTab] = useState("AI Engineer");

  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1">
      {categories.map((cat) => (
        <Button
          key={cat.label}
          onClick={() => setActiveTab(cat.label)}
          variant="light"
          className={`h-11 px-5 rounded-xl border transition-all flex-shrink-0 font-medium text-[13px] ${
            activeTab === cat.label
              ? "bg-[#2848A5] text-white border-transparent"
              : "bg-white dark:bg-dark-surface text-gray-700 dark:text-gray-300 border-gray-100 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-navy"
          }`}
        >
          {cat.label} ({cat.count})
        </Button>
      ))}
    </div>
  );
};

export default ContentFilters;
