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
} from "@heroui/react";

const TopLearnersTable = () => {
  const data = [
    {
      id: 1,
      no: "01",
      name: "Kristin Watson",
      completionRate: "98%",
      department: "Marketing",
      trainingHours: "120 hours",
      avatar: "https://i.pravatar.cc/150?u=kristin",
    },
    {
      id: 2,
      no: "02",
      name: "Bessie Cooper",
      completionRate: "95%",
      department: "HR",
      trainingHours: "150 hours",
      avatar: "https://i.pravatar.cc/150?u=bessie",
    },
    {
      id: 3,
      no: "03",
      name: "Ronald Richards",
      completionRate: "90%",
      department: "IT",
      trainingHours: "200 hours",
      avatar: "https://i.pravatar.cc/150?u=ronald",
    },
    {
      id: 4,
      no: "04",
      name: "Kathryn Murphy",
      completionRate: "98%",
      department: "Finance",
      trainingHours: "120 hours",
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
            <SvgIcon name="fa7-solid_mortar-board" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Top Learners
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
          aria-label="Top Learners Table"
          classNames={{
            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none",
            td: "text-[13px] text-gray-600 dark:text-gray-400 font-medium py-3 border-b border-gray-50 dark:border-dark-border/50",
          }}
        >
          <TableHeader>
            <TableColumn>No.</TableColumn>
            <TableColumn>Photo</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn className="text-center">Completion Rate</TableColumn>
            <TableColumn>Department</TableColumn>
            <TableColumn>Training Hours</TableColumn>
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
                <TableCell className="text-gray-800 dark:text-gray-200 text-[14px] text-center">
                  {row.completionRate}
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200 text-[14px]">
                  {row.department}
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200 text-[14px]">
                  {row.trainingHours}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default TopLearnersTable;
