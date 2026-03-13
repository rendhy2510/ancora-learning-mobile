"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton, Card } from "@heroui/react";

// Import custom components
import AssessmentStats from "@/components/knowledge-assessment/AssessmentStats";
import AssessmentUpcomingTasks from "@/components/knowledge-assessment/AssessmentUpcomingTasks";
import AssessmentAssignments from "@/components/knowledge-assessment/AssessmentAssignments";
import KnowledgeGapAnalysis from "@/components/knowledge-assessment/KnowledgeGapAnalysis";

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

const AssessmentSkeleton = () => (
  <div className="space-y-8">
    {/* Stats Skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <Card
          key={i}
          className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none"
        >
          <div className="flex items-center gap-3 mb-4">
            <Skeleton
              className="w-9 h-9 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
            <Skeleton
              className="h-4 w-28 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          </div>
          <Skeleton
            className="h-9 w-24 mb-4 mt-2 rounded-lg"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
          <div className="border-t border-dashed border-gray-100 dark:border-dark-border/50 pt-4">
            <Skeleton
              className="h-4 w-32 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          </div>
        </Card>
      ))}
    </div>

    {/* Upcoming Tasks Skeleton */}
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface overflow-hidden shadow-none">
      <div className="p-4 border-b border-gray-50 dark:border-dark-border/50">
        <div className="flex items-center gap-3">
          <Skeleton
            className="w-10 h-10 rounded-xl"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
          <Skeleton
            className="h-7 w-48 rounded-lg"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
        </div>
      </div>
      <div className="p-6 space-y-4">
        {[...Array(2)].map((_, i) => (
          <Skeleton
            key={i}
            className="h-24 w-full rounded-2xl"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
        ))}
      </div>
    </Card>

    {/* Tables Skeleton */}
    {[...Array(2)].map((_, i) => (
      <Card
        key={i}
        className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface overflow-hidden shadow-none"
      >
        <div className="p-4 border-b border-gray-50 dark:border-dark-border/50">
          <div className="flex items-center gap-3">
            <Skeleton
              className="w-10 h-10 rounded-xl"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
            <Skeleton
              className="h-7 w-56 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          </div>
        </div>
        <div className="p-4 space-y-4">
          {[...Array(3)].map((_, j) => (
            <Skeleton
              key={j}
              className="h-14 w-full rounded-xl"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          ))}
        </div>
      </Card>
    ))}
  </div>
);

const KnowledgeAssessmentPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors font-geist">
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Maruyama"
          userEmail="maruyama2460@gmail.com"
          pageTitle="Knowledge Assessment"
        />

        <main className="pt-[100px] lg:pt-20 space-y-8 max-w-[1600px] mx-auto">
          {/* Layer 1: bg white no rounded */}
          <div className="bg-white dark:bg-dark-surface min-h-[calc(100vh-100px)] p-4 lg:p-8">
            {/* Layer 2: border gray rounded 20px p2 lg p9 dark bg dark navy/10 */}
            <div className="border border-gray-100 dark:border-dark-border rounded-[20px] p-2 lg:p-9 dark:bg-dark-navy/10">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <AssessmentSkeleton />
                  </motion.div>
                ) : (
                  <motion.div
                    key="content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                  >
                    {/* Stats Section */}
                    <motion.div variants={itemVariants}>
                      <AssessmentStats />
                    </motion.div>

                    {/* Upcoming Tasks Section */}
                    <motion.div variants={itemVariants}>
                      <AssessmentUpcomingTasks />
                    </motion.div>

                    {/* Assignments Section */}
                    <motion.div variants={itemVariants}>
                      <AssessmentAssignments />
                    </motion.div>

                    {/* Knowledge Gap Analysis Section */}
                    <motion.div variants={itemVariants}>
                      <KnowledgeGapAnalysis />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default KnowledgeAssessmentPage;
