"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import SvgIcon from "@/components/shared/SvgIcon";
import {
  Button,
  Divider,
  Accordion,
  AccordionItem,
  Skeleton,
  Chip,
} from "@heroui/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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

const CurriculumSkeleton = () => (
  <div className="w-full lg:w-[400px] xl:w-[480px] flex-shrink-0 space-y-4">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className="bg-white dark:bg-dark-surface rounded-[18px] border border-gray-100 dark:border-dark-border p-5"
      >
        <div className="flex gap-4 items-center">
          <Skeleton className="w-12 h-12 rounded-[12px] flex-shrink-0" />
          <div className="space-y-3 flex-1">
            <Skeleton className="h-5 w-3/4 rounded-lg" />
            <Skeleton className="h-8 w-full rounded-[10px]" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

const QuizSkeleton = () => (
  <div className="flex-1 space-y-5">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="bg-white dark:bg-dark-surface rounded-[20px] border border-gray-100 dark:border-dark-border p-10 space-y-6"
      >
        <Skeleton className="h-7 w-3/4 rounded-lg" />
        <div className="space-y-4">
          {[1, 2, 3, 4].map((j) => (
            <div key={j} className="flex items-center gap-3">
              <Skeleton className="w-7 h-7 rounded-full flex-shrink-0" />
              <Skeleton className="h-12 flex-1 rounded-[10px]" />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const CurriculumSidebar = ({
  activeStage,
  onStageSelect,
}: {
  activeStage: string;
  onStageSelect: (id: string, type: string) => void;
}) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["4"]));

  const modules = [
    {
      id: "1",
      title: "Persiapan Belajar",
      icon: "solar_book-bold",
      stats: { materi: 12, assessment: 5, quiz: 12 },
    },
    {
      id: "2",
      title: "Data untuk AI",
      icon: "solar_book-bold",
      stats: { materi: 6, assessment: 3, quiz: 7 },
    },
    {
      id: "3",
      title: "Pengantar Machine Learning",
      icon: "solar_book-bold",
      stats: { materi: 9, assessment: 1, quiz: 4 },
    },
    {
      id: "4",
      title: "Deep Learning untuk semua orang",
      icon: "solar_book-bold",
      stats: { materi: 7, assessment: 3, quiz: 5 },
      stages: [
        {
          id: "s1",
          type: "doc",
          title: "Penerapan AI dalam Dunia Nyata",
          stageNum: 1,
          isDone: true,
        },
        {
          id: "s2",
          type: "doc",
          title: "Penerapan AI dalam Dunia Nyata",
          stageNum: 2,
          isDone: true,
        },
        {
          id: "s3",
          type: "doc",
          title: "Analisis Data Besar untuk Keputusan Bi...",
          stageNum: 3,
          isDone: true,
        },
        {
          id: "s4",
          type: "doc",
          title: "Integrasi Otomatisasi dalam Proses Op...",
          stageNum: 4,
          isDone: true,
        },
        {
          id: "s5",
          type: "quiz",
          title: "AI and Machine Learning Fundamentals - Quiz",
          stageNum: 5,
        },
        {
          id: "s6",
          type: "exam",
          title: "AI Engineer - Mandatory Assignments Over...",
          stageNum: 6,
        },
      ],
    },
    {
      id: "5",
      title: "Penutup",
      icon: "solar_book-bold",
      stats: { materi: 8, assessment: 4, quiz: 10 },
    },
  ];

  return (
    <div className="w-full lg:w-[400px] xl:w-[480px] flex-shrink-0">
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => setSelectedKeys(keys as any)}
        variant="light"
        className="p-0 flex flex-col gap-4"
        showDivider={false}
        itemClasses={{
          base: "bg-white dark:bg-dark-surface rounded-[18px] border border-gray-100 dark:border-dark-border shadow-sm data-[open=true]:border-[#2848A5] data-[open=true]:shadow-lg data-[open=true]:shadow-[#2848A5]/5 transition-all duration-300 overflow-hidden",
          title: "p-0",
          trigger:
            "p-5 flex items-center justify-between hover:bg-transparent py-5",
          content: "px-5 pb-5 space-y-3 pt-2",
          indicator: "text-[#00A389]",
        }}
      >
        {modules.map((module) => (
          <AccordionItem
            key={module.id}
            aria-label={module.title}
            indicator={({ isOpen }) => (
              <SvgIcon
                name="ri_arrow-up-s-line"
                className={`text-[#00A389] transition-transform duration-300 ${isOpen ? "" : "rotate-180"}`}
                size={24}
              />
            )}
            title={
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-[12px] bg-[#F0F6FE] dark:bg-dark-navy flex items-center justify-center flex-shrink-0 text-[#2848A5]">
                  <SvgIcon name={module.icon} size={24} useMask />
                </div>
                <div className="space-y-3 text-left">
                  <h3 className="font-bold text-[#111827] dark:text-white text-[17px] leading-tight">
                    {module.title}
                  </h3>
                  <div className="inline-flex items-center bg-[#F8F9FB] dark:bg-dark-navy/40 rounded-[10px] p-2 px-3 border border-gray-100 dark:border-dark-border gap-3">
                    <div className="flex items-center gap-1.5">
                      <SvgIcon
                        name="article_docx"
                        size={16}
                        className="text-[#475569]"
                        useMask
                      />
                      <span className="text-[11px] text-black dark:text-gray-400">
                        {module.stats.materi} Materi
                      </span>
                    </div>
                    <div className="w-px h-3 bg-gray-200 dark:bg-dark-border" />
                    <div className="flex items-center gap-1.5">
                      <SvgIcon
                        name="healthicons_i-exam-multiple-choice"
                        size={16}
                        className="text-[#475569]"
                        useMask
                      />
                      <span className="text-[11px] text-black dark:text-gray-400">
                        {module.stats.assessment} Assessment
                      </span>
                    </div>
                    <div className="w-px h-3 bg-gray-200 dark:bg-dark-border" />
                    <div className="flex items-center gap-1.5">
                      <SvgIcon
                        name="knowledge_assessment"
                        size={16}
                        className="text-[#475569]"
                        useMask
                      />
                      <span className="text-[11px] text-black dark:text-gray-400">
                        {module.stats.quiz} Quiz
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            {module.stages && (
              <div className="space-y-3">
                <Divider className="mb-4 bg-gray-50 opacity-50" />
                {module.stages.map((stage) => (
                  <div
                    key={stage.id}
                    onClick={() => onStageSelect(stage.id, stage.type)}
                    className={`flex items-center gap-4 p-4 rounded-[12px] transition-all cursor-pointer border ${activeStage === stage.id ? "border-[#2848A5] bg-[#F0F6FE]/30 shadow-sm" : stage.isDone ? "bg-[#F0F6FE] border-transparent" : "bg-white dark:bg-dark-navy/20 border-gray-100 dark:border-dark-border shadow-sm hover:border-[#2848A5]/30"}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 ${activeStage === stage.id ? "bg-[#2848A5]" : "bg-[#F0F6FE] dark:bg-dark-navy"}`}
                    >
                      <SvgIcon
                        name={
                          stage.type === "video"
                            ? "mynaui_video-solid"
                            : stage.type === "quiz"
                              ? "knowledge_assessment"
                              : stage.type === "exam"
                                ? "healthicons_i-exam-multiple-choice"
                                : "article_docx"
                        }
                        size={20}
                        className={
                          activeStage === stage.id
                            ? "text-white"
                            : "text-[#2848A5]"
                        }
                        useMask
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-[11px] font-bold mb-0.5 ${activeStage === stage.id ? "text-[#2848A5]" : "text-[#64748B] dark:text-gray-500"}`}
                      >
                        Stage {stage.stageNum}
                      </p>
                      <h4
                        className={`text-[15px] font-bold truncate leading-tight ${activeStage === stage.id ? "text-[#2848A5]" : "text-[#1E293B] dark:text-white"}`}
                      >
                        {stage.title}
                      </h4>
                    </div>
                    {stage.isDone && (
                      <div className="w-6 h-6 rounded-full bg-[#00A389] flex items-center justify-center flex-shrink-0">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2.5 6L5 8.5L9.5 3.5" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const AssignmentContent = () => {
  return (
    <div className="flex-1 bg-white dark:bg-dark-surface rounded-[24px] border border-gray-100 dark:border-dark-border shadow-sm p-8 lg:p-14 space-y-10">
      <div className="space-y-4">
        <h2 className="text-[28px] font-medium text-[#111827] dark:text-white leading-tight">
          AI Model Implementation - Linear Regression
        </h2>
        <p className="text-[15px] text-[#475569] dark:text-gray-400 leading-relaxed">
          In this assignment, you will implement a linear regression model from
          scratch using Python. You will work with a given dataset to predict
          outcomes and assess the performance of the model.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-[18px] font-medium text-[#111827] dark:text-white">
          Instructions
        </h3>
        <ul className="list-disc list-inside space-y-2 text-[14px] text-[#475569] dark:text-gray-400">
          <li>
            Implement a linear regression model using Python and libraries such
            as NumPy and Pandas.
          </li>
          <li>
            Visualize the dataset and prediction results using Matplotlib.
          </li>
          <li>
            Evaluate the model's performance using metrics like Mean Squared
            Error (MSE).
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-[18px] font-medium text-[#111827] dark:text-white">
          Duration
        </h3>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-surface border border-[#FFB800] rounded-full text-[#FFB800] text-[14px] font-medium">
          3d 12h 22m
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-[14px] font-medium text-[#111827] dark:text-white block">
          Submit File <span className="text-red-500">*</span>
        </label>
        <div className="border-2 border-dashed border-gray-100 dark:border-dark-border rounded-[16px] p-12 flex flex-col items-center justify-center gap-2 bg-[#FBFBFB] dark:bg-dark-navy/10 cursor-pointer hover:border-[#2848A5]/30 transition-colors">
          <p className="text-[14px] text-[#475569] dark:text-gray-400">
            Drag & Drop your files or{" "}
            <span className="text-[#2848A5] font-medium">Browse</span>
          </p>
        </div>
        <p className="text-[12px] text-[#94A3B8]">
          Please upload your completed project file (Python script, Jupyter
          notebook, etc.) here.
        </p>
        <Button className="w-full bg-[#D1E0FF] text-[#000000] h-12 rounded-[12px] text-[14px] shadow-none hover:bg-[#c0d4ff] mt-2">
          Submit Now
        </Button>
      </div>

      <div className="space-y-6 pt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[12px] font-bold text-[#111827] dark:text-white border-b border-gray-100 dark:border-dark-border">
                <th className="pb-4 px-2">File Name</th>
                <th className="pb-4 px-2">Score</th>
                <th className="pb-4 px-2">Date</th>
                <th className="pb-4 px-2 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-dark-border">
              {[
                {
                  name: "Assignments Project_001",
                  score: "85/100",
                  date: "August 20, 2024",
                  status: "Completed",
                },
                {
                  name: "Assignments Project_002",
                  score: "-",
                  date: "September 15, 2024",
                  status: "Failed",
                },
                {
                  name: "Assignments Project_003",
                  score: "-",
                  date: "October 10, 2024",
                  status: "Failed",
                },
                {
                  name: "Assignments Project_001",
                  score: "-",
                  date: "August 20, 2024",
                  status: "Failed",
                },
              ].map((item, idx) => (
                <tr
                  key={idx}
                  className="text-[14px] text-[#475569] dark:text-gray-400"
                >
                  <td className="py-5 px-2 font-medium text-[#1E293B] dark:text-white">
                    {item.name}
                  </td>
                  <td className="py-5 px-2">{item.score}</td>
                  <td className="py-5 px-2">{item.date}</td>
                  <td className="py-5 px-2 text-center">
                    <Chip
                      size="sm"
                      className={`font-medium rounded-full px-3 py-4 ${item.status === "Completed" ? "bg-[#F4FBEA]/50 text-[#558E22] border border-[#AEDE78]" : "bg-[#FFF1F1] text-[#E62D2D] border border-[#FFA1A1]"}`}
                      variant="flat"
                    >
                      {item.status}
                    </Chip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end pt-8">
          <Button className="bg-[#2848A5] text-white px-8 h-14 rounded-[16px] text-[16px] hover:bg-[#1e367a] shadow-xl shadow-[#2848A5]/10 flex items-center gap-3">
            Complete & Take Certificate
            <SvgIcon name="chevron-right" className="text-white" size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

const QuizContent = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const questions = [
    {
      id: 1,
      question: "What is Artificial Intelligence (AI)?",
      options: [
        "A branch of science focused on creating machines that can perform human-like tasks.",
        "A type of machine that can understand human emotions.",
        "A process of training animals to perform tasks.",
        "A system that can replace human intelligence in all activities.",
      ],
    },
    {
      id: 2,
      question:
        "What is the difference between supervised and unsupervised learning in Machine Learning?",
      options: [
        "Supervised learning involves training with labeled data, while unsupervised learning involves training with unlabeled data.",
        "Supervised learning uses a neural network, and unsupervised learning does not.",
        "Supervised learning only works for small datasets, while unsupervised learning works for large datasets.",
        "Unsupervised learning is always more accurate than supervised learning.",
      ],
    },
    {
      id: 3,
      question:
        "What is the main function of a neural network in Machine Learning?",
      options: [
        "To simulate the behavior of the human brain and perform pattern recognition tasks.",
        "To store large amounts of data in a database.",
        "To analyze and categorize large datasets without needing human intervention.",
        "To predict future events based on historical data.",
      ],
    },
    {
      id: 4,
      question:
        "Which algorithm is typically used in supervised learning for classification problems?",
      options: [
        "K-means clustering",
        "Linear Regression",
        "Decision Tree",
        "Principal Component Analysis (PCA)",
      ],
    },
  ];

  return (
    <div className="flex-1 bg-white dark:bg-dark-surface rounded-[24px] border border-gray-100 dark:border-dark-border shadow-sm p-8 lg:p-14 space-y-8">
      {questions.map((q) => (
        <div
          key={q.id}
          className="space-y-5 p-6 rounded-[12px] border border-gray-100 dark:border-dark-border"
        >
          <h3 className="text-[20px] font-medium text-[#111827] dark:text-white leading-tight tracking-tight">
            {q.question}
          </h3>
          <div className="space-y-3">
            {q.options.map((option, idx) => (
              <div
                key={idx}
                onClick={() => setAnswers({ ...answers, [q.id]: idx })}
                className="flex items-center gap-3 cursor-pointer group "
              >
                {/* Circle Indicator */}
                <div
                  className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    answers[q.id] === idx
                      ? "border-[#2848A5] bg-[#F0F6FE]"
                      : "border-[#E2E8F0] bg-[#F8FAFC] dark:border-dark-border dark:bg-dark-navy/20 group-hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all ${
                      answers[q.id] === idx ? "bg-[#2848A5]" : "bg-transparent"
                    }`}
                  />
                </div>

                {/* Option Text Box */}
                <div
                  className={`flex-1 py-3 px-6 rounded-[10px] border transition-all ${
                    answers[q.id] === idx
                      ? "border-[#2848A5] bg-[#F0F6FE]/20"
                      : "border-[#F1F5F9] dark:border-dark-border bg-white dark:bg-dark-surface hover:border-gray-200 shadow-sm"
                  }`}
                >
                  <span
                    className={`text-[15px] leading-relaxed transition-colors ${
                      answers[q.id] === idx
                        ? "text-[#111827] dark:text-white"
                        : "text-[#475569] dark:text-gray-400 group-hover:text-[#1E293B]"
                    }`}
                  >
                    {option}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-end pt-4">
        <Button className="bg-[#2848A5] text-white px-10 h-14 rounded-[16px] text-[16px] hover:bg-[#1e367a] shadow-xl shadow-[#2848A5]/20 flex items-center gap-3">
          Complete & Continue
          <SvgIcon name="chevron-right" className="text-white" size={18} />
        </Button>
      </div>
    </div>
  );
};

const QuizLearnPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeStage, setActiveStage] = useState({ id: "s6", type: "exam" });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleStageSelect = (id: string, type: string) => {
    setActiveStage({ id, type });
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] dark:bg-dark-bg transition-colors font-geist">
      <div className="transition-all duration-300">
        <Header
          userName="Maruyama"
          userEmail="maruyama.2467@gmail.com"
          pageTitle="Learning Path"
          noSidebar={true}
          breadcrumbs={
            <>
              <Link
                href="/learning-path"
                className="hover:text-[#2848A5] transition-colors"
              >
                Learning Path
              </Link>
              <SvgIcon
                name="chevron-right"
                size={12}
                className="text-gray-300"
              />
              <Link
                href="/learning-path"
                className="hover:text-[#2848A5] transition-colors"
              >
                All Course
              </Link>
              <SvgIcon
                name="chevron-right"
                size={12}
                className="text-gray-300"
              />
              <span className="text-gray-600 dark:text-gray-300 line-clamp-1">
                Learn the fundamentals of data analysis
              </span>
            </>
          }
        />

        <main className="pt-[100px] lg:pt-[110px] px-4 lg:px-8 pb-32 max-w-[1800px] mx-auto">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                variants={containerVariants}
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
              >
                <CurriculumSkeleton />
                <QuizSkeleton />
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start w-full"
              >
                <CurriculumSidebar
                  activeStage={activeStage.id}
                  onStageSelect={handleStageSelect}
                />
                <div className="flex-1">
                  {activeStage.type === "quiz" ? (
                    <motion.div variants={itemVariants}>
                      <QuizContent />
                    </motion.div>
                  ) : activeStage.type === "exam" ? (
                    <motion.div variants={itemVariants}>
                      <AssignmentContent />
                    </motion.div>
                  ) : (
                    <motion.div
                      variants={itemVariants}
                      className="flex-1 bg-white dark:bg-dark-surface rounded-[24px] border border-gray-100 dark:border-dark-border shadow-sm p-14 flex flex-col items-center justify-center text-center space-y-4"
                    >
                      <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center">
                        <SvgIcon
                          name="article_docx"
                          size={40}
                          className="text-gray-300"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Content Coming Soon
                      </h3>
                      <p className="text-gray-400 max-w-xs">
                        This stage content is currently being prepared. Please
                        check back later.
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default QuizLearnPage;
