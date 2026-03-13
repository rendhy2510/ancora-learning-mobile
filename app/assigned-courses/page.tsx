"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import SvgIcon from "@/components/shared/SvgIcon";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardBody,
  Button,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Skeleton,
} from "@heroui/react";

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

interface Course {
  id: number;
  title: string;
  description: string;
  modules: number;
  level: string;
  image: string;
}

const CourseSkeleton = () => (
  <Card className="border border-gray-100 dark:border-dark-border rounded-[24px] bg-white dark:bg-dark-surface p-0 overflow-hidden shadow-none">
    <div className="p-3 pb-0">
      <Skeleton
        className="aspect-[16/9] w-full rounded-[16px]"
        classNames={{ base: "dark:bg-dark-border/30" }}
      />
    </div>
    <CardBody className="p-5 space-y-4">
      <div className="space-y-2">
        <Skeleton
          className="h-6 w-3/4 rounded-lg"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <Skeleton
          className="h-4 w-full rounded-lg"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <Skeleton
          className="h-4 w-2/3 rounded-lg"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
      </div>
      <div className="flex gap-4 pt-2">
        <Skeleton
          className="h-4 w-20 rounded-lg"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <Skeleton
          className="h-4 w-20 rounded-lg"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
      </div>
    </CardBody>
  </Card>
);

import LearningPathView from "@/components/learning-path/LearningPathView";

const AssignedCourses = () => {
  const [activeCategory, setActiveCategory] = React.useState("AI Engineer");
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = React.useState<"grid" | "path">("grid");

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { name: "AI Engineer", count: 1000 },
    { name: "Data Scientist", count: 1000 },
    { name: "Front-End Web", count: 1000 },
    { name: "Back-End Development", count: 800 },
    { name: "UI/UX Design", count: 950 },
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: "Learn the Fundamentals of Data Analysis",
      description:
        "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
      modules: 61,
      level: "Beginner",
      image: "/ai_training_banner_1772524761530.png",
    },
    {
      id: 2,
      title: "Advanced Data Visualization Techniques",
      description:
        "Master the art of storytelling with data using modern visualization tools and...",
      modules: 45,
      level: "Intermediate",
      image: "/ai_training_banner_1772524761530.png",
    },
    {
      id: 3,
      title: "Introduction to Machine Learning",
      description:
        "Get started with supervised and unsupervised learning algorithms and their real...",
      modules: 72,
      level: "Beginner",
      image: "/ai_training_banner_1772524761530.png",
    },
    {
      id: 4,
      title: "Learn the Fundamentals of Data Analysis",
      description:
        "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
      modules: 61,
      level: "Beginner",
      image: "/ai_training_banner_1772524761530.png",
    },
    {
      id: 5,
      title: "Learn the Fundamentals of Data Analysis",
      description:
        "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
      modules: 61,
      level: "Beginner",
      image: "/ai_training_banner_1772524761530.png",
    },
    {
      id: 6,
      title: "Learn the Fundamentals of Data Analysis",
      description:
        "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
      modules: 61,
      level: "Beginner",
      image: "/ai_training_banner_1772524761530.png",
    },
    {
      id: 7,
      title: "Learn the Fundamentals of Data Analysis",
      description:
        "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
      modules: 61,
      level: "Beginner",
      image: "/ai_training_banner_1772524761530.png",
    },
    {
      id: 8,
      title: "Learn the Fundamentals of Data Analysis",
      description:
        "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
      modules: 61,
      level: "Beginner",
      image: "/ai_training_banner_1772524761530.png",
    },
    {
      id: 9,
      title: "Learn the Fundamentals of Data Analysis",
      description:
        "Explore Various Basic Concepts Of Data Analysis Along With Its Stages, Complem...",
      modules: 61,
      level: "Beginner",
      image: "/ai_training_banner_1772524761530.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors font-geist">
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Maruyama"
          userEmail="maruyama2460@gmail.com"
          pageTitle="Assigned Courses"
        />

        <main className="pt-[100px] lg:pt-20">
          {/* Layer 1: bg white no rounded */}
          <div className="bg-white dark:bg-dark-surface min-h-[calc(100vh-100px)] p-4 lg:p-8">
            {/* Layer 2: rounded container */}
            <div className="border border-gray-100 dark:border-dark-border rounded-[20px] p-2 lg:p-9 dark:bg-dark-navy/10">
              {/* Layer 3: rounded container + contents */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white dark:bg-dark-surface rounded-[20px] border border-gray-100 dark:border-dark-border p-6 lg:p-3 shadow-sm min-h-[600px]"
              >
                {/* Search and Level Filter Row */}
                <div className="flex flex-col md:flex-row gap-4 mb-5">
                  <div className="flex-1">
                    <Input
                      variant="bordered"
                      placeholder="Search Course"
                      startContent={
                        <SvgIcon name="search" className="text-gray-400" />
                      }
                      classNames={{
                        inputWrapper:
                          "h-[54px] rounded-[16px] border-gray-100 dark:border-dark-border bg-white dark:bg-dark-navy/20 shadow-none hover:border-gray-200 dark:hover:border-dark-border transition-colors px-4",
                        input: "text-[14px] font-medium",
                      }}
                    />
                  </div>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        className="bg-[#2848A5] text-white h-[54px] px-8 rounded-[16px] font-medium min-w-[140px]"
                        endContent={
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        }
                      >
                        Level
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Course Level Filter">
                      <DropdownItem key="all">All Levels</DropdownItem>
                      <DropdownItem key="beginner">Beginner</DropdownItem>
                      <DropdownItem key="intermediate">
                        Intermediate
                      </DropdownItem>
                      <DropdownItem key="advanced">Advanced</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>

                {/* Categories and Toggle Row - Layered Category Bar */}
                <div className="rounded-[12px] bg-[#F9FAFB]/60 dark:bg-dark-navy/20 p-1.5 mb-3 flex items-center justify-between overflow-hidden">
                  <div className="flex items-center gap-6 md:gap-10 overflow-x-auto no-scrollbar px-4 py-2 flex-nowrap">
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => setActiveCategory(cat.name)}
                        className={`whitespace-nowrap text-[14px] font-medium transition-all ${
                          activeCategory === cat.name
                            ? "text-[#1F2937] dark:text-gray-100"
                            : "text-gray-400 dark:text-gray-500 hover:text-gray-600"
                        }`}
                      >
                        {cat.name} ({cat.count})
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center">
                    {/* Vertical Divider */}
                    <div className="w-[1.5px] h-8 bg-gray-100 dark:bg-dark-border mx-2" />

                    <div className="flex gap-2 px-2 flex-nowrap">
                      <Button
                        size="sm"
                        onClick={() => setView("grid")}
                        className={`font-medium h-[40px] px-5 rounded-[10px] whitespace-nowrap transition-all duration-300 ${
                          view === "grid"
                            ? "bg-[#2848A5] text-white"
                            : "bg-[#E5F0FF] dark:bg-blue-900/30 text-[#2848A5] dark:text-blue-300"
                        }`}
                      >
                        All Course
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => setView("path")}
                        className={`font-medium h-[40px] px-5 rounded-[10px] whitespace-nowrap transition-all duration-300 ${
                          view === "path"
                            ? "bg-[#2848A5] text-white"
                            : "bg-[#E5F0FF] dark:bg-blue-900/30 text-[#2848A5] dark:text-blue-300"
                        }`}
                      >
                        Learning Path
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Horizontal Divider pembatas */}
                <div className="h-[1.5px] bg-gray-50 dark:bg-dark-border/50 w-auto -mx-6 lg:-mx-3 mb-4" />

                {/* Dynamic View Content */}
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
                    >
                      {Array.from({ length: 6 }).map((_, idx) => (
                        <CourseSkeleton key={`skeleton-${idx}`} />
                      ))}
                    </motion.div>
                  ) : view === "grid" ? (
                    <motion.div
                      key="grid"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {courses.map((course) => (
                          <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: course.id * 0.05 }}
                          >
                            <Card
                              shadow="none"
                              className="border border-gray-100 dark:border-dark-border rounded-[24px] bg-white dark:bg-dark-surface hover:shadow-xl hover:shadow-[#2848A5]/5 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300 group overflow-hidden h-full"
                            >
                              <div className="p-3 pb-0">
                                <div className="aspect-[16/9] w-full relative overflow-hidden rounded-[16px] bg-gray-100 dark:bg-dark-navy/20">
                                  <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  />
                                </div>
                              </div>
                              <CardBody className="p-5 font-geist flex flex-col">
                                <h3 className="text-[20px] md:text-[24px] font-bold text-[#1F2937] dark:text-gray-100 mb-2 line-clamp-2 min-h-[60px] leading-snug">
                                  {course.title}
                                </h3>
                                <p className="text-[14px] text-gray-400 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed flex-grow">
                                  {course.description}
                                </p>
                                <div className="flex gap-4 mt-auto">
                                  <div className="flex items-center gap-2 text-[#2848A5] dark:text-blue-400">
                                    <SvgIcon name="solar_book-bold" />
                                    <span className="text-[12px] font-bold">
                                      {course.modules} Modules
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2 text-[#2848A5] dark:text-blue-400">
                                    <SvgIcon name="ph_medal-military-fill" />
                                    <span className="text-[12px] font-bold">
                                      {course.level}
                                    </span>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </motion.div>
                        ))}
                      </div>

                      {/* Pagination Placeholder */}
                      <div className="mt-8 flex justify-center">
                        <div className="flex gap-2">
                          {[1, 2, 3, "...", 12].map((page, i) => (
                            <button
                              key={i}
                              className={`w-9 h-9 rounded-lg flex items-center justify-center text-[14px] font-bold transition-all ${
                                page === 1
                                  ? "bg-[#2848A5] text-white"
                                  : "text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-navy"
                              }`}
                            >
                              {page}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="path"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <LearningPathView courses={courses} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AssignedCourses;
