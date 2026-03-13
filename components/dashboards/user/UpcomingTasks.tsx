"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";

interface UpcomingTask {
  id: number;
  category: string;
  title: string;
  timeRemaining: string;
}

const UpcomingTasks = () => {
  const tasks: UpcomingTask[] = [
    {
      id: 1,
      category: "UI Designer",
      title: "SEO Quiz (Digital Marketing 101)",
      timeRemaining: "3d 14h 22m",
    },
    {
      id: 2,
      category: "UX Researcher",
      title: "User Feedback Analysis (Product Development)",
      timeRemaining: "5d 4h 10m",
    },
    {
      id: 3,
      category: "Graphic Designer",
      title: "Brand Identity Workshop (Visual Communication)",
      timeRemaining: "6d 4h 12m",
    },
    {
      id: 4,
      category: "UI Designer",
      title: "SEO Quiz (Digital Marketing 101)",
      timeRemaining: "3d 12h 22m",
    },
  ];

  return (
    <div className="rounded-2xl p-2 border border-gray-150 dark:border-dark-border bg-white dark:bg-dark-surface shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-gray-150 dark:border-dark-border pb-4 -mx-2 px-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-white dark:bg-dark-navy border border-gray-150 dark:border-dark-border">
            <SvgIcon name="mdi_progress-check" />
          </div>
          <h2 className="text-[20px] font-medium text-[#1F2937] dark:text-gray-100">
            Upcoming Tasks
          </h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <div className="w-8 h-8 flex items-center justify-center border border-gray-150 dark:border-dark-border rounded-lg">
            <SvgIcon name="more-horizontal" className="w-3 h-3" />
          </div>
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-5 flex-1 flex flex-col">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="group flex items-center justify-between p-5 rounded-2xl border border-gray-150 dark:border-dark-border bg-white dark:bg-dark-navy/30 cursor-pointer"
          >
            <div className="flex-1 min-w-0 pr-4">
              <span className="inline-block px-3 py-1 bg-[#E8F0FF] dark:bg-brand/20 text-[#2848A5] dark:text-blue-400 text-[12px] font-medium rounded-lg mb-3 tracking-wide">
                {task.category}
              </span>
              <h3 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100 leading-tight">
                {task.title}
              </h3>
            </div>
            <div className="flex-shrink-0">
              <div className="px-5 py-2 border-2 bg-[#F9A307]/10 dark:bg-yellow-500/30 border-[#F9A307]/50 dark:border-yellow-500/30 rounded-2xl">
                <span className="text-[14px] font-medium font-geist text-[#DD7A02] dark:text-yellow-500">
                  {task.timeRemaining}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingTasks;
