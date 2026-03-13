"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import TeamProgressTable from "@/components/dashboards/leader/TeamProgressTable";
import TeamCompletion from "@/components/dashboards/leader/TeamCompletion";
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
  AvatarGroup,
  Chip,
  Select,
  SelectItem,
} from "@heroui/react";
import SvgIcon from "@/components/shared/SvgIcon";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

interface StatCardData {
  icon: string;
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  vsLabel: string;
}

function ReportStatCard({ icon, title, value, change, changeType, vsLabel }: StatCardData) {
  return (
    <Card
      shadow="sm"
      classNames={{
        base: "rounded-2xl p-5 hover:bg-gray-50 dark:hover:bg-dark-navy bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border transition-all",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-[#243C7C] flex items-center justify-center flex-shrink-0">
          <SvgIcon name={icon} size={20} className="brightness-0 invert" />
        </div>
        <h3 className="text-[13px] font-medium text-[#4F4F4F] dark:text-gray-400">
          {title}
        </h3>
      </div>

      <p className="text-[32px] font-bold font-geist tracking-tight text-[#1F2937] dark:text-white leading-none mb-4 mt-2">
        {value}
      </p>

      <div
        className="w-full h-[1px] mb-4 mt-2 opacity-50 dark:opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #E5E7EB 50%, transparent 50%)`,
          backgroundSize: "12px 1px",
          backgroundRepeat: "repeat-x",
        }}
      />

      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center text-blue-500">
            <svg
              className={`w-3 h-3 ${changeType === "increase" ? "" : "transform rotate-180"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
          <span className="text-[12px] font-bold font-geist text-blue-600">
            {change}
          </span>
        </div>
        <span className="text-[12px] text-gray-400 font-medium">•</span>
        <span className="text-[12px] text-gray-400 font-medium">
          {vsLabel}
        </span>
      </div>
    </Card>
  );
}

const ReportsSkeleton = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <Card
          key={i}
          className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface p-6 shadow-none"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-4 w-32 rounded-lg" classNames={{ base: "dark:bg-dark-border/30" }} />
              <Skeleton className="h-9 w-16 rounded-lg" classNames={{ base: "dark:bg-dark-border/30" }} />
              <Skeleton className="h-3 w-28 rounded-lg" classNames={{ base: "dark:bg-dark-border/30" }} />
            </div>
            <Skeleton className="w-10 h-10 rounded-xl" classNames={{ base: "dark:bg-dark-border/30" }} />
          </div>
        </Card>
      ))}
    </div>
    {[...Array(4)].map((_, i) => (
      <Card
        key={i}
        className="border border-gray-100 dark:border-dark-border rounded-2xl bg-white dark:bg-dark-surface overflow-hidden shadow-none"
      >
        <div className="p-4 border-b border-gray-50 dark:border-dark-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-xl" classNames={{ base: "dark:bg-dark-border/30" }} />
              <Skeleton className="h-7 w-48 rounded-lg" classNames={{ base: "dark:bg-dark-border/30" }} />
            </div>
            <Skeleton className="w-8 h-8 rounded-lg" classNames={{ base: "dark:bg-dark-border/30" }} />
          </div>
        </div>
        <div className="p-4 space-y-3">
          {[...Array(4)].map((_, j) => (
            <Skeleton key={j} className="h-14 w-full rounded-xl" classNames={{ base: "dark:bg-dark-border/30" }} />
          ))}
        </div>
      </Card>
    ))}
  </div>
);

const summaryCards: StatCardData[] = [
  {
    icon: "chart-bar",
    title: "Current Team Progress",
    value: "80%",
    change: "+10",
    changeType: "increase",
    vsLabel: "vs yesterday",
  },
  {
    icon: "clipboard-list",
    title: "Total Assignments",
    value: "25",
    change: "-3",
    changeType: "decrease",
    vsLabel: "vs last month",
  },
  {
    icon: "stash_data-date-solid",
    title: "Active Assignment",
    value: "10",
    change: "+50",
    changeType: "increase",
    vsLabel: "vs last month",
  },
];

const teamMemberProgressData = [
  { id: 1, no: "01", name: "Kristin Watson", avatar: "https://i.pravatar.cc/150?u=kw", progress: "100%", completeTask: "25/25", status: "Completed" as const },
  { id: 2, no: "02", name: "Bessie Cooper", avatar: "https://i.pravatar.cc/150?u=bc", progress: "92%", completeTask: "23/25", status: "On Going" as const },
  { id: 3, no: "03", name: "Ronald Richards", avatar: "https://i.pravatar.cc/150?u=rr", progress: "88%", completeTask: "22/25", status: "On Going" as const },
  { id: 4, no: "04", name: "Kathryn Murphy", avatar: "https://i.pravatar.cc/150?u=km", progress: "100%", completeTask: "25/25", status: "Completed" as const },
];

const trainingGapsData = [
  { id: 1, no: "01", name: "Kristin Watson", avatar: "https://i.pravatar.cc/150?u=kw", totalHour: "120h", trainingCompleted: "12", gap: "No Gaps" },
  { id: 2, no: "02", name: "Bessie Cooper", avatar: "https://i.pravatar.cc/150?u=bc", totalHour: "95h", trainingCompleted: "10", gap: "Needs AI Engineering training" },
  { id: 3, no: "03", name: "Ronald Richards", avatar: "https://i.pravatar.cc/150?u=rr", totalHour: "80h", trainingCompleted: "8", gap: "Needs Leadership training" },
  { id: 4, no: "04", name: "Kathryn Murphy", avatar: "https://i.pravatar.cc/150?u=km", totalHour: "110h", trainingCompleted: "11", gap: "No Gaps" },
];

const mandatoryEventData = [
  { id: 1, no: "01", name: "Leadership Training", date: "February 10, 2024", participants: 24, status: "Completed" as const },
  { id: 2, no: "02", name: "Cybersecurity Awareness", date: "March 15, 2024", participants: 24, status: "Up Coming" as const },
  { id: 3, no: "03", name: "Team Building Workshop", date: "April 20, 2024", participants: 24, status: "Up Coming" as const },
  { id: 4, no: "04", name: "Diversity and Inclusion Training", date: "February 10, 2024", participants: 24, status: "Up Coming" as const },
];

export default function ReportsAnalyticsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [dateRange, setDateRange] = useState<Set<string>>(new Set(["last30"]));

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const headerRightContent = (
    <div className="flex items-center gap-2">
      <Select
        aria-label="Date range"
        selectedKeys={dateRange}
        onSelectionChange={(keys) => setDateRange(keys as Set<string>)}
        size="sm"
        classNames={{
          trigger: "min-w-[140px] h-10 border border-gray-200 dark:border-dark-border rounded-lg bg-white dark:bg-dark-surface",
          value: "text-[13px] font-medium text-gray-700 dark:text-gray-200",
        }}
      >
        <SelectItem key="last7">Last 7 days</SelectItem>
        <SelectItem key="last30">Last 30 days</SelectItem>
        <SelectItem key="last90">Last 90 days</SelectItem>
      </Select>
      <Button
        size="sm"
        className="bg-[#2848A5] text-white font-medium rounded-lg px-4 h-10 hover:bg-[#1e3a8a] min-w-0"
        startContent={
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        }
      >
        Export Report
      </Button>
    </div>
  );

  const actionButtonClass =
    "flex items-center gap-1 px-3 min-w-0 rounded-lg border border-[#D5DBE2] dark:border-dark-border bg-[#F6F7F9] dark:bg-dark-navy mx-auto";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors font-geist">
      <Sidebar />
      <div className="ml-0 lg:ml-[245px] transition-all duration-300">
        <Header
          userName="Ralph Edwards"
          userEmail="redward@gmail.com"
          pageTitle="Report & Analytics"
          pageSubtitle={<p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-0.5">Welcome Back, Ralph!</p>}
          headerRightContent={headerRightContent}
        />

        <main className="pt-[100px] lg:pt-20 max-w-[1600px] mx-auto">
          <div className="bg-white dark:bg-dark-surface min-h-[calc(100vh-100px)] p-4 lg:p-8">
            <div className="border border-gray-100 dark:border-dark-border rounded-[20px] p-2 lg:p-9 dark:bg-dark-navy/10">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <ReportsSkeleton />
                  </motion.div>
                ) : (
                  <motion.div
                    key="content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                  >
                    {/* 1. Summary cards */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {summaryCards.map((card) => (<ReportStatCard key={card.title} {...card} />))}
                    </motion.div>

                    {/* 2. Team Member Progress */}
                    <motion.div variants={itemVariants}>
                      <Card className="border border-gray-100 dark:border-dark-border rounded-2xl shadow-none bg-white dark:bg-dark-surface overflow-hidden p-0">
                        <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-dark-border">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-[#2848A5]">
                              <SvgIcon name="fluent_people-team-20-filled" size={22} />
                            </div>
                            <h3 className="text-[18px] font-medium text-[#1F2937] dark:text-white">Team Member Progress</h3>
                          </div>
                          <Button isIconOnly variant="light" size="sm" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border">
                            <SvgIcon name="more-horizontal" className="w-4 h-4" />
                          </Button>
                        </div>
                        <Table
                          removeWrapper
                          aria-label="Team member progress"
                          classNames={{
                            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border h-14 px-4",
                            td: "text-[14px] font-medium border-b border-gray-50 dark:border-dark-border/20 px-4 py-3",
                            tr: "hover:bg-gray-50/50 dark:hover:bg-dark-navy/30",
                          }}
                        >
                          <TableHeader>
                            <TableColumn className="w-14">No.</TableColumn>
                            <TableColumn className="w-16">Photo</TableColumn>
                            <TableColumn>Name</TableColumn>
                            <TableColumn>Progress</TableColumn>
                            <TableColumn>Complete Task</TableColumn>
                            <TableColumn>Training Status</TableColumn>
                            <TableColumn align="center">Action</TableColumn>
                          </TableHeader>
                          <TableBody>
                            {teamMemberProgressData.map((row) => (
                              <TableRow key={row.id}>
                                <TableCell className="text-gray-600 dark:text-gray-400">{row.no}</TableCell>
                                <TableCell><Avatar src={row.avatar} name={row.name} size="sm" className="w-10 h-10" /></TableCell>
                                <TableCell className="font-medium text-gray-900 dark:text-gray-200">{row.name}</TableCell>
                                <TableCell className="text-[#10B981] font-semibold">{row.progress}</TableCell>
                                <TableCell className="text-gray-700 dark:text-gray-300">{row.completeTask}</TableCell>
                                <TableCell>
                                  <Chip
                                    size="sm"
                                    className={
                                      row.status === "Completed"
                                        ? "bg-[#AEDE78]/20 text-[#558E22] border border-[#AEDE78] rounded-full"
                                        : "bg-[#FFD748]/20 text-[#DD7A02] border border-[#FFD748] rounded-full"
                                    }
                                    classNames={{ content: "font-semibold text-[11px]" }}
                                  >
                                    {row.status}
                                  </Chip>
                                </TableCell>
                                <TableCell className="text-center">
                                  <Button
                                    size="sm"
                                    variant="light"
                                    className={actionButtonClass}
                                  >
                                    <div className="w-6 h-6 flex items-center justify-center">
                                      <SvgIcon name="eye" size={14} />
                                    </div>
                                    Detail
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Card>
                    </motion.div>

                    {/* 3. Team Progress + Team Completion (side-by-side) */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-7">
                        <TeamProgressTable />
                      </div>
                      <div className="lg:col-span-5">
                        <TeamCompletion />
                      </div>
                    </motion.div>

                    {/* 4. Training Gaps */}
                    <motion.div variants={itemVariants}>
                      <Card className="border border-gray-100 dark:border-dark-border rounded-2xl shadow-none bg-white dark:bg-dark-surface overflow-hidden p-0">
                        <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-dark-border">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-[#2848A5]">
                              <SvgIcon name="fa7-solid_mortar-board" size={22} />
                            </div>
                            <h3 className="text-[18px] font-medium text-[#1F2937] dark:text-white">Training Gaps</h3>
                          </div>
                          <Button isIconOnly variant="light" size="sm" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border">
                            <SvgIcon name="more-horizontal" className="w-4 h-4" />
                          </Button>
                        </div>
                        <Table
                          removeWrapper
                          aria-label="Training gaps"
                          classNames={{
                            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border h-14 px-4",
                            td: "text-[14px] font-medium border-b border-gray-50 dark:border-dark-border/20 px-4 py-3",
                            tr: "hover:bg-gray-50/50 dark:hover:bg-dark-navy/30",
                          }}
                        >
                          <TableHeader>
                            <TableColumn className="w-14">No.</TableColumn>
                            <TableColumn className="w-16">Photo</TableColumn>
                            <TableColumn>Name</TableColumn>
                            <TableColumn>Total Hour</TableColumn>
                            <TableColumn>Training Completed</TableColumn>
                            <TableColumn>Gap</TableColumn>
                            <TableColumn align="center">Action</TableColumn>
                          </TableHeader>
                          <TableBody>
                            {trainingGapsData.map((row) => (
                              <TableRow key={row.id}>
                                <TableCell className="text-gray-600 dark:text-gray-400">{row.no}</TableCell>
                                <TableCell><Avatar src={row.avatar} name={row.name} size="sm" className="w-10 h-10" /></TableCell>
                                <TableCell className="font-medium text-gray-900 dark:text-gray-200">{row.name}</TableCell>
                                <TableCell className="text-gray-700 dark:text-gray-300">{row.totalHour}</TableCell>
                                <TableCell className="text-gray-700 dark:text-gray-300">{row.trainingCompleted}</TableCell>
                                <TableCell className="text-gray-600 dark:text-gray-400">{row.gap}</TableCell>
                                <TableCell className="text-center">
                                  <Button
                                    size="sm"
                                    variant="light"
                                    className={actionButtonClass}
                                  >
                                    <div className="w-6 h-6 flex items-center justify-center">
                                      <SvgIcon name="eye" size={14} />
                                    </div>
                                    View Report
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Card>
                    </motion.div>

                    {/* 5. Mandatory Event */}
                    <motion.div variants={itemVariants}>
                      <Card className="border border-gray-100 dark:border-dark-border rounded-2xl shadow-none bg-white dark:bg-dark-surface overflow-hidden p-0">
                        <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-dark-border">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-[#2848A5]">
                              <SvgIcon name="solar_diploma-verified-bold" size={22} />
                            </div>
                            <h3 className="text-[18px] font-medium text-[#1F2937] dark:text-white">Mandatory Event</h3>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="light" size="sm" className="text-[#243C7C] font-semibold border border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-navy h-8 px-3 rounded-lg">
                              + Add New
                            </Button>
                            <Button variant="light" size="sm" className="text-[#243C7C] font-semibold border border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-navy h-8 px-3 rounded-lg">
                              View All
                            </Button>
                          </div>
                        </div>
                        <Table
                          removeWrapper
                          aria-label="Mandatory events"
                          classNames={{
                            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border h-14 px-4",
                            td: "text-[14px] font-medium border-b border-gray-50 dark:border-dark-border/20 px-4 py-3",
                            tr: "hover:bg-gray-50/50 dark:hover:bg-dark-navy/30",
                          }}
                        >
                          <TableHeader>
                            <TableColumn className="w-14">No.</TableColumn>
                            <TableColumn>Name</TableColumn>
                            <TableColumn>Date</TableColumn>
                            <TableColumn>Participants</TableColumn>
                            <TableColumn className="text-center">Status</TableColumn>
                            <TableColumn className="text-center">Action</TableColumn>
                          </TableHeader>
                          <TableBody>
                            {mandatoryEventData.map((row) => (
                              <TableRow key={row.id}>
                                <TableCell className="text-gray-600 dark:text-gray-400">{row.no}</TableCell>
                                <TableCell className="font-medium text-gray-900 dark:text-gray-200">{row.name}</TableCell>
                                <TableCell className="text-gray-700 dark:text-gray-300">{row.date}</TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <AvatarGroup max={4} size="sm" className="justify-start gap-0">
                                      {[1, 2, 3, 4].map((i) => (
                                        <Avatar
                                          key={i}
                                          src={`https://i.pravatar.cc/150?u=ev-${row.id}-${i}`}
                                          classNames={{ base: "ring-1 ring-white dark:ring-dark-surface border-none" }}
                                        />
                                      ))}
                                    </AvatarGroup>
                                    <span className="text-[12px] text-gray-600 dark:text-gray-400">+{row.participants - 4}</span>
                                  </div>
                                </TableCell>
                                <TableCell className="text-center">
                                  <Chip
                                    size="sm"
                                    className={
                                      row.status === "Completed"
                                        ? "bg-[#AEDE78]/20 text-[#558E22] border border-[#AEDE78] rounded-full"
                                        : "bg-[#FFD748]/20 text-[#DD7A02] border border-[#FFD748] rounded-full"
                                    }
                                    classNames={{ content: "font-semibold text-[11px]" }}
                                  >
                                    {row.status}
                                  </Chip>
                                </TableCell>
                                <TableCell className="text-center">
                                  <Button
                                    size="sm"
                                    variant="light"
                                    className={actionButtonClass}
                                  >
                                    <div className="w-6 h-6 flex items-center justify-center">
                                      <SvgIcon name="eye" size={14} />
                                    </div>
                                    Detail
                                  </Button>
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
