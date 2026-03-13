"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton, Card } from "@heroui/react";

// Section Components
import PrePostTestOverview from "@/components/knowledge-assessment-leader/PrePostTestOverview";
import QuizOverview from "@/components/knowledge-assessment-leader/QuizOverview";
import QuizBank from "@/components/knowledge-assessment-leader/QuizBank";
import TrainingGaps from "@/components/knowledge-assessment-leader/TrainingGaps";

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
    {[...Array(4)].map((_, i) => (
      <Card
        key={i}
        className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface overflow-hidden shadow-none"
      >
        <div className="p-4 border-b border-gray-50 dark:border-dark-border/50 flex justify-between items-center">
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
          <Skeleton
            className="h-8 w-24 rounded-lg"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
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

export default function KnowledgeAssessmentLeaderPage() {
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
          userName="Ralph Edwards"
          userEmail="edward@gmail.com"
          userAvatar="https://i.pravatar.cc/150?u=ralph"
          pageTitle="Knowledge Assessment"
          pageSubtitle="Welcome Back, Ralph!"
        />

        <main className="pt-[100px] lg:pt-24 px-4 lg:px-8 pb-8 transition-all duration-300">
          <div className="bg-white dark:bg-dark-surface rounded-2xl p-4 lg:p-8 shadow-sm border border-gray-100 dark:border-dark-border min-h-[500px]">
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
                  <motion.div variants={itemVariants}>
                    <PrePostTestOverview />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <QuizOverview />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <QuizBank />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <TrainingGaps />
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
