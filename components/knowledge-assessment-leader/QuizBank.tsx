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

const QuizBank = () => {
  const data = [
    {
      id: 1,
      no: "01",
      question: "What is supervised learning?",
      category: "AI Engineer",
      difficulty: "Easy",
      status: "Active",
    },
    {
      id: 2,
      no: "02",
      question: "Explain the concept of overfitting.",
      category: "Data Scientist",
      difficulty: "Medium",
      status: "Active",
    },
    {
      id: 3,
      no: "03",
      question: "Explain the concept of overfitting.",
      category: "Product Manager",
      difficulty: "Easy",
      status: "Active",
    },
    {
      id: 4,
      no: "04",
      question: "Explain the concept of overfitting.",
      category: "AI Engineer",
      difficulty: "Hard",
      status: "Active",
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
            Quiz Bank
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
          aria-label="Quiz Bank Table"
          classNames={{
            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none px-4",
            td: "text-[14px] text-gray-600 dark:text-gray-400 font-medium py-4 px-4 border-b border-gray-50 dark:border-dark-border/50",
          }}
        >
          <TableHeader>
            <TableColumn>No.</TableColumn>
            <TableColumn>Question</TableColumn>
            <TableColumn className="text-center">Category</TableColumn>
            <TableColumn className="text-center">Difficulty</TableColumn>
            <TableColumn className="text-center">Status</TableColumn>
            <TableColumn className="text-center">Action</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-gray-800 dark:text-gray-200 font-geist text-[16px]">
                  {row.no}
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200 font-medium">
                  {row.question}
                </TableCell>
                <TableCell className="text-center">{row.category}</TableCell>
                <TableCell className="text-center">{row.difficulty}</TableCell>
                <TableCell className="text-center">
                  <Chip
                    variant="bordered"
                    size="sm"
                    classNames={{
                      base: `border rounded-full h-10 px-2 min-w-[90px] justify-center text-center ${
                        row.status === "Active"
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
                      <SvgIcon
                        name="material-symbols_edit"
                        size={14}
                        className="brightness-50"
                      />
                    </div>
                    <span className="text-[14px] font-medium">Edit</span>
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

export default QuizBank;
