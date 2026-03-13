"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import SvgIcon from "@/components/shared/SvgIcon";

const chartData = [
  { name: "Digital Marketing", value: 36 },
  { name: "Technical Skills", value: 11 },
  { name: "Leadership Programs", value: 57 },
  { name: "Technical Writing", value: 10 },
  { name: "Advanced Finance", value: 30 },
  { name: "Back End Developer", value: 91 },
  { name: "Fork Lift Operator", value: 15 },
];

const CustomBar = (props: any) => {
  const { fill, x, y, width, height } = props;
  if (height <= 0) return null;
  return (
    <g>
      {/* Main Bar with Gradient - Square as per reference */}
      <rect x={x} y={y} width={width} height={height} fill={fill} />
      {/* Darker Top Border Line - Square as per reference */}
      <line
        x1={x}
        y1={y}
        x2={x + width}
        y2={y}
        stroke="#059669"
        strokeWidth="1.5"
        strokeLinecap="butt"
      />
    </g>
  );
};

const HcMostAttendedCourse = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="h-[400px] w-full bg-gray-50 dark:bg-dark-navy rounded-2xl animate-pulse border border-gray-100 dark:border-dark-border" />
    );

  return (
    <div className="rounded-2xl p-3 border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface shadow-sm flex flex-col font-geist">
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-dark-border pb-4 -mx-3 px-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border">
            <SvgIcon name="mage_chart-fill" />
          </div>
          <h2 className="text-[20px] font-medium text-[#1F2937] dark:text-gray-100">
            Most Attended Course
          </h2>
        </div>
        <div>
          <button className="flex items-center gap-2 border border-gray-200 dark:border-dark-border rounded-lg px-3 py-1.5 text-[12px] font-medium bg-white dark:bg-dark-navy text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors">
            Last 30 days
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full h-[350px] min-h-[350px] relative">
        <ResponsiveContainer width="100%" height="100%" minHeight={350}>
          <BarChart
            data={chartData}
            margin={{ top: 25, right: 10, left: -25, bottom: 20 }}
          >
            <defs>
              <linearGradient id="hcBarGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1BAE7E" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#1BAE7E" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              horizontal={true}
              stroke="#E5E7EB"
              strokeOpacity={0.6}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: "#9CA3AF", fontWeight: 500 }}
              dy={15}
              interval={0}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#9CA3AF" }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <Bar
              dataKey="value"
              fill="url(#hcBarGradient)"
              barSize={112.43}
              shape={<CustomBar />}
              label={{
                position: "top",
                fill: "#9CA3AF",
                fontSize: 10,
                offset: 12,
                formatter: (value: any) => value,
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center items-center gap-2 mt-2">
        <div className="w-2 h-2 bg-[#0C7055]"></div>
        <span className="text-[11px] text-gray-400 font-medium tracking-wide">
          2026
        </span>
      </div>
    </div>
  );
};

export default HcMostAttendedCourse;
