"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@heroui/react";

interface Assignment {
  id: number;
  name: string;
  score: string;
  status: "Completed" | "Pending";
}

const AssignmentsQuizzes = () => {
  const data: Assignment[] = [
    {
      id: 1,
      name: "SEO Quiz (Digital Marketing 101)",
      score: "85/100",
      status: "Completed",
    },
    {
      id: 2,
      name: "Prototype Assignment (UI Design)",
      score: "90/100",
      status: "Completed",
    },
    {
      id: 3,
      name: "Leadership Reflection (Leadership Essentials)",
      score: "78/100",
      status: "Completed",
    },
    {
      id: 4,
      name: "Security Quiz (Cybersecurity Basics)",
      score: "Pending",
      status: "Pending",
    },
  ];

  return (
    <Card
      shadow="none"
      classNames={{
        base: "rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface mb-6 font-geist",
      }}
    >
      <CardHeader className="flex items-center justify-between px-2 pt-2 pb-2.5 border-b border-gray-100 dark:border-dark-border !w-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border">
            <SvgIcon name="assignment_quiz" />
          </div>
          <h2 className="text-[20px] font-medium text-[#1F2937] dark:text-gray-100">
            Assignments/Quizzes
          </h2>
        </div>
        <Button
          isIconOnly
          variant="light"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
        >
          <SvgIcon name="more-horizontal" className="w-3 h-3" />
        </Button>
      </CardHeader>

      <CardBody className="overflow-x-auto p-0">
        <Table
          removeWrapper
          aria-label="Assignments and Quizzes Table"
          classNames={{
            th: "py-3 px-6 text-[13px] font-bold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none",
            td: "py-4 px-6 text-[13px] text-gray-600 dark:text-gray-400 font-medium",
            tr: "border-b border-gray-50 dark:border-dark-border/50 hover:bg-gray-50/50 dark:hover:bg-dark-navy/50 group",
          }}
        >
          <TableHeader>
            <TableColumn>Assignment Name</TableColumn>
            <TableColumn>Score</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium text-gray-800 dark:text-gray-200">
                  {row.name}
                </TableCell>
                <TableCell className="font-geist tracking-wide">
                  {row.score}
                </TableCell>
                <TableCell>
                  <Chip
                    variant="bordered"
                    size="sm"
                    classNames={{
                      base: `border rounded-full h-auto py-2 px-2 min-w-[90px] justify-center text-center ${
                        row.status === "Completed"
                          ? "bg-[#AEDE78]/10 text-[#558E22] border-[#AEDE78]"
                          : "bg-[#FFD748]/10 text-[#D97706] border-[#FFD748]"
                      }`,
                      content: "text-[11px] font-medium",
                    }}
                  >
                    {row.status}
                  </Chip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default AssignmentsQuizzes;
