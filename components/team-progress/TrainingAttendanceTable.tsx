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
  Chip,
} from "@heroui/react";

const TrainingAttendanceTable = () => {
  const data = [
    {
      id: 1,
      no: "01",
      courseName: "Leadership Essentials - Mandatory Training",
      sessionDate: "January 25, 2024",
      totalParticipants: 10,
      present: 8,
      absent: 2,
      status: "Completed",
    },
    {
      id: 2,
      no: "02",
      courseName: "Communication Skills - Optional Training",
      sessionDate: "February 15, 2024",
      totalParticipants: 20,
      present: 12,
      absent: 5,
      status: "On Going",
    },
    {
      id: 3,
      no: "03",
      courseName: "Conflict Resolution - Mandatory Training",
      sessionDate: "January 25, 2024",
      totalParticipants: 10,
      present: 8,
      absent: 2,
      status: "On Going",
    },
    {
      id: 4,
      no: "04",
      courseName: "Leadership Essentials - Mandatory Training",
      sessionDate: "March 10, 2024",
      totalParticipants: 30,
      present: 15,
      absent: 10,
      status: "On Going",
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
            <SvgIcon name="prime_list-check" />
          </div>
          <h2 className="text-[18px] font-medium text-[#1F2937] dark:text-gray-100">
            Training Attendance
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
          aria-label="Training Attendance Table"
          classNames={{
            th: "text-[12px] font-semibold text-gray-900 dark:text-gray-100 bg-[#FAFAFA] dark:bg-dark-navy border-b border-gray-100 dark:border-dark-border first:rounded-none last:rounded-none",
            td: "text-[13px] text-gray-600 dark:text-gray-400 font-medium py-3 border-b border-gray-50 dark:border-dark-border/50",
          }}
        >
          <TableHeader>
            <TableColumn>No.</TableColumn>
            <TableColumn>Course Name</TableColumn>
            <TableColumn>Session Date</TableColumn>
            <TableColumn className="text-center">
              Total Participants
            </TableColumn>
            <TableColumn className="text-center">Present</TableColumn>
            <TableColumn className="text-center">Absent</TableColumn>
            <TableColumn className="text-center">Training Status</TableColumn>
            <TableColumn className="text-center">Action</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-gray-800 dark:text-gray-200 text-[16px] font-geist">
                  {row.no}
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-200 text-[14px]">
                  {row.courseName}
                </TableCell>
                <TableCell>{row.sessionDate}</TableCell>
                <TableCell className="text-center">
                  {row.totalParticipants}
                </TableCell>
                <TableCell className="text-center">{row.present}</TableCell>
                <TableCell className="text-center">{row.absent}</TableCell>
                <TableCell className="text-center">
                  <Chip
                    variant="bordered"
                    size="sm"
                    classNames={{
                      base: `border rounded-full h-10 py-1 px-2 min-w-[90px] justify-center text-center ${
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
                    <div className="w-6 h-6 flex items-center justify-center">
                      <SvgIcon name="eye" size={14} />
                    </div>
                    <span className="text-[14px] font-medium">Details</span>
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

export default TrainingAttendanceTable;
