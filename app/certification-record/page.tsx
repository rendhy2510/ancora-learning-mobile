"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton, Card } from "@heroui/react";

// Import custom components
import CertificationStats from "@/components/certification/CertificationStats";
import CertificationList from "@/components/certification/CertificationList";

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

const CertificationSkeleton = () => (
  <div className="space-y-8">
    {/* Stats & Chart Skeleton */}
    <div className="flex flex-col lg:flex-row gap-6">
      <Card className="flex-1 border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-8 shadow-none flex flex-col items-center justify-center">
        <Skeleton
          className="w-48 h-48 rounded-full mb-8"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <div className="flex flex-wrap justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton
              key={i}
              className="h-4 w-28 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          ))}
        </div>
      </Card>
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        {[...Array(2)].map((_, i) => (
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
              className="h-9 w-32 mb-4 mt-2 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          </Card>
        ))}
      </div>
    </div>

    {/* List Skeleton */}
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface overflow-hidden shadow-none">
      <div className="p-4 border-b border-gray-50 dark:border-dark-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
        <Skeleton
          className="h-10 w-56 rounded-xl"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <Skeleton
          className="h-11 w-full md:max-w-[400px] rounded-xl"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
      </div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-6">
            <Skeleton
              className="aspect-[4/3] w-full rounded-2xl"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
            <div className="space-y-3">
              <Skeleton
                className="h-4 w-32 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-6 w-56 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
            </div>
            <Skeleton
              className="h-12 w-full rounded-xl"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          </div>
        ))}
      </div>
    </Card>
  </div>
);

const CertificationRecordPage = () => {
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
          pageTitle="Certification Record"
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
                    <CertificationSkeleton />
                  </motion.div>
                ) : (
                  <motion.div
                    key="content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                  >
                    {/* Stats & Chart Section */}
                    <motion.div variants={itemVariants}>
                      <CertificationStats />
                    </motion.div>

                    {/* List Section */}
                    <motion.div variants={itemVariants}>
                      <CertificationList />
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

export default CertificationRecordPage;
