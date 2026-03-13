"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import {
  Card,
  CardHeader,
  CardBody,
  CircularProgress,
  Button,
} from "@heroui/react";

const CustomCircularProgress = ({
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

const TeamCompletion = () => {
  const getColor = (percentage: number) => {
    if (percentage >= 100) return "#4CAF50";
    if (percentage >= 75) return "#4CAF50";
    if (percentage >= 50) return "#FFC107";
    if (percentage >= 30) return "#F8A534";
    return "#FF5B5B";
  };

  const roles = [
    {
      id: 1,
      name: "Front End Developer",
      percentage: 50,
      ratio: "15/25",
    },
    {
      id: 2,
      name: "Back End Developer",
      percentage: 75,
      ratio: "10/20",
    },
    {
      id: 3,
      name: "UI/UX Designer",
      percentage: 30,
      ratio: "0/15",
    },
    {
      id: 4,
      name: "Digital Marketer",
      percentage: 50,
      ratio: "15/25",
    },
  ];

  return (
    <Card
      shadow="none"
      classNames={{
        base: "rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface h-full shadow-sm",
      }}
    >
      <CardHeader className="flex items-center justify-between border-b border-gray-100 dark:border-dark-border !w-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-blue-600">
            <SvgIcon name="lets-icons_progress" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Team Completion
          </h2>
        </div>
        <Button
          isIconOnly
          variant="light"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
        >
          <SvgIcon name="more-horizontal" className="w-4 h-4" />
        </Button>
      </CardHeader>

      <CardBody className="px-6 py-4 space-y-6">
        {roles.map((role) => (
          <div
            key={role.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <CustomCircularProgress
                value={role.percentage}
                color={getColor(role.percentage)}
              />
              <div className="space-y-0.5">
                <h4 className="text-[16px] font-medium text-[#22272F] dark:text-gray-100 leading-tight">
                  {role.name}
                </h4>
                <p className="text-[12px] text-gray-500 dark:text-gray-400">
                  course completion
                </p>
              </div>
            </div>
            <div className="text-[18px] font-medium border border-[#D5DBE2] bg-[#F6F7F9] dark:bg-dark-border rounded-2xl px-2 py-1 text-[#1F2937] dark:text-white font-geist pr-2">
              {role.ratio}
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default TeamCompletion;
