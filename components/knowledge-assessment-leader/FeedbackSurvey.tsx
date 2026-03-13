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
} from "@heroui/react";

const FeedbackSurvey = () => {
  const data = [
    {
      id: 1,
      no: "01",
      courseName: "Leadership Essentials - Mandatory Training",
      category: "AI Engineer",
      participant: 100,
      rating: "4/5",
    },
    {
      id: 2,
      no: "02",
      courseName: "Communication Skills - Optional Training",
      category: "Data Scientist",
      participant: 200,
      rating: "3/5",
    },
    {
      id: 3,
      no: "03",
      courseName: "Conflict Resolution - Mandatory Training",
      category: "Product Manager",
      participant: 100,
      rating: "4/5",
    },
    {
      id: 4,
      no: "04",
      courseName: "Leadership Essentials - Mandatory Training",
      category: "AI Engineer",
      participant: 300,
      rating: "5/5",
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
            <SvgIcon name="mdi_feedback" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Feedback & Survey
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
          aria-label="Feedback & Survey Table"
          classNames={{
            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none px-4",
            td: "text-[14px] text-gray-600 dark:text-gray-400 font-medium py-4 px-4 border-b border-gray-50 dark:border-dark-border/50",
          }}
        >
          <TableHeader>
            <TableColumn>No.</TableColumn>
            <TableColumn>Course Name</TableColumn>
            <TableColumn className="text-center">Category</TableColumn>
            <TableColumn className="text-center">Participant</TableColumn>
            <TableColumn className="text-center">Rating</TableColumn>
            <TableColumn className="text-center">Action</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-gray-800 dark:text-gray-200 font-geist text-[16px]">
                  {row.no}
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200 font-medium truncate max-w-[300px] text-[14px]">
                  {row.courseName}
                </TableCell>
                <TableCell className="text-center">{row.category}</TableCell>
                <TableCell className="text-center font-geist">
                  {row.participant}
                </TableCell>
                <TableCell className="text-center font-geist">
                  {row.rating}
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
                    <span className="text-[14px] font-medium">Detail</span>
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

export default FeedbackSurvey;
