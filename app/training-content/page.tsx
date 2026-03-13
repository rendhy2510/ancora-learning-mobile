"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ContentCard from "@/components/training-content/ContentCard";
import ContentFilters from "@/components/training-content/ContentFilters";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton, Card, Input, Button } from "@heroui/react";
import SvgIcon from "@/components/shared/SvgIcon";

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

const ContentSkeleton = () => (
  <div className="space-y-8">
    <div className="flex gap-4 items-center">
      <Skeleton className="h-12 flex-1 rounded-xl" />
      <Skeleton className="h-12 w-44 rounded-xl" />
    </div>
    <div className="flex gap-3 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-11 w-40 rounded-xl flex-shrink-0" />
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card
          key={i}
          className="border border-gray-100 dark:border-dark-border rounded-[24px] bg-white dark:bg-dark-surface p-0 overflow-hidden shadow-none"
        >
          <Skeleton className="aspect-[16/10] w-full" />
          <div className="p-5 space-y-4">
            <Skeleton className="h-6 w-3/4 rounded-lg" />
            <Skeleton className="h-4 w-full rounded-lg" />
            <div className="flex gap-4">
              <Skeleton className="h-4 w-20 rounded-lg" />
              <Skeleton className="h-4 w-20 rounded-lg" />
            </div>
            <div className="flex gap-3 pt-2">
              <Skeleton className="h-11 flex-1 rounded-xl" />
              <Skeleton className="h-11 flex-1 rounded-xl" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const courses = [
  {
    image: "/dummy/course_thumbnail_1_1772417110894.png",
    title: "Learn the Fundamentals of Data Analysis",
    subtitle:
      "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
    modules: 61,
    level: "Beginner",
  },
  {
    image: "/dummy/course_thumbnail_2_1772417144103.png",
    title: "Learn the Fundamentals of Data Analysis",
    subtitle:
      "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
    modules: 61,
    level: "Beginner",
  },
  {
    image: "/dummy/course_thumbnail_3_1772417157644.png",
    title: "Learn the Fundamentals of Data Analysis",
    subtitle:
      "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
    modules: 61,
    level: "Beginner",
  },
  {
    image: "/dummy/course_thumbnail_3_1772417157644.png",
    title: "Learn the Fundamentals of Data Analysis",
    subtitle:
      "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
    modules: 61,
    level: "Beginner",
  },
  {
    image: "/dummy/course_thumbnail_2_1772417144103.png",
    title: "Learn the Fundamentals of Data Analysis",
    subtitle:
      "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
    modules: 61,
    level: "Beginner",
  },
  {
    image: "/dummy/course_thumbnail_1_1772417110894.png",
    title: "Learn the Fundamentals of Data Analysis",
    subtitle:
      "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
    modules: 61,
    level: "Beginner",
  },
  {
    image: "/dummy/course_thumbnail_1_1772417110894.png",
    title: "Learn the Fundamentals of Data Analysis",
    subtitle:
      "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
    modules: 61,
    level: "Beginner",
  },
  {
    image: "/dummy/course_thumbnail_2_1772417144103.png",
    title: "Learn the Fundamentals of Data Analysis",
    subtitle:
      "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
    modules: 61,
    level: "Beginner",
  },
  {
    image: "/dummy/course_thumbnail_3_1772417157644.png",
    title: "Learn the Fundamentals of Data Analysis",
    subtitle:
      "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
    modules: 61,
    level: "Beginner",
  },
];

export default function TrainingContentPage() {
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
          pageTitle="Training Content"
          pageSubtitle="Welcome Back, Ronald!"
        />

        <main className="pt-[100px] lg:pt-24 px-4 lg:px-8 pb-8 transition-all duration-300">
          <div className="bg-white dark:bg-dark-surface rounded-2xl p-4 lg:p-8 shadow-sm border border-gray-100 dark:border-dark-border min-h-screen">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ContentSkeleton />
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  {/* Search and Action Row */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row gap-4"
                  >
                    <div className="flex-1">
                      <Input
                        placeholder="Search Course"
                        startContent={
                          <SvgIcon
                            name="search"
                            className="text-gray-400"
                            size={20}
                          />
                        }
                        classNames={{
                          inputWrapper:
                            "h-12 px-4 rounded-xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-navy shadow-none",
                          input: "text-[14px]",
                        }}
                      />
                    </div>
                    <Button className="h-12 px-6 rounded-xl bg-[#2848A5] text-white text-[14px] flex items-center gap-2 shadow-none hover:bg-[#1E3A8A]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      Add New Content
                    </Button>
                  </motion.div>

                  {/* Filters Section */}
                  <motion.div variants={itemVariants}>
                    <div className="border border-gray-100 dark:border-dark-border rounded-2xl p-4 bg-[#FAFAFA] dark:bg-dark-navy/20">
                      <ContentFilters />
                    </div>
                  </motion.div>

                  {/* Content Grid */}
                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {courses.map((course, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <ContentCard {...course} />
                      </motion.div>
                    ))}
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
