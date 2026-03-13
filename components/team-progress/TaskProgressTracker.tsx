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
  Avatar,
  Button,
  Chip,
} from "@heroui/react";

const TaskProgressTracker = () => {
  const data = [
    {
      id: 1,
      no: "01",
      name: "Kristin Watson",
      taskName: "AI Model Implementation",
      status: "Complete",
      progress: "100%",
      avatar: "https://i.pravatar.cc/150?u=kristin",
    },
    {
      id: 2,
      no: "02",
      name: "Bessie Cooper",
      taskName: "Machine Learning Optimization",
      status: "In Progress",
      progress: "95%",
      avatar: "https://i.pravatar.cc/150?u=bessie",
    },
    {
      id: 3,
      no: "03",
      name: "Ronald Richards",
      taskName: "AI Model Implementation",
      status: "In Progress",
      progress: "90%",
      avatar: "https://i.pravatar.cc/150?u=ronald",
    },
    {
      id: 4,
      no: "04",
      name: "Kathryn Murphy",
      taskName: "Data Analysis Techniques",
      status: "In Progress",
      progress: "98%",
      avatar: "https://i.pravatar.cc/150?u=kathryn",
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
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-[#2848A5]">
            <SvgIcon name="mdi_progress-check" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Task Progress Tracker
          </h2>
        </div>
        <Button
          isIconOnly
          variant="light"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-transparent min-w-0 w-8 h-8 rounded-lg border border-gray-100 dark:border-dark-border"
        >
          <SvgIcon name="more-horizontal" className="w-4 h-4" />
        </Button>
      </CardHeader>

      <CardBody className="p-0 overflow-x-auto">
        <Table
          removeWrapper
          aria-label="Task Progress Tracker Table"
          classNames={{
            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none",
            td: "text-[13px] text-gray-600 dark:text-gray-400 font-medium py-3 border-b border-gray-50 dark:border-dark-border/50",
          }}
        >
          <TableHeader>
            <TableColumn>No.</TableColumn>
            <TableColumn>Photo</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Task Name</TableColumn>
            <TableColumn className="text-center">Status</TableColumn>
            <TableColumn className="text-center">Progress</TableColumn>
            <TableColumn className="text-center">Action</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-gray-800 dark:text-gray-200 text-[16px] font-geist">
                  {row.no}
                </TableCell>
                <TableCell>
                  <Avatar src={row.avatar} size="md" className="rounded-lg" />
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200 text-[14px]">
                  {row.name}
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200 text-[14px]">
                  {row.taskName}
                </TableCell>
                <TableCell className="text-center">
                  <Chip
                    variant="bordered"
                    size="sm"
                    classNames={{
                      base: `border rounded-full h-10 px-2 min-w-[90px] justify-center text-center ${
                        row.status === "Complete"
                          ? "bg-[#F4FBEA] border-[#AEDE78] text-[#558E22]"
                          : "bg-[#FFFBEB] border-[#FFD748] text-[#DD7A02]"
                      }`,
                      content: "text-[11px] font-medium",
                    }}
                  >
                    {row.status}
                  </Chip>
                </TableCell>
                <TableCell className="font-geist text-center">
                  {row.progress}
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="light"
                    size="sm"
                    className="flex items-center gap-1 px-3 min-w-0 rounded-lg border border-[#D5DBE2] dark:border-dark-border bg-[#F6F7F9] dark:bg-dark-navy mx-auto"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <SvgIcon name="eye" size={14} />
                    </div>
                    <span className="text-[14px] font-medium">Task</span>
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

export default TaskProgressTracker;
