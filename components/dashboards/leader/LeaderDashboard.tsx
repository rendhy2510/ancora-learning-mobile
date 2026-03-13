"use client";

import React from "react";
import LeaderDashboardStats from "./LeaderDashboardStats";
import TeamProgressTable from "./TeamProgressTable";
import TeamCompletion from "./TeamCompletion";
import Schedule from "@/components/dashboards/user/Schedule";
import ExternalTrainingApproval from "@/components/shared/ExternalTrainingApproval";
import TrainingGapsTable from "./TrainingGapsTable";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton, Card } from "@heroui/react";

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

const DashboardSkeleton = () => (
  <div className="space-y-6">
    {/* Stats Skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <Card
          key={i}
          className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <Skeleton
                className="h-4 w-20 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-8 w-16 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
            </div>
            <Skeleton
              className="w-12 h-12 rounded-xl"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          </div>
        </Card>
      ))}
    </div>

    {/* Row 2 Skeleton: Team Progress (7) & Team Completion (5) */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Team Progress Skeleton */}
      <Card className="lg:col-span-7 border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none">
        <div className="flex justify-between mb-8">
          <Skeleton className="h-7 w-48 rounded-lg" />
          <Skeleton className="h-7 w-8 rounded-lg" />
        </div>
        <div className="space-y-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-6">
              <Skeleton className="h-4 w-1/3 rounded-lg" />
              <Skeleton className="h-8 w-24 rounded-full" />
              <Skeleton className="h-4 w-1/4 rounded-lg" />
            </div>
          ))}
        </div>
      </Card>

      {/* Team Completion Skeleton */}
      <Card className="lg:col-span-5 border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none">
        <div className="flex justify-between mb-8">
          <Skeleton className="h-7 w-48 rounded-lg" />
          <Skeleton className="h-7 w-8 rounded-lg" />
        </div>
        <div className="space-y-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <Skeleton className="w-14 h-14 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32 rounded-lg" />
                  <Skeleton className="h-3 w-20 rounded-lg" />
                </div>
              </div>
              <Skeleton className="h-6 w-12 rounded-lg" />
            </div>
          ))}
        </div>
      </Card>
    </div>

    {/* Schedule Skeleton */}
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-7 w-32 rounded-lg" />
        <Skeleton className="w-8 h-8 rounded-lg" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Skeleton className="h-[250px] rounded-2xl" />
        <div className="lg:col-span-2 space-y-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-20 w-full rounded-2xl" />
          ))}
        </div>
      </div>
    </Card>

    {/* Table Skeletons: Approval & Training Gaps */}
    {[...Array(2)].map((_, i) => (
      <Card
        key={i}
        className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface overflow-hidden shadow-none"
      >
        <div className="p-6 border-b border-gray-50 dark:border-dark-border/50">
          <Skeleton className="h-7 w-48 rounded-lg" />
        </div>
        <div className="p-6 space-y-4">
          {[...Array(4)].map((_, j) => (
            <Skeleton key={j} className="h-12 w-full rounded-xl" />
          ))}
        </div>
      </Card>
    ))}
  </div>
);

export default function LeaderDashboard() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
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
        >
          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mb-6">
            <LeaderDashboardStats />
          </motion.div>

          {/* Progress and Completion Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <TeamProgressTable />
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <TeamCompletion />
            </motion.div>
          </div>

          {/* Schedule - Full Width */}
          <motion.div variants={itemVariants} className="mb-6">
            <Schedule />
          </motion.div>

          {/* External Training Approval - Full Width */}
          <motion.div variants={itemVariants} className="mb-6">
            <ExternalTrainingApproval />
          </motion.div>

          {/* Training Gaps - Full Width */}
          <motion.div variants={itemVariants} className="mb-6">
            <TrainingGapsTable />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
