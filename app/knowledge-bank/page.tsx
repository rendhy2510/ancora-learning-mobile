"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton, Card } from "@heroui/react";

// Import custom components
import KnowledgeFilters from "@/components/knowledge-bank/KnowledgeFilters";
import KnowledgeCard from "@/components/knowledge-bank/KnowledgeCard";

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

const KnowledgeSkeleton = () => (
  <div className="bg-white dark:bg-dark-surface rounded-[20px] border border-gray-100 dark:border-dark-border p-6 lg:p-8 shadow-sm">
    <div className="space-y-8 max-w-[1200px] mx-auto">
      {/* Filter Skeleton */}
      <div className="space-y-6">
        <Skeleton
          className="h-14 w-full rounded-xl"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <Skeleton
          className="h-14 w-full rounded-xl"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <Skeleton
          className="h-12 w-full rounded-xl"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
      </div>

      {/* Divider Skeleton */}
      <div className="h-[1.5px] bg-gray-50 dark:bg-dark-border/50 w-auto -mx-6 lg:-mx-8 mb-8" />

      {/* Card Skeleton */}
      {[...Array(3)].map((_, i) => (
        <Card
          key={i}
          className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <Skeleton
              className="w-full md:w-[230px] aspect-[1.4/1] rounded-2xl"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
            <div className="flex-1 space-y-4">
              <Skeleton
                className="h-8 w-3/4 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-12 w-full rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <div className="flex gap-2">
                <Skeleton
                  className="h-8 w-20 rounded-lg"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
                <Skeleton
                  className="h-8 w-20 rounded-lg"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
              </div>
              <div className="flex gap-6 pt-4">
                <Skeleton
                  className="h-6 w-24 rounded-full"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
                <Skeleton
                  className="h-6 w-24 rounded-full"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const KnowledgeBankPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const knowledgeItems = [
    {
      id: 1,
      title: "How I Solved a Website Performance Issue",
      description:
        "I Was Facing Performance Issues On Our Website And After Analyzing The Problem, I Discovered That...",
      image: "/dummy/artikel.png",
      tags: ["Data Scientist", "AI Engineer", "Back-End Development"],
      likes: "5,458",
      comments: "1,092",
      saved: "4,680",
    },
    {
      id: 2,
      title: "The Journey of Redesigning Our Mobile App",
      description:
        "After Receiving User Feedback, We Embarked On A Redesign Of Our Mobile App To Enhance User Experience. We Started By...",
      image: "/dummy/artikel.png",
      tags: ["Data Scientist", "AI Engineer", "Back-End Development"],
      likes: "8,321",
      comments: "2,345",
      saved: "7,890",
    },
    {
      id: 3,
      title: "Implementing Accessibility Features for All Users",
      description:
        "To Ensure Our Digital Products Are Usable For Everyone, We Prioritized Implementing Accessibility Features. The Process Included...",
      image: "/dummy/artikel.png",
      tags: ["Data Scientist", "AI Engineer", "Back-End Development"],
      likes: "6,234",
      comments: "1,456",
      saved: "5,432",
    },
    {
      id: 4,
      title: "Enhancing User Experience with Personalization",
      description:
        "By Integrating Machine Learning Algorithms, We Tailored User Experiences Based On Individual Preferences. This Initiative Has...",
      image: "/dummy/artikel.png",
      tags: ["Data Scientist", "AI Engineer", "Back-End Development"],
      likes: "7,899",
      comments: "2,013",
      saved: "6,782",
    },
    {
      id: 5,
      title: "Streamlining Navigation for Improved Usability",
      description:
        "Our Recent Design Overhaul Focused On Simplifying Navigation, Making It Intuitive And User-Friendly. Key Changes Included...",
      image: "/dummy/artikel.png",
      tags: ["Data Scientist", "AI Engineer", "Back-End Development"],
      likes: "5,120",
      comments: "890",
      saved: "3,450",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors font-geist">
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Maruyama"
          userEmail="maruyama2460@gmail.com"
          pageTitle="Knowledge Bank"
        />

        <main className="pt-[100px] lg:pt-20 space-y-8 max-w-[1600px] mx-auto">
          {/* Layer 1: bg white no rounded */}
          <div className="bg-white dark:bg-dark-surface min-h-[calc(100vh-100px)] p-4 lg:p-8">
            {/* Layer 2: rounded container */}
            <div className="border border-gray-100 dark:border-dark-border rounded-[20px] p-2 lg:p-9 dark:bg-dark-navy/10">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <KnowledgeSkeleton />
                  </motion.div>
                ) : (
                  <motion.div
                    key="content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white dark:bg-dark-surface rounded-[20px] border border-gray-100 dark:border-dark-border p-6 lg:p-3 shadow-sm min-h-[600px]"
                  >
                    {/* Filters & Action */}
                    <motion.div variants={itemVariants}>
                      <KnowledgeFilters />
                    </motion.div>

                    {/* Horizontal Divider pembatas */}
                    <div className="h-[1.5px] bg-gray-50 dark:bg-dark-border/50 w-auto -mx-6 lg:-mx-3 mb-3" />

                    {/* List of Knowledge Cards */}
                    <div className="space-y-0">
                      {knowledgeItems.map((item) => (
                        <motion.div key={item.id} variants={itemVariants}>
                          <KnowledgeCard {...item} />
                        </motion.div>
                      ))}
                    </div>
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

export default KnowledgeBankPage;
