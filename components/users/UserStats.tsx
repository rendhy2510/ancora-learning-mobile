"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import { Card } from "@heroui/react";

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: "increase" | "decrease" | "neutral";
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
        base: "rounded-2xl p-5 hover:bg-gray-50 dark:hover:bg-dark-navy bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border transition-all shadow-sm",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-[#243C7C] flex items-center justify-center flex-shrink-0">
          <SvgIcon name={icon} size={20} className="brightness-0 invert" />
        </div>
        <h3 className="text-[14px] font-medium text-[#4F4F4F] dark:text-gray-400">
          {title}
        </h3>
      </div>

      <p className="text-[32px] font-medium font-geist tracking-tight text-[#1F2937] dark:text-white leading-none mb-4 mt-2">
        {value}
      </p>

      {/* Custom Dashed Separator */}
      <div
        className="w-full h-[1px] mb-4 mt-2 opacity-50 dark:opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #E5E7EB 50%, transparent 50%)`,
          backgroundSize: "12px 1px",
          backgroundRepeat: "repeat-x",
        }}
      />

      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-1">
          <div
            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
              changeType === "increase"
                ? "border-[#2848A5] bg-[#DEEAFB] text-blue-500"
                : "border-[#2848A5] bg-[#DEEAFB] text-blue-500"
            }`}
          >
            <svg
              className={`w-3 h-3 ${
                changeType === "increase" ? "" : "transform rotate-180"
              }`}
              fill="#2848A5"
              stroke="#2848A5"
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
        <span className="text-[12px] text-gray-400 font-medium">
          vs last month
        </span>
      </div>
    </Card>
  );
};

const UserStats = () => {
  const stats: StatCardProps[] = [
    {
      title: "Total Users",
      value: "1,284",
      change: "+10",
      changeType: "increase",
      icon: "solar_user-bold",
    },
    {
      title: "Active Users",
      value: "1,142",
      change: "+8",
      changeType: "increase",
      icon: "tabler_list-check",
    },
    {
      title: "New Users",
      value: "+48",
      change: "+50",
      changeType: "increase",
      icon: "fluent_people-team-16-filled",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default UserStats;
