"use client";

import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

import DashboardStats from "@/components/dashboards/user/DashboardStats";
import UpcomingTasks from "@/components/dashboards/user/UpcomingTasks";
import ExternalTrainingProgress from "@/components/shared/ExternalTrainingProgress";
import ExternalTrainingProposal from "@/components/shared/ExternalTrainingProposal";
import UnderStudy from "@/components/dashboards/user/UnderStudy";
import AssignmentsQuizzes from "@/components/dashboards/user/AssignmentsQuizzes";
import { MostTopicsChart, LearningTimeChart } from "@/components/shared/ChartsRow";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton, Card, CardBody } from "@heroui/react";

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

const ProgressSkeleton = () => (
  <div className="space-y-6">
    {/* DashboardStats Skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <Card
          key={i}
          className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none"
        >
          <div className="flex items-center justify-between">
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

    {/* UpcomingTasks Skeleton */}
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none">
      <Skeleton
        className="h-7 w-48 mb-6 rounded-lg"
        classNames={{ base: "dark:bg-dark-border/30" }}
      />
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 border border-gray-50 dark:border-dark-border/30 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <Skeleton
                className="w-10 h-10 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <div className="space-y-2">
                <Skeleton
                  className="h-4 w-48 rounded-lg"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
                <Skeleton
                  className="h-3 w-32 rounded-lg"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
              </div>
            </div>
            <Skeleton
              className="h-8 w-24 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          </div>
        ))}
      </div>
    </Card>

    {/* ExternalTraining Tables Skeleton */}
    <div className="space-y-6">
      {[...Array(2)].map((_, i) => (
        <Card
          key={i}
          className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface overflow-hidden shadow-none"
        >
          <div className="p-6 border-b border-gray-100 dark:border-dark-border/50 flex justify-between">
            <Skeleton
              className="h-7 w-56 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
            <Skeleton
              className="h-10 w-32 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          </div>
          <div className="p-6 space-y-4">
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

    {/* UnderStudy Skeleton */}
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none">
      <div className="flex items-center gap-3 mb-8">
        <Skeleton
          className="w-8 h-8 rounded-lg"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <Skeleton
          className="h-7 w-40 rounded-lg"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="border border-gray-50 dark:border-dark-border/50 rounded-2xl p-4 space-y-4"
          >
            <Skeleton
              className="aspect-video w-full rounded-xl"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
            <Skeleton
              className="h-5 w-full rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
            <div className="flex justify-between items-center">
              <Skeleton
                className="h-4 w-24 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-8 w-20 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>

    {/* Assignments/Quizzes Skeleton */}
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none">
      <Skeleton
        className="h-7 w-64 mb-8 rounded-lg"
        classNames={{ base: "dark:bg-dark-border/30" }}
      />
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton
            key={i}
            className="h-20 w-full rounded-2xl"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
        ))}
      </div>
    </Card>

    {/* Charts Skeleton */}
    <div className="space-y-6">
      <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none">
        <Skeleton
          className="h-7 w-48 mb-6 rounded-lg"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <Skeleton
          className="h-64 w-full rounded-xl"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
      </Card>
      <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none">
        <Skeleton
          className="h-7 w-48 mb-6 rounded-lg"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <Skeleton
          className="h-64 w-full rounded-xl"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
      </Card>
    </div>
  </div>
);

export default function LearningProgress() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors">
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Maruyama"
          userEmail="maruyama2460@gmail.com"
          pageTitle="Learning Progress"
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
                  <ProgressSkeleton />
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
                    <DashboardStats />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <UpcomingTasks />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <ExternalTrainingProposal />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <ExternalTrainingProgress />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <UnderStudy />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <AssignmentsQuizzes />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <MostTopicsChart />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <LearningTimeChart />
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
