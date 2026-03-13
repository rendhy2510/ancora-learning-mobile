"use client";

import React, { useState, useEffect } from "react";
import { Card, Skeleton } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";

// Import Modular HC Components
import HcDashboardStats from "./HcDashboardStats";
import HcMostAttendedCourse from "./HcMostAttendedCourse";
import TopLearnersTable from "@/components/team-progress/TopLearnersTable";
import HcTrainingCostTable from "./HcTrainingCostTable";

// --- Animation Variants ---

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

// --- Dashboard Skeleton ---

const DashboardSkeleton = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <Card
          key={i}
          className="p-6 border-none shadow-sm bg-white dark:bg-dark-surface"
        >
          <div className="flex items-center gap-4 mb-4">
            <Skeleton className="w-10 h-10 rounded-lg" />
            <Skeleton className="h-4 w-24 rounded-lg" />
          </div>
          <Skeleton className="h-10 w-20 rounded-lg mb-4" />
          <Skeleton className="h-1 w-full rounded-full mb-4" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-12 rounded-full" />
            <Skeleton className="h-4 w-20 rounded-lg" />
          </div>
        </Card>
      ))}
    </div>
    <Card className="p-6 border-none shadow-sm h-[450px] bg-white dark:bg-dark-surface">
      <Skeleton className="h-7 w-48 rounded-lg mb-8" />
      <Skeleton className="h-[320px] w-full rounded-xl" />
    </Card>
    <div className="grid grid-cols-1 gap-6">
      {[...Array(2)].map((_, i) => (
        <Card
          key={i}
          className="p-0 border-none shadow-sm h-[320px] bg-white dark:bg-dark-surface"
        >
          <div className="p-6 border-b border-gray-50 dark:border-dark-border/50">
            <Skeleton className="h-7 w-48 rounded-lg" />
          </div>
          <div className="p-6 space-y-4">
            <Skeleton className="h-12 w-full rounded-lg" />
            <Skeleton className="h-12 w-full rounded-lg" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>
        </Card>
      ))}
    </div>
  </div>
);

// --- Main HC Dashboard ---

export default function HcDashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <DashboardSkeleton />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 pb-12"
        >
          {/* Stats Section */}
          <motion.div variants={itemVariants}>
            <HcDashboardStats />
          </motion.div>

          {/* Chart Section */}
          <motion.div variants={itemVariants}>
            <HcMostAttendedCourse />
          </motion.div>

          {/* Top Learners Table */}
          <motion.div variants={itemVariants}>
            <TopLearnersTable />
          </motion.div>

          {/* Training Cost Table */}
          <motion.div variants={itemVariants}>
            <HcTrainingCostTable />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
