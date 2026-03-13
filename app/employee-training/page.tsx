"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import EmployeeTrainingStats from "@/components/employee-training/EmployeeTrainingStats";
import TrainingAttendanceTable from "@/components/team-progress/TrainingAttendanceTable";
import MandatoryEventsTable from "@/components/team-progress/MandatoryEventsTable";
import TrainerManagementTable from "@/components/employee-training/TrainerManagementTable";
import ExternalTrainingApproval from "@/components/shared/ExternalTrainingApproval";
import { motion, AnimatePresence } from "framer-motion";
import { Card, Skeleton } from "@heroui/react";

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
    {[...Array(4)].map((_, i) => (
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
);

export default function EmployeeTrainingPage() {
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
        />

        <main className="pt-[100px] lg:pt-24 px-4 lg:px-8 pb-8 transition-all duration-300">
          <div className="bg-white dark:bg-dark-surface rounded-2xl p-4 lg:p-8 shadow-sm border border-gray-100 dark:border-dark-border min-h-[500px]">
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
                  {/* Stats Section */}
                  <motion.div variants={itemVariants}>
                    <EmployeeTrainingStats />
                  </motion.div>

                  {/* Training Attendance */}
                  <motion.div variants={itemVariants}>
                    <TrainingAttendanceTable />
                  </motion.div>

                  {/* Mandatory Event */}
                  <motion.div variants={itemVariants}>
                    <MandatoryEventsTable />
                  </motion.div>

                  {/* Trainer Management */}
                  <motion.div variants={itemVariants}>
                    <TrainerManagementTable />
                  </motion.div>

                  {/* External Training Approval */}
                  <motion.div variants={itemVariants}>
                    <ExternalTrainingApproval />
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
