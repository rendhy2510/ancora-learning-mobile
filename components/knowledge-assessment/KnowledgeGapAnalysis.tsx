"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import {
  Card,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@heroui/react";

const KnowledgeGapAnalysis = () => {
  const knowledgeGap = [
    {
      id: 1,
      course: "Digital Marketing - SEO Quiz",
      score: "85/100",
      status: "Completed",
      date: "August 20, 2024",
      recommended: "Keyword Research",
    },
    {
      id: 2,
      course: "UI Design - Design Principles",
      score: "90/100",
      status: "Completed",
      date: "September 15, 2024",
      recommended: "Typography",
    },
    {
      id: 3,
      course: "Leadership Essentials - Quiz",
      score: "78/100",
      status: "Completed",
      date: "October 10, 2024",
      recommended: "Conflict Resolution",
    },
    {
      id: 4,
      course: "Cybersecurity Basics - Quiz",
      score: "Pending",
      status: "Completed",
      date: "August 20, 2024",
      recommended: "Phishing Awareness",
    },
  ];

  return (
    <Card className="border border-gray-100 dark:border-dark-border rounded-2xl shadow-none bg-white dark:bg-dark-surface overflow-hidden p-0 pb-6">
      <div className="p-2 flex items-center justify-between border-b border-gray-100 dark:border-dark-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border">
            <SvgIcon name="assignment_quiz" />
          </div>
          <h3 className="text-[18px] font-medium text-[#111827] dark:text-white leading-tight">
            Knowledge Gap Analysis
          </h3>
        </div>
        <Button
          isIconOnly
          variant="light"
          size="sm"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
        >
          <SvgIcon name="more-horizontal" className="w-3 h-3" />
        </Button>
      </div>
      <Table
        aria-label="Knowledge gap table"
        shadow="none"
        radius="none"
        classNames={{
          wrapper: "p-0 bg-transparent min-h-0",
          th: "bg-[#FAFAFA] dark:bg-dark-navy text-[#0A0A0A] dark:text-[#FFFFFF] font-bold border-b border-gray-100 dark:border-dark-border/50 h-14 px-3 uppercase text-[12px] !rounded-none",
          td: "h-16 font-medium border-b border-gray-50/50 dark:border-dark-border/20 px-3",
          base: "pt-0",
        }}
      >
        <TableHeader>
          <TableColumn>Name Course</TableColumn>
          <TableColumn className="text-center">Score</TableColumn>
          <TableColumn className="text-center">Status</TableColumn>
          <TableColumn className="text-center">Date</TableColumn>
          <TableColumn>Recommended Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {knowledgeGap.map((item) => (
            <TableRow
              key={item.id}
              className="hover:bg-gray-50/50 dark:hover:bg-dark-navy/20 transition-all cursor-pointer"
            >
              <TableCell className="text-gray-900 dark:text-gray-200 font-medium text-[15px]">
                {item.course}
              </TableCell>
              <TableCell className="text-center dark:text-gray-400 font-geist text-[14px]">
                {item.score}
              </TableCell>
              <TableCell className="flex justify-center">
                <Chip
                  size="sm"
                  variant="flat"
                  className="bg-[#AEDE78]/10 text-[#558E22] border border-[#AEDE78] rounded-full h-auto py-2 px-4 shadow-none"
                  classNames={{
                    content: "font-bold text-[11px]",
                  }}
                >
                  {item.status}
                </Chip>
              </TableCell>
              <TableCell className="text-center text-gray-500 dark:text-gray-400 text-[14px]">
                {item.date}
              </TableCell>
              <TableCell className="font-medium text-gray-900 dark:text-gray-100 text-[14px]">
                {item.recommended}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default KnowledgeGapAnalysis;
