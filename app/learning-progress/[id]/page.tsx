"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import SvgIcon from "@/components/shared/SvgIcon";
import FileUpload from "@/components/shared/FileUpload";
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Skeleton,
} from "@heroui/react";
import Image from "next/image";
import { useParams } from "next/navigation";
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

const DetailSkeleton = () => (
  <div className="space-y-8 md:space-y-12">
    {/* Hero section skeleton */}
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center text-center md:text-left">
      <Skeleton
        className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-xl flex-shrink-0"
        classNames={{ base: "dark:bg-dark-border/30" }}
      />
      <div className="flex-1 space-y-3 w-full">
        <Skeleton
          className="h-10 w-3/4 md:w-1/2 rounded-lg mx-auto md:mx-0"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <Skeleton
          className="h-6 w-1/2 md:w-1/3 rounded-lg mx-auto md:mx-0"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <div className="pt-1 flex justify-center md:justify-start">
          <Skeleton
            className="h-8 w-24 rounded-full"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
        </div>
      </div>
    </div>

    {/* Information Section skeleton */}
    <div className="space-y-6">
      <Skeleton
        className="h-8 w-40 rounded-lg"
        classNames={{ base: "dark:bg-dark-border/30" }}
      />
      <div className="w-full space-y-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex justify-between py-2 border-b border-gray-50 dark:border-dark-border/10"
          >
            <Skeleton
              className="h-5 w-32 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
            <Skeleton
              className="h-5 w-48 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          </div>
        ))}
      </div>
    </div>

    {/* Attendance Tracking Section skeleton */}
    <div className="space-y-4">
      <div className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface overflow-hidden">
        <div className="flex justify-between p-4 px-6 border-b border-gray-100 dark:border-dark-border">
          <div className="flex items-center gap-3">
            <Skeleton
              className="w-8 h-8 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
            <Skeleton
              className="h-7 w-48 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          </div>
          <Skeleton
            className="h-10 w-32 rounded-lg"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
        </div>
        <div className="p-6 space-y-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton
              key={i}
              className="h-12 w-full rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          ))}
        </div>
      </div>
    </div>

    {/* Form Section skeleton */}
    <div className="space-y-6">
      <Skeleton
        className="h-8 w-64 rounded-lg"
        classNames={{ base: "dark:bg-dark-border/30" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton
            key={i}
            className="h-[60px] w-full rounded-xl"
            classNames={{ base: "dark:bg-dark-border/30" }}
          />
        ))}
      </div>
      <div className="space-y-3 pt-6">
        <Skeleton
          className="h-6 w-48 rounded-lg mx-auto md:mx-0"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
        <Skeleton
          className="h-32 w-full rounded-xl"
          classNames={{ base: "dark:bg-dark-border/30" }}
        />
      </div>
    </div>
  </div>
);

const LearningProgressDetailPage = () => {
  const params = useParams();
  const id = params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [certFile, setCertFile] = useState<File | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const attendanceData = [
    {
      date: "10, January 2026",
      location: "Jakarta, ID",
      status: "Present",
    },
    {
      date: "11, January 2026",
      location: "Jakarta, ID",
      status: "Present",
    },
    {
      date: "12, January 2026",
      location: "Jakarta, ID",
      status: "-",
    },
    {
      date: "10, January 2026",
      location: "Jakarta, ID",
      status: "-",
    },
  ];

  const DetailField = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center justify-between py-1 px-2">
      <span className="text-[14px] text-[#6B7280] dark:text-gray-400">
        {label}
      </span>
      <span className="text-[14px] font-medium text-[#111827] dark:text-gray-100">
        {value}
      </span>
    </div>
  );

  const InputFieldDetail = ({
    icon,
    label,
    defaultValue,
    readOnly = true,
  }: {
    icon: React.ReactNode;
    label: string;
    defaultValue?: string;
    readOnly?: boolean;
  }) => (
    <div className="flex items-center gap-3 px-4 h-[60px] bg-[#F9FAFB] dark:bg-dark-navy/20 border border-gray-100 dark:border-dark-border rounded-xl">
      <div className="text-[#1BAE7E] flex-shrink-0">{icon}</div>
      <div className="w-[1px] h-6 bg-gray-200 dark:bg-dark-border mx-1" />
      <div className="flex flex-col justify-center flex-1 min-w-0">
        <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
          {label}
        </span>
        <input
          readOnly={readOnly}
          defaultValue={defaultValue}
          className="text-[14px] font-medium text-gray-900 dark:text-gray-100 bg-transparent border-none outline-none w-full truncate p-0"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors">
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Maruyama"
          userEmail="maruyama2460@gmail.com"
          pageTitle="External Training"
          pageSubtitle={
            <div className="flex items-center gap-1.5 font-medium flex-wrap md:flex-nowrap">
              <span className="text-[#9CA3AF] whitespace-nowrap">
                Learning Progress
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#9CA3AF] flex-shrink-0"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span className="whitespace-nowrap">Leadership Essentials</span>
            </div>
          }
        />

        <main className="pt-[80px] md:pt-24 px-3 md:px-8 pb-8 transition-all duration-300">
          <div className="bg-white dark:bg-dark-surface rounded-2xl p-4 md:p-8 shadow-sm border border-gray-100 dark:border-dark-border min-h-[500px]">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <DetailSkeleton />
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8 md:space-y-12"
                >
                  {/* Hero section */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-center text-center md:text-left"
                  >
                    <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-xl overflow-hidden relative border border-gray-100 shadow-sm flex-shrink-0">
                      <Image
                        src="/ai_training_banner_1772524761530.png"
                        alt="Course Banner"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h1 className="text-[24px] md:text-[32px] font-medium text-[#111827] dark:text-white leading-tight">
                        AI Engineering: Advanced Neural Networks
                      </h1>
                      <p className="text-[16px] md:text-[18px] text-[#6B7280] dark:text-gray-400">
                        XYZ Institute of Technology
                      </p>
                      <div className="pt-1 flex justify-center md:justify-start">
                        <Chip
                          variant="bordered"
                          size="sm"
                          classNames={{
                            base: "bg-[#F4FBEA] text-[#558E22] border-[#AEDE78]/50 rounded-full h-auto py-1 px-4",
                            content: "text-[12px] font-medium",
                          }}
                        >
                          Approved
                        </Chip>
                      </div>
                    </div>
                  </motion.div>

                  {/* Information Section */}
                  <motion.div variants={itemVariants} className="space-y-6">
                    <h3 className="text-[24px] font-medium text-[#111827] dark:text-white">
                      Information
                    </h3>
                    <div className="w-full space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-50 dark:border-dark-border/10 last:border-0 gap-1 sm:gap-4 text-center sm:text-left">
                        <span className="text-[14px] text-[#6B7280] dark:text-gray-400">
                          Training Date
                        </span>
                        <span className="text-[14px] font-medium text-[#111827] dark:text-gray-100">
                          January 10, 2024 - January 15, 2024
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-50 dark:border-dark-border/10 last:border-0 gap-1 sm:gap-4 text-center sm:text-left">
                        <span className="text-[14px] text-[#6B7280] dark:text-gray-400">
                          Training Location
                        </span>
                        <span className="text-[14px] font-medium text-[#111827] dark:text-gray-100">
                          Jakarta, Indonesia
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-50 dark:border-dark-border/10 last:border-0 gap-1 sm:gap-4 text-center sm:text-left">
                        <span className="text-[14px] text-[#6B7280] dark:text-gray-400">
                          Training Status
                        </span>
                        <div className="flex justify-center sm:justify-end">
                          <Chip
                            variant="bordered"
                            size="sm"
                            classNames={{
                              base: "bg-[#FFD748]/10 text-[#D97706] border-[#FFD748]/50 rounded-full h-auto py-1 px-4",
                              content: "text-[12px] font-medium",
                            }}
                          >
                            On Going
                          </Chip>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-50 dark:border-dark-border/10 last:border-0 gap-1 sm:gap-4 text-center sm:text-left">
                        <span className="text-[14px] text-[#6B7280] dark:text-gray-400">
                          Training Duration
                        </span>
                        <span className="text-[14px] font-medium text-[#111827] dark:text-gray-100">
                          30 Hours
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Attendance Tracking Section */}
                  <motion.div variants={itemVariants} className="space-y-4">
                    <div className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-0 overflow-hidden shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 border-b border-gray-100 dark:border-dark-border gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-100 dark:border-dark-border text-[#2848A5]">
                            <SvgIcon
                              name="external_training"
                              className="w-4 h-4"
                            />
                          </div>
                          <h3 className="text-[18px] font-medium text-[#111827] dark:text-white">
                            Attendance Tracking
                          </h3>
                        </div>
                        <Button
                          variant="bordered"
                          className="flex items-center gap-2 text-sm font-medium text-[#2848A5] dark:text-blue-400 bg-white dark:bg-dark-navy border border-gray-200 dark:border-dark-border px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors h-auto"
                          startContent={
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          }
                        >
                          New Request
                        </Button>
                      </div>

                      <div className="overflow-x-auto overflow-y-hidden border-t sm:border-t-0 border-gray-100 dark:border-dark-border">
                        <Table
                          aria-label="Attendance Table"
                          removeWrapper
                          classNames={{
                            th: "bg-[#FAFAFA] dark:bg-dark-navy py-4 px-6 text-[12px] font-medium text-[#6B7280] uppercase tracking-wider border-b border-gray-100 dark:border-dark-border whitespace-nowrap",
                            td: "py-4 px-6 text-[14px] text-[#111827] dark:text-white font-medium border-b border-gray-100 dark:border-dark-border last:border-0 whitespace-nowrap",
                          }}
                        >
                          <TableHeader>
                            <TableColumn>Daily Check In</TableColumn>
                            <TableColumn>Employee Location</TableColumn>
                            <TableColumn>Status</TableColumn>
                            <TableColumn className="text-center">
                              Action
                            </TableColumn>
                          </TableHeader>
                          <TableBody>
                            {attendanceData.map((row, idx) => (
                              <TableRow key={idx}>
                                <TableCell className="font-geist tracking-tight">
                                  {row.date}
                                </TableCell>
                                <TableCell>{row.location}</TableCell>
                                <TableCell>
                                  {row.status === "Present" ? (
                                    <Chip
                                      size="sm"
                                      variant="bordered"
                                      className="bg-[#AEDE78]/10 text-[#558E22] border-[#AEDE78]/50 rounded-full h-auto py-1 px-4 min-w-[70px]"
                                      classNames={{
                                        content: "text-[12px] font-medium",
                                      }}
                                    >
                                      {row.status}
                                    </Chip>
                                  ) : (
                                    <span className="text-gray-400 pl-4">
                                      {row.status}
                                    </span>
                                  )}
                                </TableCell>
                                <TableCell className="text-center">
                                  <Button
                                    size="sm"
                                    disabled={row.status === "Present"}
                                    className={`rounded-lg font-medium px-4 py-1.5 h-auto text-[11px] transition-all min-w-[130px] ${
                                      row.status === "Present"
                                        ? "bg-[#D9EAFF] text-[#2848A5] opacity-60"
                                        : "bg-[#2848A5] text-white transition-all hover:bg-brand-600"
                                    }`}
                                  >
                                    Mark as Present
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </motion.div>

                  {/* Certificate Submission Form Section */}
                  <motion.div
                    variants={itemVariants}
                    className="space-y-6 pt-4"
                  >
                    <h3 className="text-[20px] md:text-[24px] font-medium text-[#111827] dark:text-white text-center md:text-left">
                      Certificate Submission Form
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputFieldDetail
                        label="Course Name"
                        defaultValue="Getting to know the world of cyber security"
                        icon={
                          <SvgIcon
                            name="training_request_course"
                            className="w-5 h-5"
                          />
                        }
                      />
                      <InputFieldDetail
                        label="Training Provider"
                        defaultValue="Dicoding"
                        icon={
                          <SvgIcon
                            name="training_request_provider"
                            className="w-5 h-5"
                          />
                        }
                      />
                      <InputFieldDetail
                        label="Publication Date"
                        defaultValue="1, March 2026"
                        icon={
                          <SvgIcon
                            name="training_request_date"
                            className="w-5 h-5"
                          />
                        }
                      />
                      <InputFieldDetail
                        label="Expiration Date"
                        defaultValue="1, March 2026"
                        icon={
                          <SvgIcon
                            name="training_request_date"
                            className="w-5 h-5"
                          />
                        }
                      />
                      <InputFieldDetail
                        label="ID Credential"
                        defaultValue="YMmr55ExMcC"
                        icon={
                          <SvgIcon
                            name="fluent_certificate-24-filled"
                            className="w-5 h-5"
                          />
                        }
                      />
                      <div className="flex items-center gap-3 px-4 h-[60px] bg-[#F9FAFB] dark:bg-dark-navy/20 border border-gray-100 dark:border-dark-border rounded-xl">
                        <div className="text-[#1BAE7E] flex-shrink-0">
                          <SvgIcon name="fluent_people-team-20-filled" />
                        </div>
                        <div className="w-[1px] h-6 bg-gray-200 dark:bg-dark-border mx-1" />
                        <div className="flex flex-col justify-center flex-1 min-w-0">
                          <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">
                            Category
                          </span>
                          <div className="flex items-center justify-between">
                            <span className="text-[14px] font-medium text-gray-900 dark:text-gray-100">
                              AI Engineer
                            </span>
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <FileUpload
                      label="Submit Certification"
                      value={certFile}
                      onChange={setCertFile}
                      helperText="Please upload your completed project file (Python script, Jupyter notebook, etc.) here."
                    />

                    <div className="pt-2">
                      <Button className="w-full bg-[#D9EAFF] dark:bg-[#2848A5] font-medium h-12 rounded-xl text-[14px]">
                        Submit Now
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LearningProgressDetailPage;
