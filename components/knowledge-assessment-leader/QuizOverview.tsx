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
  Avatar,
} from "@heroui/react";

const QuizOverview = () => {
  const data = [
    {
      id: 1,
      no: "01",
      name: "Kristin Watson",
      photo: "https://i.pravatar.cc/150?u=kristin",
      avgScore: 98,
      totalQuiz: 100,
      avgTime: "20 minutes",
    },
    {
      id: 2,
      no: "02",
      name: "Bessie Cooper",
      photo: "https://i.pravatar.cc/150?u=bessie",
      avgScore: 99,
      totalQuiz: 200,
      avgTime: "30 minutes",
    },
    {
      id: 3,
      no: "03",
      name: "Ronald Richards",
      photo: "https://i.pravatar.cc/150?u=ronald",
      avgScore: 100,
      totalQuiz: 300,
      avgTime: "45 minutes",
    },
    {
      id: 4,
      no: "04",
      name: "Kathryn Murphy",
      photo: "https://i.pravatar.cc/150?u=kathryn",
      avgScore: 98,
      totalQuiz: 100,
      avgTime: "20 minutes",
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
            <SvgIcon name="fluent_quiz-28-filled" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Quiz Overview
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
          aria-label="Quiz Overview Table"
          classNames={{
            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none px-4",
            td: "text-[14px] text-gray-600 dark:text-gray-400 font-medium py-4 px-4 border-b border-gray-50 dark:border-dark-border/50",
          }}
        >
          <TableHeader>
            <TableColumn>No.</TableColumn>
            <TableColumn>Photo</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn className="text-center">Average Score</TableColumn>
            <TableColumn className="text-center">Total Quiz</TableColumn>
            <TableColumn className="text-center">Average Time</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-gray-800 dark:text-gray-200 font-geist text-[16px]">
                  {row.no}
                </TableCell>
                <TableCell>
                  <Avatar src={row.photo} size="sm" className="rounded-lg" />
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200 font-medium">
                  {row.name}
                </TableCell>
                <TableCell className="text-center font-geist">
                  {row.avgScore}
                </TableCell>
                <TableCell className="text-center font-geist">
                  {row.totalQuiz}
                </TableCell>
                <TableCell className="text-center font-geist">
                  {row.avgTime}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default QuizOverview;
