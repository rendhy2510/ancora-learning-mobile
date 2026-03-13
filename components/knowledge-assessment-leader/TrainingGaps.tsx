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

const TrainingGaps = () => {
  const data = [
    {
      id: 1,
      department: "Digital Marketing",
      gap: "Lack of Basic SEO Knowledge",
      actions: "Advanced SEO Workshop",
      status: "Pending",
    },
    {
      id: 2,
      department: "UI Design",
      gap: "Lack of Wireframing Skills",
      actions: "Advanced Wireframing & Prototyping Training",
      status: "On Going",
    },
    {
      id: 3,
      department: "Product Design",
      gap: "Lack of Experience in User Research",
      actions: "Training in User Research & Market Analysis",
      status: "On Going",
    },
    {
      id: 4,
      department: "Developers",
      gap: "Insufficient Software Testing Skills",
      actions: "Software Testing & Debugging Training",
      status: "Pending",
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
            <SvgIcon name="assignment_quiz" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Training Gaps
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
          aria-label="Training Gaps Table"
          classNames={{
            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none px-4",
            td: "text-[13px] text-gray-600 dark:text-gray-400 font-medium py-4 px-4 border-b border-gray-50 dark:border-dark-border/50",
          }}
        >
          <TableHeader>
            <TableColumn>Department</TableColumn>
            <TableColumn>Gap</TableColumn>
            <TableColumn>Recommended Actions</TableColumn>
            <TableColumn className="text-center">Status</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-gray-800 dark:text-gray-200 font-medium">
                  {row.department}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">
                  {row.gap}
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200">
                  {row.actions}
                </TableCell>
                <TableCell className="text-center">
                  <Chip
                    variant="bordered"
                    size="sm"
                    classNames={{
                      base: `border rounded-full h-10 px-2 min-w-[90px] justify-center text-center ${
                        row.status === "On Going"
                          ? "bg-[#F4FBEA] border-[#AEDE78] text-[#558E22]"
                          : "bg-[#FFFBEB] border-[#FFD748] text-[#DD7A02]"
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

export default TrainingGaps;
