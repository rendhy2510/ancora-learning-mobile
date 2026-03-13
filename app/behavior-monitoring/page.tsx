"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import {
  Skeleton,
  Card,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
} from "@heroui/react";
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

const BehaviorMonitoringSkeleton = () => (
  <div className="space-y-8">
    {[...Array(2)].map((_, i) => (
      <Card
        key={i}
        className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface overflow-hidden shadow-none"
      >
        <div className="p-4 border-b border-gray-50 dark:border-dark-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Skeleton
                className="w-10 h-10 rounded-xl flex-shrink-0"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-7 w-64 rounded-lg"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
            </div>
            <Skeleton
              className="w-8 h-8 rounded-lg"
              classNames={{ base: "dark:bg-dark-border/30" }}
            />
          </div>
        </div>
        <div className="p-4 overflow-x-auto">
          <div className="min-w-[800px] space-y-3">
            {/* Table header row skeleton */}
            <div className="flex gap-4 pb-3 border-b border-gray-100 dark:border-dark-border">
              <Skeleton
                className="h-4 w-10 rounded"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-4 w-14 rounded"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-4 w-24 rounded"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-4 w-20 rounded"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-4 w-28 rounded"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-4 w-20 rounded"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              <Skeleton
                className="h-4 w-24 rounded"
                classNames={{ base: "dark:bg-dark-border/30" }}
              />
              {i === 0 && (
                <Skeleton
                  className="h-4 w-16 rounded ml-auto"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
              )}
            </div>
            {[...Array(4)].map((_, j) => (
              <div
                key={j}
                className="flex items-center gap-4 py-3 border-b border-gray-50 dark:border-dark-border/30"
              >
                <Skeleton
                  className="h-4 w-8 rounded"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
                <Skeleton
                  className="w-10 h-10 rounded-full flex-shrink-0"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
                <Skeleton
                  className="h-4 w-32 rounded"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
                <Skeleton
                  className="h-4 w-16 rounded"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
                <Skeleton
                  className="h-4 w-14 rounded"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
                <Skeleton
                  className="h-4 w-14 rounded"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
                <Skeleton
                  className="h-4 w-14 rounded"
                  classNames={{ base: "dark:bg-dark-border/30" }}
                />
                {i === 0 && (
                  <Skeleton
                    className="h-9 w-24 rounded-xl flex-shrink-0"
                    classNames={{ base: "dark:bg-dark-border/30" }}
                  />
                )}
                {i === 1 && (
                  <>
                    <Skeleton
                      className="h-10 flex-1 rounded"
                      classNames={{ base: "dark:bg-dark-border/30" }}
                    />
                    <Skeleton
                      className="h-10 flex-1 rounded"
                      classNames={{ base: "dark:bg-dark-border/30" }}
                    />
                    <Skeleton
                      className="h-10 flex-1 rounded"
                      classNames={{ base: "dark:bg-dark-border/30" }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>
    ))}
  </div>
);

const employeeBehaviorData = [
  {
    id: 1,
    no: "01",
    name: "Kristin Watson",
    avatar: "https://i.pravatar.cc/150?u=kw",
    behaviorScore: "85/100",
    communication: { value: 85, trend: "up" as const },
    teamWork: { value: 85, trend: "up" as const },
    timeManagement: { value: 85, trend: "up" as const },
  },
  {
    id: 2,
    no: "02",
    name: "Bessie Cooper",
    avatar: "https://i.pravatar.cc/150?u=bc",
    behaviorScore: "90/100",
    communication: { value: 90, trend: "up" as const },
    teamWork: { value: 90, trend: "up" as const },
    timeManagement: { value: 90, trend: "up" as const },
  },
  {
    id: 3,
    no: "03",
    name: "Ronald Richards",
    avatar: "https://i.pravatar.cc/150?u=rr",
    behaviorScore: "78/100",
    communication: { value: -7, trend: "down" as const },
    teamWork: { value: -7, trend: "down" as const },
    timeManagement: { value: -7, trend: "down" as const },
  },
  {
    id: 4,
    no: "04",
    name: "Kathryn Murphy",
    avatar: "https://i.pravatar.cc/150?u=km",
    behaviorScore: "85/100",
    communication: { value: -5, trend: "down" as const },
    teamWork: { value: -5, trend: "down" as const },
    timeManagement: { value: -5, trend: "down" as const },
  },
];

const feedbackData = [
  {
    id: 1,
    no: "01",
    name: "Kristin Watson",
    avatar: "https://i.pravatar.cc/150?u=kw",
    peerReview: "Effective communicator and a great team player.",
    managerReview: "Demonstrated strong leadership and teamwork skills.",
    action: "Provide leadership role opportunities.",
  },
  {
    id: 2,
    no: "02",
    name: "Bessie Cooper",
    avatar: "https://i.pravatar.cc/150?u=bc",
    peerReview: "Always supportive and collaborative in group tasks.",
    managerReview: "Consistently meets deadlines and delivers quality work.",
    action: "Consider for senior project lead.",
  },
  {
    id: 3,
    no: "03",
    name: "Ronald Richards",
    avatar: "https://i.pravatar.cc/150?u=rr",
    peerReview: "Good technical skills, improving in time management.",
    managerReview: "Showing progress in prioritization and communication.",
    action: "Continue time management training.",
  },
  {
    id: 4,
    no: "04",
    name: "Kathryn Murphy",
    avatar: "https://i.pravatar.cc/150?u=km",
    peerReview: "Reliable and proactive in cross-team initiatives.",
    managerReview: "Exceeds expectations in collaboration and initiative.",
    action: "Assign as mentor for new joiners.",
  },
];

function PercentChange({
  value,
  trend,
}: {
  value: number;
  trend: "up" | "down";
}) {
  const isPositive = trend === "up";
  const displayValue = value >= 0 ? `+${value}%` : `${value}%`;

  // Colors:
  // Green: BG #D4F7E5, Border/Text #0F8C66
  // Red: BG #FFE1E1, Border/Text #E62D2D
  const iconTextColor = isPositive ? "text-[#0F8C66]" : "text-[#E62D2D]";
  const circleBgColor = isPositive ? "bg-[#D4F7E5]" : "bg-[#FFE1E1]";
  const borderColor = isPositive ? "border-[#0F8C66]" : "border-[#E62D2D]";
  const svgStrokeColor = isPositive ? "#0F8C66" : "#E62D2D";

  return (
    <div className={`inline-flex items-center gap-2 ${iconTextColor}`}>
      <div
        className={`w-6 h-6 rounded-full ${circleBgColor} border ${borderColor} flex items-center justify-center`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={svgStrokeColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={trend === "down" ? "rotate-180" : ""}
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
      <span className="font-geist font-bold text-[14px]">{displayValue}</span>
    </div>
  );
}

export default function BehaviorMonitoringPage() {
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
          userName="Ralph Edwards"
          userEmail="edward@gmail.com"
          pageTitle="Behavior Monitoring"
          pageSubtitle={
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-0.5">
              Welcome Back, Ralph!
            </p>
          }
        />

        <main className="pt-[100px] lg:pt-20 space-y-8 max-w-[1600px] mx-auto">
          <div className="bg-white dark:bg-dark-surface min-h-[calc(100vh-100px)] p-4 lg:p-8">
            <div className="border border-gray-100 dark:border-dark-border rounded-[20px] p-2 lg:p-9 dark:bg-dark-navy/10">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <BehaviorMonitoringSkeleton />
                  </motion.div>
                ) : (
                  <motion.div
                    key="content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                  >
                    {/* Employee Behavioral Monitoring */}
                    <motion.div variants={itemVariants}>
                      <Card className="border border-gray-100 dark:border-dark-border rounded-2xl shadow-none bg-white dark:bg-dark-surface overflow-hidden p-0">
                        <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-dark-border">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-[#2848A5]">
                              <SvgIcon name="solar_user-bold" />
                            </div>
                            <h3 className="text-[18px] font-medium text-[#111827] dark:text-white leading-tight">
                              Employee Behavioral Monitoring
                            </h3>
                          </div>
                          <Button
                            isIconOnly
                            variant="light"
                            size="sm"
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
                          >
                            <SvgIcon
                              name="more-horizontal"
                              className="w-4 h-4"
                            />
                          </Button>
                        </div>
                        <Table
                          aria-label="Employee behavioral monitoring"
                          removeWrapper
                          classNames={{
                            wrapper: "p-0 bg-transparent min-h-0",
                            th: "bg-[#FAFAFA] dark:bg-dark-navy text-[#0A0A0A] dark:text-[#FFFFFF] font-semibold border-b border-gray-100 dark:border-dark-border/50 h-14 px-4 text-[14px] tracking-wide",
                            td: "h-16 font-medium border-b border-gray-50 dark:border-dark-border/20 px-4 text-[14px]",
                            tr: "hover:bg-gray-50/50 dark:hover:bg-dark-navy/30 transition-colors",
                          }}
                        >
                          <TableHeader>
                            <TableColumn className="w-14">No.</TableColumn>
                            <TableColumn className="w-16">Photo</TableColumn>
                            <TableColumn>Name</TableColumn>
                            <TableColumn className="whitespace-nowrap">
                              Behavior Score
                            </TableColumn>
                            <TableColumn className="text-center">
                              Communication
                            </TableColumn>
                            <TableColumn className="text-center">
                              Team Work
                            </TableColumn>
                            <TableColumn className="text-center">
                              Time Management
                            </TableColumn>
                            <TableColumn align="center" className="text-center">
                              Action
                            </TableColumn>
                          </TableHeader>
                          <TableBody>
                            {employeeBehaviorData.map((row) => (
                              <TableRow key={row.id}>
                                <TableCell className="text-gray-600 dark:text-gray-400">
                                  {row.no}
                                </TableCell>
                                <TableCell>
                                  <Avatar
                                    src={row.avatar}
                                    name={row.name}
                                    size="sm"
                                    className="w-10 h-10 flex-shrink-0"
                                  />
                                </TableCell>
                                <TableCell className="font-medium text-gray-900 dark:text-gray-200">
                                  {row.name}
                                </TableCell>
                                <TableCell className="text-gray-700 dark:text-gray-300">
                                  {row.behaviorScore}
                                </TableCell>
                                <TableCell className="text-center">
                                  <PercentChange
                                    value={row.communication.value}
                                    trend={row.communication.trend}
                                  />
                                </TableCell>
                                <TableCell className="text-center">
                                  <PercentChange
                                    value={row.teamWork.value}
                                    trend={row.teamWork.trend}
                                  />
                                </TableCell>
                                <TableCell className="text-center">
                                  <PercentChange
                                    value={row.timeManagement.value}
                                    trend={row.timeManagement.trend}
                                  />
                                </TableCell>
                                <TableCell className="text-center">
                                  <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <Button
                                      size="sm"
                                      variant="light"
                                      className="flex items-center gap-1.5 text-[13px] font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-dark-border rounded-xl min-w-0 px-4 py-2 h-auto bg-white dark:bg-dark-navy/50 hover:bg-gray-50 dark:hover:bg-dark-navy"
                                      disableRipple
                                      startContent={
                                        <SvgIcon name="eye" size={16} />
                                      }
                                    >
                                      View Report
                                    </Button>
                                  </motion.div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Card>
                    </motion.div>

                    {/* Peer & Manager Feedback */}
                    <motion.div variants={itemVariants}>
                      <Card className="border border-gray-100 dark:border-dark-border rounded-2xl shadow-none bg-white dark:bg-dark-surface overflow-hidden p-0">
                        <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-dark-border">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-[#2848A5]">
                              <SvgIcon name="solar_user-bold" />
                            </div>
                            <h3 className="text-[18px] font-medium text-[#111827] dark:text-white leading-tight">
                              Peer & Manager Feedback
                            </h3>
                          </div>
                          <Button
                            isIconOnly
                            variant="light"
                            size="sm"
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
                          >
                            <SvgIcon
                              name="more-horizontal"
                              className="w-4 h-4"
                            />
                          </Button>
                        </div>
                        <Table
                          aria-label="Peer and manager feedback"
                          removeWrapper
                          classNames={{
                            wrapper: "p-0 bg-transparent min-h-0",
                            th: "bg-[#FAFAFA] dark:bg-dark-navy text-[#0A0A0A] dark:text-[#FFFFFF] font-semibold border-b border-gray-100 dark:border-dark-border/50 h-14 px-4 text-[12px] uppercase tracking-wide",
                            td: "h-auto min-h-[64px] font-medium border-b border-gray-50 dark:border-dark-border/20 px-4 text-[14px] align-top py-3",
                            tr: "hover:bg-gray-50/50 dark:hover:bg-dark-navy/30 transition-colors",
                          }}
                        >
                          <TableHeader>
                            <TableColumn className="w-14">No.</TableColumn>
                            <TableColumn className="w-16">Photo</TableColumn>
                            <TableColumn>Name</TableColumn>
                            <TableColumn className="min-w-[200px]">
                              Peer Review
                            </TableColumn>
                            <TableColumn className="min-w-[200px]">
                              Manager Review
                            </TableColumn>
                            <TableColumn className="min-w-[180px]">
                              Action
                            </TableColumn>
                          </TableHeader>
                          <TableBody>
                            {feedbackData.map((row) => (
                              <TableRow key={row.id}>
                                <TableCell className="text-gray-600 dark:text-gray-400">
                                  {row.no}
                                </TableCell>
                                <TableCell>
                                  <Avatar
                                    src={row.avatar}
                                    name={row.name}
                                    size="sm"
                                    className="w-10 h-10 flex-shrink-0"
                                  />
                                </TableCell>
                                <TableCell className="font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap">
                                  {row.name}
                                </TableCell>
                                <TableCell className="text-gray-600 dark:text-gray-400 text-[13px] leading-relaxed">
                                  {row.peerReview}
                                </TableCell>
                                <TableCell className="text-gray-600 dark:text-gray-400 text-[13px] leading-relaxed">
                                  {row.managerReview}
                                </TableCell>
                                <TableCell className="text-gray-700 dark:text-gray-300 text-[13px] leading-relaxed">
                                  {row.action}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Card>
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
}
