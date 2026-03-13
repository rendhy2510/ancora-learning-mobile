"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import { Card, CardHeader, CardBody, Button, Chip } from "@heroui/react";

interface Activity {
  id: number;
  title: string;
  description: string;
  progress: string;
  percentage: number;
  color: string;
}

const CircularProgress = ({
  value,
  color,
}: {
  value: number;
  color: string;
}) => {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-[64px] h-[64px] flex items-center justify-center rounded-full bg-white dark:bg-dark-surface border border-gray-50 dark:border-dark-border shadow-sm">
      <svg
        className="transform -rotate-90 w-[50px] h-[50px]"
        viewBox="0 0 80 80"
      >
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke={color}
          strokeWidth="5"
          fill="transparent"
          className="opacity-10"
        />
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke={color}
          strokeWidth="5"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center leading-none">
        <div className="flex items-start">
          <span className="text-[15px] font-bold font-geist" style={{ color }}>
            {value}
          </span>
          <span
            className="text-[8px] font-bold font-geist mt-0.5"
            style={{ color }}
          >
            %
          </span>
        </div>
      </div>
    </div>
  );
};

const RecentActivity = () => {
  const activities: Activity[] = [
    {
      id: 1,
      title: "Responsive Design UI 4",
      description: "Implementing Responsive Design Principles",
      progress: "1/5",
      percentage: 20,
      color: "#FF5B5B",
    },
    {
      id: 2,
      title: "User Experience UI 3",
      description: "Creating Optimal User Experiences",
      progress: "2/5",
      percentage: 40,
      color: "#F8A534",
    },
    {
      id: 3,
      title: "Advanced Design UI 2",
      description: "Exploring Advanced Design Techniques",
      progress: "3/5",
      percentage: 50,
      color: "#FFC107",
    },
    {
      id: 4,
      title: "Basic Design UI 1",
      description: "Understanding Basic Design Concepts",
      progress: "5/5",
      percentage: 100,
      color: "#4CAF50",
    },
  ];

  return (
    <Card
      shadow="sm"
      classNames={{
        base: "rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface h-full flex flex-col p-2.5 shadow-sm",
      }}
    >
      {/* Header */}
      <CardHeader className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-dark-border pb-2.5 -mx-2.5 px-2.5 !w-auto pt-1">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border">
            <SvgIcon name="recent_activity" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Recent Activity
          </h2>
        </div>
        <Button
          isIconOnly
          variant="light"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
        >
          <SvgIcon name="more-horizontal" className="w-3 h-3" />
        </Button>
      </CardHeader>

      {/* Progress List */}
      <CardBody className="space-y-6 flex-1 flex flex-col p-2 overflow-y-visible">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4 items-center">
            {/* Circular Progress */}
            <div className="flex-shrink-0">
              <CircularProgress
                value={activity.percentage}
                color={activity.color}
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[14px] font-semibold text-[#1F2937] dark:text-gray-100 leading-tight mb-0.5 truncate">
                {activity.title}
              </h3>
              <p className="text-[11px] text-[#6B7280] dark:text-gray-400 leading-snug truncate">
                {activity.description}
              </p>
            </div>

            {/* Progress Badge */}
            <div className="flex-shrink-0">
              <Chip
                variant="bordered"
                classNames={{
                  base: "bg-gray-50 dark:bg-dark-navy border border-gray-100 dark:border-dark-border rounded-xl h-auto py-1.5 px-3 min-w-[54px]",
                  content:
                    "text-[14px] font-semibold font-geist text-gray-700 dark:text-gray-300",
                }}
              >
                {activity.progress}
              </Chip>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default RecentActivity;
