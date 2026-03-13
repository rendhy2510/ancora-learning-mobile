"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import SvgIcon from "@/components/shared/SvgIcon";
import { motion } from "framer-motion";

interface Course {
  id: number;
  title: string;
  description: string;
  modules: number;
  level: string;
  image: string;
}

interface LearningPathViewProps {
  courses: Course[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 15,
    },
  },
};

const LearningPathView: React.FC<LearningPathViewProps> = ({ courses }) => {
  // Ensure we have data to display
  const displayCourses = courses && courses.length > 0 ? courses : [];
  if (displayCourses.length === 0) return null;

  const steps = [
    {
      id: "01",
      title: "Understanding the Basics of AI",
      description:
        "Learn the fundamental concepts of AI, its applications in industry, and its impact on daily life as initial foundation.",
      course: displayCourses[0],
    },
    {
      id: "02",
      title: "Mastering Python",
      description:
        "Learn Python as the primary tool for AI: syntax, data structures, and popular libraries for data programming and machine learning.",
      course: displayCourses[1] || displayCourses[0],
    },
    {
      id: "03",
      title: "Getting Started with Machine Learning",
      description:
        "Understand supervised and unsupervised learning and practice building simple models with real datasets.",
      course: displayCourses[2] || displayCourses[0],
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative py-8 md:py-12 px-0 md:px-10 overflow-hidden min-h-[500px]"
    >
      <div className="relative z-10 space-y-16 md:space-y-32">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            variants={itemVariants}
            className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0"
          >
            {/* Dashed Line Segments - Using Gradient for Perfect Uniformity */}
            <div
              className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-[2px] h-full pointer-events-none"
              style={{ zIndex: 0 }}
            >
              {/* Line segment from above */}
              <div
                className="absolute top-[-32px] md:top-[-64px] h-[calc(32px+26px)] md:h-[calc(64px+50%)] w-full"
                style={{
                  backgroundImage: `linear-gradient(to bottom, #2848A5 50%, transparent 50%)`,
                  backgroundSize: "2px 8px",
                  opacity: 0.3,
                  ...(index === 0
                    ? {
                        maskImage:
                          "linear-gradient(to bottom, transparent, black 40%)",
                        WebkitMaskImage:
                          "linear-gradient(to bottom, transparent, black 40%)",
                      }
                    : {}),
                }}
              />

              {/* Line segment reaching to next step (only if not last) */}
              {index < steps.length - 1 && (
                <div
                  className="absolute top-[26px] md:top-1/2 h-full w-full"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, #2848A5 50%, transparent 50%)`,
                    backgroundSize: "2px 8px",
                    opacity: 0.3,
                  }}
                />
              )}
            </div>

            {/* Left Side: Text Content (Mobile: Below Step Indicator) */}
            <div className="md:w-1/2 md:pr-24 text-left md:text-left order-2 md:order-1 pl-[72px] md:pl-0">
              <h3 className="text-[18px] md:text-[24px] font-medium text-[#111827] dark:text-white mb-2 md:mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-[13px] md:text-[16px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-[480px] md:ml-auto">
                {step.description}
              </p>
            </div>

            {/* Middle: Progress Indicator (Number) */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-20 flex items-center justify-center order-1 md:order-2">
              <div className="relative w-[56px] h-[52px] flex items-center justify-center">
                {/* Top Triangle Pointer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#2848A5]" />

                {/* Main Box */}
                <div className="w-[56px] h-[44px] border border-[#2848A5] rounded-[14px] bg-[#DEEAFB] flex items-center justify-center text-[#2848A5] font-semibold text-[20px] shadow-sm transform transition-transform hover:scale-105 z-10">
                  {step.id}
                </div>

                {/* Bottom Triangle Pointer - Only if not last step */}
                {index < steps.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#2848A5]" />
                )}
              </div>
            </div>

            {/* Right Side: Visual Card */}
            <Link
              href={`/learning-path/${step.course?.id}`}
              className="md:w-1/2 md:pl-24 order-3 md:order-3 w-full pl-[72px] md:pl-24 pr-4 md:pr-0"
            >
              <Card
                shadow="none"
                className="border border-gray-100 dark:border-dark-border rounded-[18px] bg-white dark:bg-dark-surface hover:shadow-2xl hover:shadow-[#2848A5]/10 transition-all duration-500 group overflow-hidden max-w-[440px] w-full cursor-pointer"
              >
                <div className="p-2 pb-0">
                  <div className="aspect-[16/9] w-full relative overflow-hidden rounded-[10px] bg-gray-50 dark:bg-dark-navy/20">
                    {step.course?.image && (
                      <Image
                        src={step.course.image}
                        alt={step.course.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    )}
                  </div>
                </div>
                <CardBody className="p-3 md:p-4">
                  <h4 className="text-[16px] md:text-[22px] font-bold text-[#111827] dark:text-gray-100 mb-2 line-clamp-2 leading-tight">
                    {step.course?.title}
                  </h4>
                  <p className="text-[12px] md:text-[14px] text-gray-400 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {step.course?.description}
                  </p>
                  <div className="flex gap-4 md:gap-6">
                    <div className="flex items-center gap-1.5 md:gap-2.5 text-[#2848A5] dark:text-blue-400">
                      <SvgIcon
                        name="solar_book-bold"
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                      <span className="text-[11px] md:text-[13px] font-bold">
                        {step.course?.modules} Modules
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2.5 text-[#2848A5] dark:text-blue-400">
                      <SvgIcon
                        name="ph_medal-military-fill"
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                      <span className="text-[11px] md:text-[13px] font-bold">
                        {step.course?.level}
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LearningPathView;
