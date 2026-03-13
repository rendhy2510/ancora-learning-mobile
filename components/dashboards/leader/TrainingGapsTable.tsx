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
  Chip,
  Button,
} from "@heroui/react";

const TrainingGapsTable = () => {
  const data = [
    {
      id: 1,
      course: "Digital Marketing",
      gap: "Lack of Basic SEO Knowledge",
      recommended: "Advanced SEO Workshop",
      status: "Pending",
    },
    {
      id: 2,
      course: "UI Design",
      gap: "Lack of Wireframing Skills",
      recommended: "Advanced Wireframing & Prototyping Training",
      status: "On Going",
    },
    {
      id: 3,
      course: "Product Design",
      gap: "Lack of Experience in User Research",
      recommended: "Training in User Research & Market Analysis",
      status: "On Going",
    },
    {
      id: 4,
      course: "Developers",
      gap: "Insuffcient Software Testing Skills",
      recommended: "Software Testing & Debugging Training",
      status: "Pending",
    },
  ];

  return (
    <Card
      shadow="none"
      classNames={{
        base: "rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface mb-6 shadow-sm",
      }}
    >
      <CardHeader className="flex items-center justify-between border-b border-gray-100 dark:border-dark-border !w-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-blue-600">
            <SvgIcon name="assignment_quiz" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Training Gaps
          </h2>
        </div>
        <Button
          isIconOnly
          variant="light"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg"
        >
          <SvgIcon name="more-horizontal" className="w-4 h-4" />
        </Button>
      </CardHeader>

      <CardBody className="overflow-x-auto p-0">
        <Table
          removeWrapper
          aria-label="Training Gaps Table"
          classNames={{
            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none",
            td: "text-[13px] text-gray-600 dark:text-gray-400 font-medium",
            tr: "border-b border-gray-50 dark:border-dark-border/50 hover:bg-gray-50/50 dark:hover:bg-dark-navy/50 group",
          }}
        >
          <TableHeader>
            <TableColumn>Course</TableColumn>
            <TableColumn>Gap</TableColumn>
            <TableColumn>Recommended Actions</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-semibold text-gray-800 dark:text-gray-200">
                  {row.course}
                </TableCell>
                <TableCell>{row.gap}</TableCell>
                <TableCell>{row.recommended}</TableCell>
                <TableCell>
                  <Chip
                    variant="bordered"
                    size="sm"
                    classNames={{
                      base: `border rounded-full h-auto py-2 px-2 min-w-[90px] justify-center text-center ${
                        row.status === "On Going"
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

export default TrainingGapsTable;
