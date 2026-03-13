"use client";

import React from "react";
import SvgIcon from "@/components/shared/SvgIcon";
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@heroui/react";

const TrainingCostTable = () => {
  const data = [
    {
      id: 1,
      no: "01",
      courseName: "Digital Marketing 101",
      participants: 120,
      totalCost: "$60,000",
      completionRate: "85%",
      trainingType: "Online Course",
    },
    {
      id: 2,
      no: "02",
      courseName: "Leadership Essentials",
      participants: 150,
      totalCost: "$75,000",
      completionRate: "90%",
      trainingType: "In-Class Workshop",
    },
    {
      id: 3,
      no: "03",
      courseName: "Cybersecurity Basics",
      participants: 180,
      totalCost: "$90,000",
      completionRate: "95%",
      trainingType: "Hybrid (Online/In-Class)",
    },
    {
      id: 4,
      no: "04",
      courseName: "Advanced Excel for Finance",
      participants: 120,
      totalCost: "$60,000",
      completionRate: "85%",
      trainingType: "In-Class Workshop",
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
            <SvgIcon name="healthicons_money-bag" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Training Cost
          </h2>
        </div>
        <Button
          isIconOnly
          variant="light"
          size="sm"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
        >
          <SvgIcon name="more-horizontal" className="w-4 h-4" />
        </Button>
      </CardHeader>

      <CardBody className="p-0 overflow-x-auto">
        <Table
          removeWrapper
          aria-label="Training Cost Table"
          classNames={{
            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none px-4",
            td: "text-[14px] text-gray-600 dark:text-gray-400 font-medium py-4 px-4 border-b border-gray-50 dark:border-dark-border/50",
          }}
        >
          <TableHeader>
            <TableColumn>No.</TableColumn>
            <TableColumn>Course Name</TableColumn>
            <TableColumn className="text-center">
              Total Participants
            </TableColumn>
            <TableColumn className="text-center">
              Total Training Cost
            </TableColumn>
            <TableColumn className="text-center">Completion Rate</TableColumn>
            <TableColumn className="text-center">Training Type</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-gray-800 dark:text-gray-200 font-geist text-[16px]">
                  {row.no}
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200">
                  {row.courseName}
                </TableCell>
                <TableCell className="text-center font-geist">
                  {row.participants}
                </TableCell>
                <TableCell className="text-center font-geist">
                  {row.totalCost}
                </TableCell>
                <TableCell className="text-center font-geist">
                  {row.completionRate}
                </TableCell>
                <TableCell className="text-center">
                  {row.trainingType}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default TrainingCostTable;
