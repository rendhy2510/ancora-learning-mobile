"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area,
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip as RechartsTooltip,
} from "recharts";

import SvgIcon from "@/components/shared/SvgIcon";

const mostTopicsData = [
  { name: "Digital Marketing", value: 38 },
  { name: "Technical Skills", value: 12 },
  { name: "Leadership Program", value: 58 },
  { name: "Technical Writing", value: 8 },
  { name: "Advanced Finance", value: 30 },
  { name: "Basic Dev. Developer", value: 92 },
  { name: "Pure UX Operation", value: 15 },
];

const learningTimeData = [
  { day: "25 Jan", time: 35 },
  { day: "26 Jan", time: 10 },
  { day: "27 Jan", time: 58 },
  { day: "28 Jan", time: 10 },
  { day: "29 Jan", time: 30 },
  { day: "30 Jan", time: 92 },
  { day: "31 Jan", time: 15 },
  { day: "01 Feb", time: 94 },
  { day: "02 Feb", time: 45 },
  { day: "03 Feb", time: 80 },
];

export const MostTopicsChart = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="h-[400px] w-full bg-gray-50 rounded-lg animate-pulse" />
    );

  const CustomBar = (props: any) => {
    const { fill, x, y, width, height } = props;
    if (height <= 0) return null;
    return (
      <g>
        {/* Main Bar with Gradient - Square */}
        <rect x={x} y={y} width={width} height={height} fill={fill} />
        {/* Darker Top Border Line - Square */}
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

  return (
    <div className="rounded-2xl p-3 border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface shadow-sm flex flex-col font-geist">
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-dark-border pb-4 -mx-3 px-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border">
            <SvgIcon name="ion_library" />
          </div>
          <h2 className="text-[20px] font-medium text-[#1F2937] dark:text-gray-100">
            Most Topics
          </h2>
        </div>
        <div>
          <button className="flex items-center gap-2 border border-gray-200 dark:border-dark-border rounded-lg px-3 py-1.5 text-[12px] font-medium bg-white dark:bg-dark-navy text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors">
            Last 7 days
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
            data={mostTopicsData}
            margin={{ top: 25, right: 10, left: -25, bottom: 20 }}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#barGradient)"
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
          2023
        </span>
      </div>
    </div>
  );
};

export const LearningTimeChart = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="h-[400px] w-full bg-gray-50 rounded-lg animate-pulse" />
    );

  const CustomDot = (props: any) => {
    const { cx, cy } = props;
    return (
      <g>
        {/* Large semi-transparent halo */}
        <circle cx={cx} cy={cy} r={12} fill="#10B981" fillOpacity={0.2} />
        {/* White ring/border */}
        <circle cx={cx} cy={cy} r={5} fill="white" />
        {/* Small dark green central dot */}
        <circle cx={cx} cy={cy} r={3} fill="#0F8C66" />
      </g>
    );
  };

  return (
    <div className="rounded-2xl p-3 border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface shadow-sm flex flex-col font-geist">
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-dark-border pb-4 -mx-3 px-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border">
            <SvgIcon name="fa7-solid_business-time" />
          </div>
          <h2 className="text-[20px] font-medium text-[#1F2937] dark:text-gray-100">
            Learning Time
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
          <AreaChart
            data={learningTimeData}
            margin={{ top: 20, right: 10, left: -25, bottom: 20 }}
          >
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#10B981" stopOpacity={0.2} />
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
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#9CA3AF" }}
              dy={15}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#9CA3AF" }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <RechartsTooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                fontSize: "12px",
                padding: "8px 12px",
              }}
              cursor={{
                stroke: "#10B981",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
            />
            <Area
              type="linear"
              dataKey="time"
              stroke="#10B981"
              strokeWidth={2}
              fill="url(#areaGradient)"
              dot={<CustomDot />}
              activeDot={{
                r: 6,
                fill: "#10B981",
                stroke: "white",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
