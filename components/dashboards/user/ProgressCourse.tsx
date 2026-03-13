"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Progress,
  Chip,
} from "@heroui/react";

interface Course {
  id: number;
  title: string;
  score: number;
  maxScore: number;
}

const ProgressCourse = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "User Interface Design",
      score: 50,
      maxScore: 100,
    },
    {
      id: 2,
      title: "Digital Marketing",
      score: 60,
      maxScore: 100,
    },
    {
      id: 3,
      title: "Product Design",
      score: 40,
      maxScore: 100,
    },
    {
      id: 4,
      title: "Developers",
      score: 20,
      maxScore: 100,
    },
  ];

  return (
    <Card
      shadow="sm"
      classNames={{
        base: "rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface h-full flex flex-col p-2.5 shadow-sm min-w-[280px]",
      }}
    >
      {/* Header */}
      <CardHeader className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-dark-border pb-2.5 -mx-2.5 px-2.5 pt-1 !w-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 flex items-center justify-center border border-gray-100 dark:border-dark-border rounded-lg bg-white dark:bg-dark-navy">
            <SvgIcon name="mdi_progress-check" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Progress Course
          </h2>
        </div>
        <Button
          isIconOnly
          variant="light"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-200 dark:border-dark-border"
        >
          <SvgIcon name="more-horizontal" className="w-3 h-3" />
        </Button>
      </CardHeader>

      {/* Progress List */}
      <CardBody className="space-y-6 flex-1 flex flex-col p-0 overflow-y-visible">
        {courses.map((course) => {
          const percentage = (course.score / course.maxScore) * 100;
          return (
            <div key={course.id} className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="text-[17px] font-medium text-[#1F2937] dark:text-gray-200">
                  {course.title}
                </h3>
                <div className="bg-[#F8F9FA] dark:bg-dark-navy border border-[#F1F3F5] dark:border-dark-border rounded-xl py-1.5 px-4">
                  <span className="text-[18px] text-gray-800 dark:text-gray-200 font-bold font-geist">
                    {course.score}/{course.maxScore}
                  </span>
                </div>
              </div>
              <Progress
                aria-label={course.title}
                value={percentage}
                classNames={{
                  track: "bg-[#F3F4F6] dark:bg-dark-navy h-2.5 rounded-full",
                  indicator: "bg-[#10B981] rounded-full",
                }}
              />
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
};

export default ProgressCourse;
