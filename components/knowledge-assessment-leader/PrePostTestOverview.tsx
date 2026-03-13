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

const PrePostTestOverview = () => {
  const data = [
    {
      id: 1,
      no: "01",
      taskName: "Assess baseline knowledge before starting a course or tra...",
      dueDate: "January 30, 2024",
      assignedTo: "All Employees",
      passingGrade: "75%",
      status: "Completed",
    },
    {
      id: 2,
      no: "02",
      taskName: "Implement ongoing assessments to track progre...",
      dueDate: "February 15, 2024",
      assignedTo: "Management",
      passingGrade: "85%",
      status: "Up Coming",
    },
    {
      id: 3,
      no: "03",
      taskName: "Utilize interactive tools to enhance engagement and ret...",
      dueDate: "January 30, 2024",
      assignedTo: "Programmer",
      passingGrade: "95%",
      status: "Up Coming",
    },
    {
      id: 4,
      no: "04",
      taskName: "Assess baseline knowledge before starting a course or tra...",
      dueDate: "March 5, 2024",
      assignedTo: "Interns",
      passingGrade: "75%",
      status: "Up Coming",
    },
  ];

  return (
    <Card
      shadow="none"
      classNames={{
        base: "rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface mb-6 shadow-sm overflow-hidden",
      }}
    >
      <CardHeader className="flex items-center justify-between border-b border-gray-100 dark:border-dark-border !w-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-[#2848A5]">
            <SvgIcon name="mdi_progress-check" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Pre-Test & Post-Test Overview
          </h2>
        </div>
        <Button
          variant="light"
          size="sm"
          className="text-[#243C7C] font-semibold border border-divider hover:bg-gray-50 flex items-center gap-1.5 h-8 px-3 dark:text-gray-100"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add New
        </Button>
      </CardHeader>

      <CardBody className="p-0 overflow-x-auto">
        <Table
          removeWrapper
          aria-label="Pre-Test & Post-Test Overview Table"
          classNames={{
            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none px-4",
            td: "text-[14px] text-gray-600 dark:text-gray-400 font-medium py-4 px-4 border-b border-gray-50 dark:border-dark-border/50",
          }}
        >
          <TableHeader>
            <TableColumn>No.</TableColumn>
            <TableColumn className="w-[300px]">Task Name</TableColumn>
            <TableColumn className="text-center">Due Date</TableColumn>
            <TableColumn className="text-center">Assigned to</TableColumn>
            <TableColumn className="text-center">Passing Grade</TableColumn>
            <TableColumn className="text-center">Status</TableColumn>
            <TableColumn className="text-center">Action</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-gray-800 dark:text-gray-200 font-geist text-[16px]">
                  {row.no}
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200">
                  {row.taskName}
                </TableCell>
                <TableCell className="text-center font-geist">
                  {row.dueDate}
                </TableCell>
                <TableCell className="text-center">{row.assignedTo}</TableCell>
                <TableCell className="text-center font-geist">
                  {row.passingGrade}
                </TableCell>
                <TableCell className="text-center">
                  <Chip
                    variant="bordered"
                    size="sm"
                    classNames={{
                      base: `border rounded-full h-10 px-2 min-w-[90px] justify-center text-center ${
                        row.status === "Completed"
                          ? "bg-[#F4FBEA] border-[#AEDE78] text-[#558E22]"
                          : "bg-[#FFFBEB] border-[#FFD748] text-[#DD7A02]"
                      }`,
                      content: "text-[11px] font-medium",
                    }}
                  >
                    {row.status}
                  </Chip>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="light"
                    size="sm"
                    className="flex items-center gap-1 px-3 min-w-0 rounded-lg border border-[#D5DBE2] dark:border-dark-border bg-[#F6F7F9] dark:bg-dark-navy mx-auto"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <SvgIcon name="eye" size={14} />
                    </div>
                    <span className="text-[14px] font-medium whitespace-nowrap">
                      {row.status === "Completed" ? "View Result" : "View Task"}
                    </span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default PrePostTestOverview;
