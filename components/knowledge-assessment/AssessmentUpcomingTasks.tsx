"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import { Card, CardBody, Button, Chip } from "@heroui/react";

const AssessmentUpcomingTasks = () => {
  const tasks = [
    {
      id: 1,
      category: "UI Designer",
      title: "SEO Quiz (Digital Marketing 101)",
      deadline: "3d 12h 22m",
    },
    {
      id: 2,
      category: "UX Researcher",
      title: "User Feedback Analysis (Product Development)",
      deadline: "5d 8h 10m",
    },
    {
      id: 3,
      category: "Graphic Designer",
      title: "Brand Identity Workshop (Visual Communication)",
      deadline: "2d 4h 15m",
    },
    {
      id: 4,
      category: "UI Designer",
      title: "SEO Quiz (Digital Marketing 101)",
      deadline: "3d 12h 22m",
    },
  ];

  return (
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl shadow-none bg-white dark:bg-dark-surface overflow-hidden">
      <div className="p-2 flex items-center justify-between border-b border-gray-100 dark:border-dark-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border">
            <SvgIcon name="mdi_progress-check" />
          </div>
          <h3 className="text-[18px] font-medium text-[#111827] dark:text-white leading-tight">
            Upcoming Tasks
          </h3>
        </div>
        <Button
          isIconOnly
          variant="light"
          size="sm"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
        >
          <SvgIcon name="more-horizontal" className="w-3 h-3" />
        </Button>
      </div>
      <CardBody className="p-2 space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="group p-5 border border-gray-100 dark:border-dark-border/40 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-[#2848A5]/30 hover:bg-gray-50/50 dark:hover:bg-dark-navy/20 transition-all bg-white dark:bg-dark-navy/30"
          >
            <div className="space-y-3">
              <Chip
                size="sm"
                variant="flat"
                color="primary"
                classNames={{
                  base: "bg-[#E8F0FF] dark:bg-dark-navy border-none h-auto py-1.5 px-3 rounded-lg",
                  content:
                    "text-[#2848A5] dark:text-blue-400 font-medium text-[12px]",
                }}
              >
                {task.category}
              </Chip>
              <h4 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100 leading-tight">
                {task.title}
              </h4>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex-1 md:flex-none px-5 py-2.5 rounded-2xl bg-[#FFF9E6] dark:bg-amber-900/20 border border-[#F9A307] dark:border-none">
                <span className="text-[16px] font-medium text-[#DD7A02] dark:text-yellow-500 font-geist">
                  {task.deadline}
                </span>
              </div>
              <Button className="flex-1 md:flex-none bg-[#D1E1FF] dark:bg-blue-900/40 text-[#2848A5] dark:text-blue-300 font-medium h-11 px-6 rounded-xl border border-[#A1C1FF]/30 hover:bg-[#2848A5] hover:text-white transition-all">
                Submit Now
              </Button>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default AssessmentUpcomingTasks;
