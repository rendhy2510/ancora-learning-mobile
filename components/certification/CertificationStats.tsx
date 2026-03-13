"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import { Card } from "@heroui/react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "increase" | "decrease";
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon,
}) => {
  return (
    <Card
      shadow="none"
      classNames={{
        base: "rounded-2xl p-5 hover:bg-gray-50 dark:hover:bg-dark-navy bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border transition-all h-full flex flex-col justify-between shadow-none",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-[#243C7C] flex items-center justify-center flex-shrink-0">
          <SvgIcon name={icon} size={20} className="brightness-0 invert" />
        </div>
        <h3 className="text-[18px] font-medium text-[#4F4F4F] dark:text-gray-400">
          {title}
        </h3>
      </div>

      <div className="flex items-baseline gap-1 mb-4 mt-2">
        <span className="text-[32px] font-medium font-geist tracking-tight text-[#111827] dark:text-white leading-none">
          {typeof value === "string" ? value.replace(" Hours", "") : value}
        </span>
        {typeof value === "string" && value.includes(" Hours") && (
          <span className="text-[18px] font-medium text-[#111827] dark:text-white leading-none relative -top-3">
            Hours
          </span>
        )}
      </div>

      <div
        className="w-full h-[1px] mb-4 mt-2 opacity-50 dark:opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #E5E7EB 50%, transparent 50%)`,
          backgroundSize: "12px 1px",
          backgroundRepeat: "repeat-x",
        }}
      />

      {change && (
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center text-blue-500">
              <svg
                className={`w-3 h-3 ${changeType === "increase" ? "" : "transform rotate-180"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
            <span className="text-[12px] font-bold font-geist text-[#2848A5]">
              {change}
            </span>
          </div>
          <span className="text-[12px] text-gray-400 font-medium">•</span>
          <span className="text-[12px] text-gray-400 font-medium whitespace-nowrap">
            vs last month
          </span>
        </div>
      )}
    </Card>
  );
};

const CertificationStats = () => {
  const categories = [
    { label: "UI/UX Design", color: "#31D5FF" },
    { label: "AI Engineer", color: "#36C275" },
    { label: "Data Science", color: "#F9A307" },
    { label: "Android", color: "#6B8AFE" },
    { label: "React", color: "#A8B4D0" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 mb-8">
      {/* Donut Chart Card - Fixed width lg:w-[450px] to not eat space */}
      <Card className="w-full lg:w-[480px] dark:bg-dark-surface p-8 shadow-none flex flex-col items-center justify-center shrink-0">
        <div className="relative w-80 h-80 mb-5">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Segments - Calculated with precise gaps to avoid overlap with rounded ends */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#31D5FF"
              strokeWidth="10"
              strokeDasharray="40 251.2"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#36C275"
              strokeWidth="10"
              strokeDasharray="40 251.2"
              strokeDashoffset="-50"
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#F9A307"
              strokeWidth="10"
              strokeDasharray="40 251.2"
              strokeDashoffset="-100"
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#6B8AFE"
              strokeWidth="10"
              strokeDasharray="40 251.2"
              strokeDashoffset="-150"
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#A8B4D0"
              strokeWidth="10"
              strokeDasharray="41 251.2"
              strokeDashoffset="-200"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[36px] font-medium text-[#111827] dark:text-white leading-none">
              12
            </span>
            <span className="text-[18px] text-[#4F4F4F] dark:text-gray-400 font-medium">
              Total Certificates
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {categories.map((cat, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <span className="text-[12px] text-[#4F4F4F] dark:text-gray-400 font-medium whitespace-nowrap">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Right Stats Column - Flex-1 to take more space */}
      <div className="flex-1 flex flex-col gap-4 min-w-0">
        <StatCard
          title="Most Recent Certification"
          value="Digital Marketing"
          change="+12"
          changeType="increase"
          icon="solar_diploma-verified-bold"
        />
        <StatCard
          title="Hour Spent"
          value="1200 Hours"
          change="-3"
          changeType="decrease"
          icon="assignments_due"
        />
      </div>
    </div>
  );
};

export default CertificationStats;
