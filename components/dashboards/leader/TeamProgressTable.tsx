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
  AvatarGroup,
  Avatar,
  Button,
} from "@heroui/react";

const TeamProgressTable = () => {
  const data = [
    {
      id: 1,
      course: "Digital Marketing",
      participants: 28,
      progress: 70,
    },
    {
      id: 2,
      course: "Social Media Management",
      participants: 28,
      progress: 90,
    },
    {
      id: 3,
      course: "Content Creation",
      participants: 28,
      progress: 50,
    },
    {
      id: 4,
      course: "SEO Optimization",
      participants: 28,
      progress: 100,
    },
    {
      id: 5,
      course: "Digital Marketing",
      participants: 28,
      progress: 30,
    },
    {
      id: 6,
      course: "Digital Marketing",
      participants: 28,
      progress: 30,
    },
  ];

  const renderProgress = (percentage: number) => {
    const bars = 10;
    const filledBars = Math.round(percentage / 10);

    return (
      <div className="flex items-center gap-2">
        <div className="flex gap-[3px]">
          {[...Array(bars)].map((_, i) => (
            <div
              key={i}
              className={`w-[12px] h-6 rounded-[3px] ${i < filledBars ? "bg-[#2848A5]" : "bg-[#D1D5DB] dark:bg-dark-border"}`}
            />
          ))}
        </div>
        <span className="text-[12px] font-bold font-geist text-[#10B981] ml-1">
          {percentage}%
        </span>
      </div>
    );
  };

  return (
    <Card
      shadow="none"
      classNames={{
        base: "rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-surface h-full",
      }}
    >
      <CardHeader className="flex items-center justify-between border-b border-gray-100 dark:border-dark-border !w-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-dark-navy border border-gray-100 dark:border-dark-border text-blue-600">
            <SvgIcon name="mdi_progress-check" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Team Progress
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

      <CardBody className="overflow-x-auto p-0">
        <Table
          removeWrapper
          aria-label="Team Progress Table"
          classNames={{
            th: "text-[12px] text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none",
            td: "text-[13px] text-gray-600 dark:text-gray-400 font-medium",
            tr: "border-b border-gray-50 dark:border-dark-border/50 hover:bg-gray-50/50 dark:hover:bg-dark-navy/50 group",
          }}
        >
          <TableHeader>
            <TableColumn>Course</TableColumn>
            <TableColumn>Participants</TableColumn>
            <TableColumn>Progress</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-gray-800 dark:text-gray-200">
                  {row.course}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <AvatarGroup
                      max={5}
                      size="sm"
                      className="justify-start gap-0"
                    >
                      <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        classNames={{
                          base: "ring-1 ring-white dark:ring-dark-surface border-none",
                        }}
                      />
                      <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        classNames={{
                          base: "ring-1 ring-white dark:ring-dark-surface border-none",
                        }}
                      />
                      <Avatar
                        src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                        classNames={{
                          base: "ring-1 ring-white dark:ring-dark-surface border-none",
                        }}
                      />
                      <Avatar
                        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                        classNames={{
                          base: "ring-1 ring-white dark:ring-dark-surface border-none",
                        }}
                      />
                      <Avatar
                        src="https://i.pravatar.cc/150?u=a04258114e29026102d"
                        classNames={{
                          base: "ring-1 ring-white dark:ring-dark-surface border-none",
                        }}
                      />
                    </AvatarGroup>
                    <span className="text-[12px] dark:text-gray-400 font-geist ml-3">
                      +{row.participants - 5}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{renderProgress(row.progress)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default TeamProgressTable;
