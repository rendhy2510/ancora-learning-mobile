"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton, Card, Button } from "@heroui/react";

// Section Components
import HCAnalyticsStats from "@/components/report-analytics/HCAnalyticsStats";
import TopLearnersTable from "@/components/team-progress/TopLearnersTable";
import MostAttendedCourseChart from "@/components/report-analytics/MostAttendedCourseChart";
import ExpenseReportChart from "@/components/report-analytics/ExpenseReportChart";
import TrainingCostTable from "@/components/report-analytics/TrainingCostTable";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const PageSkeleton = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <Card
          key={i}
          className="p-6 border-none shadow-none bg-white dark:bg-dark-surface"
        >
          <Skeleton className="h-4 w-32 rounded-lg mb-4" />
          <Skeleton className="h-10 w-24 rounded-lg mb-4" />
          <Skeleton className="h-4 w-full rounded-lg" />
        </Card>
      ))}
    </div>
    <Card className="h-[400px] border-none shadow-none bg-white dark:bg-dark-surface p-6">
      <Skeleton className="h-full w-full rounded-xl" />
    </Card>
    <Card className="h-[400px] border-none shadow-none bg-white dark:bg-dark-surface p-6">
      <Skeleton className="h-full w-full rounded-xl" />
    </Card>
  </div>
);

export default function ReportAnalyticsHCPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors">
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Ronald Richards"
          userEmail="ronald@gmail.com"
          userAvatar="https://i.pravatar.cc/150?u=ronald"
          pageTitle="Report & Analytic HC"
          pageSubtitle="Welcome Back, Ronald!"
        />

        <main className="pt-[100px] lg:pt-24 px-4 lg:px-8 pb-8 transition-all duration-300">
          <div className="bg-white dark:bg-dark-surface rounded-2xl p-4 lg:p-8 shadow-sm border border-gray-100 dark:border-dark-border min-h-[500px]">
            <div className="flex justify-end items-center gap-3 mb-6">
              <button className="flex items-center gap-2 border border-divider rounded-lg px-4 py-2 text-[12px] font-medium bg-white dark:bg-dark-navy text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 transition-colors">
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
              <Button className="bg-[#2848A5] text-white rounded-lg h-10 px-6">
                Export Report
              </Button>
            </div>

            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <PageSkeleton />
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <HCAnalyticsStats />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <TopLearnersTable />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <MostAttendedCourseChart />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <ExpenseReportChart />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <TrainingCostTable />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
