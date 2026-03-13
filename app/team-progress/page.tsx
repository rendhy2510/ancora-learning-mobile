"use client";

import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import TeamProgressStats from "@/components/team-progress/TeamProgressStats";
import TopLearnersTable from "@/components/team-progress/TopLearnersTable";
import TrainingAttendanceTable from "@/components/team-progress/TrainingAttendanceTable";
import TaskProgressTracker from "@/components/team-progress/TaskProgressTracker";
import UpcomingMandatoryTasks from "@/components/team-progress/UpcomingMandatoryTasks";
import MandatoryEventsTable from "@/components/team-progress/MandatoryEventsTable";
import { motion } from "framer-motion";

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

const TeamProgressPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors">
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Ralph Edwards"
          userEmail="edwards@gmail.com"
          userAvatar="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          pageTitle="Team Progress"
          pageSubtitle="Welcome Back, Ralph!"
        />

        <main className="pt-[100px] lg:pt-24 px-4 lg:px-8 pb-8 transition-all duration-300">
          <div className="bg-white dark:bg-dark-surface rounded-2xl p-4 lg:p-8 shadow-sm border border-gray-100 dark:border-dark-border min-h-[500px]">
            <div className="max-w-[1600px] mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.div variants={itemVariants}>
                  <TeamProgressStats />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <TopLearnersTable />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <TrainingAttendanceTable />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <TaskProgressTracker />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <UpcomingMandatoryTasks />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <MandatoryEventsTable />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeamProgressPage;
