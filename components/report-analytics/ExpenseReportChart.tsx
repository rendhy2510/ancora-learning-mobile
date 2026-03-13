"use client";

import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from "recharts";
import SvgIcon from "@/components/shared/SvgIcon";

const expenseData = [
  { day: "25 Jan", value: 180 },
  { day: "26 Jan", value: 50 },
  { day: "27 Jan", value: 290 },
  { day: "28 Jan", value: 45 },
  { day: "29 Jan", value: 155 },
  { day: "30 Jan", value: 450 },
  { day: "31 Jan", value: 75 },
  { day: "01 Feb", value: 460 },
  { day: "02 Feb", value: 230 },
  { day: "03 Feb", value: 400 },
];

const ExpenseReportChart = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="h-[400px] w-full bg-gray-50 dark:bg-dark-surface/50 rounded-2xl animate-pulse" />
    );

  const CustomDot = (props: any) => {
    const { cx, cy } = props;
    return (
      <g>
        <circle cx={cx} cy={cy} r={10} fill="#10B981" fillOpacity={0.15} />
        <circle cx={cx} cy={cy} r={4.5} fill="white" />
        <circle cx={cx} cy={cy} r={2.5} fill="#0F8C66" />
      </g>
    );
  };

  return (
    <div className="rounded-2xl p-4 border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface shadow-sm flex flex-col mb-6">
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-dark-border pb-4 -mx-4 px-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-[#2848A5]">
            <SvgIcon name="pepicons-pop_dollar" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Expense Report
          </h2>
        </div>
        <div>
          <button className="flex items-center gap-2 border border-divider rounded-lg px-3 py-1.5 text-[12px] font-medium bg-white dark:bg-dark-navy text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 transition-colors">
            Last 30 days
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
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
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={expenseData}
            margin={{ top: 20, right: 10, left: -25, bottom: 20 }}
          >
            <defs>
              <linearGradient
                id="hcExpenseGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#10B981" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#10B981" stopOpacity={0.05} />
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
              domain={[0, 500]}
              ticks={[0, 100, 200, 300, 400, 500]}
              tickFormatter={(val) => `$${val}`}
            />
            <RechartsTooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                fontSize: "12px",
              }}
              cursor={{
                stroke: "#10B981",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
            />
            <Area
              type="linear"
              dataKey="value"
              stroke="#10B981"
              strokeWidth={2}
              fill="url(#hcExpenseGradient)"
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

export default ExpenseReportChart;
