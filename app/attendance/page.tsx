"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import AttendanceStats from "@/components/attendance/AttendanceStats";
import AttendanceTable from "@/components/attendance/AttendanceTable";
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

const AttendanceSkeleton = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
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
    {[...Array(3)].map((_, i) => (
      <Card
        key={i}
        className="p-0 border-none shadow-sm h-[400px] bg-white dark:bg-dark-surface"
      >
        <div className="p-6 border-b border-gray-50 dark:border-dark-border/50">
          <Skeleton className="h-7 w-48 rounded-lg" />
        </div>
        <div className="p-6 space-y-4">
          <Skeleton className="h-12 w-full rounded-lg" />
          <Skeleton className="h-12 w-full rounded-lg" />
          <Skeleton className="h-12 w-full rounded-lg" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </Card>
    ))}
  </div>
);

export default function AttendancePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const trainingData = [
    {
      id: 1,
      no: "01",
      courseName: "Leadership Essentials - Mandatory Training",
      sessionDate: "January 25, 2024",
      totalParticipants: 10,
      present: 8,
      absent: 2,
    },
    {
      id: 2,
      no: "02",
      courseName: "Communication Skills - Optional Training",
      sessionDate: "February 15, 2024",
      totalParticipants: 20,
      present: 12,
      absent: 5,
    },
    {
      id: 3,
      no: "03",
      courseName: "Conflict Resolution - Mandatory Training",
      sessionDate: "January 25, 2024",
      totalParticipants: 10,
      present: 8,
      absent: 2,
    },
    {
      id: 4,
      no: "04",
      courseName: "Leadership Essentials - Mandatory Training",
      sessionDate: "March 10, 2024",
      totalParticipants: 30,
      present: 15,
      absent: 10,
    },
  ];

  const mandatoryData = [
    {
      id: 1,
      no: "01",
      courseName: "Advanced Data Analytics",
      sessionDate: "January 25, 2024",
      totalParticipants: 10,
      present: 8,
      absent: 2,
    },
    {
      id: 2,
      no: "02",
      courseName: "Leadership Skills Workshop",
      sessionDate: "February 15, 2024",
      totalParticipants: 20,
      present: 12,
      absent: 5,
    },
    {
      id: 3,
      no: "03",
      courseName: "Cybersecurity Essentials",
      sessionDate: "January 25, 2024",
      totalParticipants: 10,
      present: 8,
      absent: 2,
    },
    {
      id: 4,
      no: "04",
      courseName: "Project Management Fundamentals",
      sessionDate: "March 10, 2024",
      totalParticipants: 30,
      present: 15,
      absent: 10,
    },
  ];

  const externalData = [...mandatoryData]; // Based on design screenshot

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors">
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Ronald Richards"
          userEmail="ronald@gmail.com"
          userAvatar="https://i.pravatar.cc/150?u=ronald"
          pageTitle="Attendance"
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
                  <AttendanceSkeleton />
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
                    <AttendanceStats />
                  </motion.div>

                  {/* Training Attendance */}
                  <motion.div variants={itemVariants}>
                    <AttendanceTable
                      title="Training Attendance"
                      data={trainingData}
                    />
                  </motion.div>

                  {/* Mandatory Event Attendance */}
                  <motion.div variants={itemVariants}>
                    <AttendanceTable
                      title="Mandatory Event Attendance"
                      data={mandatoryData}
                    />
                  </motion.div>

                  {/* External Training Attendance */}
                  <motion.div variants={itemVariants}>
                    <AttendanceTable
                      title="External Training Attendance"
                      data={externalData}
                    />
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
